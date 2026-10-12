
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
  const formattedPrice = product.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <article className="product-card">
      <img
        className="product-card__image"
        src={product.photo}
        alt={product.productName}
      />

      <div className="product-card__content">
        <p className="product-card__description">
          {product.descriptionShort}
        </p>

        <strong className="product-card__price">
          {formattedPrice}
        </strong>

        <button
          className="product-card__button"
          type="button"
          onClick={() => onClick(product)}
        >
          COMPRAR
        </button>
      </div>
    </article>
  );
}
