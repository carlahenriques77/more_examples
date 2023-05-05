import React from "react";

// import / router dom
import { Link } from "react-router-dom";

// import / hooks(?)
import { useParams } from "react-router-dom";
import { JSXuseFetch } from "../hooks/useFetch";

function Product(props) {
  // 4 - Dynamic Route
  const { productID } = useParams();
  // This "productID" refers to the App.js;
  // <Route path="/Products/:productID" element={<Product />} />

  // 5 - Individual Data Loading
  const indivUrl = "http://localhost:3000/products/" + productID;

  const {
    customData: indivProduct,
    customLoading,
    customError,
  } = JSXuseFetch(indivUrl);

  console.log("1", "indivProduct");
  console.log(indivProduct);
  // Shows the specific / individual Product on the Console

  return (
    <div>
      <p>Product ID: {productID}</p>
      {/* Shows the Product ID on the Paragraph */}
      {/* ... Seems complicated... */}

      {customError && <p>Error Message Here</p>}
      {customLoading && <p>Loading...</p>}
      {indivProduct && (
        <div>
          <h1>Product Name: {indivProduct.name}</h1>
          <p>Price: {indivProduct.price}R$</p>
          {/* 6 - nested routes */}
          <Link to={`/products/${indivProduct.id}/info`}>More Information</Link>
        </div>
      )}
    </div>
  );
}

export default Product;
