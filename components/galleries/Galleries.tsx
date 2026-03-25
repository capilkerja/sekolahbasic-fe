import Link from "next/link";
import { GalleryItem } from "@/types/gallery";
import { GalleryItem as Item } from "./GalleryItem";
import { ArrowRight } from "lucide-react";

type Props = {
  galleries: GalleryItem[];
};

export function Galleries({ galleries }: Props) {
  return (
    <section> 
      <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold tracking-tight text-gray-900">Latest events</h2> 
          <Link href="/gallery" className="text-xs font-medium text-[#9e1b66] hover:underline flex items-center gap-1">
              View All Gallery <ArrowRight className="w-3 h-3" />
          </Link>
      </div>
      
      {
        galleries.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
            {galleries.map((item) => (
                <Item key={item.id} item={item} />
            ))}
          </div> 
        ) : (
          <div className="w-full mt-4 text-center p-2 text-xs font-medium text-gray-500 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
            No galleries found
          </div>
        )
      }
    </section>
  );
}
