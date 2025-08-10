export function sanitize(p: any) {
  const page = Math.max(1, Number(p?.page || 1))
  const pageSize = Math.min(48, Math.max(1, Number(p?.pageSize || 24)))
  return {
    imageBase64: typeof p?.imageBase64 === 'string' ? p.imageBase64 : undefined,
    query: typeof p?.query === 'string' ? p.query.slice(0, 256) : undefined,
    filters: {
      category: typeof p?.filters?.category === 'string' ? p.filters.category : undefined,
      priceMin: Number.isFinite(p?.filters?.priceMin) ? Number(p.filters.priceMin) : undefined,
      priceMax: Number.isFinite(p?.filters?.priceMax) ? Number(p.filters.priceMax) : undefined,
      colors: Array.isArray(p?.filters?.colors) ? p.filters.colors.slice(0, 16) : undefined,
      stores: Array.isArray(p?.filters?.stores) ? p.filters.stores.slice(0, 16) : undefined,
    },
    userId: typeof p?.userId === 'string' ? p.userId : undefined,
    page,
    pageSize,
  }
}

export type SearchPayload = ReturnType<typeof sanitize>
