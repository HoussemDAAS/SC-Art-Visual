"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface ProductGalleryProps {
  previews: string[];
  productName: string;
}

export function ProductGallery({
  previews,
  productName,
}: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const allImages = previews;

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Main Image - Larger on mobile */}
      <div
        className="relative w-full overflow-hidden rounded-lg border border-[#262626] cursor-pointer group bg-[#0A0A0A]"
        style={{ aspectRatio: '1/1' }}
        onClick={() => setIsLightboxOpen(true)}
      >
        <Image
          src={allImages[selectedImage]}
          alt={`${productName} - Preview ${selectedImage + 1}`}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-105 p-1 md:p-4"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          priority={selectedImage === 0}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        
        {/* Tap to enlarge hint on mobile */}
        <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-black/70 text-white text-xs md:text-sm px-2 md:px-3 py-1 md:py-1.5 rounded-md backdrop-blur-sm">
          اضغط للتكبير / Tap to enlarge
        </div>
      </div>

      {/* Thumbnails - Larger on mobile */}
      <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {allImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative flex-shrink-0 w-28 h-28 md:w-32 md:h-32 rounded-md overflow-hidden border-2 transition-all duration-300 bg-[#0A0A0A] ${
              selectedImage === index
                ? "border-white scale-105"
                : "border-[#262626] hover:border-[#404040] opacity-70 hover:opacity-100"
            }`}
          >
            <Image
              src={image}
              alt={`${productName} - Thumbnail ${index + 1}`}
              fill
              className="object-contain p-0.5"
              sizes="128px"
            />
          </button>
        ))}
      </div>

      {/* Enhanced Lightbox Dialog */}
      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent className="max-w-[98vw] md:max-w-7xl w-full h-[90vh] md:h-auto p-2 md:p-4 bg-black border border-[#404040]">
          <VisuallyHidden>
            <DialogTitle>{`${productName} - Image ${selectedImage + 1} of ${allImages.length}`}</DialogTitle>
          </VisuallyHidden>
          
          <div className="relative w-full h-full md:aspect-video">
            <Image
              src={allImages[selectedImage]}
              alt={`${productName} - Full View ${selectedImage + 1}`}
              fill
              className="object-contain p-2"
              sizes="(max-width: 768px) 100vw, 1400px"
              quality={100}
            />
          </div>
          
          {/* Navigation arrows for lightbox */}
          {allImages.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prev) => (prev > 0 ? prev - 1 : allImages.length - 1));
                }}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-black text-white p-2 md:p-3 rounded-full border border-[#404040] transition-all"
                aria-label="Previous image"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prev) => (prev < allImages.length - 1 ? prev + 1 : 0));
                }}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-black text-white p-2 md:p-3 rounded-full border border-[#404040] transition-all"
                aria-label="Next image"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
          
          {/* Image counter */}
          <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs md:text-sm px-3 md:px-4 py-1 md:py-2 rounded-full backdrop-blur-sm">
            {selectedImage + 1} / {allImages.length}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
