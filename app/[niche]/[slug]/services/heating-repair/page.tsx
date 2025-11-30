import { notFound } from 'next/navigation'
import { getBusinessBySlug } from '@/lib/supabase'
import Link from 'next/link'
import { Flame, CheckCircle, Phone } from 'lucide-react'

interface PageProps {
  params: Promise<{ niche: string; slug: string }>
}

export default async function HeatingRepairPage({ params }: PageProps) {
  const { slug } = await params
  const business = await getBusinessBySlug(slug)

  if (!business) {
    notFound()
  }

  const basePath = `/${business.niche}/${business.slug}`

  return (
    <>
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <Flame size={64} className="mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Heating Repair</h1>
          <p className="text-xl max-w-3xl">
            Expert heating system repair to keep your home warm and comfortable
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Professional Heating Repair Services</h2>
              <p className="text-gray-600 mb-6">
                Don't let a broken heating system leave you in the cold. Our experienced technicians
                can quickly diagnose and repair furnaces, heat pumps, and all heating systems.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Heating Issues We Repair</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  'Furnace not heating',
                  'Uneven heating',
                  'Strange noises',
                  'Pilot light problems',
                  'Thermostat malfunctions',
                  'Blower motor issues',
                  'Gas valve problems',
                  'Heat exchanger cracks',
                ].map((issue, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span>{issue}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="card bg-primary text-white sticky top-24">
                <h3 className="text-2xl font-bold mb-4">Need Heating Repair?</h3>
                <p className="mb-6">Expert heating repair services available 24/7</p>
                <a href={`tel:${business.phone}`} className="btn-primary w-full text-center block mb-4">
                  <Phone className="inline mr-2" size={18} />
                  {business.phone}
                </a>
                <Link href={`${basePath}/contact`} className="bg-white text-primary hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-all duration-200 w-full text-center block">
                  Get Quote
                </Link>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <h4 className="font-semibold mb-4">Other Services</h4>
                  <ul className="space-y-2">
                    <li><Link href={`${basePath}/services/ac-repair`} className="hover:text-accent transition-colors">AC Repair</Link></li>
                    <li><Link href={`${basePath}/services/ac-installation`} className="hover:text-accent transition-colors">AC Installation</Link></li>
                    <li><Link href={`${basePath}/services/furnace-installation`} className="hover:text-accent transition-colors">Furnace Installation</Link></li>
                    <li><Link href={`${basePath}/services/maintenance`} className="hover:text-accent transition-colors">Maintenance</Link></li>
                    <li><Link href={`${basePath}/services/emergency-service`} className="hover:text-accent transition-colors">Emergency Service</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
