import BreadcrumbHero from "@/components/BreadcrumbHero";
import { getGalleries } from "@/lib/api/galleries";
import { GalleryPageView } from "@/components/galleries/GalleryPageView";

export default async function Gallery() {
  const galleries = await getGalleries();

  return (
    <>
      <BreadcrumbHero
        title="Life at BASIC"
        description="Explore our vibrant community through the lens. From celebrations to school events, see how we shape minds and build character."
      />
      <GalleryPageView galleries={galleries} />
    </>
  );
}
