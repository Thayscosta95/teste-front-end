import "./Categories.scss";

const categories = [
  { name: "Tecnologia", icon: "/tecnologia.png" },
  { name: "Supermercado", icon: "/supermercado.png" },
  { name: "Bebidas", icon: "/bebidas.png" },
  { name: "Ferramentas", icon: "/ferramentas.png" },
  { name: "Saúde", icon: "/saude.png" },
  { name: "Esportes e Fitness", icon: "/esportes.png" },
  { name: "Moda", icon: "/moda.png" },
];

export function Categories() {
  return (
    <section className="categories" aria-label="Categorias de produtos">
      {categories.map((category, index) => (
        <div className="categories__item" key={category.name}>
          <div
            className={`categories__icon ${
              index === 0 ? "categories__icon--active" : ""
            }`}
          >
            <img src={category.icon} alt="" />
          </div>

          <span>{category.name}</span>
        </div>
      ))}
    </section>
  );
}