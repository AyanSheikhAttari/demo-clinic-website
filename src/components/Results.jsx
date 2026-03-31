import { Star, Sparkles } from 'lucide-react'

const results = [
    {
        label: 'Acne Clearance',
        before: 'Active breakouts & congested pores',
        after: 'Clear, smooth, balanced complexion',
        stat: '90%',
        statLabel: 'Cleared in 8 weeks',
    },
    {
        label: 'Skin Brightness',
        before: 'Dull, uneven skin tone & dark spots',
        after: 'Radiant, even, luminous skin',
        stat: '85%',
        statLabel: 'Improvement rate',
    },
    {
        label: 'Anti-Aging',
        before: 'Fine lines & loss of firmness',
        after: 'Smoother, firmer, youthful appearance',
        stat: '93%',
        statLabel: 'Patient satisfaction',
    },
]

export default function Results() {
    return (
        <section
            className="section-padding relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #FAF7F2 0%, #F0E8DE 100%)' }}
        >
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C4A97D]/08 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#D9B99B]/15 blur-3xl pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 fade-in-section">
                    <p className="eyebrow mb-4">Visible Transformations</p>
                    <div className="gold-line mb-6" />
                    <h2 className="section-title mb-4">
                        Real Results, Confidence{' '}
                        <span className="italic text-[#C4A97D]">You Can Feel</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        Our treatments are clinically proven to deliver visible skin improvements. These are the kinds of transformations our patients experience.
                    </p>
                </div>

                {/* Result Cards */}
                <div className="grid md:grid-cols-3 gap-6 fade-in-section mb-16">
                    {results.map(({ label, before, after, stat, statLabel }) => (
                        <div
                            key={label}
                            className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Before / After visual */}
                            <div className="relative h-52 bg-gradient-to-br from-[#EDE4DA] to-[#FAF7F2] flex items-center justify-center">
                                <img
                                    src="/skin_results.png"
                                    alt={`${label} skin treatment results`}
                                    className="w-full h-full object-cover opacity-60"
                                />
                                {/* Before/After Labels */}
                                <div className="absolute inset-0 flex">
                                    <div className="flex-1 flex items-end p-3">
                                        <span className="bg-black/50 text-white text-[10px] font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
                                            Before
                                        </span>
                                    </div>
                                    <div className="w-px bg-white/60" />
                                    <div className="flex-1 flex items-end justify-end p-3">
                                        <span className="bg-[#C4A97D]/80 text-white text-[10px] font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
                                            After
                                        </span>
                                    </div>
                                </div>
                                {/* Stat badge */}
                                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 text-center shadow-soft">
                                    <p className="stat-number font-serif font-bold text-lg leading-none">{stat}</p>
                                    <p className="text-[#6B6B6B] text-[9px] font-medium mt-0.5">{statLabel}</p>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-1.5 mb-3">
                                    <Sparkles size={13} className="text-[#C4A97D]" />
                                    <span className="text-[#C4A97D] text-xs font-semibold uppercase tracking-wider">{label}</span>
                                </div>
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-[10px] text-[#A89880] font-medium uppercase tracking-wider mb-1">Before</p>
                                        <p className="text-sm text-[#6B6B6B]">{before}</p>
                                    </div>
                                    <div className="w-full h-px bg-[#EDE4DA]" />
                                    <div>
                                        <p className="text-[10px] text-[#C4A97D] font-medium uppercase tracking-wider mb-1">After</p>
                                        <p className="text-sm text-[#2C2C2C] font-medium">{after}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom confidence strip */}
                <div className="fade-in-section bg-white rounded-2xl p-8 shadow-soft text-center">
                    <div className="flex justify-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} fill="#C4A97D" className="text-[#C4A97D]" />
                        ))}
                    </div>
                    <p className="font-serif text-xl md:text-2xl text-[#2C2C2C] font-semibold mb-2">
                        "Confidence begins with skin you love."
                    </p>
                    <p className="text-[#6B6B6B] text-sm mb-6">
                        Join thousands of patients who've transformed their skin with GlowCare Aesthetics.
                    </p>
                    <button
                        onClick={() => document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' })}
                        className="btn-gold mx-auto"
                    >
                        Start Your Skin Journey
                    </button>
                </div>
            </div>
        </section>
    )
}
