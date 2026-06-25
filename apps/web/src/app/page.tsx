import Link from "next/link";
import { ArrowRight, MousePointer2, Zap, BarChart3, ShieldCheck, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Navigation */}
      <nav className="h-20 border-b border-border-subtle flex items-center justify-between px-6 md:px-20 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xs">FC</span>
          </div>
          <span className="font-display font-bold text-xl text-ink">FlowCanvas</span>
        </div>
        <div className="hidden md:flex items-center gap-10">
          <Link href="#features" className="text-sm font-medium text-gray-mute hover:text-emerald-600 transition-colors">Features</Link>
          <Link href="#pricing" className="text-sm font-medium text-gray-mute hover:text-emerald-600 transition-colors">Pricing</Link>
          <Link href="#docs" className="text-sm font-medium text-gray-mute hover:text-emerald-600 transition-colors">Docs</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-semibold text-ink hover:text-emerald-600 transition-colors">Login</Link>
          <Link href="/login" className="h-10 px-5 bg-emerald-600 text-white rounded-xl text-sm font-semibold flex items-center hover:bg-emerald-800 transition-all shadow-lg hover:shadow-emerald-600/20">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-20 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full mb-8">
          <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Now in Public Beta</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-bold text-ink leading-tight max-w-4xl">
          Build product tours like you <br />
          <span className="text-emerald-600 bg-clip-text">design, not like you code.</span>
        </h1>
        <p className="mt-8 text-xl text-gray-mute max-w-2xl leading-relaxed">
          The visually-driven onboarding builder for modern SaaS. <br className="hidden md:block" />
          No engineering required. 100% customizable. AI-powered funnels.
        </p>
        <div className="mt-12 flex flex-col md:flex-row items-center gap-4">
          <Link href="/login" className="h-16 px-10 bg-emerald-600 text-white rounded-2xl text-lg font-bold flex items-center gap-2 hover:bg-emerald-800 transition-all shadow-2xl hover:shadow-emerald-600/40 group">
            Start building for free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="#demo" className="h-16 px-10 bg-white border border-border-subtle text-ink rounded-2xl text-lg font-bold flex items-center gap-2 hover:bg-surface-muted transition-all">
            See the demo
          </Link>
        </div>

        {/* Hero Visual */}
        <div className="mt-20 w-full max-w-6xl relative animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <div className="absolute inset-x-0 -top-10 h-[500px] bg-gradient-to-t from-emerald-500/10 to-transparent blur-3xl rounded-full opacity-50" />
          <div className="bg-surface-muted rounded-3xl p-4 border border-border-subtle shadow-2xl relative overflow-hidden">
            <div className="bg-white rounded-2xl border border-border-subtle overflow-hidden shadow-inner">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200&h=800"
                alt="FlowCanvas Builder"
                className="w-full h-auto opacity-80"
              />
              <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-64 bg-white border-2 border-emerald-600 p-6 rounded-2xl shadow-2xl animate-bounce">
                  <h3 className="font-bold text-ink mb-1">Click here to start!</h3>
                  <p className="text-xs text-gray-mute mb-4">This is a codeless tooltip built in 3 seconds.</p>
                  <button className="w-full py-2 bg-emerald-600 text-white rounded-lg text-xs font-bold">Next step</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Bento */}
      <section id="features" className="py-32 px-6 md:px-20 bg-surface-muted">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="col-span-1 md:col-span-2 bg-white rounded-3xl p-10 border border-border-subtle shadow-sm hover:shadow-xl transition-all group">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
              <MousePointer2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-ink mb-4">Visual-First Builder</h3>
            <p className="text-gray-mute text-lg leading-relaxed">
              Forget clumsy step definitions. Simply point, click, and design your onboarding steps directly on top of your live application.
              Supports tooltips, modals, hotspots, and custom NPS surveys.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 border border-border-subtle shadow-sm hover:shadow-xl transition-all group">
            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-ink mb-4">Zero Distraction</h3>
            <p className="text-gray-mute leading-relaxed">
              FlowCanvas is designed for speed. No engineering required for any updates. Just publish and it's live across all your platforms.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 border border-border-subtle shadow-sm hover:shadow-xl transition-all group">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-ink mb-4">Deep Analytics</h3>
            <p className="text-gray-mute leading-relaxed">
              Track drop-offs and conversion funnels in real-time. Use AI-driven insights to identify roadblocks and optimize your user journey.
            </p>
          </div>

          <div className="col-span-1 md:col-span-2 bg-ink rounded-3xl p-10 shadow-2xl relative overflow-hidden group">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-600/20 blur-3xl rounded-full" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-emerald-600/20 rounded-xl flex items-center justify-center text-emerald-400 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Grade Security</h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                Privacy-first by design. We never record PII or access sensitive data. SOC2 compliant, GDPR ready, and built to scale with high-throughput architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 md:px-20 border-t border-border-subtle bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">FC</span>
              </div>
              <span className="font-display font-bold text-xl text-ink">FlowCanvas</span>
            </div>
            <p className="text-gray-mute text-sm leading-relaxed">
              The world's first visually-driven onboarding engine. Empowering product teams to build world-class tours without engineering.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
            <div>
              <h4 className="font-bold text-ink text-sm mb-6 uppercase tracking-wider">Product</h4>
              <ul className="space-y-4 text-sm text-gray-mute">
                <li><Link href="#" className="hover:text-emerald-600 transition-colors">Features</Link></li>
                <li><Link href="#" className="hover:text-emerald-600 transition-colors">Roadmap</Link></li>
                <li><Link href="#" className="hover:text-emerald-600 transition-colors">Templates</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-ink text-sm mb-6 uppercase tracking-wider">Company</h4>
              <ul className="space-y-4 text-sm text-gray-mute">
                <li><Link href="#" className="hover:text-emerald-600 transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-emerald-600 transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-emerald-600 transition-colors">Privacy</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-mute">
          <p>© 2026 FlowCanvas Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-ink">Terms</Link>
            <Link href="#" className="hover:text-ink">Privacy</Link>
            <Link href="#" className="hover:text-ink">Twitter</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
