import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { heroSectionHastags } from "@/constants";
import { Sparkle } from "lucide-react";
import { useEffect, useState } from "react";
import { getSlider } from "@/lib/fetchData";
const HeroSectionSlider = ({ ...props }) => {
  const [screen, setScreen] = useState({ width: 0, height: 0 });
  const [sliderData, setSliderData] = useState<any>([]);
  const [smallScreen, setSmallScreen] = useState(false);
  const fetchData = async () => {
    await getSlider().then((res) => {
      setSliderData(res.documents);
    });
  };
  useEffect(() => {
    fetchData();
    setScreen({ width: window.innerWidth, height: window.innerHeight });
    setSmallScreen(window.innerWidth < 640);
  }, [screen.width, screen.height, smallScreen, sliderData, sliderData.length]);
  return (
    <Carousel
      plugins={[
        AutoScroll({
          speed: 3,
          stopOnInteraction: false,
          stopOnFocusIn: false,
          stopOnMouseEnter: false,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
      {...props}
    >
      <CarouselContent>
        {(sliderData.length > 0 ? sliderData : heroSectionHastags).map(
          (item: any, index: any) => (
            <CarouselItem
              key={index}
              className={`text-nowrap max-sm:first:pl-5 sm:basis-1/3 flex gap-1 flex-row items-center text-2xl font-extrabold italic`}
            >
              <Sparkle
                style={{
                  transform: `max-sm:translate(15px,0) translate(130px,0)`,
                }}
              />
              {sliderData.length > 0 ? item.title : item}
              <Sparkle
                style={{
                  transform: `max-sm:translate(15px,0) translate(130px,0)`,
                }}
              />
            </CarouselItem>
          ),
        )}
      </CarouselContent>
    </Carousel>
  );
};
export default HeroSectionSlider;
