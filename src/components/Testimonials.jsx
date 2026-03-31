import { Star, Quote } from 'lucide-react'

const testimonials = [
    {
        name: 'Emily Richardson',
        location: 'London, UK',
        rating: 5,
        treatment: 'HydraFacial & Acne Treatment',
        text: 'I tried so many clinics before finding GlowCare and honestly, nothing compares. My skin went from constant breakouts to genuinely clear and calm. The team is so professional and the clinic feels so luxurious. I book every 6 weeks now!',
        initials: 'ER',
        color: '#D9B99B',
    },
    {
        name: 'Nadia Al-Hassan',
        location: 'Dubai, UAE',
        rating: 5,
        treatment: 'Pigmentation Treatment & Skin Rejuvenation',
        text: 'Dr. Mitchell was incredibly thorough and knowledgeable. She created a treatment plan specifically for my skin type and the results after just 3 sessions were incredible. The pigmentation I had for years is almost completely gone. Truly fantastic.',
        initials: 'NA',
        color: '#C4A97D',
    },
    {
        name: 'Sophia Bennett',
        location: 'New York, USA',
        rating: 5,
        treatment: 'Anti-Aging & Facial Aesthetics',
        text: "What I love most about GlowCare is how natural everything looks. I was nervous about aesthetic treatments but Dr. Hartley took the time to explain everything. I look refreshed, not 'done'. Booking was easy and the team responded on WhatsApp immediately.",
        initials: 'SB',
        color: '#B89660',
    },
]

export default function Testimonials() {
    return (
        <section id="testimonials" className="section-padding bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-14 fade-in-section">
                    <p className="eyebrow mb-4">Patient Reviews</p>
                    <div className="gold-line mb-6" />
                    <h2 className="section-title mb-4">
                        What Our Patients{' '}
                        <span className="italic text-[#C4A97D]">Say</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        Real experiences from real patients. Honest, genuine words from people whose skin journeys we've had the privilege to support.
                    </p>

                    {/* Overall rating */}
                    <div className="flex items-center justify-center gap-3 mt-6 bg-cream rounded-full px-6 py-3 inline-flex mx-auto w-fit border border-[#EDE4DA]">
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={14} fill="#C4A97D" className="text-[#C4A97D]" />
                            ))}
                        </div>
                        <span className="font-serif font-semibold text-[#2C2C2C] text-sm">4.9 out of 5</span>
                        <span className="text-[#6B6B6B] text-xs">from 320+ reviews</span>
                    </div>
                </div>

                {/* Testimonial Cards */}
                <div className="grid md:grid-cols-3 gap-6 fade-in-section">
                    {testimonials.map(({ name, location, rating, treatment, text, initials, color }) => (
                        <div
                            key={name}
                            className="testimonial-card rounded-2xl p-7 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 relative"
                        >
                            {/* Quote icon */}
                            <div className="absolute top-6 right-6 opacity-10">
                                <Quote size={36} className="text-[#C4A97D]" />
                            </div>

                            {/* Stars */}
                            <div className="flex gap-0.5 mb-5">
                                {[...Array(rating)].map((_, i) => (
                                    <Star key={i} size={13} fill="#C4A97D" className="text-[#C4A97D]" />
                                ))}
                            </div>

                            {/* Treatment badge */}
                            <div className="inline-flex items-center bg-[#EDE4DA] text-[#C4A97D] text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1.5 rounded-full mb-4">
                                {treatment}
                            </div>

                            <p className="text-[#6B6B6B] text-sm leading-relaxed mb-6 italic">"{text}"</p>

                            <div className="flex items-center gap-3 pt-4 border-t border-[#EDE4DA]">
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-white font-semibold text-sm"
                                    style={{ backgroundColor: color }}
                                >
                                    {initials}
                                </div>
                                <div>
                                    <p className="font-semibold text-[#2C2C2C] text-sm">{name}</p>
                                    <p className="text-[#A89880] text-xs mt-0.5">{location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12 fade-in-section">
                    <button
                        onClick={() => document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' })}
                        className="btn-gold"
                    >
                        Join Our Happy Patients
                    </button>
                </div>
            </div>
        </section>
    )
}
