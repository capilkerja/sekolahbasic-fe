"use client";

import { useState } from "react";
import Image from "next/image";
import { GalleryItem } from "@/types/gallery";
import {
  Star,
  ImageIcon,
  Calendar,
  Play,
  Images,
  Video,
} from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import LightboxVideo from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

type MediaFilter = "all" | "image" | "video";

type PhotoFlat = {
  url: string;
  alt: string;
  type: "image" | "video";
  poster?: string;
  eventName: string;
  eventSlug: string;
  eventId: number;
  indexInEvent: number;
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function scrollToGrid() {
  const el = document.getElementById("all-photos");
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 220;
  window.scrollTo({ top, behavior: "smooth" });
}

const INITIAL_SHOW = 9;

export function GalleryPageView({ galleries }: { galleries: GalleryItem[] }) {
  const [eventFilter, setEventFilter] = useState("all");
  const [mediaFilter, setMediaFilter] = useState<MediaFilter>("all");
  const [showAll, setShowAll] = useState(false);
  const [lightbox, setLightbox] = useState<{ eventId: number; index: number } | null>(null);

  // flat list of all media with event metadata
  const allPhotos: PhotoFlat[] = galleries.flatMap((g) =>
    g.images.map((img, i) => ({
      url: img.url,
      alt: img.alt,
      type: img.type ?? "image",
      poster: img.poster,
      eventName: g.name,
      eventSlug: g.slug,
      eventId: g.id,
      indexInEvent: i,
    }))
  );

  const filteredPhotos = allPhotos.filter((p) => {
    const matchEvent = eventFilter === "all" || p.eventSlug === eventFilter;
    const matchMedia = mediaFilter === "all" || p.type === mediaFilter;
    return matchEvent && matchMedia;
  });

  const visiblePhotos = showAll ? filteredPhotos : filteredPhotos.slice(0, INITIAL_SHOW);

  const activeGallery = lightbox ? galleries.find((g) => g.id === lightbox.eventId) : null;

  const totalVideos = allPhotos.filter((p) => p.type === "video").length;
  const totalImages = allPhotos.filter((p) => p.type === "image").length;

  function buildSlides(gallery: GalleryItem) {
    return gallery.images.map((img) => {
      if (img.type === "video") {
        return {
          type: "video" as const,
          sources: [{ src: img.url, type: "video/mp4" }],
          poster: img.poster,
        };
      }
      return { src: img.url, alt: img.alt };
    });
  }

  return (
    <>
      {/* ── STICKY FILTER BAR ── */}
      <div className="sticky top-[170px] lg:top-[140px] z-40 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col gap-2">

            {/* Row 1: Event filter pills */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
              <span className="text-[10px] uppercase font-semibold text-gray-400 tracking-wide shrink-0">Filter</span>
              <button
                onClick={() => { setEventFilter("all"); setShowAll(false); }}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all active:scale-95 whitespace-nowrap ${
                  eventFilter === "all"
                    ? "bg-gray-900 text-white shadow-sm"
                    : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300"
                }`}
              >
                All Photos
              </button>
              {galleries.map((g) => (
                <button
                  key={g.slug}
                  onClick={() => { setEventFilter(g.slug); setShowAll(false); }}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all active:scale-95 whitespace-nowrap ${
                    eventFilter === g.slug
                      ? "bg-gray-900 text-white shadow-sm"
                      : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300"
                  }`}
                >
                  {g.name}
                </button>
              ))}
            </div>

            {/* Row 2: Media type — segmented control full width on mobile, inline on desktop */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-semibold text-gray-400 tracking-wide shrink-0">Media</span>
              <div className="flex bg-gray-100 rounded-full p-0.5 gap-0.5">
              <button
                onClick={() => { setMediaFilter("all"); setShowAll(false); }}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                  mediaFilter === "all"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Semua
              </button>
              <button
                onClick={() => { setMediaFilter("image"); setShowAll(false); }}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                  mediaFilter === "image"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <Images className="w-3 h-3" /> Foto
              </button>
              <button
                onClick={() => { setMediaFilter("video"); setShowAll(false); }}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                  mediaFilter === "video"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <Video className="w-3 h-3" /> Video
              </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── FEATURED COLLECTIONS ── */}
      <section className="border-b border-gray-200 bg-gray-50/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold text-gray-900 tracking-tight flex items-center gap-2 mb-4">
            <Star className="w-3.5 h-3.5 text-[#FFC627] fill-[#FFC627]" /> Event Collections
          </h2>

          <div className="flex gap-5 overflow-x-auto pb-4 no-scrollbar snap-x">
            {galleries.map((g) => (
              <button
                key={g.id}
                onClick={() => setLightbox({ eventId: g.id, index: 0 })}
                className="min-w-[260px] w-[260px] snap-start group cursor-pointer text-left"
              >
                <div className="aspect-[16/10] overflow-hidden rounded-xl bg-gray-200 relative mb-3 shadow-sm">
                  {/* Photo/video count badge */}
                  <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded-full z-20 flex items-center gap-1">
                    <ImageIcon className="w-3 h-3" /> {g.images.length}
                  </div>

                  <Image
                    src={
                      g.images.find((i) => !i.type || i.type === "image")?.url ??
                      (g.images[0].poster ?? g.images[0].url)
                    }
                    alt={g.name}
                    width={520}
                    height={325}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* "Buka Album" hint on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 rounded-xl flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-gray-900 text-[11px] font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
                      <Play className="w-3 h-3 fill-gray-900" /> Buka Album
                    </span>
                  </div>
                </div>

                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-[#9e1b66] transition-colors">
                  {g.name}
                </h3>
                <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {formatDate(g.event_date)}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── MASONRY PHOTO GRID ── */}
      <section id="all-photos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-sm font-semibold text-gray-900">Browse Photos & Videos</h2>
            <p className="text-xs text-gray-400 mt-0.5">{filteredPhotos.length} item ditemukan</p>
          </div>
        </div>

        {visiblePhotos.length > 0 ? (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
            {visiblePhotos.map((photo) => (
              <div
                key={`${photo.eventSlug}-${photo.indexInEvent}`}
                onClick={() => setLightbox({ eventId: photo.eventId, index: photo.indexInEvent })}
                className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-zoom-in bg-gray-100"
              >
                {photo.type === "video" ? (
                  /* Video thumbnail */
                  <div className="relative w-full aspect-video bg-gray-900">
                    {photo.poster ? (
                      <Image src={photo.poster} alt={photo.alt} fill className="object-cover" />
                    ) : (
                      <video
                        src={photo.url}
                        className="w-full h-full object-cover"
                        muted
                        playsInline
                        preload="metadata"
                      />
                    )}
                    {/* Play icon overlay — always visible for videos */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                      <div className="bg-white/90 rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform duration-200">
                        <Play className="w-5 h-5 text-gray-900 fill-gray-900" />
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Image */
                  <Image
                    src={photo.url}
                    alt={photo.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto transition duration-500 group-hover:scale-105"
                  />
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 pointer-events-none">
                  <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block bg-[#9e1b66] text-white text-[10px] font-bold px-2 py-0.5 rounded mb-1.5">
                      {photo.eventName}
                    </span>
                    {photo.type === "video" && (
                      <span className="ml-1.5 inline-block bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded mb-1.5">
                        VIDEO
                      </span>
                    )}
                    <p className="text-white/70 text-[10px] flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(galleries.find((g) => g.id === photo.eventId)?.event_date ?? "")}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-sm text-gray-400">
              {mediaFilter === "video" ? "Belum ada video tersedia." : "Tidak ada foto ditemukan."}
            </p>
          </div>
        )}

        {/* Load more */}
        {filteredPhotos.length > INITIAL_SHOW && (
          <div className="mt-12 flex flex-col items-center gap-2">
            <p className="text-xs text-gray-400">
              Menampilkan {visiblePhotos.length} dari {filteredPhotos.length} item
            </p>
            <button
              onClick={() => setShowAll((v) => !v)}
              className="bg-white border border-gray-200 text-gray-600 px-6 py-2.5 rounded-full text-xs font-medium hover:border-[#9e1b66] hover:text-[#9e1b66] transition-all shadow-sm"
            >
              {showAll ? "Tampilkan lebih sedikit" : "Muat lebih banyak"}
            </button>
          </div>
        )}
      </section>

      {/* Lightbox */}
      {activeGallery && lightbox && (
        <Lightbox
          open
          close={() => setLightbox(null)}
          index={lightbox.index}
          slides={buildSlides(activeGallery)}
          plugins={[Thumbnails, LightboxVideo]}
        />
      )}
    </>
  );
}
