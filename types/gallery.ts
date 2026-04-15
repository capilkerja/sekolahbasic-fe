export interface GalleryImage {
    url: string;
    alt: string;
    type?: "image" | "video";
    poster?: string; // thumbnail url untuk video
}

export interface GalleryItem {
    id: number;
    name: string;
    slug: string;
    location: string;
    category: { name: string };
    images: GalleryImage[];
    event_date: string;
}