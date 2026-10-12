
import "./Footer.scss";

const footerGroups = [
  {
    title: "Institucional",
    items: ["Sobre Nós", "Movimento", "Trabalhe conosco"],
  },
  {
    title: "Ajuda",
    items: ["Suporte", "Fale Conosco", "Perguntas Frequentes"],
  },
  {
    title: "Termos",
    items: [
      "Termos e Condições",
      "Política de Privacidade",
      "Troca e Devolução",
    ],
  },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">

        <div className="footer__brand">
          <img
            src="/Logo.png"
            alt="Econverse"
            className="footer__logo"
          />

          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>

          <div className="footer__social">
            <span>Instagram</span>
            <span>Facebook</span>
            <span>LinkedIn</span>
          </div>
        </div>

        <div className="footer__links">
          {footerGroups.map((group) => (
            <div className="footer__column" key={group.title}>
              <h3>{group.title}</h3>

              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </footer>
  );
}
