import { Cpu, Award, UserCheck } from 'lucide-react'

const highlights = [
    { icon: Cpu, title: 'Modern Equipment', desc: 'State-of-the-art technology for precise, comfortable treatments' },
    { icon: Award, title: 'Certified Specialists', desc: 'Fully qualified dermatologists and aesthetic physicians' },
    { icon: UserCheck, title: 'Patient-Centered Care', desc: 'Your comfort, safety and results are our top priority' },
]

export default function About() {
    return (
        <section id="about" className="section-padding bg-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="fade-in-section order-2 lg:order-1">
                        <p className="eyebrow mb-4">About Our Clinic</p>
                        <div className="gold-line-left mb-6" />
                        <h2 className="section-title mb-6">
                            Expert Skin Care,{' '}
                            <span className="italic text-[#C4A97D]">Personalized</span>{' '}
                            for You
                        </h2>
                        <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed mb-8">
                            At GlowCare Aesthetics, we provide advanced skin and aesthetic treatments
                            designed to help you feel confident in your skin. Our clinic combines modern
                            technology, personalized care, and trusted specialists in a calm, welcoming
                            environment that puts your wellbeing first.
                        </p>
                        <p className="text-[#6B6B6B] text-sm leading-relaxed mb-10">
                            Whether you're looking for a solution to acne, signs of aging, or simply
                            want glowing, healthy skin — our team is here to guide you with honest
                            advice and the most effective treatments available.
                        </p>

                        {/* Highlights */}
                        <div className="space-y-5">
                            {highlights.map(({ icon: Icon, title, desc }) => (
                                <div key={title} className="flex items-start gap-4">
                                    <div className="w-10 h-10 shrink-0 rounded-xl bg-[#EDE4DA] flex items-center justify-center mt-0.5">
                                        <Icon size={18} className="text-[#C4A97D]" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-[#2C2C2C] text-sm">{title}</p>
                                        <p className="text-[#6B6B6B] text-xs mt-0.5 leading-relaxed">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10">
                            <button
                                onClick={() => document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' })}
                                className="btn-gold"
                            >
                                Book a Consultation
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="fade-in-section order-1 lg:order-2 relative">
                        <div className="relative rounded-[2rem] overflow-hidden shadow-medium">
                            <img
                                src="/about_clinic.png"
                                alt="GlowCare Aesthetics clinic interior"
                                className="w-full h-[450px] lg:h-[520px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/15 to-transparent" />
                        </div>

                        {/* Experience badge */}
                        <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-white rounded-2xl p-5 shadow-medium z-10">
                            <p className="stat-number font-serif font-bold text-3xl leading-none">10+</p>
                            <p className="text-[#6B6B6B] text-xs font-medium mt-1">Years of<br />Excellence</p>
                        </div>

                        {/* Gold accent */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-[#C4A97D]/15 blur-xl" />
                    </div>
                </div>
            </div>
        </section>
    )
}
