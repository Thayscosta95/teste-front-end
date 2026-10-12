
import { useEffect, useState } from "react";
import { getProducts } from "../../services/products";
import { ProductCard } from "../productCard/ProductCard";
import type { Product } from "../../types/products";
import "./ProductList.scss";

interface ProductListProps {
  onSelect: (product: Product) => void;
  showCategories?: boolean;
}

const categories = [
  "CELULAR",
  "ACESSÓRIOS",
  "TABLETS",
  "NOTEBOOKS",
  "TVS",
  "VER TODOS",
];

export function ProductList({
  onSelect,
  showCategories = true,
}: ProductListProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCount = 4;

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(() =>
        setError("Não foi possível carregar os produtos.")
      )
      .finally(() => setLoading(false));
  }, []);

  const visibleProducts = products.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  function nextProducts() {
    setCurrentIndex((previous) =>
      Math.min(
        previous + 1,
        Math.max(0, products.length - visibleCount)
      )
    );
  }

  function previousProducts() {
    setCurrentIndex((previous) =>
      Math.max(previous - 1, 0)
    );
  }

  return (
    <section className="product-list">
      {/* TÍTULO */}
      <div className="product-list__heading">
        <h2>Produtos relacionados</h2>
      </div>

      {/* ABAS OU SUBTÍTULO */}
      {showCategories ? (
        <div className="product-list__categories">
          {categories.map((category, index) => (
            <span
              key={category}
              className={index === 0 ? "active" : ""}
            >
              {category}
            </span>
          ))}
        </div>
      ) : (
        <p className="product-list__subtitle">
          Ver todos
        </p>
      )}

      {/* CARREGAMENTO */}
      {loading && <p>Carregando produtos...</p>}

      {/* ERRO */}
      {error && <p role="alert">{error}</p>}

      {/* LISTA VAZIA */}
      {!loading && !error && products.length === 0 && (
        <p>Nenhum produto encontrado.</p>
      )}

      {/* CARROSSEL */}
      {!loading && !error && products.length > 0 && (
        <div className="product-list__carousel">
          <button
            type="button"
            aria-label="Produtos anteriores"
            onClick={previousProducts}
            disabled={currentIndex === 0}
          >
            ‹
          </button>

          <div className="products-grid">
            {visibleProducts.map((product, index) => (
              <ProductCard
                key={`${product.productName}-${currentIndex + index}`}
                product={product}
                onClick={onSelect}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Próximos produtos"
            onClick={nextProducts}
            disabled={
              currentIndex + visibleCount >= products.length
            }
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
