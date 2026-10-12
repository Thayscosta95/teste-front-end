
import { useEffect, useRef, useState } from "react";
import type { Product } from "../../types/products";
import "./ProductModal.scss";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export function ProductModal({
  product,
  onClose,
}: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousFocus = document.activeElement;

    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);

      if (previousFocus instanceof HTMLElement) {
        previousFocus.focus();
      }
    };
  }, [onClose]);

  const formattedPrice = product.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  function decreaseQuantity() {
    setQuantity((previous) => Math.max(1, previous - 1));
  }

  function increaseQuantity() {
    setQuantity((previous) => previous + 1);
  }

  return (
    <div
      className="modal-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-product-title"
        aria-describedby="modal-product-description"
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="modal-content__close"
          onClick={onClose}
          aria-label="Fechar popup"
        >
          ×
        </button>

        <div className="modal-content__image">
          <img
            src={product.photo}
            alt={product.productName}
          />
        </div>

        <div className="modal-content__details">
          <h2 id="modal-product-title">
            {product.productName}
          </h2>

          <strong className="modal-content__price">
            {formattedPrice}
          </strong>

          <p id="modal-product-description">
            {product.descriptionShort}
          </p>

          <p className="modal-content__more">
            Veja mais detalhes do produto
          </p>

          <div className="modal-content__purchase">
            <div
              className="modal-content__quantity"
              aria-label="Quantidade do produto"
            >
              <button
                type="button"
                onClick={decreaseQuantity}
                disabled={quantity === 1}
                aria-label="Diminuir quantidade"
              >
                −
              </button>

              <span aria-live="polite">
                {String(quantity).padStart(2, "0")}
              </span>

              <button
                type="button"
                onClick={increaseQuantity}
                aria-label="Aumentar quantidade"
              >
                +
              </button>
            </div>

            <button
              type="button"
              className="modal-content__buy"
              onClick={() => {
                // Carrinho não implementado neste desafio.
              }}
            >
              COMPRAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
