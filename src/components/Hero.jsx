import { Calendar, MessageCircle, Star, Shield, Clock } from 'lucide-react'

export default function Hero() {
    const handleScroll = (id) => {
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #FAF7F2 0%, #F5EDE3 40%, #EDE4DA 100%)',
            }}
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#D9B99B]/15 blur-3xl" />
                <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-[#C4A97D]/10 blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#EDE4DA]/30 blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* Eyebrow */}
                        <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-[#EDE4DA] rounded-full px-4 py-2 shadow-soft">
                            <Star size={12} fill="#C4A97D" className="text-[#C4A97D]" />
                            <span className="eyebrow text-xs">Premium Aesthetic Clinic</span>
                        </div>

                        {/* Headline */}
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C2C2C] leading-[1.15]">
                            Healthy, Glowing Skin{' '}
                            <span className="italic text-[#C4A97D]">Starts</span>{' '}
                            With Expert Care
                        </h1>

                        {/* Subheadline */}
                        <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed max-w-lg">
                            Premium skin and aesthetic treatments with trusted specialists, modern care, and easy appointment booking — designed around you.
                        </p>

                        {/* Trust badges */}
                        <div className="flex flex-wrap gap-4">
                            {[
                                { icon: Shield, label: 'Trusted Specialists' },
                                { icon: Star, label: 'Personalized Treatments' },
                                { icon: Clock, label: 'Easy Booking' },
                            ].map(({ icon: Icon, label }) => (
                                <div key={label} className="flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-[#EDE4DA] rounded-full px-3.5 py-2">
                                    <Icon size={13} className="text-[#C4A97D]" />
                                    <span className="text-xs font-medium text-[#2C2C2C]">{label}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => handleScroll('#appointment')}
                                className="btn-primary text-sm px-8 py-4"
                            >
                                <Calendar size={16} />
                                Book Appointment
                            </button>
                            <a
                                href="https://wa.me/1234567890?text=Hello%2C%20I%27m%20interested%20in%20booking%20a%20consultation%20at%20GlowCare%20Aesthetics."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-whatsapp text-sm px-8 py-4"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Chat on WhatsApp
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-8 pt-2">
                            {[
                                { number: '5,000+', label: 'Happy Patients' },
                                { number: '10+', label: 'Years Experience' },
                                { number: '98%', label: 'Satisfaction Rate' },
                            ].map(({ number, label }) => (
                                <div key={label}>
                                    <p className="stat-number font-serif font-bold text-2xl leading-tight">{number}</p>
                                    <p className="text-[#6B6B6B] text-xs font-medium mt-0.5">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="relative z-10">
                            {/* Main image container */}
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.15)]">
                                <img
                                    src="/hero_clinic.png"
                                    alt="GlowCare Aesthetics premium skin clinic"
                                    className="w-full h-[500px] lg:h-[580px] object-cover"
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/20 via-transparent to-transparent" />
                            </div>

                            {/* Floating card - bottom left */}
                            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-medium flex items-center gap-3 z-20">
                                <div className="w-10 h-10 rounded-full bg-[#EDE4DA] flex items-center justify-center shrink-0">
                                    <Star size={16} fill="#C4A97D" className="text-[#C4A97D]" />
                                </div>
                                <div>
                                    <p className="font-serif font-semibold text-sm text-[#2C2C2C]">4.9 / 5.0</p>
                                    <p className="text-[10px] text-[#6B6B6B]">Patient Rating</p>
                                </div>
                            </div>

                            {/* Floating card - top right */}
                            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-medium z-20">
                                <div className="flex items-center gap-2 mb-1.5">
                                    <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                                    <span className="text-xs font-medium text-[#2C2C2C]">Now Open</span>
                                </div>
                                <p className="text-[10px] text-[#6B6B6B]">Mon – Sat, 9am – 7pm</p>
                            </div>
                        </div>

                        {/* Background blob */}
                        <div className="absolute inset-4 rounded-[2.5rem] bg-[#C4A97D]/10 -z-10 blur-2xl" />
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
                <div className="w-[1px] h-10 bg-gradient-to-b from-transparent to-[#C4A97D] animate-[float_2s_ease-in-out_infinite]" />
            </div>
        </section>
    )
}
