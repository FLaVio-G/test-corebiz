import "../styles.css";
import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { getProducts } from "../services/axiosConfig";
import { useCart } from "../context/CartContext";

export interface Product {
  productId: number;
  productName: string;
  stars: number;
  imageUrl: string;
  listPrice: number | null;
  price: number;
  installments: {
    quantity: number;
    value: number;
  }[];
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: { perView: 1, spacing: 15 },
    breakpoints: {
      "(min-width: 940px)": {
        slides: { perView: 1, spacing: 15 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 25 },
      },
    },
  });

  const { incrementCart } = useCart();

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar produtos", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const goToPrevious = () => {
    if (instanceRef.current && instanceRef.current.prev) {
      instanceRef.current.prev();
    }
  };

  const goToNext = () => {
    if (instanceRef.current && instanceRef.current.next) {
      instanceRef.current.next();
    }
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="relative mt-6">
      <div className="flex flex-col items-center">
        <div className="flex w-full max-w-[78rem] items-start justify-start">
          <h2 className="text-lg font-black leading-7 text-black">
            Mais vendidos
          </h2>
        </div>
        <div className="relative flex h-[31.69rem] w-full max-w-[78rem] items-center">
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 p-2"
            aria-label="Slide anterior"
          >
            <img src="/left-arrow.svg" alt="Previous" />
          </button>

          <div ref={sliderRef} className="keen-slider w-full">
            {products.map((product) => (
              <div
                key={product.productId}
                className="keen-slider__slide relative flex flex-col items-center lg:h-[353px]"
              >
                <div className="relative">
                  <img
                    className="h-[12.5rem] w-[13.5rem]"
                    src={product.imageUrl}
                    alt={product.productName}
                  />
                  <img
                    className="absolute right-0 top-0 h-[5.06rem] w-[4.5rem]"
                    src="/Flag.svg"
                    alt="Flag"
                  />
                </div>
                <div className="flex w-full flex-col items-center bg-[#E6E8EA] pb-3">
                  <p className="mt-2 text-xs text-[#7A7A7A]">
                    {product.productName}
                  </p>
                  <img
                    src="/Rating.svg"
                    alt={`Rating: ${product.stars} stars`}
                  />
                  <p className="mt-6 text-base text-[#7A7A7A]">
                    por R$ {(product.price / 100).toFixed(2)}
                  </p>
                  <p className="text-xs text-[#7A7A7A]">
                    {product.installments.length > 0 &&
                      `ou em ${product.installments[0].quantity}x de R$ ${(product.installments[0].value / 100).toFixed(2)}`}
                  </p>
                  <button
                    onClick={incrementCart}
                    className="btn join-item mt-2 h-8 w-32 text-white"
                  >
                    Comprar
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 p-2"
            aria-label="Próximo slide"
          >
            <img src="/right-arrow.svg" alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
