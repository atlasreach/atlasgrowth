import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'
import { Business } from '@/lib/supabase'

interface FooterProps {
  business: Business
}

export default function Footer({ business }: FooterProps) {
  const basePath = `/${business.niche}/${business.slug}`
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-xl mb-4">{business.company_name}</h3>
            <p className="text-gray-300 mb-4">
              Your trusted {business.niche === 'hvac' ? 'HVAC' : 'plumbing'} service provider in {business.city}, {business.state}.
            </p>
            <div className="flex gap-4">
              {business.facebook && (
                <a href={business.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  <Facebook size={24} />
                </a>
              )}
              {business.instagram && (
                <a href={business.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  <Instagram size={24} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href={basePath} className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href={`${basePath}/about`} className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href={`${basePath}/services/ac-repair`} className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link href={`${basePath}/areas`} className="hover:text-accent transition-colors">Service Areas</Link></li>
              <li><Link href={`${basePath}/reviews`} className="hover:text-accent transition-colors">Reviews</Link></li>
              <li><Link href={`${basePath}/contact`} className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link href={`${basePath}/services/ac-repair`} className="hover:text-accent transition-colors">AC Repair</Link></li>
              <li><Link href={`${basePath}/services/heating-repair`} className="hover:text-accent transition-colors">Heating Repair</Link></li>
              <li><Link href={`${basePath}/services/ac-installation`} className="hover:text-accent transition-colors">AC Installation</Link></li>
              <li><Link href={`${basePath}/services/furnace-installation`} className="hover:text-accent transition-colors">Furnace Installation</Link></li>
              <li><Link href={`${basePath}/services/maintenance`} className="hover:text-accent transition-colors">Maintenance</Link></li>
              <li><Link href={`${basePath}/services/emergency-service`} className="hover:text-accent transition-colors">Emergency Service</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <a href={`tel:${business.phone}`} className="hover:text-accent transition-colors">
                  {business.phone}
                </a>
              </li>
              {business.address && (
                <li className="flex items-start gap-2">
                  <MapPin size={18} className="mt-1 flex-shrink-0" />
                  <span>{business.address}<br />{business.city}, {business.state}</span>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} {business.company_name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
