
# Desafio Front-End — Econverse

Projeto desenvolvido como parte do desafio técnico Front-End da Econverse, com o objetivo de reproduzir uma interface de e-commerce baseada no layout disponibilizado no Figma.

## Demonstração

Acesse o projeto publicado:

https://teste-front-end-snowy-beta.vercel.app/

## Tecnologias utilizadas

- React
- TypeScript
- Vite
- Sass (SCSS)
- CSS Grid e Flexbox
- Git e GitHub
- Vercel

## Funcionalidades

- Interface de e-commerce baseada no Figma
- Componentes reutilizáveis
- Listagem de produtos consumidos de um JSON externo
- Carrossel de produtos
- Popup com informações do produto selecionado
- Controle de quantidade no popup
- Layout responsivo
- Seções de categorias, parceiros e marcas
- Formulário visual de newsletter

## Como executar localmente

Clone o repositório:

```bash
git clone https://github.com/Thayscosta95/teste-front-end.git
```

Acesse a pasta:

```bash
cd teste-front-end
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor:

```bash
npm run dev
```

Abra o endereço indicado no terminal.

## Validação

Para verificar o código:

```bash
npm run lint
```

Para gerar a versão de produção:

```bash
npm run build
```

## Integração com a API

Os produtos são carregados dinamicamente do JSON oficial da Econverse.

Durante o desenvolvimento, o Vite utiliza um proxy para encaminhar as requisições. Na versão publicada, a Vercel utiliza regras de rewrite definidas em `vercel.json`.

## Observações

A interface foi desenvolvida com React, TypeScript e Sass, sem bibliotecas prontas de componentes visuais.

O botão de compra do popup representa a interação visual solicitada no desafio; não há integração com checkout ou processamento de pagamentos.
