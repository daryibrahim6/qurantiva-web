"use client";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

interface TestimonialsCarouselProps {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
  autoRotateInterval?: number;
  className?: string;
}

export function TestimonialsCarousel({
  title = "Apa kata mereka",
  subtitle,
  testimonials = [],
  autoRotateInterval = 6000,
  className,
}: TestimonialsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (autoRotateInterval <= 0 || testimonials.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, autoRotateInterval);
    return () => clearInterval(interval);
  }, [testimonials.length, autoRotateInterval]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  if (testimonials.length === 0) return null;

  return (
    <section
      id="rating"
      aria-labelledby="rating-heading"
      className={cn("bg-accent-950 py-20 lg:py-28", className)}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2
            id="rating-heading"
            className="text-3xl font-bold text-white sm:text-4xl"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-3 max-w-2xl text-lg text-accent-300">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div className="relative">
            <div className="absolute -top-6 -left-6 z-10">
              <Quote className="size-12 text-primary-500/20" strokeWidth={1} />
            </div>

            <div className="relative h-[320px] md:h-[300px]">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={testimonial.id}
                  className={cn(
                    "absolute inset-0 border transition-all duration-500",
                    index === activeIndex
                      ? "translate-x-0 opacity-100 shadow-lg"
                      : "pointer-events-none translate-x-[100px] opacity-0",
                    "border-accent-700 bg-accent-900",
                  )}
                >
                  <CardContent className="flex h-full flex-col p-6 md:p-8">
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fallback={testimonial.name}
                          className="border-2 border-primary-500/10"
                        />
                        <div className="text-left">
                          <h4 className="font-semibold text-white">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-accent-400">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="size-4 fill-primary-500 text-primary-500"
                          />
                        ))}
                      </div>
                    </div>

                    <Separator className="my-4 bg-accent-700" />

                    <p className="flex-1 text-lg leading-relaxed text-accent-200">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div
            className="flex gap-4 md:flex-col"
          >
            <Button
              variant="outline"
              onClick={handlePrev}
              className="size-10 rounded-full border-accent-600 p-0 text-accent-300 hover:bg-accent-800"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="size-4" />
            </Button>

            <div className="flex gap-2 md:flex-col">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "size-2 rounded-full transition-colors",
                    index === activeIndex
                      ? "bg-primary-500"
                      : "bg-accent-600",
                  )}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setActiveIndex(index);
                    }
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              onClick={handleNext}
              className="size-10 rounded-full border-accent-600 p-0 text-accent-300 hover:bg-accent-800"
              aria-label="Next testimonial"
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
