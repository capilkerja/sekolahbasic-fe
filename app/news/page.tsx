
import BreadcrumbHero from "@/components/BreadcrumbHero";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  BookOpen,
  BrickWall,
  Microscope,
  Medal,
  Star,
  Trophy,
  Mail,
} from "lucide-react";

export default function News() {
  return (
    <>
      <BreadcrumbHero
        title="News & Insight"
        description="Stay connected with the heartbeat of Sekolah Kristen BASIC. Discover stories of learning, celebration, and growth from across our school."
      />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-gray-200/60">
            <div className="flex items-end justify-between mb-8">
                <div>
                    <h2 className="text-lg font-semibold text-gray-900 tracking-tight">Educational Highlights</h2>
                    <p className="text-xs text-gray-500 mt-1">Curriculum updates and academic breakthroughs.</p>
                </div>
                <a
                  href="#"
                  className="text-xs font-medium text-gray-500 hover:text-[#0185C3] flex items-center gap-1 transition-colors"
                >
                  View Archive <ArrowRight className="w-3 h-3" />
                </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-7 group cursor-pointer">
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all h-full flex flex-col">
                        <div className="relative h-64 overflow-hidden">
                            <Image
                              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"
                              alt="Students learning together in classroom"
                              width={800}
                              height={400}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-semibold text-[#0185C3] uppercase tracking-wide border border-white/20">
                                Academics
                            </div>
                        </div>
                        <div className="p-6 flex-grow flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-3 text-[10px] text-gray-400 font-medium uppercase tracking-wide">
                                <span>Oct 24, 2025</span>
                                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                <span>5 min read</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-snug group-hover:text-[#0185C3] transition-colors">
                                Implementing Cambridge Pathway: A New Era for Secondary Education
                            </h3>
                            <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3">
                                As we continue to elevate our academic standards, BASIC is proud to announce the full integration of the Cambridge International Curriculum for our secondary levels, providing students with global recognition and rigorous preparation.
                            </p>
                        <div className="mt-auto flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-gray-100 overflow-hidden">
                                <Image
                                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=100&amp;auto=format&amp;fit=crop"
                                  alt="Portrait of Dr. Sarah Wijaya"
                                  width={100}
                                  height={100}
                                  className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="text-[10px] font-medium text-gray-600">Dr. Sarah Wijaya</span>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-5 flex flex-col gap-6">
                    <div className="bg-white rounded-xl border border-gray-200 p-4 hover:border-[#3AA549] transition-colors group cursor-pointer flex gap-4 items-start">
                        <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-gray-100">
                            <Image
                              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&amp;w=200&amp;auto=format&amp;fit=crop"
                              alt="Students presenting science projects"
                              width={200}
                              height={200}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            />
                        </div>
                        <div className="flex flex-col h-full justify-between py-0.5">
                            <div>
                                <span className="text-[9px] font-bold text-[#3AA549] uppercase tracking-wide block mb-1">Science</span>
                                <h4 className="text-sm font-semibold text-gray-900 leading-tight mb-2 group-hover:text-[#3AA549] transition-colors">Annual Science Fair 2025: Innovation in Action</h4>
                                <p className="text-[10px] text-gray-500 line-clamp-2">Students showcased 50+ projects focusing on renewable energy.</p>
                            </div>
                            <span className="text-[10px] text-gray-400 mt-2">Sep 15, 2025</span>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl border border-gray-200 p-4 hover:border-[#EEB300] transition-colors group cursor-pointer flex gap-4 items-start">
                        <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-gray-100">
                            <Image
                              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&amp;w=200&amp;auto=format&amp;fit=crop"
                              alt="Student working on laptop"
                              width={200}
                              height={200}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            />
                        </div>
                        <div className="flex flex-col h-full justify-between py-0.5">
                            <div>
                                <span className="text-[9px] font-bold text-[#EEB300] uppercase tracking-wide block mb-1">Arts</span>
                                <h4 className="text-sm font-semibold text-gray-900 leading-tight mb-2 group-hover:text-[#EEB300] transition-colors">Digital Literacy Week: Coding for Early Years</h4>
                                <p className="text-[10px] text-gray-500 line-clamp-2">Introducing computational thinking concepts to our Primary 1 students.</p>
                            </div>
                            <span className="text-[10px] text-gray-400 mt-2">Aug 22, 2025</span>
                        </div>
                    </div>
                    
                     <div className="bg-white rounded-xl border border-gray-200 p-4 hover:border-[#A82C51] transition-colors group cursor-pointer flex gap-4 items-start">
                        <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-gray-100">
                            <Image
                              src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&amp;w=200&amp;auto=format&amp;fit=crop"
                              alt="Student giving speech"
                              width={200}
                              height={200}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            />
                        </div>
                        <div className="flex flex-col h-full justify-between py-0.5">
                            <div>
                                <span className="text-[9px] font-bold text-[#A82C51] uppercase tracking-wide block mb-1">Languages</span>
                                <h4 className="text-sm font-semibold text-gray-900 leading-tight mb-2 group-hover:text-[#A82C51] transition-colors">Mandarin Speech Contest Results</h4>
                                <p className="text-[10px] text-gray-500 line-clamp-2">Congratulations to the winners of the inter-school competition.</p>
                            </div>
                            <span className="text-[10px] text-gray-400 mt-2">Aug 10, 2025</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-gray-50 py-16 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center mb-10">
                    <span className="text-[10px] font-bold text-[#EEB300] uppercase tracking-widest mb-2">Hall of Fame</span>
                    <h2 className="text-2xl font-semibold text-gray-900 tracking-tight mb-2">Student Achievements</h2>
                    <p className="text-sm text-gray-500 max-w-md">Celebrating the diverse talents and victories of our students on regional and national stages.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm flex flex-col items-center text-center relative overflow-hidden group">
                        <div className="absolute top-0 w-full h-1 bg-[#EEB300]"></div>
                        <div className="mb-4 relative">
                            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-md">
                                <Image
                                  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&amp;w=200&amp;auto=format&amp;fit=crop"
                                  alt="Kevin Tan"
                                  width={200}
                                  height={200}
                                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all"
                                />
                            </div>
                            <div className="absolute -bottom-1 -right-1 bg-[#EEB300] text-white p-1 rounded-full border-2 border-white">
                                <Trophy className="w-3 h-3" />
                            </div>
                        </div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-1">Kevin Tan</h4>
                        <p className="text-[10px] text-gray-500 mb-3 uppercase tracking-wide">Grade 11 • Science</p>
                        <div className="bg-yellow-50 border border-yellow-100 rounded px-3 py-2 w-full">
                            <p className="text-[10px] text-yellow-800 font-medium leading-tight">Gold Medalist</p>
                            <p className="text-[9px] text-yellow-600 mt-0.5">National Physics Olympiad</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm flex flex-col items-center text-center relative overflow-hidden group">
                        <div className="absolute top-0 w-full h-1 bg-[#0185C3]"></div>
                        <div className="mb-4 relative">
                            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-md">
                                <Image
                                  src="https://images.unsplash.com/photo-1606092195730-5d7b9af1ef4d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"
                                  alt="Vanessa Lim"
                                  width={200}
                                  height={200}
                                  className="w-full h-full object-cover grayscale-[20%] group-hover: grayscale-0 transition-all"
                                />
                            </div>
                            <div className="absolute -bottom-1 -right-1 bg-[#0185C3] text-white p-1 rounded-full border-2 border-white">
                                <Award className="w-3 h-3" />
                            </div>
                        </div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-1">Vanessa Lim</h4>
                        <p className="text-[10px] text-gray-500 mb-3 uppercase tracking-wide">Grade 9 • Arts</p>
                        <div className="bg-blue-50 border border-blue-100 rounded px-3 py-2 w-full">
                            <p className="text-[10px] text-blue-800 font-medium leading-tight">1st Place Winner</p>
                            <p className="text-[9px] text-blue-600 mt-0.5">Batam Youth Piano Contest</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm flex flex-col items-center text-center relative overflow-hidden group">
                        <div className="absolute top-0 w-full h-1 bg-[#3AA549]"></div>
                        <div className="mb-4 relative">
                            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-md">
                                <Image
                                  src="https://images.unsplash.com/photo-1491336477066-31156b5e4f35?q=80&amp;w=200&amp;auto=format&amp;fit=crop"
                                  alt="Basketball Team"
                                  width={200}
                                  height={200}
                                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all"
                                />
                            </div>
                            <div className="absolute -bottom-1 -right-1 bg-[#3AA549] text-white p-1 rounded-full border-2 border-white">
                                <Medal className="w-3 h-3" />
                            </div>
                        </div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-1">Basketball Team</h4>
                        <p className="text-[10px] text-gray-500 mb-3 uppercase tracking-wide">Senior High • Sports</p>
                        <div className="bg-green-50 border border-green-100 rounded px-3 py-2 w-full">
                            <p className="text-[10px] text-green-800 font-medium leading-tight">Champions</p>
                            <p className="text-[9px] text-green-600 mt-0.5">DBL Riau Series 2025</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm flex flex-col items-center text-center relative overflow-hidden group">
                        <div className="absolute top-0 w-full h-1 bg-[#A82C51]"></div>
                        <div className="mb-4 relative">
                            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-md">
                                <Image
                                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&amp;w=200&amp;auto=format&amp;fit=crop"
                                  alt="Michelle Wijaya"
                                  width={200}
                                  height={200}
                                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all"
                                />
                            </div>
                            <div className="absolute -bottom-1 -right-1 bg-[#A82C51] text-white p-1 rounded-full border-2 border-white">
                                <Star className="w-3 h-3" />
                            </div>
                        </div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-1">Michelle Wijaya</h4>
                        <p className="text-[10px] text-gray-500 mb-3 uppercase tracking-wide">Grade 12 • Leadership</p>
                        <div className="bg-pink-50 border border-pink-100 rounded px-3 py-2 w-full">
                            <p className="text-[10px] text-pink-800 font-medium leading-tight">Full Scholarship</p>
                            <p className="text-[9px] text-pink-600 mt-0.5">Accepted to NUS Singapore</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="inline-flex items-center gap-2 mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0185C3]"></span>
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Growth &amp; Infrastructure</span>
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900 tracking-tight mb-4">School Development Projects</h2>
                    <p className="text-sm text-gray-500 leading-relaxed mb-6">
                        We are constantly improving our facilities to provide the best learning environment for our students. Here are the latest upgrades completed this semester.
                    </p>
                    
                    <div className="space-y-4">
                        <div className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-gray-200 bg-white hover:bg-gray-50 transition-all cursor-pointer group">
                            <div className="w-10 h-10 rounded bg-[#0185C3]/10 flex items-center justify-center text-[#0185C3] shrink-0">
                                <Microscope className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-[#0185C3] transition-colors">Advanced Biology Lab</h4>
                                <p className="text-xs text-gray-500 leading-snug">Renovated with state-of-the-art equipment and increased capacity for practical experiments.</p>
                                <div className="mt-2 flex items-center gap-2">
                                    <span className="bg-green-100 text-green-700 text-[9px] px-1.5 py-0.5 rounded font-medium">Completed</span>
                                    <span className="text-[9px] text-gray-400">August 2025</span>
                                </div>
                            </div>
                        </div>

                         <div className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-gray-200 bg-white hover:bg-gray-50 transition-all cursor-pointer group">
                            <div className="w-10 h-10 rounded bg-[#DE5127]/10 flex items-center justify-center text-[#DE5127] shrink-0">
                                <BookOpen className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-[#DE5127] transition-colors">Library Digital Hub</h4>
                                <p className="text-xs text-gray-500 leading-snug">New dedicated zone with 40 iMacs and access to global research databases.</p>
                                <div className="mt-2 flex items-center gap-2">
                                    <span className="bg-green-100 text-green-700 text-[9px] px-1.5 py-0.5 rounded font-medium">Completed</span>
                                    <span className="text-[9px] text-gray-400">July 2025</span>
                                </div>
                            </div>
                        </div>
                         <div className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-gray-200 bg-white hover:bg-gray-50 transition-all cursor-pointer group">
                            <div className="w-10 h-10 rounded bg-[#EEB300]/10 flex items-center justify-center text-[#EEB300] shrink-0">
                                <BrickWall className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-[#EEB300] transition-colors">Indoor Sports Hall Expansion</h4>
                                <p className="text-xs text-gray-500 leading-snug">Adding spectator seating and improving ventilation systems.</p>
                                <div className="mt-2 flex items-center gap-2">
                                    <span className="bg-yellow-100 text-yellow-700 text-[9px] px-1.5 py-0.5 rounded font-medium">In Progress</span>
                                    <span className="text-[9px] text-gray-400">Est. Dec 2025</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                        <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                    <Image
                      src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&amp;w=800&amp;auto=format&amp;fit=crop"
                      alt="New school building architectural render"
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                        <p className="text-white text-xs font-medium">New School Building</p>
                        <p className="text-white/70 text-[10px]">Architectural Render</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-[#F8FAFC] py-16 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900 tracking-tight">Community &amp; Values</h2>
                        <p className="text-xs text-gray-500 mt-1 max-w-xl">Faith in action. Events that bind parents, teachers, and students together.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all group">
                        <div className="h-40 overflow-hidden relative">
                            <Image
                              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&amp;w=400&amp;auto=format&amp;fit=crop"
                              alt="Annual charity drive event"
                              width={400}
                              height={250}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-3 right-3 bg-white text-gray-900 text-[9px] font-bold px-2 py-1 rounded shadow-sm border border-gray-100">
                                12 OCT
                            </div>
                        </div>
                        <div className="p-5">
                            <h4 className="text-sm font-semibold text-gray-900 mb-2 group-hover:text-[#A82C51] transition-colors">Annual Charity Drive</h4>
                            <p className="text-[11px] text-gray-500 leading-relaxed mb-4">
                                Students gathered over 500kg of rice and essential supplies for local orphanages, demonstrating Christ's love through giving.
                            </p>
                            <a href="#" className="inline-flex items-center text-[10px] font-medium text-[#A82C51] hover:underline">
                                Read Full Story <ArrowRight className="w-3 h-3 ml-0.5" />
                            </a>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all group">
                        <div className="h-40 overflow-hidden relative">
                            <Image
                              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&amp;w=400&amp;auto=format&amp;fit=crop"
                              alt="Parenting seminar in digital era"
                              width={400}
                              height={250}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                             <div className="absolute top-3 right-3 bg-white text-gray-900 text-[9px] font-bold px-2 py-1 rounded shadow-sm border border-gray-100">
                                05 OCT
                            </div>
                        </div>
                        <div className="p-5">
                            <h4 className="text-sm font-semibold text-gray-900 mb-2 group-hover:text-[#A82C51] transition-colors">Parenting Seminar: Digital Era</h4>
                            <p className="text-[11px] text-gray-500 leading-relaxed mb-4">
                                A successful workshop with Dr. James Riady on navigating screen time and digital discipleship at home.
                            </p>
                            <a href="#" className="inline-flex items-center text-[10px] font-medium text-[#A82C51] hover:underline">
                                Read Full Story <ArrowRight className="w-3 h-3 ml-0.5" />
                            </a>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all group">
                        <div className="h-40 overflow-hidden relative">
                            <Image
                              src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&amp;w=400&amp;auto=format&amp;fit=crop"
                              alt="Teachers' retreat 2025"
                              width={400}
                              height={250}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                             <div className="absolute top-3 right-3 bg-white text-gray-900 text-[9px] font-bold px-2 py-1 rounded shadow-sm border border-gray-100">
                                28 SEP
                            </div>
                        </div>
                        <div className="p-5">
                            <h4 className="text-sm font-semibold text-gray-900 mb-2 group-hover:text-[#A82C51] transition-colors">Teachers' Retreat 2025</h4>
                            <p className="text-[11px] text-gray-500 leading-relaxed mb-4">
                                A weekend of spiritual refreshment and team building for our dedicated staff at Bintan Lagoon.
                            </p>
                            <a href="#" className="inline-flex items-center text-[10px] font-medium text-[#A82C51] hover:underline">
                                Read Full Story <ArrowRight className="w-3 h-3 ml-0.5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 mt-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_2px_10px_-4px_rgba(6,81,237,0.1)]">
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                        <h3 className="text-base font-semibold text-gray-900">Subscribe to Weekly Updates</h3>
                        <p className="text-xs text-gray-500 mt-1">Get the latest news, events, and student stories delivered to your inbox.</p>
                    </div>
                </div>
                <div className="w-full md:w-auto flex gap-2">
                    <input type="email" placeholder="Enter your email" className="w-full md:w-64 bg-gray-50 border border-gray-200 px-4 py-2 text-xs rounded-lg focus:ring-1 focus:ring-[#9e1b66] outline-none transition-all"/>
                    <button className="bg-[#9e1b66] text-white px-5 py-2 rounded-lg text-xs font-medium hover:bg-[#851655] transition-colors whitespace-nowrap">Subscribe</button>
                </div>
            </div>
        </section>

      </>
    );
  }
  