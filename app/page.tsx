"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBar from "@/components/MarqueeBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <MarqueeBar />
      
      {/* Features Section */}
      <section id="features" className="relative py-20 md:py-28 px-6 bg-black border-t border-white/5 overflow-hidden">
        {/* Grid pattern background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ background: "linear-gradient(135deg, #fff462, #ffb700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Why Choose Pocket
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-5">
              Everything you need for<br />
              <span style={{ background: "linear-gradient(135deg, #fff462, #ffb700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>your campus rewards.</span>
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto">
              Earn Uni Coins through events, referrals, social campaigns, and partner activities. Redeem for campus perks and experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Event Rewards",
                description: "Earn coins by attending campus events and activities",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: "Referral Bonuses",
                description: "Get 25 coins for each friend you refer to Unifesto",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                title: "Partner Activities",
                description: "Earn through sustainability actions and brand collaborations",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                ),
              },
              {
                title: "Campus Perks",
                description: "Redeem coins for events, experiences, and community benefits",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                ),
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-black"
                  style={{ background: "linear-gradient(135deg, #fff462, #ffb700)" }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#fff462] group-hover:to-[#ffb700] transition-all">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative py-20 md:py-28 px-6 bg-black overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ background: "linear-gradient(135deg, #fff462, #ffb700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Simple by design
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            How it works
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-lg mx-auto mb-14">
            Start earning and referring — in three steps.
          </p>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 relative">
            {/* Connector line (desktop only) */}
            <div className="hidden md:block absolute top-10 left-[calc(16.66%+16px)] right-[calc(16.66%+16px)] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

            {[
              {
                number: "01",
                title: "Sign Up",
                description: "Create your Pocket account on Unifesto",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                ),
              },
              {
                number: "02",
                title: "Earn Coins",
                description: "Attend events, refer friends, join social campaigns, and partner activities",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                number: "03",
                title: "Redeem Rewards",
                description: "Use coins for campus events, perks, and experiences",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.number}
                className="relative flex flex-col items-center text-center p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 group"
              >
                {/* Step number */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-105"
                  style={{ background: "linear-gradient(135deg, #fff462, #ffb700)" }}
                >
                  <span className="text-black">{item.icon}</span>
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-slate-600 mb-2">{item.number}</span>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="relative py-20 md:py-28 px-6 bg-black overflow-hidden">
        {/* Glow */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none blur-3xl opacity-10"
          style={{ background: "linear-gradient(135deg, #fff462, #ffb700)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: Visual Demo */}
            <div className="relative order-2 lg:order-1 max-w-md mx-auto lg:mx-0">
              {/* Pocket-shaped container with enhanced design */}
              <div className="relative">
                {/* Main pocket shape with improved styling */}
                <div className="rounded-t-[3rem] rounded-b-3xl border-2 border-white/10 bg-gradient-to-br from-slate-900/80 via-black to-slate-900/80 backdrop-blur-sm overflow-hidden shadow-2xl">
                  {/* Pocket opening/flap with better visual */}
                  <div className="relative h-14 bg-gradient-to-b from-white/10 via-white/5 to-transparent border-b border-white/10">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex gap-2 items-center">
                        <div className="w-12 h-1 rounded-full bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />
                        <div className="w-2 h-2 rounded-full" style={{ background: "linear-gradient(135deg, #fff462, #ffb700)" }} />
                        <div className="w-12 h-1 rounded-full bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />
                      </div>
                    </div>
                  </div>

                  {/* Pocket content with improved spacing */}
                  <div className="p-6 md:p-8">
                    {/* Header with better styling */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider">Pocket Balance</p>
                        <p className="text-lg font-bold text-white mt-1">Uni Coins</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-xs font-semibold text-green-400">Active</span>
                      </div>
                    </div>

                    {/* Enhanced balance display */}
                    <div className="relative rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-white/10 p-8 mb-6 overflow-hidden">
                      {/* Animated background glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-50" />
                      
                      {/* Subtle grid pattern */}
                      <div className="absolute inset-0 opacity-[0.03]">
                        <div className="absolute inset-0" style={{
                          backgroundImage: "linear-gradient(rgba(255,244,98,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,244,98,0.5) 1px, transparent 1px)",
                          backgroundSize: "24px 24px"
                        }} />
                      </div>
                      
                      {/* Balance content with better layout */}
                      <div className="relative z-10 text-center">
                        <p className="text-xs text-slate-400 mb-3 uppercase tracking-wider">Total Balance</p>
                        <div className="flex items-center justify-center gap-4 mb-4">
                          <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg" style={{ background: "linear-gradient(135deg, #fff462, #ffb700)" }}>
                            <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h3 className="text-5xl font-extrabold text-white tracking-tight">1,250</h3>
                        </div>
                        <p className="text-sm font-bold mb-6" style={{ background: "linear-gradient(135deg, #fff462, #ffb700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                          Uni Coins
                        </p>
                        
                        {/* Improved action buttons */}
                        <div className="flex gap-3 justify-center">
                          <button className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-all text-xs font-semibold text-white border border-white/10 hover:border-white/20">
                            <span className="flex items-center justify-center gap-2">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                              </svg>
                              Send
                            </span>
                          </button>
                          <button className="flex-1 px-4 py-2.5 rounded-xl text-xs font-semibold text-black transition-all hover:shadow-lg hover:scale-105" style={{ background: "linear-gradient(135deg, #fff462, #ffb700)" }}>
                            <span className="flex items-center justify-center gap-2">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                              </svg>
                              Refer
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced transaction history */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Recent Activity</p>
                        <button className="text-xs font-semibold hover:text-white transition-colors" style={{ color: "#ffb700" }}>
                          View All
                        </button>
                      </div>
                      
                      {/* Transaction items with better design */}
                      <div className="rounded-xl bg-white/5 p-4 border border-white/5 hover:bg-white/[0.08] hover:border-white/10 transition-all group">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center flex-shrink-0 border border-green-500/20 group-hover:scale-110 transition-transform">
                            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-white truncate">Event Attendance</p>
                            <p className="text-xs text-slate-500 mt-0.5">Tech Summit 2026</p>
                          </div>
                          <div className="text-right">
                            <p className="text-base font-bold text-green-400">+50</p>
                            <p className="text-[10px] text-slate-600 mt-0.5">2 hrs ago</p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-xl bg-white/5 p-4 border border-white/5 hover:bg-white/[0.08] hover:border-white/10 transition-all group">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center flex-shrink-0 border border-green-500/20 group-hover:scale-110 transition-transform">
                            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-white truncate">Referral Reward</p>
                            <p className="text-xs text-slate-500 mt-0.5">Friend joined</p>
                          </div>
                          <div className="text-right">
                            <p className="text-base font-bold text-green-400">+25</p>
                            <p className="text-[10px] text-slate-600 mt-0.5">1 day ago</p>
                          </div>
                        </div>
                      </div>

                      {/* Enhanced stats cards */}
                      <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-white/5">
                        <div className="rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] p-4 text-center border border-white/5 hover:border-white/10 transition-all">
                          <p className="text-2xl font-extrabold text-white">12</p>
                          <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider">Referrals</p>
                        </div>
                        <div className="rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] p-4 text-center border border-white/5 hover:border-white/10 transition-all">
                          <p className="text-2xl font-extrabold text-white">8</p>
                          <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider">Events</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtle shadow effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-t-[3rem] rounded-b-3xl -z-10 blur-xl" />
              </div>
            </div>

            {/* Right: text */}
            <div className="order-1 lg:order-2">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ background: "linear-gradient(135deg, #fff462, #ffb700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Built for Students
              </p>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-5">
                Your Campus<br />
                <span style={{ background: "linear-gradient(135deg, #fff462, #ffb700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Rewards Hub</span>
              </h2>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 max-w-md">
                Pocket makes it easy to earn and redeem Uni Coins on campus. Get rewarded for events, referrals, social campaigns, and partner activities like sustainability actions.
              </p>

              {/* Feature bullets */}
              <ul className="flex flex-col gap-3 mb-10">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    ),
                    text: "Earn Coins for Every Event",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    ),
                    text: "Refer Friends and Earn Rewards",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    ),
                    text: "Partner Rewards (Sustainability & More)",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                      </svg>
                    ),
                    text: "Redeem for Campus Perks & Experiences",
                  },
                ].map((f) => (
                  <li key={f.text} className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center text-black"
                      style={{ background: "linear-gradient(135deg, #fff462, #ffb700)" }}
                    >
                      {f.icon}
                    </div>
                    <span className="text-sm text-slate-300">{f.text}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://unifesto.app/auth"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,183,0,0.5)] hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, #fff462, #ffb700)", color: "black" }}
              >
                Start Using Pocket
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Partner Collaborations Section */}
      <section id="partners" className="relative py-20 md:py-28 px-6 bg-black border-t border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ background: "linear-gradient(135deg, #fff462, #ffb700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Partner Collaborations
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-5">
              Earn Beyond Events
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto mb-6">
              Unifesto partners with brands and organizations to give you more ways to earn Uni Coins
            </p>
            <a 
              href="/partnerships" 
              className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-300"
              style={{ color: "#ffb700" }}
            >
              View All Partnerships
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Featured Partners Grid */}
          <div className="max-w-4xl mx-auto mb-8">
            <a
              href="/partnerships"
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 block"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ background: "linear-gradient(135deg, #fff462, #ffb700)" }}>
                    <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#fff462] group-hover:to-[#ffb700] transition-all">
                        Trash2Treasure
                      </h3>
                      <p className="text-xs text-slate-500 uppercase tracking-wider">Sustainability</p>
                    </div>
                    <svg className="w-5 h-5 text-slate-600 group-hover:text-yellow-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    Earn Uni Coins for recycling and sustainability actions. Redeem them for events, community perks, and campus experiences.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-semibold text-slate-300 border border-white/10">
                      Sustainability
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-semibold text-slate-300 border border-white/10">
                      Recycling
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-semibold text-slate-300 border border-white/10">
                      Eco-Friendly
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* More Ways to Earn */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Social Campaigns",
                description: "Engage with brands on social media and earn rewards",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                ),
                link: "/partnerships#social"
              },
              {
                title: "Brand Activities",
                description: "Complete partner challenges and unlock rewards",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                link: "/partnerships#brands"
              },
              {
                title: "Community Actions",
                description: "Contribute to campus initiatives and earn together",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                link: "/partnerships#community"
              },
            ].map((item) => (
              <a
                key={item.title}
                href={item.link}
                className="group p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center bg-white/5 text-white group-hover:bg-gradient-to-br group-hover:from-yellow-500/20 group-hover:to-yellow-600/20 group-hover:text-yellow-400 transition-all">
                  {item.icon}
                </div>
                <h4 className="text-base font-bold text-white mb-2 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#fff462] group-hover:to-[#ffb700] transition-all">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 text-center leading-relaxed">{item.description}</p>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="/partnerships"
              className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,183,0,0.5)] hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #fff462, #ffb700)", color: "black" }}
            >
              Explore All Partnerships
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy" className="relative py-20 md:py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ background: "linear-gradient(135deg, #fff462, #ffb700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Security first
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight">
              Your Coins Are Safe
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-md mx-auto">
              Uni Coins are campus rewards, not real money. Secure and simple.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
              <div className="text-white mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Passcode Protection</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Your Pocket is secured with a personal passcode. Only you can access and manage your Uni Coins balance.
              </p>
            </div>
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
              <div className="text-white mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Campus Rewards Only</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Uni Coins are campus rewards, not real currency. Earn through activities and redeem for campus perks and experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="try-now" className="relative py-24 md:py-32 px-6 bg-black overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,244,98,0.08) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ background: "linear-gradient(135deg, #fff462, #ffb700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Ready to start earning?
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5">
            Start Your<br />Pocket Journey
          </h2>
          <p className="text-slate-500 text-sm md:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            Thousands of students are already earning Uni Coins through events, referrals, and partner activities. Your campus rewards await.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://unifesto.app/auth"
              className="w-full sm:w-auto rounded-full px-8 py-3.5 text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,183,0,0.55)] hover:-translate-y-0.5 text-center"
              style={{ background: "linear-gradient(135deg, #fff462, #ffb700)", color: "black" }}
            >
              Open Your Pocket
            </a>
            <div
              className="w-full sm:w-auto transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(255,183,0,0.25)]"
              style={{ background: "linear-gradient(135deg, #fff462, #ffb700)", borderRadius: "9999px", padding: "1px" }}
            >
              <a
                href="https://unifesto.app"
                className="block w-full sm:w-auto rounded-full px-8 py-3.5 text-sm font-semibold text-center bg-black"
              >
                <span style={{ background: "linear-gradient(135deg, #fff462, #ffb700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Explore Unifesto</span>
              </a>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-white/5">
            <p className="text-xs text-slate-600 mb-4">Trusted by students across campuses</p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">50K+</p>
                <p className="text-xs text-slate-500 mt-1">Uni Coins Earned</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <p className="text-2xl font-bold text-white">10K+</p>
                <p className="text-xs text-slate-500 mt-1">Active Users</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <p className="text-2xl font-bold text-white">5K+</p>
                <p className="text-xs text-slate-500 mt-1">Referrals Made</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
