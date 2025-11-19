import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Loader2, ChevronLeft, ChevronRight } from "lucide-react";
import { isValidGooglePhotosUrl } from "@/lib/googlePhotos";

interface SimpleGalleryProps {
  googlePhotosUrl?: string;
  staticImages?: string[];
  className?: string;
}

interface ImageData {
  url: string;
  alt: string;
  id: string;
}

const SimpleGallery: React.FC<SimpleGalleryProps> = ({
  googlePhotosUrl,
  staticImages = [],
  className = "",
}) => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }, [images.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    const loadImages = async () => {
      try {
        let imagesToShow: ImageData[] = [];

        // Always start with our fallback images for the collage
        const fallbackImages = [
          {
            url: "/assets/20200707_193326.jpg",
            alt: "Office Relocation Services",
            id: "fallback-1",
          },
          {
            url: "/assets/IMG-20170624-WA0005.jpg",
            alt: "Residential Moving Services",
            id: "fallback-2",
          },
          {
            url: "/assets/20191101_132855.jpg",
            alt: "Professional Moving Truck",
            id: "fallback-3",
          },
          {
            url: "/assets/20191101_140129.jpg",
            alt: "Manufacturing & Industrial Moving",
            id: "fallback-4",
          },
          {
            url: "/assets/Gello.jpg",
            alt: "Happy Customers",
            id: "fallback-5",
          },
        ];

        // If static images are provided, use them to replace some fallback images
        if (staticImages.length > 0) {
          const staticImageData = staticImages.map((url, index) => ({
            url,
            alt: `Featured Service ${index + 1}`,
            id: `static-${index}`,
          }));

          // Replace the first few fallback images with static images
          imagesToShow = [
            ...staticImageData,
            ...fallbackImages.slice(staticImages.length),
          ];
        } else {
          // Use all fallback images
          imagesToShow = fallbackImages;
        }

        setImages(imagesToShow.slice(0, 5));

        if (googlePhotosUrl && isValidGooglePhotosUrl(googlePhotosUrl)) {
          setError("google-photos-restricted");
        }
      } catch (err) {
        console.error("Error loading gallery images:", err);
        setError("Failed to load gallery images");
      }
    };

    loadImages();
  }, [googlePhotosUrl, staticImages]);

  if (images.length === 0) {
    return (
      <section className={`py-12 sm:py-16 lg:py-20 bg-white ${className}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Loader2 className="h-10 w-10 animate-spin mx-auto text-primary" />
          <p className="mt-4 text-gray-500">Loading gallery...</p>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-12 sm:py-16 lg:py-20 bg-white ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our Services Gallery
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Showcasing our professional moving and packing services
          </p>

          {error && (
            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-700 text-sm">
                <span className="font-medium">Note:</span> Due to security
                restrictions, we're showing our curated gallery images.
                <a
                  href={googlePhotosUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline ml-1"
                >
                  View all
                </a>
              </p>
            </div>
          )}
        </div>

        {/* Carousel Layout */}
        <div className="max-w-4xl mx-auto">
          {/* Main carousel container */}
          <div
            className="relative overflow-hidden rounded-2xl shadow-2xl group"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Images container */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, idx) => (
                <div key={image.id} className="w-full flex-shrink-0">
                  <div className="relative h-[300px] sm:h-[400px] lg:h-[450px]">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = "/assets/placeholder.svg";
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center space-x-3 mt-6">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "bg-blue-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Image counter */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">
              {currentIndex + 1} of {images.length}
            </p>
          </div>
        </div>

        {/* View All Button */}
        {googlePhotosUrl && (
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button
              variant="outline"
              size="lg"
              asChild
              className="inline-flex items-center gap-2 px-6 py-3  text-primary hover:bg-primary-glow bg-[#f1f2f6]  hover:from-yellow-300 hover:to-yellow-400 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a
                href={googlePhotosUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-5 w-5" />
                View Complete Gallery
              </a>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default SimpleGallery;
