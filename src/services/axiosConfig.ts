import axios from "axios";

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

const api = axios.create({
  baseURL: "https://corebiz-test-server.onrender.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await api.get<Product[]>("/products");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    throw error;
  }
};

export default api;
