
import "./Brands.scss";

const brands = Array.from({ length: 5 }, (_, index) => index);

export function Brands() {
  return (
    <section className="brands" aria-labelledby="brands-title">
      <h2 id="brands-title">Navegue por marcas</h2>

      <div className="brands__list">
        {brands.map((brand) => (
          <div className="brands__item" key={brand}>
            <img
              src="/Logo.png"
              alt="Econverse"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
