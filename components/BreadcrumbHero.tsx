"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbHeroProps {
  title: string | React.ReactNode;
  description: string;
  breadcrumbs?: BreadcrumbItem[]; // Optional - will auto-generate if not provided
  backgroundImage?: string;
  backgroundImageAlt?: string;
}

// Helper function to format path segment into readable label
function formatLabel(segment: string): string {
  // Handle special cases
  const specialCases: Record<string, string> = {
    "news-events": "News & Events",
    "student-life": "Student Life",
  };

  if (specialCases[segment]) {
    return specialCases[segment];
  }

  // Replace hyphens with spaces and capitalize
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function BreadcrumbHero({
  title,
  description,
  breadcrumbs,
  backgroundImage = "/images/breadcrumb-hero.webp",
  backgroundImageAlt = "Sekolah Kristen BASIC",
}: BreadcrumbHeroProps) {
  const pathname = usePathname();

  // Auto-generate breadcrumbs from pathname if not provided
  const generatedBreadcrumbs = useMemo(() => {
    if (breadcrumbs) {
      return breadcrumbs;
    }

    const segments = pathname.split("/").filter(Boolean);
    const crumbs: BreadcrumbItem[] = [{ label: "Home", href: "/" }];

    // Build breadcrumbs from path segments
    let currentPath = "";
    segments.forEach((segment) => {
      currentPath += `/${segment}`;
      crumbs.push({
        label: formatLabel(segment),
        href: currentPath,
      });
    });

    return crumbs;
  }, [pathname, breadcrumbs]);

  return (
    <div className="relative h-[400px] overflow-hidden scroll-mt-50">
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={backgroundImageAlt}
          width={800}
          height={1000}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#2c1b4e] via-[#9e1b66] to-transparent"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-full flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-4 text-white/60 text-xs font-medium tracking-wide flex-wrap">
          {generatedBreadcrumbs.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {index > 0 && <ChevronRight className="w-3 h-3" />}
              {index === generatedBreadcrumbs.length - 1 ? (
                <span className="text-[#FFC627]">{item.label}</span>
              ) : (
                <Link href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
          {title}
        </h1>
        <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
