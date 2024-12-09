import "../styles.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Products = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: { perView: "auto" },
  });

  return (
    <div className="relative mt-[25px]">
      <div className="flex w-full flex-col items-center justify-center">
        <div className="flex w-[1248px] items-start justify-start">
          <h2 className="text-[20px]">Mais vendidos</h2>
        </div>
        <div className="relative flex h-[507px] w-[1248px] items-center justify-center bg-red-500">
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-0 top-1/2 z-10 p-2"
          >
            <img src="\public\left-arrow.svg" alt="" />
          </button>
          <div
            ref={sliderRef}
            className="keen-slider"
            style={{
              maxWidth: 1248,
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            {[...Array(4)].map((_, index) => (
              <div key={index} className="keen-slider__slide flex items-center justify-center flex-col">
                <div>
                  <img
                    className="h-[200px] w-[216px]"
                    src="\public\image3.svg"
                    alt=""
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="mt-[7px] text-[12px]">SAPATO FLOATER PRETO</p>
                  <img src="/Rating.svg" alt="" />
                  <p className="mt-[23px] text-[18px]">por R$ 259,90</p>
                  <p className="text-[11px]">ou em 9x de R$ 28,87</p>
                  <button className="btn join-item mt-[8px] h-[32.42px] w-[125.28px]">
                    Comprar
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 p-2"
          >
            <img src="\public\right-arrow.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
