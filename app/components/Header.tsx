import Link from 'next/link'
import Image from 'next/image'
import { Phone, Menu } from 'lucide-react'
import { Business } from '@/lib/supabase'

interface HeaderProps {
  business: Business
}

export default function Header({ business }: HeaderProps) {
  const basePath = `/${business.niche}/${business.slug}`

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo and Company Name */}
          <Link href={basePath} className="flex items-center gap-3">
            {business.logo_url ? (
              <Image
                src={business.logo_url}
                alt={business.company_name}
                width={50}
                height={50}
                className="rounded-lg"
              />
            ) : (
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                {business.company_name.charAt(0)}
              </div>
            )}
            <span className="font-bold text-xl text-primary hidden sm:block">
              {business.company_name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href={basePath} className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link href={`${basePath}/about`} className="hover:text-primary transition-colors">
              About
            </Link>
            <Link href={`${basePath}/services/ac-repair`} className="hover:text-primary transition-colors">
              Services
            </Link>
            <Link href={`${basePath}/areas`} className="hover:text-primary transition-colors">
              Areas
            </Link>
            <Link href={`${basePath}/reviews`} className="hover:text-primary transition-colors">
              Reviews
            </Link>
            <Link href={`${basePath}/contact`} className="hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Phone CTA */}
          <a
            href={`tel:${business.phone}`}
            className="flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors"
          >
            <Phone size={18} />
            <span className="hidden lg:inline font-semibold">{business.phone}</span>
          </a>

          {/* Mobile Menu Button */}
          <button className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  )
}
