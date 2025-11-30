import { notFound } from 'next/navigation'
import { getBusinessBySlug } from '@/lib/supabase'
import Image from 'next/image'
import { Award, Users, Clock, Shield, CheckCircle } from 'lucide-react'

interface PageProps {
  params: Promise<{ niche: string; slug: string }>
}

export default async function AboutPage({ params }: PageProps) {
  const { slug } = await params
  const business = await getBusinessBySlug(slug)

  if (!business) {
    notFound()
  }

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About {business.company_name}</h1>
          <p className="text-xl max-w-3xl">
            Your trusted HVAC partner in {business.city}, {business.state}
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                At {business.company_name}, we've been serving the {business.city} community with
                exceptional HVAC services. Our commitment to quality and customer satisfaction
                has made us a trusted name in heating and cooling solutions.
              </p>
              <p className="text-gray-600 mb-4">
                We understand that your comfort is important, which is why we provide fast,
                reliable service with a focus on quality workmanship and fair pricing.
              </p>
              <p className="text-gray-600">
                Our team of certified technicians is dedicated to keeping your home or business
                comfortable year-round, with emergency services available 24/7.
              </p>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069"
                alt="HVAC Technician"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="card text-center">
              <Award className="text-accent mx-auto mb-4" size={48} />
              <h3 className="font-semibold text-lg mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm">
                We strive for excellence in every job we complete
              </p>
            </div>
            <div className="card text-center">
              <Users className="text-accent mx-auto mb-4" size={48} />
              <h3 className="font-semibold text-lg mb-2">Customer First</h3>
              <p className="text-gray-600 text-sm">
                Your satisfaction is our top priority
              </p>
            </div>
            <div className="card text-center">
              <Clock className="text-accent mx-auto mb-4" size={48} />
              <h3 className="font-semibold text-lg mb-2">Reliability</h3>
              <p className="text-gray-600 text-sm">
                On-time service you can count on
              </p>
            </div>
            <div className="card text-center">
              <Shield className="text-accent mx-auto mb-4" size={48} />
              <h3 className="font-semibold text-lg mb-2">Integrity</h3>
              <p className="text-gray-600 text-sm">
                Honest pricing and transparent service
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <CheckCircle className="text-accent flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Licensed & Insured</h3>
                  <p className="text-gray-600 text-sm">
                    Fully licensed, bonded, and insured for your protection
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="text-accent flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Certified Technicians</h3>
                  <p className="text-gray-600 text-sm">
                    Our team is trained and certified in the latest HVAC technology
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="text-accent flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Upfront Pricing</h3>
                  <p className="text-gray-600 text-sm">
                    No hidden fees - we provide clear estimates before we start
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="text-accent flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Emergency Service</h3>
                  <p className="text-gray-600 text-sm">
                    24/7 emergency service when you need it most
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="text-accent flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Quality Parts</h3>
                  <p className="text-gray-600 text-sm">
                    We use only high-quality parts and equipment
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="text-accent flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Satisfaction Guaranteed</h3>
                  <p className="text-gray-600 text-sm">
                    We stand behind our work with a 100% satisfaction guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
