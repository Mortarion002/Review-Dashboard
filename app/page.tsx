import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-zinc-200 selection:text-zinc-900">
      
      {/* HERO SECTION */}
      <section className="relative px-6 pt-32 pb-20 max-w-7xl mx-auto text-center overflow-hidden">
        
        <div className="relative z-10 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
            Turn Customer Reviews into <br className="hidden md:block" />
            <span className="text-zinc-900">
              Actionable Insights
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Analyze thousands of eCommerce reviews with AI. Detect issues,
            understand sentiment, and improve your product faster than ever before.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/dashboard"
              className="bg-zinc-900 text-white px-8 py-4 rounded-xl font-semibold shadow-md hover:bg-zinc-800 hover:-translate-y-0.5 transition-all duration-200"
            >
              Go to Dashboard
            </Link>

            <a
              href="#features"
              className="bg-white text-zinc-900 border border-zinc-200 px-8 py-4 rounded-xl font-semibold shadow-sm hover:bg-zinc-50 hover:border-zinc-300 transition-all duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="px-6 py-24 bg-white border-t border-zinc-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              Powerful Features
            </h2>
            <p className="mt-4 text-zinc-500 max-w-xl mx-auto">
              Everything you need to understand your customers at scale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Centralized Reviews"
              desc="View all your product reviews from multiple platforms like Amazon and Shopify in one unified dashboard."
              icon="📊"
            />
            <FeatureCard
              title="AI Sentiment Analysis"
              desc="Automatically classify thousands of reviews into positive, neutral, or negative sentiments instantly."
              icon="🧠"
            />
            <FeatureCard
              title="Issue Detection"
              desc="Identify key problems like delivery delays, quality defects, or pricing complaints automatically."
              icon="🎯"
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-16 text-zinc-900">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-12 text-center relative">
          {/* Decorative line connecting steps (hidden on mobile) */}
          <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-[2px] bg-zinc-200 -z-10" />
          
          <Step number="1" text="Connect your eCommerce platforms and fetch reviews." />
          <Step number="2" text="Our AI analyzes sentiment, keywords, and hidden trends." />
          <Step number="3" text="Get clear insights to improve your product and sales." />
        </div>
      </section>

      {/* PREVIEW SECTION */}
      <section className="px-6 py-16 bg-zinc-950 text-white rounded-[2.5rem] mx-4 md:mx-auto max-w-7xl mb-24 shadow-2xl overflow-hidden relative border border-zinc-800/50">
        {/* Subtle decorative glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-zinc-800/20 blur-[100px] rounded-full" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10 tracking-tight">
            See Your Insights at a Glance
          </h2>

          {/* Fake Dashboard UI Skeleton */}
          <div className="bg-zinc-900/40 backdrop-blur-xl rounded-3xl border border-zinc-800 p-6 md:p-8 shadow-2xl ring-1 ring-white/5">
            {/* Header / Nav area */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex gap-4">
                <div className="h-8 w-8 rounded-lg bg-zinc-800 border border-zinc-700" />
                <div className="hidden sm:block h-8 w-32 rounded-lg bg-zinc-800/50 border border-zinc-700/50" />
              </div>
              <div className="h-8 w-20 rounded-lg bg-zinc-100" />
            </div>

            {/* Stats Cards area */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-24 rounded-2xl bg-zinc-800/40 border border-zinc-700/30 p-3 flex flex-col justify-center">
                  <div className="h-3 w-1/2 bg-zinc-700/50 rounded-full mb-3" />
                  <div className="h-6 w-2/3 bg-zinc-100 rounded-full" />
                </div>
              ))}
            </div>

            {/* Main Content area */}
            <div className="h-48 rounded-2xl bg-zinc-800/20 border border-zinc-700/20 p-5 flex flex-col gap-3 overflow-hidden relative">
              <div className="h-3 w-1/4 bg-zinc-700/50 rounded-full mb-1" />
              <div className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-3 items-center">
                    <div className="h-3 w-3 rounded bg-zinc-700/30" />
                    <div className="h-2 flex-1 bg-zinc-800/60 rounded-full" />
                    <div className="h-2 w-10 bg-zinc-700/40 rounded-full" />
                  </div>
                ))}
              </div>
              {/* Fake Chart Line Mockup */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-zinc-800/20 to-transparent border-t border-zinc-700/10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-6 py-24 text-center border-t border-zinc-200 bg-white">
        <h2 className="text-4xl font-bold tracking-tight text-zinc-900">
          Ready to understand your customers?
        </h2>
        <p className="mt-4 text-xl text-zinc-500 max-w-2xl mx-auto">
          Start analyzing your reviews in seconds. No credit card required.
        </p>

        <Link
          href="/dashboard"
          className="inline-block mt-10 bg-zinc-900 text-white px-10 py-4 rounded-xl font-semibold shadow-lg hover:bg-zinc-800 hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
        >
          Open Dashboard Now
        </Link>
      </section>
    </main>
  );
}

// --- HELPER COMPONENTS ---
// Adding these here ensures the page works out-of-the-box without missing imports.

function FeatureCard({ title, desc, icon }: { title: string; desc: string; icon: string }) {
  return (
    <div className="p-6 rounded-xl bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-md transition-all duration-300 text-left shadow-sm">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-zinc-900 mb-3">{title}</h3>
      <p className="text-zinc-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function Step({ number, text }: { number: string; text: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 rounded-full bg-zinc-900 text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-lg shadow-zinc-900/20 ring-4 ring-white">
        {number}
      </div>
      <p className="text-lg text-zinc-700 font-medium px-4">{text}</p>
    </div>
  );
}