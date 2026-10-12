import type { Product } from "../../types/products";
import "./ProductCard.scss";

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export function ProductCard({
  product,
  onClick,
}: ProductCardProps) {
  return (
    <article className="product-card">
      <img
        src={product.photo}
        alt={product.productName}
      />

      <h3>{product.productName}</h3>

      <p>{product.descriptionShort}</p>

      <p>
        {product.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>

      <button onClick={() => onClick(product)}>
        COMPRAR
      </button>
    </article>
  );
}