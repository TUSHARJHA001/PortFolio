import useEmblaCarousel from "embla-carousel-react";
import { useDotButton } from "./UseDotButton";
import { usePrevNextButtons } from "./UsePrevNextButton";
import {
  EducationCard,
  PrevButton,
  NextButton,
  CarouselButton,
} from "../../Constants/main";

const Carousel = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  if (!slides || slides.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center text-white/70">
        No education data available
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((education) => (
            <div
              key={`education-${education.id}`}
              className="flex-[0_0_100%] min-w-0 h-full px-2"
            >
              <EducationCard {...education} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 px-2">
        <div className="flex gap-3 order-2 sm:order-1">
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            className="backdrop-blur-sm bg-white/10 hover:bg-white/20"
          />
          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            className="backdrop-blur-sm bg-white/10 hover:bg-white/20"
          />
        </div>
        <div className="flex justify-center sm:justify-end items-center order-1 sm:order-2 mb-2 sm:mb-0">
          {scrollSnaps.map((_, index) => (
            <CarouselButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`w-3 h-3 mx-1 rounded-full transition-all backdrop-blur-sm ${
                index === selectedIndex
                  ? "bg-[#6C63FF]/90 w-6 border border-[#ffffff]/30"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
