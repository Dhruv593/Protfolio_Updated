/**
 * Sanity Image URL builder and optimization utilities
 * Provides helpers for responsive images and dynamic sizing
 */

import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImage } from '@/types/sanity.types';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export const sanityClient = createClient({
  projectId,
  dataset,
  useCdn: true,
});

/**
 * Image URL Builder instance
 * Usage: urlFor(imageObject).width(200).url()
 */
const builder = imageUrlBuilder(sanityClient);

/**
 * Generate optimized image URL
 * @param source - Sanity image object or reference
 * @returns Image URL builder for chaining methods
 */
export function urlFor(source: SanityImage | string) {
  return builder.image(source);
}

/**
 * Get responsive image URLs for different breakpoints
 * Perfect for srcSet in Next.js Image component
 */
export function getResponsiveImageUrls(source: SanityImage | string) {
  const baseUrl = builder.image(source);

  return {
    mobile: baseUrl.width(640).url(),
    tablet: baseUrl.width(1024).url(),
    desktop: baseUrl.width(1920).url(),
    thumbnail: baseUrl.width(300).url(),
  };
}

/**
 * Get image URL with custom dimensions
 */
export function getImageUrl(
  source: SanityImage | string,
  width: number,
  height?: number
): string {
  let url = builder.image(source).width(width);

  if (height) {
    url = url.height(height);
  }

  return url.url();
}

/**
 * Get optimized image URL with common settings
 */
export function getOptimizedImageUrl(
  source: SanityImage | string,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'webp' | 'jpg' | 'png';
  } = {}
): string {
  const { width = 1200, height, quality = 80 } = options;

  let url = builder
    .image(source)
    .width(width)
    .quality(quality)
    .auto('format');

  if (height) {
    url = url.height(height);
  }

  return url.url();
}

/**
 * Get blur-up placeholder image URL (low quality, small size)
 */
export function getPlaceholderUrl(source: SanityImage | string): string {
  return builder
    .image(source)
    .width(30)
    .height(30)
    .blur(10)
    .quality(20)
    .auto('format')
    .url();
}

/**
 * Standard image sizes for common use cases
 */
export const imageSizes = {
  thumbnail: 200,
  small: 400,
  medium: 800,
  large: 1200,
  hero: 1920,
};
