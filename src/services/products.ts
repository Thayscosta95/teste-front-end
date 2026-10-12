import type { ProductsResponse } from "../types/products";

const API_URL =
  "/api/econverse/teste-front-end/junior/tecnologia/lista-produtos/produtos.json";

export async function getProducts() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(
      `Erro ao carregar produtos: ${response.status}`
    );
  }

  const data: ProductsResponse = await response.json();

  if (!data.success || !Array.isArray(data.products)) {
    throw new Error("Resposta inválida da API");
  }

  return data.products;
}