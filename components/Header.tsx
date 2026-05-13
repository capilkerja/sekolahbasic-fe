"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search,User } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
// Import data menu dari folder config. 
// Kalau error '@/', ganti jadi relative path: '../config/menu'
import { MENU_ITEMS } from "@/config/menu"; 

// Helper simpel buat class (pengganti clsx/tailwind-merge biar gak ribet install library lain)
const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(" ");

export default function Header() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement | null>(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(false);

  const navItems = useMemo(() => MENU_ITEMS, []);

  useEffect(() => {
    const el = navRef.current;
    if (!el) return;

    const update = () => {
      // Use a small epsilon to avoid flicker from fractional scroll values
      const epsilon = 1;
      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      setShowLeftFade(el.scrollLeft > epsilon);
      setShowRightFade(el.scrollLeft < maxScrollLeft - epsilon);
    };

    update();
    el.addEventListener("scroll", update, { passive: true });

    // Recalculate on resize / font load / viewport changes
    const ro = new ResizeObserver(update);
    ro.observe(el);

    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, []);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-xl">
      
      {/* 1. DECORATIVE STRIP */}
      <div className="h-2 flex w-full">
        <div className="h-full w-1/3 bg-(--basic-b-color)" />
        <div className="h-full w-1/3 bg-(--basic-a-color)" />
        <div className="h-full w-1/3 bg-(--basic-s-color)" />
        <div className="h-full w-1/3 bg-(--basic-i-color)" />
        <div className="h-full w-1/3 bg-(--basic-c-color)" />
      </div>

      {/* 2. UTILITY BAR (Logo & Search) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          
          {/* Logo Area */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="h-10 w-10 shrink-0 rounded flex items-center justify-center bg-gray-50 overflow-hidden relative">
                {/* Pastikan gambar ada di folder public/ */}
                <Image 
                  src="/logo-sekolah-basic.gif" 
                  alt="Sekolah Kristen BASIC Logo" 
                  width={40} 
                  height={40} 
                  className="object-contain"
                />
              </div>
              <div className="border-l border-gray-300 h-8 mx-1"></div>
              <div className="leading-tight text-xs uppercase tracking-wide font-medium text-black group-hover:text-[#9e1b66] transition-colors">
                Sekolah <br /> Kristen BASIC
              </div>
            </Link>
            <span className="block text-sm text-gray-500 tracking-tight ml-2">
              Quality is our main priority
            </span>
          </div>

          {/* Right Utility */}
          <div className="w-full lg:w-auto flex flex-col items-end gap-3">
            <div className="hidden lg:flex items-center gap-6 text-xs font-medium text-gray-500">
              {[
                { label: 'Admissions', href: '#' },
                { label: 'Careers', href: '/careers' },
                { label: 'Contact', href: '#' },
              ].map((item) => (
                <Link key={item.label} href={item.href} className="hover:text-[#9e1b66] transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-3 w-full lg:w-auto">
              <div className="relative w-full lg:w-[280px]">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full bg-gray-100 border-none px-3 py-2 text-xs focus:ring-1 focus:ring-[#9e1b66] rounded-md placeholder-gray-400 outline-none transition-all" 
                />
                <Search className="absolute right-2 top-2 w-3.5 h-3.5 text-gray-400" />
              </div>
              {/* <button className="flex flex-inline gap-2 bg-black text-white px-4 py-2 rounded-md text-xs font-medium hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer">
                <User className="w-4 h-4" />Login
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* 3. NAVIGATION BAR */}
      <div className="border-t border-gray-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Scroll indicator fades (left/right) */}
            <div
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent transition-opacity duration-200",
                showLeftFade ? "opacity-100" : "opacity-0"
              )}
            />
            <div
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent transition-opacity duration-200",
                showRightFade ? "opacity-100" : "opacity-0"
              )}
            />

            <nav
              ref={navRef}
              className="flex items-center gap-6 text-xs font-medium text-gray-600 overflow-x-auto no-scrollbar"
            >
              {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "whitespace-nowrap py-3 px-1 transition-colors",
                    isActive ? "text-[#9e1b66]" : "hover:text-[#9e1b66]"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}