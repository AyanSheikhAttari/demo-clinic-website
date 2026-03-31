import { useState } from 'react'
import { Calendar, Send, CheckCircle } from 'lucide-react'

const treatmentOptions = [
    'Select a Treatment',
    'Acne Treatment',
    'HydraFacial',
    'Skin Rejuvenation',
    'Chemical Peels',
    'Anti-Aging Solutions',
    'Laser Hair Removal',
    'Pigmentation Treatment',
    'Facial Aesthetics',
    'General Consultation',
]

export default function AppointmentForm() {
    const [form, setForm] = useState({
        name: '', phone: '', email: '', treatment: '', date: '', message: '',
    })
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setSubmitted(true)
        }, 1500)
    }

    return (
        <section
            id="appointment"
            className="section-padding relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #FAF7F2 0%, #EDE4DA 100%)' }}
        >
            {/* Decorative */}
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#C4A97D]/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#D9B99B]/15 blur-3xl pointer-events-none" />

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-5 gap-12 items-start">
                    {/* Left info panel */}
                    <div className="lg:col-span-2 fade-in-section">
                        <p className="eyebrow mb-4">Consultation Booking</p>
                        <div className="gold-line-left mb-6" />
                        <h2 className="section-title mb-5">
                            Book Your{' '}
                            <span className="italic text-[#C4A97D]">Consultation</span>
                        </h2>
                        <p className="text-[#6B6B6B] text-base leading-relaxed mb-8">
                            Take the first step towards healthier, glowing skin. Fill in the form and our team will confirm your appointment within 24 hours.
                        </p>

                        <div className="space-y-5">
                            {[
                                { step: '01', title: 'Fill the Form', desc: 'Share your details and preferred treatment' },
                                { step: '02', title: 'Confirmation', desc: 'Our team contacts you to confirm your slot' },
                                { step: '03', title: 'Your Consultation', desc: 'Meet with your specialist for a personalized plan' },
                            ].map(({ step, title, desc }) => (
                                <div key={step} className="flex items-start gap-4">
                                    <div className="w-9 h-9 rounded-full bg-[#EDE4DA] border border-[#D9B99B]/50 flex items-center justify-center shrink-0 mt-0.5">
                                        <span className="text-[#C4A97D] text-xs font-bold">{step}</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-[#2C2C2C] text-sm">{title}</p>
                                        <p className="text-[#6B6B6B] text-xs mt-0.5 leading-relaxed">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="lg:col-span-3 fade-in-section">
                        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-medium">
                            {submitted ? (
                                <div className="text-center py-10">
                                    <div className="w-16 h-16 rounded-full bg-[#EDE4DA] flex items-center justify-center mx-auto mb-5">
                                        <CheckCircle size={32} className="text-[#C4A97D]" />
                                    </div>
                                    <h3 className="font-serif text-2xl font-bold text-[#2C2C2C] mb-3">
                                        Request Received!
                                    </h3>
                                    <p className="text-[#6B6B6B] text-sm leading-relaxed max-w-xs mx-auto">
                                        Thank you, {form.name.split(' ')[0]}! Our team will confirm your appointment within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="btn-outline mt-8 text-sm"
                                    >
                                        Book Another
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs font-semibold text-[#2C2C2C] mb-2 uppercase tracking-wide">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                placeholder="e.g. Sarah Johnson"
                                                value={form.name}
                                                onChange={handleChange}
                                                className="form-input"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-[#2C2C2C] mb-2 uppercase tracking-wide">
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                placeholder="+44 7700 900000"
                                                value={form.phone}
                                                onChange={handleChange}
                                                className="form-input"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-[#2C2C2C] mb-2 uppercase tracking-wide">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="sarah@example.com"
                                            value={form.email}
                                            onChange={handleChange}
                                            className="form-input"
                                        />
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs font-semibold text-[#2C2C2C] mb-2 uppercase tracking-wide">
                                                Treatment Interested In
                                            </label>
                                            <select
                                                name="treatment"
                                                value={form.treatment}
                                                onChange={handleChange}
                                                className="form-input appearance-none cursor-pointer"
                                            >
                                                {treatmentOptions.map((opt) => (
                                                    <option key={opt} value={opt === 'Select a Treatment' ? '' : opt}>
                                                        {opt}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-[#2C2C2C] mb-2 uppercase tracking-wide">
                                                Preferred Date
                                            </label>
                                            <input
                                                type="date"
                                                name="date"
                                                value={form.date}
                                                onChange={handleChange}
                                                className="form-input"
                                                min={new Date().toISOString().split('T')[0]}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-[#2C2C2C] mb-2 uppercase tracking-wide">
                                            Message / Skin Concerns
                                        </label>
                                        <textarea
                                            name="message"
                                            rows={4}
                                            placeholder="Tell us about your skin concerns or any questions you have..."
                                            value={form.message}
                                            onChange={handleChange}
                                            className="form-input resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="btn-primary w-full justify-center py-4 text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {loading ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Sending Request...
                                            </>
                                        ) : (
                                            <>
                                                <Calendar size={16} />
                                                Request Appointment
                                            </>
                                        )}
                                    </button>

                                    <p className="text-center text-[#A89880] text-xs">
                                        By submitting, you agree to our privacy policy. We won't share your information.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
