"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const goldenGradient = "linear-gradient(135deg, #fff462, #ffb700)";

export default function PartnershipsPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center bg-black overflow-hidden pt-24 pb-16 px-6">
        {/* Background gradient */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(255,244,98,0.15) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ background: goldenGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Partner Collaborations
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Earn Uni Coins<br />
            <span style={{ background: goldenGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Beyond Events
            </span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover all the ways you can earn Uni Coins through our partner collaborations, social campaigns, and community initiatives.
          </p>
        </div>
      </section>

      {/* Featured Partner */}
      <section className="relative py-16 md:py-20 px-6 bg-black border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Featured Partnership</h2>
          
          <div className="rounded-2xl border-2 border-white/10 bg-gradient-to-br from-slate-900/50 to-black p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-2xl flex items-center justify-center" style={{ background: goldenGradient }}>
                  <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-3xl font-bold text-white mb-3">Trash2Treasure</h3>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-4">Sustainability Partnership</p>
                <p className="text-slate-400 text-base leading-relaxed mb-6">
                  Through our collaboration with Trash2Treasure, students can earn Uni Coins for recycling and sustainability actions. Every eco-friendly action you take contributes to a greener campus while rewarding you with coins that can be redeemed within the Unifesto ecosystem for events, community perks, and campus experiences.
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">How to Earn:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: goldenGradient }}>
                        <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-slate-300">Recycle paper, plastic, and other materials at designated bins</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: goldenGradient }}>
                        <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-slate-300">Participate in campus cleanup drives</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: goldenGradient }}>
                        <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-slate-300">Complete sustainability challenges and workshops</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-white/5 text-xs font-semibold text-slate-300 border border-white/10">
                    Sustainability
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-white/5 text-xs font-semibold text-slate-300 border border-white/10">
                    Recycling
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-white/5 text-xs font-semibold text-slate-300 border border-white/10">
                    Eco-Friendly
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-white/5 text-xs font-semibold text-slate-300 border border-white/10">
                    Community Impact
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Ways to Earn */}
      <section id="social" className="relative py-16 md:py-20 px-6 bg-black border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">More Ways to Earn</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Social Campaigns */}
            <div id="social" className="rounded-xl border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-all">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: goldenGradient }}>
                <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Social Campaigns</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Engage with partner brands on social media, share content, and participate in campaigns to earn Uni Coins.
              </p>
              <ul className="space-y-2 text-xs text-slate-500">
                <li>• Share branded content</li>
                <li>• Participate in hashtag campaigns</li>
                <li>• Create user-generated content</li>
                <li>• Engage with partner posts</li>
              </ul>
            </div>

            {/* Brand Activities */}
            <div id="brands" className="rounded-xl border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-all">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: goldenGradient }}>
                <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Brand Activities</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Complete challenges, surveys, and activities from partner brands to unlock exclusive rewards and earn coins.
              </p>
              <ul className="space-y-2 text-xs text-slate-500">
                <li>• Complete brand surveys</li>
                <li>• Try new products/services</li>
                <li>• Attend brand events</li>
                <li>• Provide feedback</li>
              </ul>
            </div>

            {/* Community Actions */}
            <div id="community" className="rounded-xl border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-all">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: goldenGradient }}>
                <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Community Actions</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Contribute to campus initiatives, volunteer programs, and community projects to earn while making a difference.
              </p>
              <ul className="space-y-2 text-xs text-slate-500">
                <li>• Volunteer at campus events</li>
                <li>• Join community service projects</li>
                <li>• Mentor fellow students</li>
                <li>• Participate in campus improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 bg-black border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Earning?
          </h2>
          <p className="text-slate-400 text-base mb-8">
            Open your Pocket and start earning Uni Coins through partnerships today.
          </p>
          <a
            href="https://unifesto.app/auth"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,183,0,0.5)] hover:-translate-y-0.5"
            style={{ background: goldenGradient, color: "black" }}
          >
            Open Your Pocket
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
