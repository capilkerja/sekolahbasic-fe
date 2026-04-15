/**
 * OLD GALLERY PAGE DESIGN — saved for reference
 * ------------------------------------------------
 * Fitur-fitur yang ada di sini:
 *  - Filter tabs: All Photos / Academics / Community / Sports / Arts / Spiritual
 *  - Sort dropdown: Newest First / Oldest First / Popular
 *  - Featured Collections (horizontal scroll carousel)
 *  - Masonry photo grid (columns-1 md:2 lg:3) dengan hover overlay + Download/Share buttons
 *  - Load More button
 *  - Upload CTA banner di bawah
 *
 * Kalau mau pakai lagi, copy bagian yang dibutuhkan ke page.tsx
 */

import BreadcrumbHero from "@/components/BreadcrumbHero";
import Image from "next/image";
import {
  BookOpen,
  Users,
  Trophy,
  Music,
  Heart,
  Star,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  Calendar,
  Download,
  Share2,
  RefreshCw,
  UploadCloud,
} from "lucide-react";

export default function GalleryOldDesign() {
  return (
    <>
      <BreadcrumbHero
        title="Life at BASIC"
        description="Explore our vibrant community through the lens. From academic breakthroughs to spiritual growth and sports achievements, see how we shape minds and build character."
      />

      {/* ── STICKY FILTER BAR ── */}
      <div className="sticky top-[170px] lg:top-[140px] z-40 bg-white border-b border-gray-200 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex overflow-x-auto w-full md:w-auto gap-2 no-scrollbar pb-1 md:pb-0">
              <button className="px-4 py-1.5 rounded-full text-xs font-medium bg-gray-900 text-white shadow-sm transition-transform active:scale-95 whitespace-nowrap">
                All Photos
              </button>
              <button className="px-4 py-1.5 rounded-full text-xs font-medium bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-colors whitespace-nowrap">
                <BookOpen className="w-3 h-3 inline mr-1.5 -mt-0.5" />Academics
              </button>
              <button className="px-4 py-1.5 rounded-full text-xs font-medium bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-colors whitespace-nowrap">
                <Users className="w-3 h-3 inline mr-1.5 -mt-0.5" />Community
              </button>
              <button className="px-4 py-1.5 rounded-full text-xs font-medium bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-colors whitespace-nowrap">
                <Trophy className="w-3 h-3 inline mr-1.5 -mt-0.5" />Sports
              </button>
              <button className="px-4 py-1.5 rounded-full text-xs font-medium bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-colors whitespace-nowrap">
                <Music className="w-3 h-3 inline mr-1.5 -mt-0.5" />Arts
              </button>
              <button className="px-4 py-1.5 rounded-full text-xs font-medium bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-colors whitespace-nowrap">
                <Heart className="w-3 h-3 inline mr-1.5 -mt-0.5" />Spiritual
              </button>
            </div>

            <div className="flex items-center gap-3 border-l border-gray-200 pl-4 hidden md:flex">
              <span className="text-[10px] uppercase font-semibold text-gray-400 tracking-wide">Sort by</span>
              <select className="bg-transparent text-xs font-medium text-gray-700 border-none focus:ring-0 p-0 pr-6 cursor-pointer hover:text-[#9e1b66]">
                <option>Newest First</option>
                <option>Oldest First</option>
                <option>Popular</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* ── FEATURED COLLECTIONS (horizontal scroll) ── */}
      <section className="border-b border-gray-200 bg-gray-50/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-gray-900 tracking-tight flex items-center gap-2">
              <Star className="w-3.5 h-3.5 text-[#FFC627] fill-[#FFC627]" /> Featured Collections
            </h2>
            <div className="flex gap-2">
              <button className="p-1.5 rounded-md hover:bg-gray-200 text-gray-500 transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="p-1.5 rounded-md hover:bg-gray-200 text-gray-500 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar snap-x">
            <div className="min-w-[280px] w-[280px] snap-start group cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden rounded-lg bg-gray-200 relative mb-3">
                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded-full z-20 flex items-center gap-1">
                  <ImageIcon className="w-3 h-3" /> 24
                </div>
                <Image
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"
                  alt="Graduation class of 2025"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#9e1b66] transition-colors">Graduation Class of 2025</h3>
              <p className="text-xs text-gray-500 mt-0.5">June 15, 2025</p>
            </div>

            <div className="min-w-[280px] w-[280px] snap-start group cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden rounded-lg bg-gray-200 relative mb-3">
                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded-full z-20 flex items-center gap-1">
                  <ImageIcon className="w-3 h-3" /> 48
                </div>
                <Image
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop"
                  alt="Annual cultural festival"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#9e1b66] transition-colors">Annual Cultural Festival</h3>
              <p className="text-xs text-gray-500 mt-0.5">May 02, 2025</p>
            </div>

            <div className="min-w-[280px] w-[280px] snap-start group cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden rounded-lg bg-gray-200 relative mb-3">
                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded-full z-20 flex items-center gap-1">
                  <ImageIcon className="w-3 h-3" /> 12
                </div>
                <Image
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop"
                  alt="Science fair projects"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#9e1b66] transition-colors">Science Fair Projects</h3>
              <p className="text-xs text-gray-500 mt-0.5">April 10, 2025</p>
            </div>

            <div className="min-w-[280px] w-[280px] snap-start group cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden rounded-lg bg-gray-200 relative mb-3">
                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded-full z-20 flex items-center gap-1">
                  <ImageIcon className="w-3 h-3" /> 36
                </div>
                <Image
                  src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop"
                  alt="Inter-school sports day"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#9e1b66] transition-colors">Inter-School Sports Day</h3>
              <p className="text-xs text-gray-500 mt-0.5">March 22, 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MASONRY PHOTO GRID ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

          <div className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-zoom-in bg-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=800&auto=format&fit=crop"
              alt="Teacher helping student"
              width={800}
              height={600}
              className="w-full h-auto transition duration-500 group-hover:scale-105 filter grayscale-[10%] group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block bg-[#9e1b66] text-white text-[10px] font-bold px-2 py-0.5 rounded mb-2">Academics</span>
                <h3 className="text-white text-sm font-medium leading-tight">Personalized Mentoring</h3>
                <div className="flex items-center gap-2 mt-2 text-white/70 text-[10px]">
                  <Calendar className="w-3 h-3" /> Feb 12, 2025
                </div>
              </div>
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button className="bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white hover:text-[#9e1b66] transition-colors">
                  <Download className="w-4 h-4" />
                </button>
                <button className="bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white hover:text-[#9e1b66] transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-zoom-in bg-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop"
              alt="Classroom"
              width={800}
              height={600}
              className="w-full h-auto transition duration-500 group-hover:scale-105 filter grayscale-[10%] group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block bg-[#0185C3] text-white text-[10px] font-bold px-2 py-0.5 rounded mb-2">Science</span>
                <h3 className="text-white text-sm font-medium leading-tight">Chemistry Lab Session</h3>
              </div>
            </div>
          </div>

          <div className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-zoom-in bg-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1511949860663-92c5c57d48a7?q=80&w=800&auto=format&fit=crop"
              alt="Reading"
              width={800}
              height={600}
              className="w-full h-auto transition duration-500 group-hover:scale-105 filter grayscale-[10%] group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block bg-[#FFC627] text-black text-[10px] font-bold px-2 py-0.5 rounded mb-2">Student Life</span>
                <h3 className="text-white text-sm font-medium leading-tight">Library Quiet Time</h3>
              </div>
            </div>
          </div>

          <div className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-zoom-in bg-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1560252829-804f1aedf1be?q=80&w=800&auto=format&fit=crop"
              alt="Speech"
              width={800}
              height={600}
              className="w-full h-auto transition duration-500 group-hover:scale-105 filter grayscale-[10%] group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block bg-[#DE5127] text-white text-[10px] font-bold px-2 py-0.5 rounded mb-2">Events</span>
                <h3 className="text-white text-sm font-medium leading-tight">Morning Assembly</h3>
              </div>
            </div>
          </div>

          <div className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-zoom-in bg-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1526721940322-10fb6e3ae94a?q=80&w=800&auto=format&fit=crop"
              alt="Art"
              width={800}
              height={600}
              className="w-full h-auto transition duration-500 group-hover:scale-105 filter grayscale-[10%] group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block bg-[#A82C51] text-white text-[10px] font-bold px-2 py-0.5 rounded mb-2">Arts</span>
                <h3 className="text-white text-sm font-medium leading-tight">Creative Workshop</h3>
              </div>
            </div>
          </div>

          <div className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-zoom-in bg-gray-100">
            <Image
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"
              alt="Group"
              width={800}
              height={600}
              className="w-full h-auto transition duration-500 group-hover:scale-105 filter grayscale-[10%] group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block bg-[#3AA549] text-white text-[10px] font-bold px-2 py-0.5 rounded mb-2">Community</span>
                <h3 className="text-white text-sm font-medium leading-tight">Group Study</h3>
              </div>
            </div>
          </div>

          <div className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-zoom-in bg-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=800&auto=format&fit=crop"
              alt="Prayer"
              width={800}
              height={600}
              className="w-full h-auto transition duration-500 group-hover:scale-105 filter grayscale-[10%] group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block bg-[#9e1b66] text-white text-[10px] font-bold px-2 py-0.5 rounded mb-2">Spiritual</span>
                <h3 className="text-white text-sm font-medium leading-tight">Weekly Chapel Service</h3>
              </div>
            </div>
          </div>

          <div className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-zoom-in bg-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?q=80&w=800&auto=format&fit=crop"
              alt="Presentation"
              width={800}
              height={600}
              className="w-full h-auto transition duration-500 group-hover:scale-105 filter grayscale-[10%] group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block bg-[#0185C3] text-white text-[10px] font-bold px-2 py-0.5 rounded mb-2">Leadership</span>
                <h3 className="text-white text-sm font-medium leading-tight">Student Council Election</h3>
              </div>
            </div>
          </div>

        </div>

        {/* Load More */}
        <div className="mt-16 flex flex-col items-center">
          <p className="text-xs text-gray-400 mb-4">Showing 8 of 124 photos</p>
          <button className="group bg-white border border-gray-200 text-gray-600 px-6 py-3 rounded-full text-xs font-medium hover:border-[#9e1b66] hover:text-[#9e1b66] transition-all flex items-center gap-2 shadow-sm">
            Load More Moments
            <RefreshCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" />
          </button>
        </div>
      </section>

      {/* ── UPLOAD / SUBMIT PHOTO CTA ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-[#2c1b4e] rounded-2xl overflow-hidden relative py-12 px-8 flex flex-col items-center text-center">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <h2 className="text-2xl font-semibold text-white mb-3 tracking-tight relative z-10">Have a photo to share?</h2>
          <p className="text-white/70 text-sm font-light max-w-md mb-6 relative z-10">
            We love seeing the school through your eyes. Submit your photos for a chance to be featured in our monthly gallery.
          </p>
          <button className="relative z-10 bg-[#FFC627] text-black px-6 py-2.5 rounded-full font-medium text-xs hover:bg-[#ffcf4d] transition-colors flex items-center gap-2">
            <UploadCloud className="w-3.5 h-3.5" /> Submit Photo
          </button>
        </div>
      </section>
    </>
  );
}
