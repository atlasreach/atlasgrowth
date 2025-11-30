'use client'

import { Phone } from 'lucide-react'

interface FloatingCallButtonProps {
  phone: string
}

export default function FloatingCallButton({ phone }: FloatingCallButtonProps) {
  return (
    <a
      href={`tel:${phone}`}
      className="floating-call-button md:hidden"
      aria-label="Call us"
    >
      <Phone size={24} />
    </a>
  )
}
