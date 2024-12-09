import React, { useState } from "react";
import "../styles.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function keepBanner() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div className="navigation-wrapper relative">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide">
            <img
              src="public\banner2.jpg"
              alt="Example Icon"
              className="h-auto"
            />
          </div>
          <div className="keen-slider__slide">
            {" "}
            <img
              src="public\banner3.jpg"
              alt="Example Icon"
              className="h-auto"
            />
          </div>
          <div className="keen-slider__slide">
            {" "}
            <img
              src="public\banner3.jpg"
              alt="Example Icon"
              className="h-auto"
            />
          </div>
          <div className="keen-slider__slide">
            {" "}
            <img
              src="public\banner3.jpg"
              alt="Example Icon"
              className="h-auto"
            />
          </div>
        </div>
        {loaded && instanceRef.current && (
          <div className="absolute bottom-[5px] left-1/2 z-10 flex -translate-x-1/2 transform gap-2 lg:bottom-[37px]">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => instanceRef.current?.moveToIdx(idx)}
                  className={`h-[10px] w-[10px] rounded-full ${
                    currentSlide === idx ? "bg-yellow-500" : "bg-gray-300"
                  }`}
                ></button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
