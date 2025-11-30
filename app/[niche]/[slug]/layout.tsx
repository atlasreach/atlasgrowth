import { notFound } from 'next/navigation'
import { getBusinessBySlug } from '@/lib/supabase'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import FloatingCallButton from '@/app/components/FloatingCallButton'
import PreviewBanner from '@/app/components/PreviewBanner'
import type { Metadata } from 'next'

interface LayoutProps {
  children: React.ReactNode
  params: Promise<{ niche: string; slug: string }>
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { slug } = await params
  const business = await getBusinessBySlug(slug)

  if (!business) {
    return {
      title: 'Business Not Found',
    }
  }

  const isPreview = business.status === 'preview'

  return {
    title: `${business.company_name} | ${business.niche === 'hvac' ? 'HVAC' : 'Plumbing'} Services in ${business.city}, ${business.state}`,
    description: `Professional ${business.niche === 'hvac' ? 'heating and cooling' : 'plumbing'} services in ${business.city}, ${business.state}. Call ${business.phone} for service today.`,
    robots: isPreview ? 'noindex, nofollow' : 'index, follow',
  }
}

export default async function BusinessLayout({ children, params }: LayoutProps) {
  const { slug } = await params
  const business = await getBusinessBySlug(slug)

  if (!business) {
    notFound()
  }

  return (
    <>
      <style jsx global>{`
        :root {
          --primary: ${business.primary_color};
          --secondary: ${business.secondary_color};
          --accent: ${business.accent_color};
        }
      `}</style>
      <PreviewBanner business={business} />
      <Header business={business} />
      <main>{children}</main>
      <Footer business={business} />
      <FloatingCallButton phone={business.phone} />
    </>
  )
}
