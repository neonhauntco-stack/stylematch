import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabaseServer'
import { sanitize } from '@/lib/validate'
import { embedImage, embedText } from '@/lib/embeddings'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}))
    const { imageBase64, query, filters, page = 1, pageSize = 24 } = sanitize(body)

    // (MVP) construir vetor de consulta — se existir texto/imagem
    const [imgVec, txtVec] = await Promise.all([
      imageBase64 ? embedImage(imageBase64) : Promise.resolve(null),
      query ? embedText(query!) : Promise.resolve(null),
    ])

    const from = (page - 1) * pageSize

    const supabase = supabaseAdmin()

    // Chamar a funcção SQL (ajustar parâmetros conforme tua função)
    const { data, error } = await supabase
      .rpc('search_products_hybrid', {
        q: query ?? null,
        q_vec: (txtVec || imgVec) ?? null, // quando vetores estiverem implementados
        cat: filters?.category ?? null,
        price_min: filters?.priceMin ?? null,
        price_max: filters?.priceMax ?? null,
        limit_n: pageSize,
        offset_n: from,
      })

    if (error) {
      // Em MVP, devolve vazio com 200 para não quebrar UI
      console.error('search_products_hybrid error', error)
      return NextResponse.json({ items: [], total: 0 })
    }

    // `data` deve trazer match_score; se não houver total, soma aproximada
    return NextResponse.json({
      items: (data ?? []).map((r: any) => ({
        id: r.id,
        title: r.title,
        store: r.store,
        price: Number(r.price),
        currency: r.currency ?? 'GBP',
        imageUrl: r.image_url,
        category: r.category,
        matchScore: r.match_score ?? null,
      })),
      total: (data ?? []).length + from,
    })
  } catch (e) {
    console.error('/api/search fatal', e)
    return NextResponse.json({ items: [], total: 0 })
  }
}
