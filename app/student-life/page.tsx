import BreadcrumbHero from "@/components/BreadcrumbHero";
import Image from "next/image";
import { DailySchedule } from "@/components/student-life/DailySchedule";
import {
  Sparkles,
  Palette,
  HandMetal,
  ShieldCheck,
  Heart,
  MessageCircleHeart,
  BookOpenCheck,
  Users,
  ArrowRight,
  Quote,
} from "lucide-react";

export default function StudentLife() {
  return (
      <>
        <BreadcrumbHero
          title="Beyond the Classroom"
          description="A vibrant community where faith, friendship, and personal growth come together. Discover what it means to be a student at BASIC."
        />

        <DailySchedule />

        <div className="bg-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#9e1b66] uppercase tracking-widest mb-3">
                        <span className="h-px w-6 bg-[#9e1b66]" /> Our Values <span className="h-px w-6 bg-[#9e1b66]" />
                    </span>
                    <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-3">
                        Living <span className="text-[#9e1b66]">BISA</span>
                    </h2>
                    <p className="text-gray-500 text-sm max-w-2xl mx-auto">Four values we live every day — not just words, but a way of life that shapes the character of every BASIC student.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="group relative bg-gray-50 rounded-xl p-6 transition-all hover:bg-white hover:shadow-lg border border-transparent hover:border-gray-100">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors shrink-0">
                                <Sparkles className="w-5 h-5" />
                            </div>
                        </div>
                        <h3 className="font-semibold text-gray-900 text-base mb-2">Bersih — Clean</h3>
                        <p className="text-xs text-gray-500 leading-relaxed">Keeping ourselves, our classrooms, and our school environment clean as an expression of gratitude and responsibility to God and others.</p>
                    </div>

                    <div className="group relative bg-gray-50 rounded-xl p-6 transition-all hover:bg-white hover:shadow-lg border border-transparent hover:border-gray-100">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors shrink-0">
                                <Palette className="w-5 h-5" />
                            </div>
                        </div>
                        <h3 className="font-semibold text-gray-900 text-base mb-2">Indah — Beautiful</h3>
                        <p className="text-xs text-gray-500 leading-relaxed">Creating a beautiful, orderly, and joyful environment through creativity and an attitude that brings happiness to everyone around us.</p>
                    </div>

                    <div className="group relative bg-gray-50 rounded-xl p-6 transition-all hover:bg-white hover:shadow-lg border border-transparent hover:border-gray-100">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors shrink-0">
                                <HandMetal className="w-5 h-5" />
                            </div>
                        </div>
                        <h3 className="font-semibold text-gray-900 text-base mb-2">Sopan — Polite</h3>
                        <p className="text-xs text-gray-500 leading-relaxed">Showing respect, kind words, and courteous behavior toward teachers, friends, parents, and every member of the school community.</p>
                    </div>

                    <div className="group relative bg-gray-50 rounded-xl p-6 transition-all hover:bg-white hover:shadow-lg border border-transparent hover:border-gray-100">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-colors shrink-0">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                        </div>
                        <h3 className="font-semibold text-gray-900 text-base mb-2">Aman — Safe</h3>
                        <p className="text-xs text-gray-500 leading-relaxed">Building a safe space for every member of the school through mutual care, protection, and shared responsibility for one another's wellbeing.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2">Extracurricular Activities</h2>
                    <p className="text-gray-500 text-sm">Discover passions outside the classroom.</p>
                </div>
                <div className="bg-gray-100 p-1 rounded-lg inline-flex">
                    <button className="px-4 py-1.5 rounded-md bg-white text-gray-900 text-xs font-medium shadow-sm">All</button>
                    <button className="px-4 py-1.5 rounded-md text-gray-500 text-xs font-medium hover:text-gray-900">Sports</button>
                    <button className="px-4 py-1.5 rounded-md text-gray-500 text-xs font-medium hover:text-gray-900">Arts</button>
                    <button className="px-4 py-1.5 rounded-md text-gray-500 text-xs font-medium hover:text-gray-900">Clubs</button>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <a href="#" className="group block relative cursor-pointer">
                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3">
                        <Image
                          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"
                          width={800}
                          height={600}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          alt="Basketball team activity"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-black text-[10px] font-bold px-2 py-1 rounded">Sports</div>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#9e1b66] transition-colors">Basketball Team</h3>
                    <p className="text-[10px] text-gray-500">Boys &amp; Girls • Weekly Training</p>
                </a>

                <a href="#" className="group block relative cursor-pointer">
                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3">
                        <Image
                          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"
                          width={800}
                          height={600}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          alt="Orchestra and choir performance"
                        />
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-black text-[10px] font-bold px-2 py-1 rounded">Arts</div>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#9e1b66] transition-colors">Orchestra &amp; Choir</h3>
                    <p className="text-[10px] text-gray-500">Performance • Annual Concerts</p>
                </a>

                <a href="#" className="group block relative cursor-pointer">
                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3">
                        <Image
                          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"
                          width={800}
                          height={600}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          alt="Robotics and coding club"
                        />
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-black text-[10px] font-bold px-2 py-1 rounded">Club</div>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#9e1b66] transition-colors">Robotics &amp; Coding</h3>
                    <p className="text-[10px] text-gray-500">STEM • Competitions</p>
                </a>

                <a href="#" className="group block relative cursor-pointer">
                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3">
                        <Image
                          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"
                          width={800}
                          height={600}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          alt="Futsal activity"
                        />
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-black text-[10px] font-bold px-2 py-1 rounded">Sports</div>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#9e1b66] transition-colors">Futsal</h3>
                    <p className="text-[10px] text-gray-500">Intramural • Teamwork</p>
                </a>
            </div>
        </div>

        <div className="bg-gray-900 text-white relative overflow-hidden py-20">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#9e1b66] rounded-full blur-[120px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
             
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                 <div className="grid md:grid-cols-2 gap-16 items-center">
                     <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 w-fit mb-6">
                            <Heart className="w-3 h-3 text-[#FFC627]" />
                            <span className="text-[10px] uppercase tracking-wider font-medium text-white/90">Wellbeing First</span>
                        </div>
                        <h2 className="text-3xl font-semibold tracking-tight mb-6">Student Support &amp; Wellbeing</h2>
                        <p className="text-gray-300 text-sm leading-relaxed mb-8">
                            We believe that a happy, supported student is a successful learner. Our holistic approach ensures every child feels safe, heard, and valued.
                        </p>
                        
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                    <MessageCircleHeart className="w-5 h-5 text-[#FFC627]" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white text-sm">Pastoral Care</h4>
                                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">Dedicated homeroom teachers and chaplains provide spiritual guidance and emotional support.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                    <BookOpenCheck className="w-5 h-5 text-[#FFC627]" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white text-sm">Academic Counseling</h4>
                                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">Personalized guidance for subject selection, university pathways, and study skills.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                    <Users className="w-5 h-5 text-[#FFC627]" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-white text-sm">Peer Support Program</h4>
                                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">Senior students mentor juniors, fostering a culture of brotherhood and sisterhood.</p>
                                </div>
                            </div>
                        </div>
                     </div>
                     
                     <div className="relative">
                         <div className="grid grid-cols-2 gap-4">
                             <Image
                               src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"
                               width={800}
                               height={600}
                               className="rounded-xl w-full h-64 object-cover object-center translate-y-8"
                               alt="Students in community"
                             />
                             <Image
                               src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"
                               width={800}
                               height={600}
                               className="rounded-xl w-full h-64 object-cover object-center -translate-y-8"
                               alt="Students activities"
                             />
                         </div>
                     </div>
                 </div>
             </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-8">Events &amp; Experiences</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
                <article className="flex gap-4 group cursor-pointer">
                    <div className="w-20 shrink-0 text-center">
                        <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wide">Oct</span>
                        <span className="block text-2xl font-bold text-gray-900">12</span>
                    </div>
                    <div className="border-l border-gray-200 pl-6 group-hover:border-[#9e1b66] transition-colors">
                        <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-[#9e1b66]">Basic Cup</h3>
                        <p className="text-xs text-gray-500 line-clamp-2 mb-2">Our annual inter-school sports and arts competition. A week of high energy, teamwork, and healthy rivalry.</p>
                        <span className="inline-flex items-center text-[10px] font-medium text-gray-900 uppercase tracking-wide">
                          Learn More <ArrowRight className="w-3 h-3 ml-1" />
                        </span>
                    </div>
                </article>

                <article className="flex gap-4 group cursor-pointer">
                    <div className="w-20 shrink-0 text-center">
                        <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wide">Dec</span>
                        <span className="block text-2xl font-bold text-gray-900">15</span>
                    </div>
                    <div className="border-l border-gray-200 pl-6 group-hover:border-[#9e1b66] transition-colors">
                        <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-[#9e1b66]">Christmas Concert</h3>
                        <p className="text-xs text-gray-500 line-clamp-2 mb-2">A magical evening where our choir, orchestra, and drama clubs celebrate the birth of Jesus.</p>
                        <span className="inline-flex items-center text-[10px] font-medium text-gray-900 uppercase tracking-wide">
                          Learn More <ArrowRight className="w-3 h-3 ml-1" />
                        </span>
                    </div>
                </article>

                <article className="flex gap-4 group cursor-pointer">
                    <div className="w-20 shrink-0 text-center">
                        <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wide">Feb</span>
                        <span className="block text-2xl font-bold text-gray-900">04</span>
                    </div>
                    <div className="border-l border-gray-200 pl-6 group-hover:border-[#9e1b66] transition-colors">
                        <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-[#9e1b66]">Leadership Camp</h3>
                        <p className="text-xs text-gray-500 line-clamp-2 mb-2">A 3-day retreat for Student Council members focusing on servant leadership and team dynamics.</p>
                        <span className="inline-flex items-center text-[10px] font-medium text-gray-900 uppercase tracking-wide">
                          Learn More <ArrowRight className="w-3 h-3 ml-1" />
                        </span>
                    </div>
                </article>
            </div>
        </div>

        <div className="bg-gray-50 border-t border-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Student Voice</h2>
                    <p className="text-sm text-gray-500 mt-2">Hear directly from those who know BASIC best.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative">
                        <Quote className="w-8 h-8 text-gray-100 absolute top-4 right-4" />
                        <p className="text-sm text-gray-600 leading-relaxed italic mb-6">"The teachers here don't just teach subjects; they teach life. I've learned that leadership isn't about power, but about how much you can help others grow."</p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                                <Image
                                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"
                                  width={200}
                                  height={200}
                                  className="w-full h-full object-cover"
                                  alt="Portrait of Sarah Jenkins"
                                />
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-gray-900">Sarah Jenkins</h4>
                                <p className="text-[10px] text-gray-500">Grade 12, Student Council President</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative">
                        <Quote className="w-8 h-8 text-gray-100 absolute top-4 right-4" />
                        <p className="text-sm text-gray-600 leading-relaxed italic mb-6">"Moving to a new school was scary, but the Peer Support program made me feel welcome instantly. I found my passion for music here."</p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                                <Image
                                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"
                                  width={200}
                                  height={200}
                                  className="w-full h-full object-cover"
                                  alt="Portrait of Michael Tan"
                                />
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-gray-900">Michael Tan</h4>
                                <p className="text-[10px] text-gray-500">Grade 10, Orchestra Member</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative">
                        <Quote className="w-8 h-8 text-gray-100 absolute top-4 right-4" />
                        <p className="text-sm text-gray-600 leading-relaxed italic mb-6">"The daily devotions help me start my day with the right mindset. It's a challenging academic environment, but one that cares for your soul too."</p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                                <Image
                                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&amp;w=200&amp;auto=format&amp;fit=crop"
                                  width={200}
                                  height={200}
                                  className="w-full h-full object-cover"
                                  alt="Portrait of Jessica Lee"
                                />
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-gray-900">Jessica Lee</h4>
                                <p className="text-[10px] text-gray-500">Alumni, Class of 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 mt-12">
            <div className="bg-white p-6 rounded-lg border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                    <h3 className="font-medium text-gray-900">Provide your feedback</h3>
                    <p className="text-sm text-gray-500 mt-1">Was this page helpful?</p>
                </div>
                <div className="flex gap-3">
                    <button className="bg-[#9e1b66] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#801650]">Yes</button>
                    <button className="bg-[#9e1b66] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#801650]">No</button>
                </div>
            </div>
        </div> */}
      </>
    );
  }
  