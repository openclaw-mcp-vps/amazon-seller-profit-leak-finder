export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Amazon FBA Sellers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Find Hidden Costs<br />Eating Your Profits
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Connect your Amazon Seller Central account and instantly surface every fee leak, wasted ad dollar, and margin killer — with a clear action plan to fix them.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-base transition-colors"
        >
          Start Finding Leaks — $17/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No contracts.</p>

        <div className="grid grid-cols-3 gap-6 mt-14 text-center">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">$1,240</div>
            <div className="text-[#8b949e] text-sm mt-1">Avg. monthly leaks found</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">12+</div>
            <div className="text-[#8b949e] text-sm mt-1">Fee categories analyzed</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">5 min</div>
            <div className="text-[#8b949e] text-sm mt-1">To your first insight</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$17</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Full fee breakdown dashboard',
              'Ad spend inefficiency scanner',
              'Reimbursement opportunity finder',
              'Monthly profit leak report',
              'Actionable fix recommendations',
              'Email alerts for new leaks'
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>{f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does it connect to my Amazon account?',
              a: 'We use the official Amazon Selling Partner API (SP-API). You authorize read-only access in minutes — no passwords shared, fully secure.'
            },
            {
              q: 'What kinds of profit leaks does it find?',
              a: 'FBA storage and fulfillment fee overcharges, high-ACoS ad campaigns, lost or damaged inventory reimbursements, return processing fees, and more.'
            },
            {
              q: 'Can I cancel anytime?',
              a: 'Yes. Cancel with one click from your billing portal. No questions asked, no lock-in.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} Amazon Seller Profit Leak Finder. Not affiliated with Amazon.
      </footer>
    </main>
  )
}
