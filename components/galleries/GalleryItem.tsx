"use client";

import { useState } from "react";
import { GalleryItem as GalleryItemType } from "@/types/gallery";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
// Import plugins if you want thumbnails or zoom
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

type Props = {
  item: GalleryItemType;
};

export function GalleryItem({ item }: Props) {
  const [index, setIndex] = useState(-1);

  // Map your API images to the format YARL expects
  const slides = item.images.map((img) => ({
    src: img.url,
    alt: img.alt,
    // Optional: add dimensions if you have them for better performance
  }));

  const firstImage = item.images.length > 0 
    ? item.images[0].url 
    : "/images/placeholder.jpg";

  return (
    <>
      <div 
        onClick={() => setIndex(0)} // Open lightbox at first image
        className="group block relative cursor-pointer"
      > 
        <div className="relative w-full aspect-4/3 perspective-1000">
          {/* Background Stack Layer */} 
          <div className="absolute inset-0 bg-gray-100 rounded-xl transform translate-x-2 -translate-y-2 rotate-3 transition-transform duration-300 group-hover:translate-x-3 group-hover:rotate-6 border border-gray-200"></div> 
          
          {/* Main Image Card */} 
          <div className="relative w-full h-full rounded-xl overflow-hidden border border-gray-200 bg-white transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg"> 
            <Image
              src={firstImage}
              alt={item.name} 
              fill
                className="w-full h-full object-cover"
            /> 
            
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
            
            <div className="absolute bottom-4 left-4 right-4 text-white"> 
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white border border-white/20 px-1.5 py-0.5 rounded-sm">
                  {item.category.name}
                </span>
              </div> 
              <h3 className="font-medium text-sm leading-tight">{item.name}</h3> 
              <p className="text-[10px] text-gray-300 mt-1">{item.images.length} Photos</p>
            </div> 
          </div> 
        </div>  
      </div>

      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
        plugins={[Thumbnails]}
        // This ensures YARL uses Next.js Image optimization for the slides
        render={{
          slide: ({ slide }) => {
            if (!("src" in slide)) return null;
            return (
              <div className="relative w-full h-full">
                <Image
                  src={slide.src}
                  alt={"alt" in slide ? (slide.alt || "Gallery Image") : "Gallery Image"}
                  fill
                  className="object-contain"
                />
              </div>
            );
          },
        }}
      />
    </>
  );
}