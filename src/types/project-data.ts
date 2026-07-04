import type { ImageMetadata } from "astro";

export interface ProjectData {
    title: string;
    subtitle: string;
    href: string;
    image: ImageMetadata;
    objectFit: string;
}