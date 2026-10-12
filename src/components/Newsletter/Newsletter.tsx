
import { useState, type FormEvent } from "react";
import "./Newsletter.scss";

export function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!accepted) {
      setMessage("Você precisa aceitar os termos e condições.");
      return;
    }

    // Não existe uma API de cadastro fornecida no desafio.
    setMessage("Formulário validado. Cadastro não enviado.");
  }

  return (
    <section className="newsletter" aria-labelledby="newsletter-title">
      <div className="newsletter__container">
        <div className="newsletter__content">
          <h2 id="newsletter-title">
            Inscreva-se na nossa newsletter
          </h2>

          <p>
            Assine a nossa newsletter e receba as novidades
            e conteúdos exclusivos da Econverse.
          </p>
        </div>

        <form className="newsletter__form" onSubmit={handleSubmit}>
          <div className="newsletter__fields">
            <input
              type="text"
              placeholder="Digite seu nome"
              aria-label="Seu nome"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Digite seu e-mail"
              aria-label="Seu e-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <button type="submit">INSCREVER</button>
          </div>

          <label className="newsletter__terms">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(event) => setAccepted(event.target.checked)}
            />
            Aceito os termos e condições
          </label>

          {message && (
            <p className="newsletter__message" role="status">
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
