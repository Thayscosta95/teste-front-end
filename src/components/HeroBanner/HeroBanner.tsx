import "./HeroBanner.scss";

export function HeroBanner() {
  return (
    <section className="hero-banner">
      <div className="hero-banner__content">
        <h1>
          Venha conhecer nossas
          <br />
          promoções
        </h1>

        <p>
          <strong>50% Off</strong> nos produtos
        </p>

        <a href="#produtos">
          Ver produto
        </a>
      </div>
    </section>
  );
}