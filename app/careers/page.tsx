import BreadcrumbHero from "@/components/BreadcrumbHero";
import Link from "next/link";
import {
  MapPin,
  Calculator,
  FlaskConical,
  Languages,
  Globe2,
  Cross,
  MessageSquare,
  GraduationCap,
  HeartHandshake,
  Users,
  ArrowRight,
  Mail,
  Phone,
  CheckCircle2,
} from "lucide-react";

type Position = {
  title: string;
  count: number;
  icon: React.ReactNode;
  color: string;
  level?: string;
};

type Campus = {
  name: string;
  location: string;
  positions: Position[];
};

const CAMPUSES: Campus[] = [
  {
    name: "Batu Aji Campus",
    location: "Sekolah Kristen BASIC — Batu Aji",
    positions: [
      {
        title: "Math Teacher",
        count: 2,
        icon: <Calculator className="w-5 h-5" />,
        color: "bg-blue-50 text-blue-700",
      },
      {
        title: "Science Teacher",
        count: 1,
        icon: <FlaskConical className="w-5 h-5" />,
        color: "bg-emerald-50 text-emerald-700",
      },
      {
        title: "English Teacher",
        count: 1,
        icon: <Languages className="w-5 h-5" />,
        color: "bg-amber-50 text-amber-700",
      },
    ],
  },
  {
    name: "Batam Center Campus",
    location: "Sekolah Kristen BASIC — Batam Center",
    positions: [
      {
        title: "Geography / Sociology Teacher",
        count: 1,
        icon: <Globe2 className="w-5 h-5" />,
        color: "bg-rose-50 text-rose-700",
      },
    ],
  },
];

const REQUIREMENTS = [
  {
    icon: <Cross className="w-5 h-5" />,
    title: "Christian Faith",
    desc: "A committed Christian whose faith shapes how they teach, mentor, and live out a calling to disciple students.",
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "English Proficiency",
    desc: "Able to speak, teach, and communicate fluently in English — confident in both classroom and conversational settings.",
  },
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Relevant Qualification",
    desc: "Bachelor's degree (S1) in the relevant subject area or teaching qualification. Prior teaching experience is a plus.",
  },
  {
    icon: <HeartHandshake className="w-5 h-5" />,
    title: "Heart for Students",
    desc: "Passionate about character formation, patient with diverse learners, and committed to walking with students beyond academics.",
  },
];

const PERKS = [
  {
    icon: <Users className="w-5 h-5" />,
    title: "Christ-Centered Community",
    desc: "Work alongside educators who share the same calling and values.",
  },
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Professional Growth",
    desc: "Ongoing training, mentorship, and clear career development paths.",
  },
  {
    icon: <HeartHandshake className="w-5 h-5" />,
    title: "Family-Like Culture",
    desc: "A supportive environment where teachers are valued and heard.",
  },
];

export default function Careers() {
  return (
    <>
      <BreadcrumbHero
        title={
          <>
            Teach. Disciple. <br />
            <span className="text-[#FFC627]">Shape generations.</span>
          </>
        }
        description="Join a Christ-centered school where education is more than a profession — it's a calling. We're looking for passionate, English-speaking Christian educators to grow with us."
      />

      {/* ── WHY JOIN US ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#9e1b66] uppercase tracking-widest mb-3">
            <span className="h-px w-6 bg-[#9e1b66]" /> Why Join BASIC <span className="h-px w-6 bg-[#9e1b66]" />
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-3">
            More than a job — a <span className="text-[#9e1b66]">calling</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            At Sekolah Kristen BASIC, teaching is ministry. You'll join a team committed to academic excellence and Christ-like character.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PERKS.map((perk) => (
            <div
              key={perk.title}
              className="group bg-gray-50 rounded-xl p-6 transition-all hover:bg-white hover:shadow-lg border border-transparent hover:border-gray-100"
            >
              <div className="w-10 h-10 rounded-lg bg-[#9e1b66]/10 text-[#9e1b66] flex items-center justify-center mb-4 group-hover:bg-[#9e1b66] group-hover:text-white transition-colors">
                {perk.icon}
              </div>
              <h3 className="font-semibold text-gray-900 text-base mb-2">{perk.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{perk.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── OPEN POSITIONS ── */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9e1b66]/10 border border-[#9e1b66]/20 w-fit mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9e1b66] animate-pulse" />
                <span className="text-[10px] uppercase tracking-wider font-medium text-[#9e1b66]">Now Hiring</span>
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Open Positions</h2>
              <p className="text-gray-500 text-sm mt-2">
                Currently {CAMPUSES.reduce((sum, c) => sum + c.positions.reduce((s, p) => s + p.count, 0), 0)} positions open across 2 campuses.
              </p>
            </div>
            <a
              href="#apply"
              className="inline-flex items-center gap-2 bg-[#9e1b66] text-white px-5 py-2.5 rounded-full text-xs font-medium hover:bg-[#801650] transition-colors w-fit"
            >
              Apply Now <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="space-y-10">
            {CAMPUSES.map((campus) => (
              <div key={campus.name}>
                <div className="flex items-center gap-2 mb-5">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <h3 className="text-sm font-semibold text-gray-900">{campus.name}</h3>
                  <span className="text-xs text-gray-400">— {campus.location}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {campus.positions.map((pos) => (
                    <div
                      key={pos.title}
                      className="group bg-white rounded-xl p-5 border border-gray-100 hover:border-[#9e1b66]/30 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${pos.color}`}>
                          {pos.icon}
                        </div>
                        <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                          {pos.count} {pos.count > 1 ? "openings" : "opening"}
                        </span>
                      </div>
                      <h4 className="font-semibold text-gray-900 text-base mb-1">{pos.title}</h4>
                      <p className="text-xs text-gray-500 mb-4">Full-time · Christian · English-speaking</p>
                      <a
                        href="#apply"
                        className="text-xs font-medium text-[#9e1b66] inline-flex items-center gap-1 group-hover:underline"
                      >
                        Apply for this role <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REQUIREMENTS ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#9e1b66] uppercase tracking-widest mb-3">
              <span className="h-px w-6 bg-[#9e1b66]" /> Requirements
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
              What we're looking for
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              We hire teachers who see education as a holy calling. The four pillars below are non-negotiable for every role.
            </p>
            <div className="bg-[#9e1b66]/5 border border-[#9e1b66]/10 rounded-xl p-5">
              <p className="text-xs text-gray-700 leading-relaxed">
                <strong className="text-[#9e1b66]">Note:</strong> All positions require applicants to be practicing Christians and able to teach and communicate confidently in English.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {REQUIREMENTS.map((req) => (
              <div
                key={req.title}
                className="flex gap-4 p-5 rounded-xl border border-gray-100 bg-white hover:border-[#9e1b66]/20 hover:shadow-sm transition-all"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-[#9e1b66]/10 text-[#9e1b66] flex items-center justify-center">
                  {req.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900 text-sm">{req.title}</h3>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{req.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO APPLY ── */}
      <section id="apply" className="bg-[#2c1b4e] relative overflow-hidden scroll-mt-32">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#9e1b66] rounded-full blur-[120px] opacity-30 translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 w-fit mb-4">
                <Mail className="w-3 h-3 text-[#FFC627]" />
                <span className="text-[10px] uppercase tracking-wider font-medium text-white/90">How to Apply</span>
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">
                Ready to answer the call?
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Send your CV, cover letter, and a brief testimony of your faith journey. We'll review every application personally and respond within 2 weeks.
              </p>

              <div className="space-y-3 mb-8">
                <a
                  href="mailto:hrd@sekolahbasic.com"
                  className="flex items-center gap-3 text-white hover:text-[#FFC627] transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/50">Email Application</p>
                    <p className="text-sm font-medium">hrd@sekolahbasic.com</p>
                  </div>
                </a>
                <a
                  href="tel:+6277812345678"
                  className="flex items-center gap-3 text-white hover:text-[#FFC627] transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/50">Or Call</p>
                    <p className="text-sm font-medium">+62 778 1234 5678</p>
                  </div>
                </a>
              </div>

              <a
                href="mailto:hrd@sekolahbasic.com?subject=Application for Teacher Position"
                className="inline-flex items-center gap-2 bg-[#FFC627] text-black px-6 py-3 rounded-full font-medium text-sm hover:bg-[#ffcf4d] transition-colors shadow-lg shadow-[#FFC627]/20"
              >
                <Mail className="w-4 h-4" /> Send Application
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
              <h3 className="text-white font-semibold text-base mb-5">What to include in your application</h3>
              <ul className="space-y-3">
                {[
                  "Curriculum Vitae (CV) with recent photo",
                  "Cover letter explaining why you're called to teach at BASIC",
                  "Brief faith testimony (1–2 paragraphs)",
                  "Copies of academic certificates & transcripts",
                  "Reference letter from your pastor or church leader",
                  "Portfolio of teaching materials (if available)",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-white/80 text-xs leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#FFC627] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-gray-900 mb-3">
          Have questions before applying?
        </h2>
        <p className="text-sm text-gray-500 max-w-xl mx-auto mb-6">
          We'd love to hear from you. Reach out to our HR team for more details about life as a teacher at BASIC.
        </p>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-xs font-medium text-[#9e1b66] hover:underline"
        >
          Learn more about Sekolah Kristen BASIC <ArrowRight className="w-3 h-3" />
        </Link>
      </section>
    </>
  );
}
