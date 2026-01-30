import { Zap, Layout, Download, CheckCircle, Shield, Cloud } from 'lucide-react';

const features = [
    {
        name: '20+ Templates',
        description: 'A wide variety of professional, recruiter-approved templates for every industry and career level.',
        icon: <Layout className="h-6 w-6" />,
        color: 'bg-blue-600'
    },
    {
        name: 'ATS-Friendly',
        description: 'Designed specifically to pass Applicant Tracking Systems filters and reach the recruiters desk.',
        icon: <Shield className="h-6 w-6" />,
        color: 'bg-indigo-600'
    },
    {
        name: 'Real-time Preview',
        description: 'See your changes instantly as you type. No more guessing how your final resume will look.',
        icon: <Zap className="h-6 w-6" />,
        color: 'bg-teal-600'
    },
    {
        name: 'Easy Export (PDF)',
        description: 'Download your professional CV in high-quality PDF format with a single click, ready for upload.',
        icon: <Download className="h-6 w-6" />,
        color: 'bg-purple-600'
    },
    {
        name: 'Open Source',
        description: 'Fully open-source and transparent. Built by the community for the community. Free forever.',
        icon: <CheckCircle className="h-6 w-6" />,
        color: 'bg-emerald-600'
    },
    {
        name: 'Cloud Sync',
        description: 'Save your progress and access your resumes from any device. Your data is secure and synchronized.',
        icon: <Cloud className="h-6 w-6" />,
        color: 'bg-cyan-600'
    }
];

export const Features = () => {
    return (
        <section className="py-24 bg-gray-50" id="features">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-base font-bold text-blue-600 uppercase tracking-widest mb-3 font-heading">Features</h2>
                    <p className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-gray-900 mb-6">
                        Everything you need to land your dream job
                    </p>
                    <p className="text-lg text-gray-600 font-medium">
                        Our builder is packed with features designed to help you build the best version of your professional self.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-10 rounded-[2.5rem] bg-white border border-gray-100 hover:border-blue-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 shadow-sm"
                        >
                            <div className={`${feature.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.name}</h3>
                            <p className="text-gray-500 leading-relaxed font-medium">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
