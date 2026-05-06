import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { gradientText } from "@/lib/styles";

const stats = [
  { value: "50K+", label: "Uni Coins Earned" },
  { value: "10K+", label: "Active Users" },
  { value: "5K+", label: "Referrals Made" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden"
    >
      {/* Background Beams */}
      <BackgroundBeams className="fixed inset-0 w-full h-full z-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center w-full max-w-5xl mx-auto px-5 md:px-6 pt-24 md:pt-0 pb-32 md:pb-24">
        {/* Badge */}
        <div className="animate-fade-in-up animate-delay-100 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-1.5 mb-6 md:mb-8">
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: "linear-gradient(135deg, #fff462, #ffb700)" }}
          />
          <span className="text-xs font-medium text-slate-300 tracking-wide">
            Pocket by Unifesto — Earn & Refer
          </span>
        </div>

        {/* Heading */}
        <h1
          className="animate-fade-in-up animate-delay-100 m-0 mb-4 md:mb-6 leading-none tracking-tight"
        >
          <span
            className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-agrandir font-bold"
            style={{
              background: "linear-gradient(180deg, #ffffff 0%, #ffffff 60%, #595959 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Earn Rewards.
          </span>
          <span
            className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-agrandir font-bold mt-2 md:mt-3"
            style={gradientText}
          >
            Refer Friends. Get Paid.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in-up animate-delay-200 text-slate-400 text-sm md:text-lg max-w-xl md:max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-2 md:px-0">
          Earn Uni Coins through events, referrals, social campaigns, and partner activities like sustainability actions.{" "}
          <span className="text-slate-300">
            Redeem for campus perks and experiences.
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up animate-delay-300 flex flex-wrap items-center justify-center gap-3 md:gap-4">
          <Link
            id="hero-get-started"
            href="https://unifesto.app/auth"
            className="rounded-full px-6 py-2.5 md:px-7 md:py-3 text-sm md:text-base font-semibold shadow-[0_0_24px_rgba(255,183,0,0.5)] hover:shadow-[0_0_40px_rgba(255,244,98,0.65)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            style={{ background: "linear-gradient(135deg, #fff462, #ffb700)", color: "#000000" }}
          >
            Get Started
          </Link>
          <div
            style={{ background: "linear-gradient(135deg, #fff462, #ffb700)", borderRadius: "9999px", padding: "1px" }}
            className="transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 hover:shadow-[0_0_20px_rgba(255,183,0,0.35)]"
          >
            <Link
              id="hero-learn-more"
              href="#features"
              className="block rounded-full px-6 py-2.5 md:px-7 md:py-3 text-sm md:text-base font-semibold bg-black transition-all duration-300"
            >
              <span style={gradientText}>Learn More</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats — pinned to bottom */}
      <div className="animate-fade-in-up animate-delay-400 absolute bottom-8 md:bottom-8 left-0 right-0 z-10 w-full max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-0">
          {/* Tagline */}
          <p className="text-xs md:text-sm font-bold tracking-[0.15em]">
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #fff462, #ffb700)" }}
            >
              #PocketByUnifesto
            </span>
          </p>

          {/* Stats with dividers */}
          <div className="flex items-center gap-0">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center">
                <div className="flex flex-col items-center px-4 md:px-6">
                  <span className="text-base md:text-2xl font-extrabold leading-none text-white">
                    {stat.value}
                  </span>
                  <span className="text-[10px] md:text-xs font-medium text-slate-500 mt-0.5 tracking-wide">
                    {stat.label}
                  </span>
                </div>
                {i < stats.length - 1 && <div className="w-px h-6 bg-white/10" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
