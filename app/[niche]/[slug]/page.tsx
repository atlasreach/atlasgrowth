import { notFound } from 'next/navigation'
import { getBusinessBySlug } from '@/lib/supabase'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Clock, Award, Users, Wrench, Wind, Flame, Shield, Star } from 'lucide-react'

interface PageProps {
  params: Promise<{ niche: string; slug: string }>
}

export default async function HomePage({ params }: PageProps) {
  const { slug } = await params
  const business = await getBusinessBySlug(slug)

  if (!business) {
    notFound()
  }

  const basePath = `/${business.niche}/${business.slug}`
  const heroImage = business.hero_image_url || 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070'

  const services = [
    {
      icon: Wind,
      title: 'AC Repair',
      description: 'Fast, reliable air conditioning repairs to keep you cool',
      link: `${basePath}/services/ac-repair`,
    },
    {
      icon: Flame,
      title: 'Heating Repair',
      description: 'Expert heating system repairs for your comfort',
      link: `${basePath}/services/heating-repair`,
    },
    {
      icon: Wind,
      title: 'AC Installation',
      description: 'Professional installation of new cooling systems',
      link: `${basePath}/services/ac-installation`,
    },
    {
      icon: Flame,
      title: 'Furnace Installation',
      description: 'Quality furnace installation and replacement',
      link: `${basePath}/services/furnace-installation`,
    },
    {
      icon: Wrench,
      title: 'Maintenance',
      description: 'Regular maintenance to prevent costly repairs',
      link: `${basePath}/services/maintenance`,
    },
    {
      icon: Phone,
      title: '24/7 Emergency Service',
      description: 'Available around the clock for urgent repairs',
      link: `${basePath}/services/emergency-service`,
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <Image
          src={heroImage}
          alt={business.company_name}
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 text-center text-white container-custom px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {business.company_name}
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Expert HVAC Services in {business.city}, {business.state}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${business.phone}`} className="btn-primary text-lg">
              <Phone className="inline mr-2" size={20} />
              Call {business.phone}
            </a>
            <Link href={`${basePath}/contact`} className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-8 shadow-sm">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Clock className="text-accent mb-2" size={32} />
              <p className="font-semibold">24/7 Service</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="text-accent mb-2" size={32} />
              <p className="font-semibold">Licensed & Insured</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="text-accent mb-2" size={32} />
              <p className="font-semibold">Expert Technicians</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="text-accent mb-2" size={32} />
              <p className="font-semibold">100% Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive HVAC solutions for your home or business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link key={index} href={service.link} className="card hover:scale-105 transition-transform duration-200">
                <service.icon className="text-accent mb-4" size={40} />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose {business.company_name}?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
              <p className="text-gray-600">
                Our certified technicians have years of experience handling all HVAC issues.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Response</h3>
              <p className="text-gray-600">
                We understand emergencies. Our team responds quickly to get you comfortable again.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">
                We stand behind our work with comprehensive warranties and guarantees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Excellent service! The technician was professional, knowledgeable, and fixed our AC quickly. Highly recommend!"
                </p>
                <p className="font-semibold">- Happy Customer</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href={`${basePath}/reviews`} className="btn-secondary">
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8">
            Contact us today for fast, reliable HVAC service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${business.phone}`} className="btn-primary text-lg">
              <Phone className="inline mr-2" size={20} />
              Call Now: {business.phone}
            </a>
            <Link href={`${basePath}/contact`} className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-all duration-200">
              Schedule Service
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
