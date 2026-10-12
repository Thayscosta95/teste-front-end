
import "./Partners.scss";

export function Partners() {
  return (
    <section className="partners" aria-label="Nossos parceiros">
      {[1, 2].map((item) => (
        <article className="partners__card" key={item}>
          <div className="partners__content">
            <h2>Parceiros</h2>

            <p>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>

            <a href="#produtos" className="partners__button">
              CONFIRA
            </a>
          </div>
        </article>
      ))}
    </section>
  );
}
