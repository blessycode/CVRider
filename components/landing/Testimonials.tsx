import { Star, Quote, Sparkles } from 'lucide-react';

const testimonials = [
    {
        name: 'Sarah Jenkins',
        role: 'Marketing Director at TechFlow',
        quote: 'The level of detail in these templates is astonishing. I landed a director-level role at a top firm within 2 weeks of updating my CV.',
        avatar: 'SJ',
        color: 'from-blue-500 to-indigo-600'
    },
    {
        name: 'Michael Chen',
        role: 'Senior Engineer at Quantum',
        quote: 'Finally a tool that understands modern engineering resumes. The ATS optimization actually works—I saw a 3x increase in callback rates.',
        avatar: 'MC',
        color: 'from-indigo-500 to-purple-600'
    },
    {
        name: 'Emma Rodriguez',
        role: 'UX Designer at Sphere',
        quote: 'As a designer, I am very picky about layouts. CVRider is the only tool that gives me the professional aesthetic I actually want to send out.',
        avatar: 'ER',
        color: 'from-emerald-500 to-teal-600'
    }
];

export const Testimonials = () => {
    return (
        <section className="py-40 relative bg-white overflow-hidden" id="testimonials">
            {/* Background Texture Improvement */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:48px_48px] opacity-10"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center mb-32">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                        <Sparkles size={12} />
                        <span>Social Proof</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-heading font-extrabold tracking-tight text-gray-900 leading-tight mb-8">
                        The Standard for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Global Professionals.</span>
                    </h2>
                    <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">
                        Join over 250,000 users who have transformed their career presentation with our high-precision resume engine.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="group relative p-12 rounded-[3.5rem] bg-gray-50/50 border border-gray-100 transition-all duration-700 hover:bg-white hover:soft-shadow hover:-translate-y-4"
                        >
                            {/* Quote Icon Decoration */}
                            <div className="absolute top-10 right-10 text-gray-100 group-hover:text-blue-50 transition-colors duration-700">
                                <Quote size={64} strokeWidth={1} />
                            </div>

                            <div className="flex gap-1 mb-10">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                                ))}
                            </div>

                            <p className="text-xl text-gray-700 font-medium mb-12 leading-relaxed relative z-10">
                                "{t.quote}"
                            </p>

                            <div className="flex items-center gap-5 mt-auto">
                                <div className={`flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br ${t.color} text-white font-black text-xl shadow-lg shadow-gray-200 transition-transform group-hover:rotate-6`}>
                                    {t.avatar}
                                </div>
                                <div>
                                    <div className="text-lg font-heading font-extrabold text-gray-900">{t.name}</div>
                                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">{t.role}</div>
                                </div>
                            </div>

                            {/* Hover Bottom Bar */}
                            <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${t.color} rounded-full transition-all duration-700 group-hover:w-1/2`}></div>
                        </div>
                    ))}
                </div>

                <div className="mt-32 pt-20 border-t border-gray-100 flex flex-col md:flex-row items-center justify-center gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
                    {['TechFlow', 'Quantum', 'Sphere', 'GlobalBank', 'Elevate'].map((brand) => (
                        <span key={brand} className="text-2xl font-heading font-black tracking-tighter text-gray-400">{brand}</span>
                    ))}
                </div>
            </div>
        </section>
    );
};
