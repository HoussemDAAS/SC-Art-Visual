# Product Images

## Required Images

To complete the setup, add the following images to this directory:

### Main Images
- **hero.jpg** - Main hero/featured image (1920x1080px recommended)

### Gallery Preview Images
- **preview-1.jpg** - First gallery image
- **preview-2.jpg** - Second gallery image
- **preview-3.jpg** - Third gallery image
- **preview-4.jpg** - Fourth gallery image
- **preview-5.jpg** - Fifth gallery image

### Thumbnails (Optional)
- **thumb-1.jpg** through **thumb-5.jpg** - Can use the same as preview images if desired

## Image Guidelines

- **Format**: JPG, PNG, or WebP
- **Aspect Ratio**: 16:9 for best results
- **Quality**: High quality, but optimized for web (< 500KB each)
- **Resolution**: 
  - Hero: 1920x1080px
  - Previews: 1280x720px minimum
  - Thumbnails: 200x200px minimum

## Automatic Grayscale

All images will be automatically converted to grayscale using CSS filters to maintain the elegant monochrome aesthetic of the site.

## Placeholder Images

Until you add your images, the site will show Next.js Image component placeholders. To use temporary placeholder images for testing, you can use services like:

- [Unsplash](https://unsplash.com) - High-quality free photos
- [Pexels](https://pexels.com) - Free stock photos
- [Placeholder.com](https://placeholder.com) - Simple placeholder generator

Example placeholder URL structure:
```
https://images.unsplash.com/photo-[id]?w=1920&h=1080&fit=crop
```

Replace the paths in `lib/data/product.ts` if using external URLs during development.
