import "./header.scss";

const menuItems = [
  "Todas categorias",
  "Supermercado",
  "Livros",
  "Moda",
  "Lançamentos",
  "Ofertas do dia",
  "Assinatura",
];

export function Header() {
  return (
    <header className="header">
      <div className="header__container">


        <div className="header__benefits">
          <span>
            <img src="icone-compra-segura.png" alt="" />
            Compra <strong>100% segura</strong>
          </span>

          <span>
            <img src="/icone-frete-gratis.png" alt="" />
            <strong>Frete grátis</strong> acima de R$ 200
          </span>

          <span>
            <img src="/icone-cartao.png" alt="" />
            <strong>Parcele</strong> suas compras
          </span>
        </div>


        <div className="header__main">
          <a href="/" className="header__logo">
            <span className="header__logo-symbol">ec</span>
            <span>onverse</span>
          </a>

          <form
            className="header__search"
            role="search"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="search"
              placeholder="O que você está buscando?"
              aria-label="Buscar produtos"
            />

            <button type="submit" aria-label="Pesquisar">
              <SearchIcon />
            </button>
          </form>

          <div className="header__actions">
            <button type="button" aria-label="Pedidos">
              <img src="/icone-pedidos.png" alt="" />
            </button>

            <button type="button" aria-label="Favoritos">
              <img src="/icone-favoritos.png" alt="" />
            </button>

            <button type="button" aria-label="Minha conta">
              <img src="/icone-perfil.png" alt="" />
            </button>

            <button type="button" aria-label="Carrinho">
              <img src="/icone-carrinho.png" alt="" />
            </button>
          </div>
        </div>


        <nav className="header__nav" aria-label="Menu principal">
          {menuItems.map((item) => (
            <a
              href={item === "Ofertas do dia" ? "#produtos" : "#categorias"}
              key={item}
              className={
                item === "Ofertas do dia"
                  ? "header__nav-highlight"
                  : item === "Assinatura"
                    ? "header__nav-signature"
                    : ""
              }
            >
              {item === "Assinatura" && (
                <img src="/icone-assinatura.png" alt="" />
              )}
              {item}
            </a>
          ))}
        </nav>

      </div>
    </header>
  );
}

function SearchIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m16 16 5 5" />
    </svg>
  );
}