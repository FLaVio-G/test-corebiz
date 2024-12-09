import "../styles.css";
import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { getProducts } from "../services/axiosConfig";

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
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 4,
    },
  });

  // Função para buscar os produtos
  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error("Erro ao buscar produtos", error);
    }
  };

  // Hook de efeito para buscar os produtos ao carregar o componente
  useEffect(() => {
    fetchProducts();
  }, []);

  // Função para navegação para o slide anterior
  const goToPrevious = () => {
    if (instanceRef.current && instanceRef.current.prev) {
      instanceRef.current.prev();
    }
  };

  // Função para navegação para o slide seguinte
  const goToNext = () => {
    if (instanceRef.current && instanceRef.current.next) {
      instanceRef.current.next();
    }
  };

  return (
    <div className="relative mt-[25px]">
      <div className="flex w-full flex-col items-center justify-center">
        <div className="flex w-[1248px] items-start justify-start">
          <h2 className="text-[20px] font-black leading-[27px] text-black">
            Mais vendidos
          </h2>
        </div>
        <div className="relative flex h-[507px] w-[1248px] items-center justify-center">
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 z-10 p-2"
          >
            <img src="/public/left-arrow.svg" alt="Previous" />
          </button>
          <div
            ref={sliderRef}
            className="keen-slider"
            style={{
              maxWidth: 1248,
              height: 353,
              gap: "99px",
            }}
          >
            {products.map((product) => (
              <div
                key={product.productId}
                className="keen-slider__slide relative flex flex-col items-center justify-center"
              >
                <div>
                  <img
                    className="h-[200px] w-[216px]"
                    src={product.imageUrl}
                    alt={product.productName}
                  />
                  <img
                    className="absolute right-0 top-0 h-[81px] w-[72px]"
                    src="/public/Flag.svg"
                    alt="Flag"
                  />
                </div>
                <div className="flex w-full flex-col items-center justify-center bg-[#E6E8EA] pb-[15px]">
                  <p className="mt-[7px] text-[12px] text-[#7A7A7A]">
                    {product.productName}
                  </p>
                  <img
                    src="/Rating.svg"
                    alt={`Rating: ${product.stars} stars`}
                  />
                  <p className="mt-[23px] text-[18px] text-[#7A7A7A]">
                    por R$ {(product.price / 100).toFixed(2)}
                  </p>
                  <p className="text-[11px] text-[#7A7A7A]">
                    {product.installments.length > 0 &&
                      `ou em ${product.installments[0].quantity}x de R$ ${(product.installments[0].value / 100).toFixed(2)}`}
                  </p>
                  <button className="btn join-item mt-[8px] h-[32.42px] w-[125.28px] text-white">
                    Comprar
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 p-2"
          >
            <img src="/public/right-arrow.svg" alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
