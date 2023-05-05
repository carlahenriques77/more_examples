// import / style
import "./App.css";

// import / hooks
import { useState, useEffect } from "react";

// 4 - custom hook import
import { JSXuseFetch } from "./hooks/useFetch";

const basicUrl = "http://localhost:3000/products";
// Getting the Url of the API

function App() {
  const [theProducts, setTheProducts] = useState([]);

  // 4 - custom hook
  const {
    customData: hookItems,
    httpConfig,
    customLoading,
    customError,
  } = JSXuseFetch(basicUrl);
  // "someData" *must* have the same name as the "data" from the JSXuseFetch

  const [addName, setAddName] = useState("");
  const [addPrice, setAddPrice] = useState("");

  // 1 - "restoring" productData

  // New method made to work lol
  // useEffect(() => {
  //   async function fetchData() {
  //     const apiResponse = await fetch(basicUrl);
  //     (1, "apiResponse");
  //     (apiResponse);
  //     // shows the "Responde" with Cors and Url

  //     const productData = await apiResponse.json();
  //     // He said that it would be needed to turn it into an Object so it can be used on the JavaScript
  //     (2, "productData");
  //     (productData);
  //     // shows the products

  //     setTheProducts(productData);
  //     (3, "setTheProducts");
  //     (setTheProducts);
  //     // nothing much, as expected from a "set" type
  //   }

  //   fetchData();
  //   (4, "fetchData");
  //   (fetchData);
  //   // shows this code
  // }, [setTheProducts]);
  // // He left his dependency empty... How odd

  // Commented for the time being.
  //Maybe he did it to use the new Custom one?

  // 2 - add products
  const handleSubmit = async (handleE) => {
    handleE.preventDefault();

    const sendProduct = {
      name: addName,
      price: addPrice,
    };
    // It needs to be called the same thing as the "db.json" stuff. In this case, "name" and "price". Otherwise, it won't show, as the Info being added in the Api will be different

    // he said that this const would "take it to the backend"
    // it's also said that if the "things" have the same name from the object keys, it won't be needed to change it to, for example, "name: name"
    // I will try to change it anyway for clarity reasons

    // (5, "sendProduct");
    // (sendProduct);
    // shows the "sent" Name and Price
    // It's noted that it will *only* show it when you submit the Form, as it is on the "handleSubmit" area

    // const handleResponse = await fetch(basicUrl, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(sendProduct),
    // });
    // // When they Submit the form, it will add an Item to our Api. Very sick, right?

    // // 3 - dynamic loading
    // const addedProduct = await handleResponse.json();

    // setTheProducts((prevProducts) => [...prevProducts, addedProduct]);

    // Oh, with this, now it is added Instantly, without needing to Reload the Page anymore...
    // I wonder how it works? It's difficulty to say because I can't see it clearly...

    // 5 - "reactoring" post
    httpConfig(sendProduct, "POST");

    setAddName("");
    setAddPrice("");
    // Clear the Input when the Submit is made
  };

  // 08 - Challenge 06
  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  };

  console.log(1, "customError");
  console.log(customError);
  console.log(2, "handleRemove");
  console.log(handleRemove);
  console.log(3, "customLoading");
  console.log(customLoading);

  return (
    <div className="App">
      <h1>List of Products</h1>
      {/* 6 - loading */}
      {customLoading && <p>Loading...</p>}
      {customError && <p>{customError}</p>}
      {/* He said this while writing it: */}
      {/* "If loading is True", which might mean that this Code is a verification of it, which can show the Paragraph loading or not */}
      {!customError && !customLoading && (
        // Will it work? It looks a bit... Off
        // Update: It didn't lol
        // Update of the Update: Now it look like it did
        <ul>
          {hookItems &&
            hookItems.map((productLi) => (
              // changed from "theProducts" to "hookItems"
              //  because of an Error of "data" being "null", it was changed from "hookItems" to "hookItems && hookItems"
              <li key={productLi.id}>
                {productLi.name} - R$: {productLi.price}
                <button onClick={() => handleRemove(productLi.id)}>
                  Delete
                </button>
              </li>
            ))}
        </ul>
      )}
      {/* Probably to only Exibit the List when the Loading isn't activated */}

      <div className="add-product">
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="">
            Product Name:
            {!customLoading && (
              <input
                type="text"
                value={addName}
                name="inputText"
                id=""
                onChange={(onChangeE) => setAddName(onChangeE.target.value)}
              />
            )}
            {customLoading && <input type="text" name="fakeInput" disabled />}
          </label>
          <label htmlFor="">
            Product Price:
            {!customLoading && (
              <input
                type="number"
                value={addPrice}
                name="inputNumber"
                id=""
                onChange={(onChangeI) => setAddPrice(onChangeI.target.value)}
              />
            )}
            {customLoading && <input type="number" name="fakeInput" disabled />}
          </label>
          {/* 7 - loading state on post */}
          {/* He was saying something about "adding 2 of the same product by mistake" while writing the "loading state" comment. Maybe whatever he will do will be related? */}
          {!customLoading && <input type="submit" value="Add Product" />}
          {customLoading && (
            <input type="submit" disabled value="Processing..." />
          )}
          {/* If it's *not* loading, then the Button will appear */}
          {/* Updated: This way, the Button won't work while it's Loading while it still exists onScreen */}
        </form>
      </div>
    </div>
  );
}

export default App;
