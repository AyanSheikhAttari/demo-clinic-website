import { Droplets, Sparkles, Sun, FlaskConical, Clock, Zap, Eye, Heart } from 'lucide-react'

const treatments = [
    {
        icon: Droplets,
        title: 'Acne Treatment',
        desc: 'Targeted solutions for all types and severity of acne, clearing skin and preventing future breakouts.',
        tag: 'Most Popular',
    },
    {
        icon: Sparkles,
        title: 'HydraFacial',
        desc: 'Deep cleansing, exfoliation, and hydration in one luxurious 3-step treatment for radiant, plump skin.',
    },
    {
        icon: Sun,
        title: 'Skin Rejuvenation',
        desc: 'Stimulate collagen production and restore youthful glow with our advanced skin renewal therapies.',
    },
    {
        icon: FlaskConical,
        title: 'Chemical Peels',
        desc: 'Customized peels that resurface the skin, reduce pigmentation, and improve overall skin texture.',
    },
    {
        icon: Clock,
        title: 'Anti-Aging Solutions',
        desc: 'Proven non-surgical treatments to smooth fine lines, restore volume, and turn back the clock.',
        tag: 'Trending',
    },
    {
        icon: Zap,
        title: 'Laser Hair Removal',
        desc: 'Permanent hair reduction using the latest laser technology — comfortable, precise, and long-lasting.',
    },
    {
        icon: Eye,
        title: 'Pigmentation Treatment',
        desc: 'Fade dark spots, melasma, and uneven tone with advanced brightening and corrective therapies.',
    },
    {
        icon: Heart,
        title: 'Facial Aesthetics',
        desc: 'Enhance natural beauty with subtle, natural-looking aesthetic treatments tailored to your features.',
    },
]

export default function Treatments() {
    return (
        <section
            id="treatments"
            className="section-padding"
            style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #FAF7F2 100%)' }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-14 fade-in-section">
                    <p className="eyebrow mb-4">What We Offer</p>
                    <div className="gold-line mb-6" />
                    <h2 className="section-title mb-4">
                        Our Skin & Aesthetic{' '}
                        <span className="italic text-[#C4A97D]">Treatments</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        Discover our full range of clinically proven treatments, each personalized to your unique skin needs and goals.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 fade-in-section">
                    {treatments.map(({ icon: Icon, title, desc, tag }, i) => (
                        <div
                            key={title}
                            className="treatment-card relative bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1.5 group cursor-default"
                        >
                            {tag && (
                                <span className="absolute top-4 right-4 bg-[#EDE4DA] text-[#C4A97D] text-[9px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
                                    {tag}
                                </span>
                            )}
                            <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#EDE4DA] flex items-center justify-center mb-5 group-hover:bg-[#EDE4DA] group-hover:border-[#D9B99B] transition-colors duration-300">
                                <Icon size={20} className="text-[#C4A97D]" />
                            </div>
                            <h3 className="font-serif font-semibold text-base text-[#2C2C2C] mb-2.5 leading-snug">
                                {title}
                            </h3>
                            <p className="text-[#6B6B6B] text-xs leading-relaxed">{desc}</p>
                            <div className="mt-5 flex items-center gap-1.5 text-[#C4A97D] text-xs font-medium group-hover:gap-2.5 transition-all duration-300">
                                <span>Learn More</span>
                                <span>→</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12 fade-in-section">
                    <p className="text-[#6B6B6B] text-sm mb-5">
                        Not sure which treatment is right for you?
                    </p>
                    <button
                        onClick={() => document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' })}
                        className="btn-primary"
                    >
                        Book a Free Consultation
                    </button>
                </div>
            </div>
        </section>
    )
}
