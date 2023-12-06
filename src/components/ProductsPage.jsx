// src/components/ProductsPage.jsx

import { useState } from "react";
import jsonData from "./../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const filterProducts = (term) => {
    const filtered = products.filter(item => {
        return item.name.toLowerCase().includes(term.toLowerCase());
    });
    console.log(filtered)
    setFilteredProducts(filtered);
  }

  const stockedProducts = (checked) => {
    if(checked) {
      const filtered = products.filter(item => {
          return item.inStock === true;
      });
      console.log(filtered)
      setFilteredProducts(filtered);
  } else {
      setFilteredProducts([...products]);
      }
  }

  return (
    <div>
      <SearchBar filterProducts={filterProducts} stockedProducts={stockedProducts}/>

      <ProductTable filteredProducts={filteredProducts}/>
    </div>
  );
}

export default ProductsPage;