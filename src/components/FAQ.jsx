import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
    {
        q: 'How do I book an appointment at GlowCare Aesthetics?',
        a: 'Booking is simple — you can fill out our online appointment form on this page, WhatsApp us directly for a quick reply, or call our clinic. Our team will confirm your appointment within 24 hours and provide all the details you need for your visit.',
    },
    {
        q: 'Do I need a consultation before starting treatment?',
        a: 'Yes, we always recommend an initial consultation with one of our specialists before beginning any treatment. This allows us to assess your skin thoroughly, understand your goals, and design a personalized treatment plan that is safe and effective for your skin type.',
    },
    {
        q: 'Which treatments are best for acne or pigmentation?',
        a: 'For acne, we often recommend our Acne Treatment program combined with HydraFacial to deep-cleanse and balance the skin. For pigmentation and dark spots, Chemical Peels, Laser Therapy, and our Skin Rejuvenation treatments deliver excellent results. Your consultant will advise the best approach during your initial visit.',
    },
    {
        q: 'Can I contact the clinic directly on WhatsApp?',
        a: 'Absolutely. We have a dedicated WhatsApp line for inquiries, consultation questions, and appointment assistance. You can message us any time and our team typically responds within a few minutes during working hours (Monday to Saturday, 9am to 7pm).',
    },
    {
        q: 'Are treatment plans personalized to my skin?',
        a: 'Yes — every patient at GlowCare Aesthetics receives a fully individualized treatment plan. We do not offer one-size-fits-all solutions. Your plan is built around your unique skin type, concerns, lifestyle, and goals, and is reviewed and updated at each visit.',
    },
    {
        q: 'Are your treatments safe and what is the aftercare like?',
        a: 'Patient safety is our highest priority. All treatments are carried out by qualified medical professionals using clinically proven, approved technologies. We provide detailed aftercare guidance after every treatment, and our team is always available by WhatsApp for any post-treatment questions.',
    },
]

export default function FAQ() {
    const [open, setOpen] = useState(null)

    return (
        <section className="section-padding bg-cream">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-14 fade-in-section">
                    <p className="eyebrow mb-4">FAQ</p>
                    <div className="gold-line mb-6" />
                    <h2 className="section-title mb-4">
                        Frequently Asked{' '}
                        <span className="italic text-[#C4A97D]">Questions</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        Find answers to common questions about our treatments, booking process, and clinic experience.
                    </p>
                </div>

                {/* Accordion */}
                <div className="space-y-3 fade-in-section">
                    {faqs.map(({ q, a }, i) => (
                        <div
                            key={i}
                            className={`bg-white rounded-2xl shadow-soft overflow-hidden transition-all duration-300 ${open === i ? 'shadow-medium' : ''}`}
                        >
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex items-center justify-between px-7 py-5 text-left group"
                                aria-expanded={open === i}
                            >
                                <span className="font-semibold text-[#2C2C2C] text-sm sm:text-base leading-snug pr-4 group-hover:text-[#C4A97D] transition-colors duration-200">
                                    {q}
                                </span>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${open === i ? 'bg-[#C4A97D] text-white' : 'bg-[#EDE4DA] text-[#C4A97D]'}`}>
                                    {open === i ? <Minus size={14} /> : <Plus size={14} />}
                                </div>
                            </button>
                            <div
                                className={`faq-answer ${open === i ? 'open' : ''}`}
                            >
                                <div className="px-7 pb-6">
                                    <div className="w-full h-px bg-[#EDE4DA] mb-4" />
                                    <p className="text-[#6B6B6B] text-sm leading-relaxed">{a}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Still have questions */}
                <div className="mt-12 text-center bg-white rounded-2xl p-8 shadow-soft fade-in-section">
                    <p className="font-serif text-xl text-[#2C2C2C] font-semibold mb-2">
                        Still have questions?
                    </p>
                    <p className="text-[#6B6B6B] text-sm mb-6">
                        Our friendly team is happy to help — message us on WhatsApp or book a free consultation.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <a
                            href="https://wa.me/1234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-whatsapp text-sm"
                        >
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Message Us on WhatsApp
                        </a>
                        <button
                            onClick={() => document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' })}
                            className="btn-outline text-sm"
                        >
                            Book Free Consultation
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
