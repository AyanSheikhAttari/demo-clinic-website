import { Users, Zap, Heart, Calendar } from 'lucide-react'

const highlights = [
    {
        icon: Users,
        title: 'Experienced Specialists',
        desc: 'Board-certified dermatologists and aesthetic experts',
    },
    {
        icon: Zap,
        title: 'Advanced Treatments',
        desc: 'Latest technology for safe, effective skin results',
    },
    {
        icon: Heart,
        title: 'Safe & Personalized',
        desc: 'Custom treatment plans tailored to your skin type',
    },
    {
        icon: Calendar,
        title: 'Fast Appointment Booking',
        desc: 'Book online in minutes, no waiting',
    },
]

export default function TrustBar() {
    return (
        <section className="relative bg-[#2C2C2C] py-10 overflow-hidden">
            {/* Subtle pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '32px 32px',
            }} />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {highlights.map(({ icon: Icon, title, desc }, i) => (
                        <div
                            key={title}
                            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 group"
                        >
                            <div className="w-11 h-11 shrink-0 rounded-xl bg-[#C4A97D]/15 flex items-center justify-center group-hover:bg-[#C4A97D]/25 transition-colors duration-300">
                                <Icon size={20} className="text-[#C4A97D]" />
                            </div>
                            <div>
                                <p className="font-semibold text-white text-sm leading-tight">{title}</p>
                                <p className="text-[#A89880] text-xs mt-0.5 leading-relaxed">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
