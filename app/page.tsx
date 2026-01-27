import Link from 'next/link';
import { LandingHeader } from './components/LandingHeader';
import {
  CheckCircle2,
  FileText,
  Download,
  Zap,
  LayoutTemplate,
  MousePointer2,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-blue-100 selection:text-blue-900">
      <LandingHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 [background:radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-blue-50/50"></div>
        <div className="absolute top-[-10%] right-[-10%] -z-10 h-[500px] w-[500px] rounded-full bg-blue-50/30 blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] -z-10 h-[500px] w-[500px] rounded-full bg-indigo-50/30 blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/50 px-4 py-1.5 text-sm font-medium text-blue-700">
                <Sparkles size={14} className="text-blue-600" />
                <span>The most intuitive CV builder is here</span>
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl">
                Create Your <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Professional CV
                </span> <br />
                Effortlessly
              </h1>
              <p className="mt-8 text-lg leading-8 text-zinc-600 sm:text-xl">
                Build a professional CV in minutes, not hours. Stand out to recruiters with a perfectly formatted, ATS-friendly resume designed for success.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
                <Link
                  href="/auth/signup"
                  className="group inline-flex h-12 items-center justify-center rounded-full bg-zinc-900 px-8 text-base font-semibold text-white transition-all hover:bg-zinc-800 hover:shadow-xl active:scale-95"
                >
                  Get Started
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="#features"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-200 bg-white px-8 text-base font-medium text-zinc-600 transition-all hover:bg-zinc-50 hover:text-zinc-900 active:scale-95"
                >
                  View Templates
                </Link>
              </div>
            </div>

            {/* Mock CV Preview */}
            <div className="relative lg:ml-auto">
              <div className="relative rounded-2xl border border-zinc-200 bg-white p-4 shadow-2xl lg:w-[480px]">
                <div className="flex flex-col gap-6 p-4">
                  {/* Mock Header */}
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="h-4 w-32 rounded-full bg-zinc-900"></div>
                    <div className="h-2 w-48 rounded-full bg-zinc-200"></div>
                    <div className="mt-2 flex gap-2">
                      <div className="h-2 w-12 rounded-full bg-zinc-100"></div>
                      <div className="h-2 w-12 rounded-full bg-zinc-100"></div>
                      <div className="h-2 w-12 rounded-full bg-zinc-100"></div>
                    </div>
                  </div>
                  {/* Mock Sections */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="h-3 w-20 rounded-full bg-zinc-100 font-bold"></div>
                      <div className="h-2 w-full rounded-full bg-zinc-50"></div>
                      <div className="h-2 w-full rounded-full bg-zinc-50"></div>
                      <div className="h-2 w-[80%] rounded-full bg-zinc-50"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 w-24 rounded-full bg-zinc-100 font-bold"></div>
                      <div className="flex justify-between items-center">
                        <div className="h-2 w-32 rounded-full bg-zinc-900/10"></div>
                        <div className="h-2 w-16 rounded-full bg-zinc-100"></div>
                      </div>
                      <div className="h-2 w-full rounded-full bg-zinc-50"></div>
                      <div className="h-2 w-[90%] rounded-full bg-zinc-50"></div>
                    </div>
                  </div>
                </div>
                {/* Floating Decorative Elements */}
                <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl border border-zinc-100 bg-white p-4 shadow-xl">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-600">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-900">ATS Friendly</p>
                    <p className="text-[10px] text-zinc-500">Recruiter approved</p>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 flex items-center gap-3 rounded-2xl border border-zinc-100 bg-white p-4 shadow-xl">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <MousePointer2 size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-900">Easy Edit</p>
                    <p className="text-[10px] text-zinc-500">Drag and drop</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Features</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Everything you need to succeed</p>
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Our builder is packed with features designed to help you build the best version of your professional self.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="flex flex-col rounded-2xl border border-zinc-100 bg-white p-8 transition-all hover:border-blue-100 hover:shadow-2xl">
                <dt className="flex items-center gap-x-3 text-lg font-bold leading-7 text-zinc-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                    <Zap size={20} />
                  </div>
                  Smart CV Builder
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-zinc-600">
                  <p className="flex-auto">Interactive form with live preview. See your changes instantly and get suggestions for better content.</p>
                </dd>
              </div>
              {/* Feature 2 */}
              <div className="flex flex-col rounded-2xl border border-zinc-100 bg-white p-8 transition-all hover:border-blue-100 hover:shadow-2xl">
                <dt className="flex items-center gap-x-3 text-lg font-bold leading-7 text-zinc-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
                    <LayoutTemplate size={20} />
                  </div>
                  Multiple Templates
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-zinc-600">
                  <p className="flex-auto">Choose from a variety of modern, professional templates designed by career experts for maximum impact.</p>
                </dd>
              </div>
              {/* Feature 3 */}
              <div className="flex flex-col rounded-2xl border border-zinc-100 bg-white p-8 transition-all hover:border-blue-100 hover:shadow-2xl">
                <dt className="flex items-center gap-x-3 text-lg font-bold leading-7 text-zinc-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 text-white">
                    <Download size={20} />
                  </div>
                  Export to PDF Instantly
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-zinc-600">
                  <p className="flex-auto">Download your CV in high-quality PDF format with a single click. Ready to be sent to top companies.</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-zinc-50/50 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Process</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Get hired in 3 easy steps</p>
          </div>
          <div className="mx-auto mt-16 max-w-5xl sm:mt-20">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
              <div className="relative flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white font-bold text-zinc-900 shadow-lg ring-1 ring-zinc-200">1</div>
                <h3 className="mt-6 text-xl font-bold text-zinc-900">Enter your details</h3>
                <p className="mt-2 text-zinc-600">Fill in your profile, work experience, and skills into our simple form.</p>
              </div>
              <div className="relative flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white font-bold text-zinc-900 shadow-lg ring-1 ring-zinc-200">2</div>
                <h3 className="mt-6 text-xl font-bold text-zinc-900">Choose a template</h3>
                <p className="mt-2 text-zinc-600">Select the perfect design that matches your industry and personal style.</p>
              </div>
              <div className="relative flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white font-bold text-zinc-900 shadow-lg ring-1 ring-zinc-200">3</div>
                <h3 className="mt-6 text-xl font-bold text-zinc-900">Download your CV</h3>
                <p className="mt-2 text-zinc-600">Get your professional CV in PDF format instantly and start applying.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-zinc-900 px-6 py-24 text-center shadow-2xl rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to land your dream job?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-300">
              Join thousands of professionals who have used CVRider to accelerate their career.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/auth/signup"
                className="rounded-full bg-white px-8 py-3.5 text-base font-semibold text-zinc-900 shadow-sm hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all active:scale-95"
              >
                Start Building Your CV
              </Link>
            </div>
            {/* Background SVG Decoration */}
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              aria-hidden="true"
            >
              <circle cx="512" cy="512" r="512" fill="url(#gradient)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="gradient">
                  <stop stopColor="#2563eb" />
                  <stop offset={1} stopColor="#4f46e5" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-zinc-900 text-white">
                <span className="font-bold text-[10px]">CV</span>
              </div>
              <span className="font-bold text-zinc-900">CVRider</span>
            </div>
            <p className="text-sm text-zinc-500">
              &copy; {new Date().getFullYear()} CVRider. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-zinc-500">
              <a href="#" className="hover:text-zinc-900 transition-colors">Twitter</a>
              <a href="#" className="hover:text-zinc-900 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-zinc-900 transition-colors">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
