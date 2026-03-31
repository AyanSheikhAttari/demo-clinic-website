import { BadgeCheck, FileText, Leaf, Smile, MessageSquare, CalendarCheck } from 'lucide-react'

const reasons = [
    {
        icon: BadgeCheck,
        title: 'Qualified Skin Specialists',
        desc: 'Our team holds internationally recognized qualifications in dermatology and aesthetic medicine.',
    },
    {
        icon: FileText,
        title: 'Personalized Treatment Plans',
        desc: 'Every plan is crafted around your unique skin type, condition, and lifestyle goals.',
    },
    {
        icon: Leaf,
        title: 'Modern Non-Surgical Solutions',
        desc: 'Achieve visible results without surgery — safe, effective, and with minimal downtime.',
    },
    {
        icon: Smile,
        title: 'Comfortable Clinic Experience',
        desc: 'A calm, welcoming environment designed to make every visit relaxing and stress-free.',
    },
    {
        icon: MessageSquare,
        title: 'Transparent Consultations',
        desc: 'We give you honest, straightforward advice on what treatment will genuinely help you.',
    },
    {
        icon: CalendarCheck,
        title: 'Easy Online Booking',
        desc: 'Book your appointment online in minutes — no phone calls, no waiting on hold.',
    },
]

export default function WhyChooseUs() {
    return (
        <section className="section-padding bg-[#2C2C2C] relative overflow-hidden">
            {/* Background decorative */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#C4A97D]/05 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-[#C4A97D]/05 blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-14 fade-in-section">
                    <p className="text-[#C4A97D] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                        Why Us
                    </p>
                    <div className="gold-line mb-6" />
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                        Why Patients Choose{' '}
                        <span className="italic text-[#C4A97D]">Our Clinic</span>
                    </h2>
                    <p className="text-[#A89880] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                        We've built our reputation on trust, transparency, and real results — here's what sets us apart.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 fade-in-section">
                    {reasons.map(({ icon: Icon, title, desc }) => (
                        <div
                            key={title}
                            className="group bg-white/05 hover:bg-white/10 border border-white/10 hover:border-[#C4A97D]/40 rounded-2xl p-7 transition-all duration-300 cursor-default"
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#C4A97D]/10 flex items-center justify-center mb-5 group-hover:bg-[#C4A97D]/20 transition-colors duration-300">
                                <Icon size={22} className="text-[#C4A97D]" />
                            </div>
                            <h3 className="font-serif font-semibold text-base text-white mb-2.5 leading-snug">
                                {title}
                            </h3>
                            <p className="text-[#A89880] text-sm leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
