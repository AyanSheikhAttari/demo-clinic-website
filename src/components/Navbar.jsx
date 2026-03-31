import { useState, useEffect } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Treatments', href: '#treatments' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (href) => {
        setIsMenuOpen(false)
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                        ? 'bg-white/95 backdrop-blur-md shadow-soft py-3'
                        : 'bg-transparent py-5'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <a
                            href="#home"
                            onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
                            className="flex items-center gap-2.5 group"
                        >
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C4A97D] to-[#D9B99B] flex items-center justify-center shadow-gold">
                                <Sparkles size={14} className="text-white" />
                            </div>
                            <div>
                                <span className="font-serif font-bold text-lg text-[#2C2C2C] tracking-tight">
                                    GlowCare
                                </span>
                                <span className="block text-[9px] font-medium text-[#C4A97D] uppercase tracking-[0.15em] -mt-1">
                                    Aesthetics
                                </span>
                            </div>
                        </a>

                        {/* Desktop Nav Links */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                                    className="text-sm font-medium text-[#2C2C2C] hover:text-[#C4A97D] transition-colors duration-200 relative group"
                                >
                                    {link.label}
                                    <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-[#C4A97D] transition-all duration-300 group-hover:w-full" />
                                </a>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden md:block">
                            <a
                                href="#appointment"
                                onClick={(e) => { e.preventDefault(); handleNavClick('#appointment') }}
                                className="btn-primary text-sm"
                            >
                                Book Appointment
                            </a>
                        </div>

                        {/* Mobile menu toggle */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-lg text-[#2C2C2C] hover:bg-beige transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="bg-white/98 backdrop-blur-md border-t border-[#EDE4DA] px-4 py-4 space-y-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                                className="block px-3 py-3 text-sm font-medium text-[#2C2C2C] hover:text-[#C4A97D] hover:bg-cream rounded-lg transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="pt-2">
                            <a
                                href="#appointment"
                                onClick={(e) => { e.preventDefault(); handleNavClick('#appointment') }}
                                className="btn-primary w-full justify-center text-sm"
                            >
                                Book Appointment
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
