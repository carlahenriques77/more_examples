// import / style
import "./App.css";

// import / "packages" / "routes"
// 1 - react router config
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import / component
import Navbar from "./components/Navbar";

// import / Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      {/* Things outside from the "Routes" will be repeated in every Page. Useful for Headers and Footers */}
      <BrowserRouter>
        {/* 2 - links with react router */}
        <Navbar />
        {/* "Because it has Elements from React Router, the Navbar must stay inside here, or something like that(?)" */}
        {/* This place repeats itself on the Pages, so it's okay */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Oh, I get it. The "path=/" means that it will be the Starter Page, has it has nothing else on it(?), while the "path=/about" means another Page, has it has something written on it */}
          {/* - It's noted that it can only seems to have one of "path=/" */}
          {/* - We can switch it manually by Editing the Url. We need yet to learn how to switch by other means... */}
          <Route path="/About" element={<About />} />
          {/* How to use the ["BrowserRouter", "Routes", "Route"] */}
          {/* If using React Router, "Pages" will be the Name of the Folder of the "Pages / Components". Maybe you can still use "Components" if it isn't a Page(?) */}

          {/*  4 - dynamic route */}
          <Route path="/Products/:productID" element={<Product />} />
          {/* Apparently, the Path really don't need to have the same Name as the Element */}
          {/* In this case, path="/Products/:id" *must* be called "products" because of the "data - db.json - products". It can be renamed if you change the products name on the json file. If it ins't "products", then the "product" page 'won't load'  */}

          {/* 6 - nested route */}
          <Route path="/Products/:productID/info" element={<Info />} />

          {/* 7 - no match route */}
          <Route path="*" element={<NotFound />} />
          {/* Route made for when the Page is "NotFound", Like when it happens when they input a Link that doesn't exist(?) */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
