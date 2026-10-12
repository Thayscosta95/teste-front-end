import type { Product } from "../../types/products";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export function ProductModal({
  product,
  onClose,
}: ProductModalProps) {
  return (
    <div className="modal-overlay">
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-label={product.productName}
      >
        <button onClick={onClose} aria-label="Fechar">
          X
        </button>

        <img src={product.photo} alt={product.productName} />

        <h2>{product.productName}</h2>
        <p>{product.descriptionShort}</p>

        <strong>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </strong>
      </div>
    </div>
  );
}