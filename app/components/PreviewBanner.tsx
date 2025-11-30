import { Business } from '@/lib/supabase'

interface PreviewBannerProps {
  business: Business
}

export default function PreviewBanner({ business }: PreviewBannerProps) {
  if (business.status !== 'preview') {
    return null
  }

  return (
    <div className="preview-banner">
      <p className="text-sm md:text-base">
        <strong>🔒 Preview Mode:</strong> This website is reserved for{' '}
        <strong>{business.company_name}</strong> – Claim expires in 7 days
      </p>
    </div>
  )
}
