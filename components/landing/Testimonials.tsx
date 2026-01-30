import { Star } from 'lucide-react';

const testimonials = [
    {
        name: 'Sarah Jenkins',
        role: 'Marketing Manager',
        quote: 'I used CVRider to update my resume for a senior role. The templates are so professional and I landed an interview within a week!',
        avatar: 'SJ'
    },
    {
        name: 'Michael Chen',
        role: 'Software Engineer',
        quote: 'The real-time preview is a game changer. I could see exactly how my technical skills were being presented. Highly recommended!',
        avatar: 'MC'
    },
    {
        name: 'Emma Rodriguez',
        role: 'Fresh Graduate',
        quote: 'As a newcomer to the job market, I needed something simple yet effective. CVRider gave me the perfect template to start my career.',
        avatar: 'ER'
    }
];

export const Testimonials = () => {
    return (
        <section className="py-24 bg-gray-50" id="testimonials">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base font-bold text-blue-600 uppercase tracking-widest mb-3 font-heading">Testimonials</h2>
                    <p className="text-4xl font-serif font-bold tracking-tight text-gray-900">Loved by Job Seekers</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-blue-600 text-blue-600" />
                                ))}
                            </div>

                            <p className="text-gray-600 italic mb-8 leading-relaxed font-medium">
                                "{t.quote}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 text-gray-700 font-bold">
                                    {t.avatar}
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">{t.name}</div>
                                    <div className="text-sm text-gray-500 font-medium">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
