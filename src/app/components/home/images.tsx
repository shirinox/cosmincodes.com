"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";

type Countries =
  | "Germany"
  | "Austria"
  | "Czechia"
  | "Hungary"
  | "United Kingdom"
  | "Romania";
type Cities =
  | "Berlin"
  | "Budapest"
  | "Prague"
  | "Vienna"
  | "Birmingham"
  | "Timisoara";

type TravelImage = {
  url: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  country: Countries;
  city: Cities;
};

const IMAGE_QUALITY = 50;

const IMAGE_HEIGHT = 16 * IMAGE_QUALITY;
const IMAGE_WIDTH = 9 * IMAGE_QUALITY;

export const images: TravelImage[] = [
  {
    url: "https://img.cosmincodes.com/rainbow_buildings.jpg",
    alt: "Rainbow buildings with trees in Berlin, Germany",
    width: IMAGE_HEIGHT,
    height: IMAGE_WIDTH,
    className: "col-span-2",
    country: "Germany",
    city: "Berlin",
  },
  {
    url: "https://img.cosmincodes.com/birmingham_food.JPG",
    alt: "Chicken and fries, along with charred jalapenos in Birmingham, UK",
    width: IMAGE_HEIGHT,
    height: IMAGE_WIDTH,
    country: "United Kingdom",
    city: "Birmingham",
  },
  {
    url: "https://img.cosmincodes.com/sunset_berlin.JPG",
    alt: "Beautiful sunset in Berlin, Germany",
    width: IMAGE_HEIGHT,
    height: IMAGE_WIDTH,
    country: "Germany",
    city: "Berlin",
  },
  {
    url: "https://img.cosmincodes.com/church_budapest.JPG",
    alt: "Church with statue in Budapest, Hungary",
    width: IMAGE_HEIGHT,
    height: IMAGE_WIDTH,
    country: "Hungary",
    city: "Budapest",
    className: "col-span-2",
  },
  {
    url: "https://img.cosmincodes.com/carturesti_timisoara.JPG",
    alt: "Book store in Timisoara, Bucharest",
    width: IMAGE_HEIGHT,
    height: IMAGE_WIDTH,
    country: "Romania",
    city: "Timisoara",
    className: "lg:col-span-2",
  },
  {
    url: "https://img.cosmincodes.com/building_berlin.JPG",
    alt: "Aethetic building in Berlin, Germany",
    width: IMAGE_HEIGHT,
    height: IMAGE_WIDTH,
    country: "Germany",
    city: "Berlin",
  },
];

export const ImageGrid = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-3 gap-4 lg:grid-cols-3">
      {images.map((image, i) => (
        <SingleImage key={i} image={image} />
      ))}
    </div>
  );
};

const SingleImage = ({ image }: { image: TravelImage }) => {
  const [hover, setHover] = useState<boolean>();

  return (
    <div className={cn("relative bg-neutral-950", image.className)}>
      <div
        className={cn(
          "absolute bottom-0 right-0 flex flex-col -space-y-1.5 p-2 text-right text-neutral-50",
          !hover && "invisible",
        )}
      >
        <span className="text-xs">{image.city}</span>
        <span className="text-base">{image.country}</span>
      </div>
      <Image
        className={cn(
          "h-full max-h-64 rounded bg-cover object-cover transition",
          hover ? "opacity-20" : "opacity-100",
        )}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        src={image.url}
        alt={image.alt}
        width={image.width}
        height={image.height}
      />
    </div>
  );
};
