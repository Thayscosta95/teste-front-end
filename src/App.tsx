import { useState } from "react";
import { ProductList } from "./components/productList/ProductList";
import { ProductModal } from "./components/productModal/ProductModal";
import type { Product } from "./types/products";
import { Header } from "./components/header/header";
import "./styles/global.scss";
import { HeroBanner } from "./components/HeroBanner/HeroBanner";
import { Categories } from "./components/Categories/Categories";

function App() {
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);


  return (
    <>

    <Header />
   
      <HeroBanner />

      <Categories />

      
      <main>
        <ProductList onSelect={setSelectedProduct} />
      </main>

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