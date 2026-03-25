import BreadcrumbHero from "@/components/BreadcrumbHero";
import {
  Eye,
  Target,
  Quote,
} from "lucide-react";
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

        {/* Vision & Mission */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                
                <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-[#EEB300]/10 rounded-lg text-[#EEB300]">
                            <Eye className="w-5 h-5" />
                        </div>
                        <h2 className="text-xl font-semibold tracking-tight text-gray-900">Our Vision</h2>
                    </div>
                    <div className="bg-linear-to-br from-[#2c1b4e] to-[#9e1b66] rounded-2xl p-8 md:p-10 shadow-lg text-white relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <Quote className="w-12 h-12 text-white/10 absolute top-6 right-6" />
                        
                        <p className="text-xl md:text-2xl font-medium leading-relaxed relative z-10 text-center md:text-left">
                            Mengenal Allah dan Allah dikenal.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-[#3AA549]/10 rounded-lg text-[#3AA549]">
                            <Target className="w-5 h-5" />
                        </div>
                        <h2 className="text-xl font-semibold tracking-tight text-gray-900">Our Mission</h2>
                    </div>
                    
                    <div className="grid gap-4">
                        <div className="flex gap-4 p-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:border-[#3AA549]/30 transition-colors">
                            <div className="shrink-0 mt-1">
                                <div className="w-5 h-5 rounded-full bg-[#3AA549]/10 flex items-center justify-center text-[#3AA549]">
                                    <span className="text-[10px] font-bold">1</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-900">Mengembangkan iman, pengetahuan dan kebenaran di dalam Tuhan dan memiliki karakter seperti Kristus</h3>
                            </div>
                        </div>

                        <div className="flex gap-4 p-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:border-[#3AA549]/30 transition-colors">
                            <div className="shrink-0 mt-1">
                                <div className="w-5 h-5 rounded-full bg-[#3AA549]/10 flex items-center justify-center text-[#3AA549]">
                                    <span className="text-[10px] font-bold">2</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-900">Mengintegrasikan pendidikan antara iman dengan pengetahuan</h3>
                            </div>
                        </div>

                        <div className="flex gap-4 p-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:border-[#3AA549]/30 transition-colors">
                            <div className="shrink-0 mt-1">
                                <div className="w-5 h-5 rounded-full bg-[#3AA549]/10 flex items-center justify-center text-[#3AA549]">
                                    <span className="text-[10px] font-bold">3</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-900">Melatih, mendidik, membentuk dan memperlengkapi setiap anak agar menjadi pemimpin-pemimpin yang berintegritas, mampu memiliki pengetahuan, pengertian, keterampilan dan hikmat dari Allah.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Goals */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
                

                <div className="lg:col-span-7 flex flex-col justify-center">
                    <div className="bg-linear-to-br from-[#0185C3] to-[#006494] rounded-2xl p-8 shadow-lg text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-quote w-10 h-10 text-white/20 absolute top-6 right-6"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                        
                        <div className="relative z-10 space-y-4 font-light leading-relaxed text-white/90">
                            <p className="">
                                "It is a pleasure to give the best experiences for students by interesting programs and good curriculum. We want them having good characters and intellectual and they also can transfer it to the parents and people."
                            </p>
                            <p className="">
                                "I believe we can do all of these by working together and walk in with God. For God to be The Glory."
                            </p>
                        </div>
                        
                        <div className="mt-8 pt-6 border-t border-white/20 flex items-center gap-3">
                             <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-[10px] text-white">SKB</div>
                             <span className="text-xs font-medium text-white/80">Sekolah Kristen BASIC</span>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-5 order-first flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-[#0185C3]/10 rounded-lg text-[#0185C3]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mountain-snow w-5 h-5"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path><path d="M4.14 1 7.86.42 2.74 1.94 5.49 2 8.23.19"></path></svg>
                        </div>
                        <h2 className="text-xl font-semibold tracking-tight text-gray-900">Our Goals</h2>
                    </div>
                    <div className="grid gap-4">
                        <div className="group flex gap-5 p-6 rounded-xl border border-gray-100 bg-white hover:border-[#0185C3]/30 hover:shadow-md transition-all duration-300">
                            <div className="shrink-0">
                                <div className="w-12 h-12 rounded-full bg-[#0185C3]/10 flex items-center justify-center text-[#0185C3] group-hover:bg-[#0185C3] group-hover:text-white transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-book-heart"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path><path d="M12 8c0 .37-.1.7-.28 1a1.9 1.9 0 0 1-2.07.6 1.9 1.9 0 0 1-2.1-3.2 1.9 1.9 0 0 1 3.55.5c.24.33.58.6.9.77"></path></svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-base font-semibold text-gray-900 mb-1">Deliver the Gospel</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">To deliver gospel for the children, so they know and believe in God.</p>
                            </div>
                        </div>
                        <div className="group flex gap-5 p-6 rounded-xl border border-gray-100 bg-white hover:border-[#0185C3]/30 hover:shadow-md transition-all duration-300">
                            <div className="shrink-0">
                                <div className="w-12 h-12 rounded-full bg-[#0185C3]/10 flex items-center justify-center text-[#0185C3] group-hover:bg-[#0185C3] group-hover:text-white transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sprout"><path d="M7 20h10"></path><path d="M10 20c5.5-2.5.8-6.4 3-10"></path><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.2.4-4.8-.3-1.1-.6-2.3-1.9-3.3-2.4 1-.4 3.2-1.7 5.8-1Z"></path><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2Z"></path></svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-base font-semibold text-gray-900 mb-1">Spiritual Growth</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">Growing in Christian faith.</p>
                            </div>
                        </div>
                        <div className="group flex gap-5 p-6 rounded-xl border border-gray-100 bg-white hover:border-[#0185C3]/30 hover:shadow-md transition-all duration-300">
                            <div className="shrink-0">
                                <div className="w-12 h-12 rounded-full bg-[#0185C3]/10 flex items-center justify-center text-[#0185C3] group-hover:bg-[#0185C3] group-hover:text-white transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-school"><path d="M14 22v-4a2 2 0 1 0-4 0v4"></path><path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"></path><path d="M18 5v17"></path><path d="m4 6 8-4 8 4"></path><path d="M6 5v17"></path><circle cx="12" cy="9" r="2"></circle></svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-base font-semibold text-gray-900 mb-1">Holistic Integration</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">Integrated of education between faith and knowledge.</p>
                            </div>
                        </div>
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
  