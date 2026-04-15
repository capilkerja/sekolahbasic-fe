import { staticGalleries } from "@/lib/data/galleries";

export async function getGalleries(limit?: number) {
  return limit ? staticGalleries.slice(0, limit) : staticGalleries;
}
