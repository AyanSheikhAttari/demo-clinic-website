import { Phone, Mail, MapPin, Clock, Sparkles } from 'lucide-react'

// Inline social icons (lucide-react doesn't export brand icons)
const InstagramIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
)
const FacebookIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
)
const TwitterIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
)

const quickLinks = ['Home', 'Treatments', 'About', 'Reviews', 'Contact']
const treatments = ['Acne Treatment', 'HydraFacial', 'Skin Rejuvenation', 'Anti-Aging', 'Laser Hair Removal', 'Pigmentation']

export default function Footer() {
    return (
        <footer id="contact" className="bg-[#2C2C2C] text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2.5 mb-5">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C4A97D] to-[#D9B99B] flex items-center justify-center">
                                <Sparkles size={14} className="text-white" />
                            </div>
                            <div>
                                <span className="font-serif font-bold text-lg text-white tracking-tight">GlowCare</span>
                                <span className="block text-[9px] font-medium text-[#C4A97D] uppercase tracking-[0.15em] -mt-1">Aesthetics</span>
                            </div>
                        </div>
                        <p className="text-[#A89880] text-sm leading-relaxed mb-6">
                            Premium skin and aesthetic clinic providing personalized, clinically proven treatments in a luxury environment. Your skin confidence starts here.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-3">
                            {[
                                { Icon: InstagramIcon, label: 'Instagram' },
                                { Icon: FacebookIcon, label: 'Facebook' },
                                { Icon: TwitterIcon, label: 'Twitter' },
                            ].map(({ Icon, label }) => (
                                <a
                                    key={label}
                                    href="#"
                                    aria-label={label}
                                    className="w-9 h-9 rounded-full bg-white/08 hover:bg-[#C4A97D]/20 border border-white/10 hover:border-[#C4A97D]/40 flex items-center justify-center transition-all duration-300 text-[#A89880] hover:text-[#C4A97D]"
                                >
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">Quick Links</h3>
                        <ul className="space-y-2.5">
                            {quickLinks.map((link) => (
                                <li key={link}>
                                    <a
                                        href={`#${link.toLowerCase()}`}
                                        className="text-[#A89880] text-sm hover:text-[#C4A97D] transition-colors duration-200 flex items-center gap-1.5 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-[#C4A97D] opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Treatments */}
                    <div>
                        <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">Treatments</h3>
                        <ul className="space-y-2.5">
                            {treatments.map((t) => (
                                <li key={t}>
                                    <a
                                        href="#treatments"
                                        className="text-[#A89880] text-sm hover:text-[#C4A97D] transition-colors duration-200 flex items-center gap-1.5 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-[#C4A97D] opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {t}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">Contact Us</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-[#C4A97D]/15 flex items-center justify-center shrink-0 mt-0.5">
                                    <Phone size={13} className="text-[#C4A97D]" />
                                </div>
                                <div>
                                    <p className="text-[#A89880] text-xs mb-0.5">Phone</p>
                                    <a href="tel:+442012345678" className="text-white text-sm hover:text-[#C4A97D] transition-colors">+44 20 1234 5678</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-[#C4A97D]/15 flex items-center justify-center shrink-0 mt-0.5">
                                    <Mail size={13} className="text-[#C4A97D]" />
                                </div>
                                <div>
                                    <p className="text-[#A89880] text-xs mb-0.5">Email</p>
                                    <a href="mailto:hello@glowcareaesthetics.com" className="text-white text-sm hover:text-[#C4A97D] transition-colors">hello@glowcareaesthetics.com</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-[#C4A97D]/15 flex items-center justify-center shrink-0 mt-0.5">
                                    <MapPin size={13} className="text-[#C4A97D]" />
                                </div>
                                <div>
                                    <p className="text-[#A89880] text-xs mb-0.5">Address</p>
                                    <p className="text-white text-sm leading-relaxed">24 Harley Street, London<br />W1G 9PH, United Kingdom</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-[#C4A97D]/15 flex items-center justify-center shrink-0 mt-0.5">
                                    <Clock size={13} className="text-[#C4A97D]" />
                                </div>
                                <div>
                                    <p className="text-[#A89880] text-xs mb-0.5">Opening Hours</p>
                                    <p className="text-white text-sm">Mon – Fri: 9:00am – 7:00pm</p>
                                    <p className="text-white text-sm">Saturday: 9:00am – 5:00pm</p>
                                    <p className="text-[#A89880] text-xs mt-0.5">Sunday: Closed</p>
                                </div>
                            </div>
                        </div>

                        {/* WhatsApp quick link */}
                        <a
                            href="https://wa.me/1234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 flex items-center gap-2.5 bg-[#25D366]/15 border border-[#25D366]/30 rounded-xl px-4 py-3 text-[#4ade80] text-sm font-medium hover:bg-[#25D366]/25 transition-colors duration-300"
                        >
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            WhatsApp Us Now
                        </a>
                    </div>
                </div>

                {/* Map placeholder */}
                <div className="mt-12 rounded-2xl overflow-hidden border border-white/10 bg-[#3a3a3a] h-48 flex items-center justify-center relative">
                    <div className="absolute inset-0 flex items-center justify-center flex-col gap-3">
                        <MapPin size={32} className="text-[#C4A97D]" />
                        <p className="text-[#A89880] text-sm">24 Harley Street, London W1G 9PH</p>
                        <a
                            href="https://maps.google.com/?q=24+Harley+Street+London"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#C4A97D] text-xs font-medium underline underline-offset-2 hover:text-[#D9B99B] transition-colors"
                        >
                            Open in Google Maps
                        </a>
                    </div>
                    {/* Grid pattern */}
                    <div className="absolute inset-0 opacity-[0.05]" style={{
                        backgroundImage: 'linear-gradient(#A89880 1px, transparent 1px), linear-gradient(90deg, #A89880 1px, transparent 1px)',
                        backgroundSize: '30px 30px',
                    }} />
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/08 py-5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-[#A89880] text-xs">
                        © {new Date().getFullYear()} GlowCare Aesthetics. All rights reserved.
                    </p>
                    <div className="flex gap-5">
                        {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                            <a key={link} href="#" className="text-[#A89880] text-xs hover:text-[#C4A97D] transition-colors">
                                {link}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
