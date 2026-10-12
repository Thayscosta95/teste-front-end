
import { useState } from "react";

// COMPONENTES
import { Header } from "./components/header/header";
import { HeroBanner } from "./components/HeroBanner/HeroBanner";
import { Categories } from "./components/Categories/Categories";
import { ProductList } from "./components/productList/ProductList";
import { Partners } from "./components/Partners/Partners";
import { Brands } from "./components/Brand/Brands";
import { ProductModal } from "./components/productModal/ProductModal";
import { Newsletter } from "./components/Newsletter/Newsletter";
import { Footer } from "./components/Footer/Footer";

// TIPAGEM
import type { Product } from "./types/products";

// ESTILOS GLOBAIS
import "./styles/global.scss";

function App() {
  // Controla o produto selecionado para o popup
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  return (
    <>
      {/* =====================================
          1. CABEÇALHO
      ===================================== */}
      <Header />

      {/* =====================================
          2. BANNER PRINCIPAL - BLACK FRIDAY
      ===================================== */}
      <HeroBanner />

      {/* =====================================
          3. CATEGORIAS DE PRODUTOS
      ===================================== */}
      <Categories />

      <main>
        {/* =====================================
            4. PRIMEIRA VITRINE
            COM ABAS DE CATEGORIAS
        ===================================== */}
        <ProductList
          onSelect={setSelectedProduct}
          showCategories={true}
        />

        {/* =====================================
            5. PRIMEIRO CONJUNTO DE PARCEIROS
        ===================================== */}
        <Partners />

        {/* =====================================
            6. SEGUNDA VITRINE
            SEM ABAS DE CATEGORIAS
        ===================================== */}
        <ProductList
          onSelect={setSelectedProduct}
          showCategories={false}
        />

        {/* =====================================
            7. SEGUNDO CONJUNTO DE PARCEIROS
        ===================================== */}
        <Partners />

        {/* =====================================
            8. NAVEGUE POR MARCAS
        ===================================== */}
        <Brands />

        {/* =====================================
            9. TERCEIRA VITRINE
            SEM ABAS DE CATEGORIAS
        ===================================== */}
        <ProductList
          onSelect={setSelectedProduct}
          showCategories={false}
        />
      </main>
        {/* NEWSLETTER */}
      <Newsletter />

      {/* RODAPÉ */}
      <Footer />

      {/* =====================================
          10. POPUP DO PRODUTO
      ===================================== */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}

export default App;
