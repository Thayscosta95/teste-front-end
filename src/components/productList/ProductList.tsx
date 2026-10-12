import { useEffect, useState } from "react";
import { getProducts } from "../../services/products";
import { ProductCard } from "../productCard/ProductCard.tsx";
import type { Product } from "../../types/products.ts";
import "./ProductList.scss";

interface ProductListProps {
  onSelect: (product: Product) => void;
}

export function ProductList({ onSelect }: ProductListProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(() => setError("Não foi possível carregar os produtos."))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Carregando produtos...</p>;
  if (error) return <p role="alert">{error}</p>;
  if (products.length === 0) return <p>Nenhum produto encontrado.</p>;

  return (
    <section>
      <h2>Produtos relacionados</h2>

      <div className="products-grid">
        {products.map((product, index) => (
          <ProductCard
            key={`${product.productName}-${index}`}
            product={product}
            onClick={onSelect}
          />
        ))}
      </div>
    </section>
  );
}