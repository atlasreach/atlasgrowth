import { notFound } from 'next/navigation'
import { getBusinessBySlug } from '@/lib/supabase'
import Link from 'next/link'
import { Wind, CheckCircle, Phone } from 'lucide-react'

interface PageProps {
  params: Promise<{ niche: string; slug: string }>
}

export default async function ACRepairPage({ params }: PageProps) {
  const { slug } = await params
  const business = await getBusinessBySlug(slug)

  if (!business) {
    notFound()
  }

  const basePath = `/${business.niche}/${business.slug}`

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <Wind size={64} className="mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Air Conditioning Repair</h1>
          <p className="text-xl max-w-3xl">
            Fast, reliable AC repair services to keep your home cool and comfortable
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Expert AC Repair Services</h2>
              <p className="text-gray-600 mb-6">
                When your air conditioning system breaks down, you need fast, reliable service.
                Our certified technicians have the expertise to diagnose and repair all makes
                and models of AC units quickly and effectively.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Common AC Problems We Fix</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  'AC not cooling properly',
                  'Strange noises or odors',
                  'Water leaking from unit',
                  'Frozen evaporator coils',
                  'Thermostat issues',
                  'Refrigerant leaks',
                  'Electrical problems',
                  'Fan motor failures',
                ].map((issue, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span>{issue}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-semibold mb-4">Our Repair Process</h3>
              <div className="space-y-4 mb-8">
                <div className="card">
                  <h4 className="font-semibold mb-2">1. Diagnosis</h4>
                  <p className="text-gray-600">
                    We thoroughly inspect your AC system to identify the root cause of the problem.
                  </p>
                </div>
                <div className="card">
                  <h4 className="font-semibold mb-2">2. Transparent Estimate</h4>
                  <p className="text-gray-600">
                    We provide a clear, upfront estimate before beginning any work.
                  </p>
                </div>
                <div className="card">
                  <h4 className="font-semibold mb-2">3. Expert Repair</h4>
                  <p className="text-gray-600">
                    Our technicians use quality parts and proven techniques to fix your AC right.
                  </p>
                </div>
                <div className="card">
                  <h4 className="font-semibold mb-2">4. Testing & Verification</h4>
                  <p className="text-gray-600">
                    We test your system thoroughly to ensure it's working properly before we leave.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="card bg-primary text-white sticky top-24">
                <h3 className="text-2xl font-bold mb-4">Need AC Repair?</h3>
                <p className="mb-6">
                  Call us today for fast, reliable service
                </p>
                <a href={`tel:${business.phone}`} className="btn-primary w-full text-center block mb-4">
                  <Phone className="inline mr-2" size={18} />
                  {business.phone}
                </a>
                <Link href={`${basePath}/contact`} className="bg-white text-primary hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-all duration-200 w-full text-center block">
                  Schedule Service
                </Link>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <h4 className="font-semibold mb-4">Other Services</h4>
                  <ul className="space-y-2">
                    <li><Link href={`${basePath}/services/heating-repair`} className="hover:text-accent transition-colors">Heating Repair</Link></li>
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
