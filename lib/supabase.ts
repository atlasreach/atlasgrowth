import { createClient } from '@supabase/supabase-js'

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL')
}
if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY')
}

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

// Type for our businesses table
export interface Business {
  id: string
  slug: string
  niche: 'hvac' | 'plumbing'
  company_name: string
  phone: string
  address: string
  city: string
  state: string
  logo_url: string | null
  hero_image_url: string | null
  primary_color: string
  secondary_color: string
  accent_color: string
  place_id: string | null
  lat: number | null
  long: number | null
  status: 'preview' | 'paid'
  custom_domain: string | null
  created_at: string
}

export async function getBusinessBySlug(slug: string): Promise<Business | null> {
  const { data, error } = await supabase
    .from('businesses')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error || !data) {
    return null
  }

  return data as Business
}

export async function getBusinessByDomain(domain: string): Promise<Business | null> {
  const { data, error } = await supabase
    .from('businesses')
    .select('*')
    .eq('custom_domain', domain)
    .single()

  if (error || !data) {
    return null
  }

  return data as Business
}
