import React from "react";
import './ProductList.css'

const products = [
                  { id: 1, name: "Laptop", description: "High-performance laptop for professionals.", price: 1200 },
                  { id: 2, name: "Air Pods", description: "High Quality Earbuds.", price: 200 },
                  { id: 3, name: "Nintendo Switch", description: "Gaming console made by Nintendo.", price: 1200 },
                  { id: 4, name: "Drawing Tablet", description: "Tablet used for digital artists.", price: 1200 },
                  { id: 5, name: "Keyboard", description: "A peripheral input device for PCs, Laptops, and other compatible electronics.", price: 1200 }
                  ];

function ProductList() {
  return (
    products.map(product =>
        <div key={product.id} className="product">
            <h2>{product.name}</h2>
            <h3>${product.price}</h3>
            <p>{product.description}</p>
        </div>
      )
  )
}

export default ProductList;
