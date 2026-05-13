import { getUpcomingEvents } from "@/lib/api/events";
import { getGalleries } from "@/lib/api/galleries";
import { UpcomingEvents } from "@/components/events/UpcomingEvents";
import Link from "next/link";
import Image from "next/image";
import { 
  ChevronRight, 
  HeartHandshake, 
  BrainCircuit, 
  Users, 
  Globe2, 
  ArrowRight, 
  Clock, 
  School,
  MapPin,
  Phone
} from "lucide-react";
import { Galleries } from "@/components/galleries/Galleries";
import Feedback from "@/components/Feedback";
import BannerCTA from "@/components/BannerCTA";

export default async function Home() {

  const events = await getUpcomingEvents();

  const galleries = await getGalleries(3);

  return (
    <>
        {/* Hero Section */}
        <div className="bg-linear-to-r from-[#9e1b66] to-[#2c1b4e] text-white relative overflow-hidden scroll-mt-50">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-50"></div>
          {/* Decorative curve bottom right */}
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 min-h-[550px]">
            
            {/* Hero Content */}
            <div className="px-4 sm:px-6 lg:px-8 pt-10 pb-16 flex flex-col justify-center relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit mb-6">
                <span className="w-2 h-2 rounded-full bg-[#FFC627]"></span>
                <span className="text-[10px] uppercase tracking-wider font-medium text-white/80">Open For Admissions</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-6 text-white">
                <span className="text-[#FFC627]">Christ centered</span>, Shaping Minds, and Building Character.
              </h1>
              <p className="text-lg md:text-xl font-light text-white/90 mb-8 max-w-lg leading-relaxed">
                We focus on strong foundations, clear values, and real understanding helping students develop skills, character, and confidence.
              </p>
              <div className="flex gap-2">
                <a href="#" className="inline-flex items-center gap-2 bg-[#FFC627] text-black px-6 py-3 rounded-full font-medium text-sm hover:bg-[#ffcf4d] transition-colors">
                  Enroll now <ChevronRight className="w-4 h-4" />
                </a>
                <a href="#our-school" className="text-white border border-white/20 rounded-full font-medium text-sm hover:bg-white/10 transition-colors inline-flex items-center gap-2 px-6 py-3 ">
                  See Our Schools <School className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-64 md:h-full w-full">
              <div className="absolute inset-0 bg-linear-to-t md:bg-linear-to-l from-transparent via-transparent to-[#9e1b66]/20 z-10"></div>
              <img src="/hero.JPG" alt="Winners Group" className="w-full h-full object-cover object-center clip-path-slant" />
              
              {/* Carousel Controls */}
              {/* <div className="absolute bottom-4 right-4 md:right-8 z-20 flex items-center gap-3 bg-black/30 backdrop-blur-md rounded-full px-4 py-2">
                <button className="text-white hover:text-[#FFC627]"><i data-lucide="chevron-left" className="w-5 h-5"></i></button>
                <div className="flex gap-2">
                     <div className="w-2 h-2 rounded-full bg-white"></div>
                     <div className="w-2 h-2 rounded-full bg-white/40"></div>
                     <div className="w-2 h-2 rounded-full bg-[#FFC627]"></div>
                     <div className="w-2 h-2 rounded-full bg-white/40"></div>
                </div>
                <button className="text-white hover:text-[#FFC627]"><i data-lucide="chevron-right" className="w-5 h-5"></i></button>
              </div> */}
            </div>
          </div>
        </div>

        {/* 4 PILLARS SECTION */}
        <div className="relative z-20 mt-10 lg:-mt-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            
            {/* Pillar 1: Spiritual */}
            <div className="group bg-white rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-4px_rgba(0,0,0,0.1)] border border-gray-100 transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight mb-2">Spiritual</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Rooted in Christ, we nurture faith and integrity, guiding students to grow in wisdom and moral character.
              </p>
            </div>

            {/* Pillar 2: Psychology */}
            <div className="group bg-white rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-4px_rgba(0,0,0,0.1)] border border-gray-100 transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-purple-50 text-[#9e1b66] group-hover:bg-[#9e1b66] group-hover:text-white transition-colors duration-300">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight mb-2">Psychology</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Fostering mental resilience and emotional intelligence to help students understand themselves and navigate life.
              </p>
            </div>

            {/* Pillar 3: Social */}
            <div className="group bg-white rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-4px_rgba(0,0,0,0.1)] border border-gray-100 transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight mb-2">Social</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Building a supportive community where empathy, collaboration, and healthy relationships flourish.
              </p>
            </div>

            {/* Pillar 4: Cultural */}
            <div className="group bg-white rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-4px_rgba(0,0,0,0.1)] border border-gray-100 transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 tracking-tight mb-2">Cultural</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Celebrating diversity and creativity, empowering students to engage responsibly with the world around them.
              </p>
            </div>

          </div>
        </div>
        {/* END PILLARS SECTION */}

        {/* Layout Grid for Content */} 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16"> 
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-12"> 
            
            {/* Main Content Column (Left ~66%) */} 
            <div className="lg:col-span-8 flex flex-col gap-16"> 
              
              {/* Latest Events Gallery */} 
              <Galleries galleries={galleries} />
              
              {/* News Section */} 
              {/* <section> 
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-semibold tracking-tight text-gray-900">Academic News</h2> 
                  <Link href="/news" className="text-xs font-medium text-[#9e1b66] hover:underline flex items-center gap-1">
                    View all news <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
                <div className="grid md:grid-cols-3 gap-6"> 
                  
                  <article className="flex flex-col h-full group cursor-pointer"> 
                    <div className="h-40 overflow-hidden rounded-lg bg-gray-200 mb-4 relative"> 
                      <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop" alt="Gifted" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" /> 
                    </div> 
                    <div className="flex flex-col grow"> 
                      <div className="flex items-center gap-2 mb-2 text-[10px] uppercase tracking-wide font-medium text-gray-400">
                        <span>Academics</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                        <span>2 days ago</span>
                      </div>
                      <h3 className="text-base font-semibold text-gray-900 leading-snug mb-2 group-hover:text-[#9e1b66] transition-colors">Gifted and Talented Program Expansion</h3> 
                      <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-3">Secondary Selective Entrance programs extend and enrich learning and let creative talents flourish.</p> 
                      <div className="mt-auto"> 
                        <span className="text-xs font-medium text-gray-900 flex items-center group-hover:underline decoration-1 underline-offset-2">Read article</span> 
                      </div> 
                    </div> 
                  </article> 
                  
                  <article className="flex flex-col h-full group cursor-pointer"> 
                    <div className="h-40 overflow-hidden rounded-lg bg-gray-200 mb-4 relative"> 
                      <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop" alt="Assistance" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" /> 
                    </div> 
                    <div className="flex flex-col grow"> 
                      <div className="flex items-center gap-2 mb-2 text-[10px] uppercase tracking-wide font-medium text-gray-400">
                        <span>Finance</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                        <span>1 week ago</span>
                      </div>
                      <h3 className="text-base font-semibold text-gray-900 leading-snug mb-2 group-hover:text-[#9e1b66] transition-colors">Secondary Assistance Scheme 2026</h3> 
                      <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-3">Low-income families can get financial assistance with secondary school costs by applying now.</p> 
                      <div className="mt-auto"> 
                        <span className="text-xs font-medium text-gray-900 flex items-center group-hover:underline decoration-1 underline-offset-2">Read article</span> 
                      </div> 
                    </div> 
                  </article> 

                  <article className="flex flex-col h-full group cursor-pointer"> 
                    <div className="h-40 overflow-hidden rounded-lg bg-gray-200 mb-4 relative"> 
                      <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop" alt="Podcast" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" /> 
                    </div> 
                    <div className="flex flex-col grow"> 
                      <div className="flex items-center gap-2 mb-2 text-[10px] uppercase tracking-wide font-medium text-gray-400">
                        <span>Media</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                        <span>2 weeks ago</span>
                      </div>
                      <h3 className="text-base font-semibold text-gray-900 leading-snug mb-2 group-hover:text-[#9e1b66] transition-colors">New Podcast: "Faith in Education"</h3> 
                      <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-3">Join us for a new series featuring inspiring stories from our alumni and teachers.</p> 
                      <div className="mt-auto"> 
                        <span className="text-xs font-medium text-gray-900 flex items-center group-hover:underline decoration-1 underline-offset-2">Read article</span> 
                      </div> 
                    </div> 
                  </article> 
                </div> 
              </section> */}
            </div> 
            
            {/* Sidebar Column (Right ~33%) */} 
            <div className="lg:col-span-4 flex flex-col gap-12"> 
              
              <UpcomingEvents events={events} />
              
              {/* Quick Stats / Featured Jobs */} 
              {/* <section> 
                <h2 className="text-lg font-semibold tracking-tight text-gray-900 mb-6"> Careers </h2> 
                <div className="space-y-3"> 
                  <a href="#" className="block bg-white border border-gray-200 p-4 rounded-lg hover:border-[#9e1b66] transition-colors group"> 
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-medium text-gray-900 text-sm group-hover:text-[#9e1b66]">Primary Teacher</h3> 
                      <span className="bg-gray-100 text-gray-600 text-[10px] px-1.5 py-0.5 rounded">Closed</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-2">SD Basic 2</p> 
                  </a> 
                  <a href="#" className="block bg-white border border-gray-200 p-4 rounded-lg hover:border-[#9e1b66] transition-colors group"> 
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-medium text-gray-900 text-sm group-hover:text-[#9e1b66]">IT Support Specialist</h3> 
                      <span className="bg-gray-100 text-gray-600 text-[10px] px-1.5 py-0.5 rounded">Closed</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-2">Central Office</p> 
                  </a> 
                </div> 
                <button className="w-full mt-4 py-2 text-xs font-medium text-gray-500 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">View Available Position</button>
              </section>  */}
            </div> 
          </div> 
        </div> 

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 scroll-mt-50 lg:scroll-mt-40" id="our-school">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Our Schools</h2>
                <span className="text-xs text-gray-500 hidden sm:inline-block">Two locations, one vision.</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <a href="#" className="group block h-full">
                    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden h-full hover:shadow-[0_20px_40px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300">
                        <div className="relative h-64 overflow-hidden">
                            <Image
                              src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&amp;w=800&amp;auto=format&amp;fit=crop"
                              alt="Basic Batam Center"
                              width={800}
                              height={500}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4">
                                {/* <span className="bg-[#9e1b66] text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider mb-2 inline-block">Batam Kota</span> */}
                                <div className="flex gap-2 mt-1">
                                    <span className="text-white/90 text-xs bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10">TK</span>
                                    <span className="text-white/90 text-xs bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10">SD</span>
                                    <span className="text-white/90 text-xs bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10">SMP</span>
                                    <span className="text-white/90 text-xs bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10">SMA</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#9e1b66] transition-colors">Basic Batam Center</h3>
                                <div className="bg-gray-100 p-2 rounded-full text-gray-400 group-hover:bg-[#9e1b66] group-hover:text-white transition-colors">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 mb-4 line-clamp-2">
                                Located in the heart of Batam Center, our main school offers a complete educational journey from Kindergarten to High School with state-of-the-art facilities.
                            </p>
                            <div className="flex flex-col gap-2 text-xs text-gray-600 border-t border-gray-50 pt-4">
                                <div className="flex items-start gap-2">
                                    <MapPin className="w-4 h-4" />
                                    <span>Jalan laksamana Kawasan Industri No.1</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4" />
                                    <span>(0778) 460-777</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>

                <a href="#" className="group block h-full">
                    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden h-full hover:shadow-[0_20px_40px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300">
                        <div className="relative h-64 overflow-hidden">
                          <Image
                              src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&amp;w=800&amp;auto=format&amp;fit=crop"
                              alt="Basic Batam Center"
                              width={800}
                              height={500}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4">
                                {/* <span className="bg-[#2c1b4e] text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider mb-2 inline-block">Batu Aji</span> */}
                                <div className="flex gap-2 mt-1">
                                    <span className="text-white/90 text-xs bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10">TK</span>
                                    <span className="text-white/90 text-xs bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10">SD</span>
                                    <span className="text-white/90 text-xs bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10">SMP</span>
                                    <span className="text-white/90 text-xs bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10">SMA</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#9e1b66] transition-colors">Basic Batu Aji</h3>
                                <div className="bg-gray-100 p-2 rounded-full text-gray-400 group-hover:bg-[#9e1b66] group-hover:text-white transition-colors">
                                  <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 mb-4 line-clamp-2">
                                serving the Batu Aji community with a focus on early childhood and primary education, providing a warm and nurturing environment.
                            </p>
                            <div className="flex flex-col gap-2 text-xs text-gray-600 border-t border-gray-50 pt-4">
                                <div className="flex items-start gap-2">
                                    <MapPin className="w-4 h-4" />
                                    <span>Perumahan Marsyeba Indah, Bukit Tempayan</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4" />
                                    <span>(0778) 364-888</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>

            </div>
        </div>

        {/* CTA / Banner */}
        <BannerCTA />

        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">Event & Performance</h2>
          <video src="DJI_20241012184423_0117_D.MP4" controls></video>
        </div> */}

        {/* Quick Links Icons */}
        {/* <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 divide-x divide-gray-100 border-x border-gray-100">
              
              <a href="#" className="group flex flex-col items-center justify-center py-8 px-2 hover:bg-gray-50 transition-colors text-center">
                 <img src="undraw_continuous-learning_a1ld.svg" className="size-20">
                <span className="text-sm font-semibold text-gray-900 flex items-center gap-1">English Club <i data-lucide="chevron-right" className="w-3 h-3 text-gray-400"></i></span>
              </a>
              
              <a href="#" className="group flex flex-col items-center justify-center py-8 px-2 hover:bg-gray-50 transition-colors text-center">
                 <img src="undraw_mathematics_hc2c.svg" className="size-20">
                <span className="text-sm font-semibold text-gray-900 flex items-center gap-1">Maths Club <i data-lucide="chevron-right" className="w-3 h-3 text-gray-400"></i></span>
              </a>

              <a href="#" className="group flex flex-col items-center justify-center py-8 px-2 hover:bg-gray-50 transition-colors text-center">
                 <img src="undraw_music_3vas.svg" className="size-20">
                <span className="text-sm font-semibold text-gray-900 flex items-center gap-1">Music Club <i data-lucide="chevron-right" className="w-3 h-3 text-gray-400"></i></span>
              </a>

              <a href="#" className="group flex flex-col items-center justify-center py-8 px-2 hover:bg-gray-50 transition-colors text-center">
                <img src="undraw_athletes-training_koqa.svg" className="size-20">
                <span className="text-sm font-semibold text-gray-900 flex items-center gap-1">Taekwondo <i data-lucide="chevron-right" className="w-3 h-3 text-gray-400"></i></span>
              </a>

              <a href="#" className="group flex flex-col items-center justify-center py-8 px-2 hover:bg-gray-50 transition-colors text-center">
                 <img src="undraw_goal_rulh.svg" className="size-20">
                <span className="text-sm font-semibold text-gray-900 flex items-center gap-1">Futsal <i data-lucide="chevron-right" className="w-3 h-3 text-gray-400"></i></span>
              </a>

              <a href="#" className="group flex flex-col items-center justify-center py-8 px-2 hover:bg-gray-50 transition-colors text-center">
                 <img src="undraw_greek-freak_p532.svg" className="size-20">
                <span className="text-sm font-semibold text-gray-900 flex items-center gap-1">Basket <i data-lucide="chevron-right" className="w-3 h-3 text-gray-400"></i></span>
              </a>

              <a href="#" className="group flex flex-col items-center justify-center py-8 px-2 hover:bg-gray-50 transition-colors text-center">
                <img src="undraw_workout_wqgp.svg" className="size-20">
                <span className="text-sm font-semibold text-gray-900 flex items-center gap-1">Dance <i data-lucide="chevron-right" className="w-3 h-3 text-gray-400"></i></span>
              </a>

              <a href="#" className="group flex flex-col items-center justify-center py-8 px-2 hover:bg-gray-50 transition-colors text-center">
                <img src="undraw_grand-slam_xvhp (1).svg" className="size-20">
                <span className="text-sm font-semibold text-gray-900 flex items-center gap-1">Table Tennis <i data-lucide="chevron-right" className="w-3 h-3 text-gray-400"></i></span>
              </a>

              <a href="#" className="group flex flex-col items-center justify-center py-8 px-2 hover:bg-gray-50 transition-colors text-center">
                <img src="undraw_in-the-pool_m83v.svg" className="size-20">
                <span className="text-sm font-semibold text-gray-900 flex items-center gap-1">Swimming Club <i data-lucide="chevron-right" className="w-3 h-3 text-gray-400"></i></span>
              </a>
            </div>
          </div>
        </div> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Acknowledgement */}
          <div className="mb-12">
            <h3 className="font-bold text-gray-900 mb-3">We acknowledge God as the Creator of all things and the One who has entrusted this land to us.</h3>
            <p className="text-sm text-gray-600 leading-relaxed w-full">
              We respect the history, cultures, and communities that have shaped the place where we learn and serve today. We honor those who came before us, whose dedication and perseverance have contributed to the growth of education and community life.
              As a Christian school, we are committed to nurturing students to love God, respect others, and live responsibly within their cultural and social context. We value diversity, encourage mutual understanding, and strive to build a learning environment grounded in truth, compassion, and integrity.
            </p>
          </div>
        </div>
    </>
  );
}
