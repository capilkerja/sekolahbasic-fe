import BreadcrumbHero from "@/components/BreadcrumbHero";
import { BookHeart, Sprout, School } from "lucide-react";
import Image from "next/image";

  export default function About() {
    return (
      <>
        <BreadcrumbHero
          title={
            <>
              Rooted in Faith, <br />
              <span className="text-[#FFC627]">
                Growing in Excellence.
              </span>
            </>
          }
          description="Sekolah Kristen BASIC is a community dedicated to holistic education. We combine academic rigor with spiritual growth to prepare the next generation of leaders for Indonesia and the world."
        />

        {/* Founder's Message */}
        <div className="bg-gray-50 py-20 border-y border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        
                        <div className="w-full md:w-1/3 shrink-0">
                            <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-gray-200">
                                
                                <Image 
                                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&amp;w=800&amp;auto=format&amp;fit=crop" 
                                    alt="Sekolah Kristen BASIC Founder" 
                                    width={800}
                                    height={1000}
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6">
                                    <p className="text-white font-semibold text-sm">Drs. Rusdi Tanuwijaya, S.Th</p>
                                    <p className="text-white/70 text-[10px] uppercase tracking-wider">Founder</p>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-2/3">
                            <div className="inline-flex items-center gap-2 mb-6">
                                <span className="h-px w-8 bg-[#9e1b66]"></span>
                                <span className="text-xs font-semibold text-[#9e1b66] uppercase tracking-widest">Founder's Message</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 tracking-tight">"Education is a matter of the heart."</h2>
                            <div className="space-y-4 text-sm text-gray-600 leading-relaxed font-light">
                                <p>
                                    The foundation of education at Sekolah Kristen Basic is built upon God’s paradigms. We believe that true education is not merely the transfer of knowledge, but the formation of character, wisdom, and responsibility before God and society. As educators, we are entrusted as intellectual gatekeepers called to apply the best pedagogical approaches that respond to each student’s needs, while equipping them to think critically, act ethically, and engage meaningfully with the world around them.
                                </p>
                                <p>
                                    This conviction has guided our journey since 2004, when Sekolah Kristen Basic began humbly as a child care center, playgroup, and kindergarten. Through God’s guidance and the trust of parents, the school continued to grow expanding to elementary education, welcoming hundreds of students, and eventually establishing our own campus in Batam Center. Each step of growth was not driven by ambition alone, but by obedience to God’s leading and a commitment to provide quality Christian education rooted in faith, discipline, and excellence.
                                </p>
                                <p>
                                    Today, Sekolah Kristen Basic serves multiple educational levels across Batam Center and Batu Aji, continuing the vision entrusted to our founder, Drs. Rusdi Tanuwijaya, S.Th., and his family. Our prayer remains unchanged: that God’s love and guidance will continue to flow through this institution, shaping generations of students who reflect Christ-like character grounded in faith, strong in integrity, and prepared to serve their calling in the world.
                                </p>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>

        {/* Vision, Mission & Goals */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">

            {/* Vision */}
            <div className="text-center">
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#9e1b66] uppercase tracking-widest mb-6">
                    <span className="h-px w-6 bg-[#9e1b66]" />
                    Our Vision
                    <span className="h-px w-6 bg-[#9e1b66]" />
                </span>
                <div className="relative max-w-2xl mx-auto">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[120px] leading-none font-serif text-[#9e1b66]/5 select-none">"</span>
                    <p className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight leading-snug relative z-10">
                        Mengenal Allah dan Allah dikenal.
                    </p>
                </div>
            </div>

            {/* Mission + Goals side by side */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                {/* Mission */}
                <div>
                    <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#3AA549] uppercase tracking-widest mb-8">
                        <span className="h-px w-6 bg-[#3AA549]" />
                        Our Mission
                    </span>
                    <div className="space-y-0">
                        {[
                            "Mengembangkan iman, pengetahuan dan kebenaran di dalam Tuhan dan memiliki karakter seperti Kristus.",
                            "Mengintegrasikan pendidikan antara iman dengan pengetahuan.",
                            "Melatih, mendidik, membentuk dan memperlengkapi setiap anak agar menjadi pemimpin-pemimpin yang berintegritas, mampu memiliki pengetahuan, pengertian, keterampilan dan hikmat dari Allah.",
                        ].map((text, i) => (
                            <div key={i} className="flex gap-6 py-6 border-b border-gray-100 group">
                                <span className="shrink-0 text-5xl font-bold text-gray-100 leading-none group-hover:text-[#3AA549]/20 transition-colors select-none">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <p className="text-sm text-gray-600 leading-relaxed pt-2">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Goals */}
                <div>
                    <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#0185C3] uppercase tracking-widest mb-8">
                        <span className="h-px w-6 bg-[#0185C3]" />
                        Our Goals
                    </span>
                    <div className="space-y-4">
                        {[
                            {
                                icon: <BookHeart className="w-5 h-5" />,
                                title: "Deliver the Gospel",
                                desc: "To deliver gospel for the children, so they know and believe in God.",
                                color: "text-[#9e1b66] bg-[#9e1b66]/8 group-hover:bg-[#9e1b66] group-hover:text-white",
                                border: "group-hover:border-[#9e1b66]/20",
                            },
                            {
                                icon: <Sprout className="w-5 h-5" />,
                                title: "Spiritual Growth",
                                desc: "Growing in Christian faith and character.",
                                color: "text-[#3AA549] bg-[#3AA549]/8 group-hover:bg-[#3AA549] group-hover:text-white",
                                border: "group-hover:border-[#3AA549]/20",
                            },
                            {
                                icon: <School className="w-5 h-5" />,
                                title: "Holistic Integration",
                                desc: "Integrating education between faith and knowledge.",
                                color: "text-[#0185C3] bg-[#0185C3]/8 group-hover:bg-[#0185C3] group-hover:text-white",
                                border: "group-hover:border-[#0185C3]/20",
                            },
                        ].map(({ icon, title, desc, color, border }) => (
                            <div key={title} className={`group flex items-start gap-4 p-5 rounded-xl border border-gray-100 bg-white hover:shadow-md transition-all duration-300 ${border}`}>
                                <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${color}`}>
                                    {icon}
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-900 mb-1">{title}</h3>
                                    <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>

        

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16">
                <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">Our History</h2>
                <p className="text-sm text-gray-500 max-w-2xl mx-auto">From humble beginnings to a thriving educational complex, witness the journey of God's faithfulness through the years.</p>
            </div>

            <div className="relative">
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2"></div>

                <div className="space-y-12">
                    
                    <div className="relative flex flex-col md:flex-row items-center justify-between group">
                        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-[#DE5127] z-10 hidden md:block group-hover:scale-125 transition-transform"></div>
                        
                        <div className="md:w-1/2 pr-0 md:pr-12 text-center md:text-right mb-6 md:mb-0">
                            <span className="text-4xl font-bold text-[#DE5127]/10 absolute -top-4 right-10 select-none">2004</span>
                            <h3 className="text-lg font-semibold text-gray-900 relative">Inception</h3>
                            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-gray-100 text-gray-600 mb-2 mt-1">Founding Year</span>
                            <p className="text-xs text-gray-500 leading-relaxed">
                                Sekolah Kristen BASIC was founded in a small ruko with only 15 students and 3 teachers. The vision was sparked during a prayer meeting to serve the Batam community.
                            </p>
                        </div>
                        <div className="md:w-1/2 pl-0 md:pl-12 hidden md:block">
                        </div>
                    </div>

                    <div className="relative flex flex-col md:flex-row-reverse items-center justify-between group">
                        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-[#0185C3] z-10 hidden md:block group-hover:scale-125 transition-transform"></div>
                        
                        <div className="md:w-1/2 pl-0 md:pl-12 text-center md:text-left mb-6 md:mb-0">
                            <span className="text-4xl font-bold text-[#0185C3]/10 absolute -top-4 left-10 select-none">2010</span>
                            <h3 className="text-lg font-semibold text-gray-900 relative">Expansion to SMP</h3>
                            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-gray-100 text-gray-600 mb-2 mt-1">Growth</span>
                            <p className="text-xs text-gray-500 leading-relaxed">
                                With the primary school reaching capacity, the foundation acquired land to build the Junior High School (SMP) wing. The first batch of SMP students was welcomed.
                            </p>
                        </div>
                        <div className="md:w-1/2 pr-0 md:pr-12 hidden md:block"></div>
                    </div>

                    <div className="relative flex flex-col md:flex-row items-center justify-between group">
                        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-[#3AA549] z-10 hidden md:block group-hover:scale-125 transition-transform"></div>
                        
                        <div className="md:w-1/2 pr-0 md:pr-12 text-center md:text-right mb-6 md:mb-0">
                            <span className="text-4xl font-bold text-[#3AA549]/10 absolute -top-4 right-10 select-none">2016</span>
                            <h3 className="text-lg font-semibold text-gray-900 relative">Complete Education</h3>
                            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-gray-100 text-gray-600 mb-2 mt-1">K-12 Ready</span>
                            <p className="text-xs text-gray-500 leading-relaxed">
                                SMA (Senior High) was established, completing the K-12 educational pathway. The school invested in new science labs and a multimedia library.
                            </p>
                        </div>
                        <div className="md:w-1/2 pl-0 md:pl-12 hidden md:block"></div>
                    </div>

                    <div className="relative flex flex-col md:flex-row-reverse items-center justify-between group">
                        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-[#9e1b66] z-10 hidden md:block group-hover:scale-125 transition-transform"></div>
                        
                        <div className="md:w-1/2 pl-0 md:pl-12 text-center md:text-left">
                            <span className="text-4xl font-bold text-[#9e1b66]/10 absolute -top-4 left-10 select-none">Now</span>
                            <h3 className="text-lg font-semibold text-gray-900 relative">Digital Transformation</h3>
                            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-gray-100 text-gray-600 mb-2 mt-1">Innovation</span>
                            <p className="text-xs text-gray-500 leading-relaxed">
                                Today, Sekolah Kristen BASIC serves over 1,000 students. We have implemented a hybrid learning system and partnered with international universities for student placement.
                            </p>
                        </div>
                        <div className="md:w-1/2 pr-0 md:pr-12 hidden md:block"></div>
                    </div>

                </div>
            </div>
        </div>

        <div className="bg-[#2c1b4e] py-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight">Be Part of Our Story</h2>
                <p className="text-white/70 text-sm max-w-xl mx-auto mb-8">
                    Join a community that values faith, knowledge, and character. We invite you to visit our campus and see the BASIC difference.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-[#FFC627] text-black px-6 py-3 rounded-md font-medium text-xs md:text-sm hover:bg-[#ffcf4d] transition-colors shadow-lg shadow-[#FFC627]/20">
                        Schedule a Tour
                    </button>
                    <button className="bg-white/10 text-white border border-white/20 px-6 py-3 rounded-md font-medium text-xs md:text-sm hover:bg-white/20 transition-colors backdrop-blur-sm">
                        Contact Admissions
                    </button>
                </div>
            </div>
        </div>
      </>
    );
  }
  