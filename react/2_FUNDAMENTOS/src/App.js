// components
import FirstComponent from "./components/FirstComponent"
import TemplateExpressions from "./components/TemplateExpressions";
import MyComponent from "./components/MyComponent";
import Events from "./components/Events";
import Challenge from "./components/Challenge";

// styles / css
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>App.js Text</h1>
      <FirstComponent />
      <TemplateExpressions />
      {/* Oh, when I was Writing it and Pressed "Tab", it  also did the "Import" part */}
      <MyComponent />
      <Events />
      <Challenge />
    </div>
  );
}

export default App;
