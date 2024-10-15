import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const images = [
  "assets/images/partners/1.jpg",
  "assets/images/partners/2.jpg",
  "assets/images/partners/3.jpg",
  "assets/images/partners/4.jpg",
  "assets/images/partners/5.jpg",
  "assets/images/partners/6.jpg",
  "assets/images/partners/7.jpg",
  "assets/images/partners/8.jpg",
];

const OurPartners = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <section className="container py-20">
      <h2 className="text-main pb-5 lg:text-3xl font-bold text-center">
        شركاؤنا
      </h2>

      <Carousel
        // @ts-ignore
        plugins={[plugin.current]}
        className="w-full max-w-5xl mx-auto py-4"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          direction: "rtl",
        }}
      >
        <CarouselContent className="-ms-2 md:-ms-4">
          {images.map((img) => (
            <CarouselItem
              className="md:basis-1/2 lg:basis-1/5 ps-2 md:ps-4"
              key={img}
            >
              <img
                src={img}
                alt="partener image"
                loading="lazy"
                className="rounded-lg shadow-lg border p-4"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
export default OurPartners;
