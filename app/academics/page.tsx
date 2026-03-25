import BreadcrumbHero from "@/components/BreadcrumbHero";
import {
  BrainCircuit,
  BookOpenCheck,
  Sprout,
  Download,
  CheckCircle2,
  Calculator,
  FlaskConical,
  Languages,
  Globe,
  Code2,
  Palette,
  LifeBuoy,
  Users2,
  Laptop,
  MessageSquare,
  Compass,
  BarChart3,
  UserCheck,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

export default function Academics() {
    return (
      <>
        <BreadcrumbHero
          title={
            <>
              Cultivating Wisdom,<br />
              <span className="text-[#FFC627]">
                Inspiring Minds.
              </span>
            </>
          }
          description="Our academic framework goes beyond information retention. We focus on critical inquiry and biblical integration to develop life-long learners."
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">Academic Philosophy</h2>
                <p className="text-sm text-gray-500 leading-relaxed">
                    At BASIC, we believe education is not merely filling a bucket, but lighting a fire. We emphasize the <span className="text-gray-900 font-medium">process of learning</span>—teaching students how to think critically and biblically—rather than just memorizing facts.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                        <BrainCircuit className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 mb-2">Inquiry-Based Learning</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                        We encourage students to ask "Why?" and "How?". By formulating their own questions, students become active participants in their education rather than passive consumers.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="h-10 w-10 rounded-lg bg-orange-50 text-[#DE5127] flex items-center justify-center mb-4">
                        <BookOpenCheck className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 mb-2">Biblical Worldview</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                        Every subject is taught through the lens of Scripture. We integrate faith with learning, helping students see God's truth in mathematics, science, history, and the arts.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="h-10 w-10 rounded-lg bg-emerald-50 text-[#3AA549] flex items-center justify-center mb-4">
                        <Sprout className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 mb-2">Growth Mindset</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                        We value effort and resilience over inherent ability. Students are taught that challenges are opportunities to grow, fostering a culture of perseverance.
                    </p>
                </div>
            </div>
        </div>

        <div className="bg-gray-50 py-16 border-y border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                    <div>
                        <h2 className="text-xl font-semibold tracking-tight text-gray-900">Learning Stages</h2>
                        <p className="text-xs text-gray-500 mt-2 max-w-lg">A comprehensive educational journey from early childhood to university preparation, following the National Curriculum enriched with global best practices.</p>
                    </div>
                    <a href="#" className="text-xs font-medium text-[#9e1b66] hover:underline flex items-center gap-1">Download Curriculum Guide <Download className="w-3 h-3" /></a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="group relative bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#DE5127] transition-all duration-300">
                        <div className="h-1 w-full bg-[#DE5127]"></div>
                        <div className="p-6">
                            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-[#DE5127]/10 text-[#DE5127] mb-4">TK BASIC</span>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Early Years</h3>
                            <p className="text-xs text-gray-500 mb-4 line-clamp-3">Focus on play-based learning, sensory development, and foundational social skills in a loving, Christ-centered environment.</p>
                            <ul className="text-[10px] text-gray-500 space-y-2 mb-4">
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-[#DE5127]" /> Character Building</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-[#DE5127]" /> Basic Phonics &amp; Math</li>
                            </ul>
                            <a href="#" className="text-[10px] font-medium text-gray-900 flex items-center group-hover:gap-2 transition-all">Learn more <ArrowRight className="w-3 h-3 ml-1" /></a>
                        </div>
                    </div>

                    <div className="group relative bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#3AA549] transition-all duration-300">
                        <div className="h-1 w-full bg-[#3AA549]"></div>
                        <div className="p-6">
                            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-[#3AA549]/10 text-[#3AA549] mb-4">SD BASIC</span>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Primary School</h3>
                            <p className="text-xs text-gray-500 mb-4 line-clamp-3">Building strong literacy and numeracy skills while fostering curiosity. Students begin structured inquiry into science and humanities.</p>
                            <ul className="text-[10px] text-gray-500 space-y-2 mb-4">
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-[#3AA549]" /> Bilingual Approach</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-[#3AA549]" /> Project Based Learning</li>
                            </ul>
                            <a href="#" className="text-[10px] font-medium text-gray-900 flex items-center group-hover:gap-2 transition-all">Learn more <ArrowRight className="w-3 h-3 ml-1" /></a>
                        </div>
                    </div>

                    <div className="group relative bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#0185C3] transition-all duration-300">
                        <div className="h-1 w-full bg-[#0185C3]"></div>
                        <div className="p-6">
                            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-[#0185C3]/10 text-[#0185C3] mb-4">SMP BASIC</span>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Junior High</h3>
                            <p className="text-xs text-gray-500 mb-4 line-clamp-3">Navigating adolescence with guidance. Emphasis shifts to abstract thinking, independence, and exploring specialized interests.</p>
                            <ul className="text-[10px] text-gray-500 space-y-2 mb-4">
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-[#0185C3]" /> Leadership Training</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-[#0185C3]" /> Science &amp; Tech focus</li>
                            </ul>
                            <a href="#" className="text-[10px] font-medium text-gray-900 flex items-center group-hover:gap-2 transition-all">Learn more <ArrowRight className="w-3 h-3 ml-1" /></a>
                        </div>
                    </div>

                    <div className="group relative bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#A82C51] transition-all duration-300">
                        <div className="h-1 w-full bg-[#A82C51]"></div>
                        <div className="p-6">
                            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-[#A82C51]/10 text-[#A82C51] mb-4">SMA BASIC</span>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Senior High</h3>
                            <p className="text-xs text-gray-500 mb-4 line-clamp-3">Preparation for university and life calling. Rigorous academics combined with deep worldview formation and career counseling.</p>
                            <ul className="text-[10px] text-gray-500 space-y-2 mb-4">
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-[#A82C51]" /> University Prep</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-[#A82C51]" /> Research Projects</li>
                            </ul>
                            <a href="#" className="text-[10px] font-medium text-gray-900 flex items-center group-hover:gap-2 transition-all">Learn more <ArrowRight className="w-3 h-3 ml-1" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                <div className="lg:col-span-4">
                    <h2 className="text-lg font-semibold tracking-tight text-gray-900 mb-6">Core Subjects</h2>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-gray-300 transition-colors">
                            <Calculator className="w-5 h-5 text-blue-600 mb-2" />
                            <span className="text-xs font-medium text-gray-700">Mathematics</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-gray-300 transition-colors">
                            <FlaskConical className="w-5 h-5 text-purple-600 mb-2" />
                            <span className="text-xs font-medium text-gray-700">Science</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-gray-300 transition-colors">
                            <Languages className="w-5 h-5 text-orange-600 mb-2" />
                            <span className="text-xs font-medium text-gray-700">Languages</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-gray-300 transition-colors">
                            <Globe className="w-5 h-5 text-green-600 mb-2" />
                            <span className="text-xs font-medium text-gray-700">Humanities</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-gray-300 transition-colors">
                            <Code2 className="w-5 h-5 text-gray-800 mb-2" />
                            <span className="text-xs font-medium text-gray-700">ICT / Coding</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-gray-300 transition-colors">
                            <Palette className="w-5 h-5 text-pink-600 mb-2" />
                            <span className="text-xs font-medium text-gray-700">Arts &amp; Design</span>
                        </div>
                    </div>
                    
                    <div className="mt-8 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                        <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <LifeBuoy className="w-4 h-4 text-[#9e1b66]" /> Academic Support
                        </h3>
                        <p className="text-xs text-gray-500 mb-4">We ensure no student is left behind through personalized support systems.</p>
                        <ul className="space-y-2 text-xs text-gray-600">
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5"></span>
                                Remedial programs for core subjects
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5"></span>
                                Enrichment for gifted learners
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5"></span>
                                After-school tutoring clinic
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="lg:col-span-8 flex flex-col gap-10">
                    
                    <section>
                        <h2 className="text-lg font-semibold tracking-tight text-gray-900 mb-6">Teaching &amp; Learning Approach</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white border border-gray-200 p-5 rounded-lg">
                                <div className="mb-3 text-[#9e1b66]"><Users2 className="w-5 h-5" /></div>
                                <h3 className="text-sm font-semibold text-gray-900 mb-2">Student-Centric</h3>
                                <p className="text-xs text-gray-500 leading-relaxed">Teachers act as facilitators. We use varied instructional strategies to cater to different learning styles (visual, auditory, kinesthetic).</p>
                            </div>
                            <div className="bg-white border border-gray-200 p-5 rounded-lg">
                                <div className="mb-3 text-[#9e1b66]"><Laptop className="w-5 h-5" /></div>
                                <h3 className="text-sm font-semibold text-gray-900 mb-2">Technology Integrated</h3>
                                <p className="text-xs text-gray-500 leading-relaxed">Smart classrooms and digital resources are used responsibly to enhance research skills and digital literacy.</p>
                            </div>
                            <div className="bg-white border border-gray-200 p-5 rounded-lg">
                                <div className="mb-3 text-[#9e1b66]"><MessageSquare className="w-5 h-5" /></div>
                                <h3 className="text-sm font-semibold text-gray-900 mb-2">Collaborative</h3>
                                <p className="text-xs text-gray-500 leading-relaxed">Group projects and debates teach communication, negotiation, and teamwork—essential soft skills for the future.</p>
                            </div>
                            <div className="bg-white border border-gray-200 p-5 rounded-lg">
                                <div className="mb-3 text-[#9e1b66]"><Compass className="w-5 h-5" /></div>
                                <h3 className="text-sm font-semibold text-gray-900 mb-2">Holistic</h3>
                                <p className="text-xs text-gray-500 leading-relaxed">We connect academic concepts to real-world problems and ethical dilemmas, fostering a sense of responsibility.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold tracking-tight text-gray-900 mb-6">Assessment &amp; Progress Tracking</h2>
                        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="flex-1">
                                    <h3 className="text-sm font-semibold text-gray-900 mb-3">Comprehensive Evaluation</h3>
                                    <p className="text-xs text-gray-500 leading-relaxed mb-4">
                                        We move beyond simple standardized testing. Our assessment framework tracks the whole child, including character development and effort.
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between text-xs border-b border-gray-200 pb-2">
                                            <span className="text-gray-600">Formative Assessment</span>
                                            <span className="font-medium text-gray-900">Ongoing (Quizzes, Observation)</span>
                                        </div>
                                        <div className="flex items-center justify-between text-xs border-b border-gray-200 pb-2">
                                            <span className="text-gray-600">Summative Assessment</span>
                                            <span className="font-medium text-gray-900">End of Term Projects/Exams</span>
                                        </div>
                                        <div className="flex items-center justify-between text-xs border-b border-gray-200 pb-2">
                                            <span className="text-gray-600">Reporting</span>
                                            <span className="font-medium text-gray-900">Quarterly Holistic Report Card</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:w-1/3 flex flex-col justify-center gap-3">
                                    <div className="bg-white p-3 rounded shadow-sm border border-gray-100 flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                                            <BarChart3 className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-400 uppercase tracking-wide">Avg. Growth</p>
                                            <p className="text-sm font-semibold text-gray-900">Consistent</p>
                                        </div>
                                    </div>
                                    <div className="bg-white p-3 rounded shadow-sm border border-gray-100 flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                                            <UserCheck className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-400 uppercase tracking-wide">Parent Portal</p>
                                            <p className="text-sm font-semibold text-gray-900">Real-time Access</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <div className="bg-[#2c1b4e] rounded-2xl overflow-hidden flex flex-col md:flex-row relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                
                        <div className="p-8 md:p-12 lg:w-3/5 flex flex-col justify-center z-10">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <span className="text-[#FFC627]"><HeartHandshake className="w-5 h-5" /></span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-white/60">Faith &amp; Action</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight">Intelligence plus character—that is the goal of true education.</h2>
                    <p className="text-white/80 text-sm md:text-base font-light leading-relaxed mb-8 max-w-lg">
                        Our academic program is inseparable from character formation. We strive to produce graduates who are not only smart but also compassionate, honest, and ready to serve society.
                    </p>
                    <div className="flex gap-4">
                        <button className="bg-[#FFC627] text-black px-5 py-2.5 rounded-full font-medium text-sm hover:bg-[#ffcf4d] transition-colors">
                            Apply for 2026
                        </button>
                        <button className="text-white border border-white/20 px-5 py-2.5 rounded-full font-medium text-sm hover:bg-white/10 transition-colors">
                            View Student Handbook
                        </button>
                    </div>
                </div>
                <div className="lg:w-2/5 relative min-h-[250px]">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2c1b4e] to-transparent z-10"></div>
                    <img src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&amp;w=800&amp;auto=format&amp;fit=crop" className="absolute inset-0 w-full h-full object-cover" />
                </div>
            </div>
        </div> */}
      </>
    );
  }
  