import { createClient as createclient } from '@supabase/supabase-js'

export function supabaseAdmin() {
  const url = process.env.SUPABASE_URL!
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY! // server only
  if (!url || !key) throw new Error('Missing Supabase env vars')
  return createclient(url, key, { auth: { persistSession: false } })
}
