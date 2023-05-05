import React from "react";

// import / router dom
import { Link } from "react-router-dom";

// import / hooks
import { JSXuseFetch } from "../hooks/useFetch";

// import / style
import "./Home.css";

function Home() {
  // const handleClick01 = (event) => {
  //   event.currentTarget.classList.toggle("bg-salmon");
  // };
  // onClick handleClick01 to work lol

  // 3 - loading of data(?)
  const homeUrl = "http://localhost:3000/products";

  const {
    customData: firstOneProducts,
    customLoading,
    customError,
  } = JSXuseFetch(homeUrl);
  // Odd... His one looked like an "[]"

  //   console.log(1, "firstOneProducts");
  //   console.log(firstOneProducts);
  // (3) [{…}, {…}, {…}]
  // I don't get it... When did it get the Data from the Db.json?
  // Ohh.... What the... For some reason, the *FIRST* one decides which one will be the "Representative" of the Products. I have no idea why it's like that...

  return (
    <div>
      <h1>Products</h1>

      {customError && <p>{customError}</p>}
      {/* "debug" */}
      <ul className="products">
        {firstOneProducts &&
          firstOneProducts.map((mapItem) => (
            <li key={mapItem.id}>
              <h2>{mapItem.name}</h2>
              <p>R$: {mapItem.price}</p>
              <p>ID: {mapItem.id}</p>
              {/* 4 - Dynamic Route */}
              <Link to={`/products/${mapItem.id}`}>Details: ID</Link>
              {/* <Link to={`/products/${mapItem.name}`}>Details: Name</Link> */}
              {/* So... The "/Products/:productID" is decided by this... */}
              {/* For some reason, our Api won't accept anything else in the Link besides the ID, which is very weird... I don't think it's related to anything in the "ReactRouterr" at all. Seems like just an json thing...  */}
              {/* Example:  */}
              {/* http://localhost:3000/products/2 will work, while... */}
              {/* http://localhost:3000/products/02, http://localhost:3000/products/product02 won't. Even changing the "id" to "iz" will make it stop working... */}
              {/* In theory, it might just be a json thing to only locate it by Name: "id" and nothing more. Even changing it to "ID" will make it unable to find the product */}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Home;
