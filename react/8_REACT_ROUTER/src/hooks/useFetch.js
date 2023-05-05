import { useState, useEffect } from "react";

// 4 - custom hook
export const JSXuseFetch = (customUrl) => {
  const [customData, setCustomData] = useState(null);

  // 5 - "refactoring" posts
  const [customConfig, setCustomConfig] = useState(null);
  const [customMethod, setCustomMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  // 6 - loading

  const [customLoading, setCustomLoading] = useState(false);

  // 7 - "treating" errors
  const [customError, setCustomError] = useState(null);

  // 8 - challenge 06
  const [itemId, setItemId] = useState(null);

  const httpConfig = (httpData, method) => {
    if (method === "POST") {
      setCustomConfig({
        method,

        headers: {
          "Content-type": "application/json",
        },

        body: JSON.stringify(httpData),
      });

      setCustomMethod(method);
    } else if (method === "DELETE") {
      setCustomConfig({
        method,

        headers: {
          "Content-type": "application/json",
        },
      });

      setCustomMethod(method);
      setItemId(httpData);
    }
  };
  // The Error was here. The "setCustomConfig" "Method" *must* be called *customMethod*. How weird... But it makes sense. The odd part, is that when you put the Cursor over it, the property changes. The Code still works, but the property changes when you change the other "customMethod" names... Another problem, is that if it isn't all customMethod, the Code will not work the first try, but will on the next tries. So... Better name it customMethod. Maybe "data" has a related problem(?) No... The error was just an React thing. Besides, it has to be called *method*, still...

  useEffect(() => {
    const fetchData = async () => {
      // 6 - loading
      setCustomLoading(true);
      // I still don't get why it was "false" intially... Maybe to not start it too soon?

      try {
        const customResponse = await fetch(customUrl);

        const customJson = await customResponse.json();

        setCustomData(customJson);
      } catch (tryCatchError) {
        console.log(tryCatchError.message);
        // Shows the Error on Console. Not *our* error Message. It's the *actual* error, if you get what I mean

        setCustomError("Error while Loading Data");
      }
      // Not sure what "try / catch" is, yet...

      setCustomLoading(false);
      // He said that, when it Loads and things are Shown on the Screen, then, you won't need it to load anymore... That's why it's on "false" again
    };

    fetchData();
  }, [customUrl, callFetch]);

  // 5 - "refactoring" posts
  useEffect(() => {
    const httpRequest = async () => {
      // How he fixed the "await async problem"

      let letJson;

      if (customMethod === "POST") {
        let fetchOptions = [customUrl, customConfig];
        // "Dynamic" thing. He said that with it, we could take an [Different Url, Configurations of where the Body and Data goes, Can insert different Data here]

        const anotherResponse = await fetch(...fetchOptions);
        // "requisition"

        letJson = await anotherResponse.json();
      } else if (customMethod === "DELETE") {
        // Odd... Now this "method" is a const. I hope it doesn't give an Error because of it...

        const deleteUrl = `${customUrl}/${itemId}`;
        // It *has* to be " `` "

        console.log(5, "deletUrl");
        console.log(deleteUrl);
        // 5 'deletUrl'
        // useFetch.js:101 http://localhost:3000/products/4

        const deleteResponse = await fetch(deleteUrl, customConfig);

        letJson = await deleteResponse.json();
      }

      setCallFetch(letJson);
    };

    httpRequest();
  }, [customConfig, customUrl, customMethod, itemId]);
  // He said that, whenever there is an "Alteration" on the "customConfig", this useEffect will be called(?) and the "customConfig" will be "mapped"

  return { customData, httpConfig, customLoading, customError };
  // Oh yeah, if you write something here, then you will be able to use it on the "App.js"
};
