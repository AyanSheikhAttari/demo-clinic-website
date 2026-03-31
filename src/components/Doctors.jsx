import { GraduationCap, Award } from 'lucide-react'

const doctors = [
    {
        name: 'Dr. Sarah Mitchell',
        title: 'Consultant Dermatologist',
        image: '/doctor_sarah.png',
        years: '10+',
        bio: 'A board-certified dermatologist specializing in advanced skin care, laser treatments, and aesthetic medicine. Dr. Mitchell has treated over 3,000 patients across the UK and Dubai.',
        specialties: ['Laser Treatments', 'Anti-Aging', 'Acne Care'],
        credentials: 'MBBS, MRCP (Dermatology)',
    },
    {
        name: 'Dr. James Hartley',
        title: 'Aesthetic Physician',
        image: '/doctor_james.png',
        years: '8+',
        bio: 'Specializing in non-surgical facial aesthetics and skin rejuvenation, Dr. Hartley brings a meticulous approach to natural-looking enhancements and comprehensive skin health.',
        specialties: ['Facial Aesthetics', 'HydraFacial', 'Skin Rejuvenation'],
        credentials: 'MBBS, Diploma in Aesthetic Medicine',
    },
]

export default function Doctors() {
    return (
        <section className="section-padding bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-14 fade-in-section">
                    <p className="eyebrow mb-4">Our Team</p>
                    <div className="gold-line mb-6" />
                    <h2 className="section-title mb-4">
                        Meet Our Skin{' '}
                        <span className="italic text-[#C4A97D]">Experts</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        Our specialists bring years of clinical expertise and genuine passion for helping patients achieve healthy, confident skin.
                    </p>
                </div>

                {/* Doctor Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto fade-in-section">
                    {doctors.map(({ name, title, image, years, bio, specialties, credentials }) => (
                        <div
                            key={name}
                            className="group bg-cream rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Image area */}
                            <div className="relative h-72 bg-gradient-to-br from-[#EDE4DA] to-[#FAF7F2] overflow-hidden">
                                <img
                                    src={image}
                                    alt={name}
                                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Experience badge */}
                                <div className="absolute top-4 right-4 bg-[#2C2C2C]/80 backdrop-blur-sm text-white rounded-xl px-3 py-2 text-center">
                                    <p className="font-serif font-bold text-xl leading-none text-[#C4A97D]">{years}</p>
                                    <p className="text-[10px] font-medium mt-0.5">Years Exp.</p>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-7">
                                <h3 className="font-serif font-bold text-xl text-[#2C2C2C] mb-1">{name}</h3>
                                <p className="text-[#C4A97D] text-sm font-medium mb-1">{title}</p>
                                <div className="flex items-center gap-1.5 mb-4">
                                    <GraduationCap size={12} className="text-[#A89880]" />
                                    <span className="text-[#A89880] text-xs">{credentials}</span>
                                </div>
                                <p className="text-[#6B6B6B] text-sm leading-relaxed mb-5">{bio}</p>

                                {/* Specialties */}
                                <div>
                                    <p className="text-[10px] font-semibold text-[#A89880] uppercase tracking-wider mb-2.5">Specialties</p>
                                    <div className="flex flex-wrap gap-2">
                                        {specialties.map((s) => (
                                            <span
                                                key={s}
                                                className="text-xs font-medium text-[#2C2C2C] bg-[#EDE4DA] border border-[#D9B99B]/40 px-3 py-1.5 rounded-full"
                                            >
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
