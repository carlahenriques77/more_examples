// import / hooks(?)

import { useState } from "react"

// import / styles / css

import "./App.css"

// import / components

import MyComponent from "./components/MyComponent"
import Title from "./components/Title"


const App = () => {

    const cnletter= 15

    const [canotherName] = useState("Name that Starts with M, I guess")

    const credTitle = true

  return (
    <div className="App">

        {/* Global CSS */}
        <h1>React CSS</h1>

        {/* CSS Component */}
        <MyComponent />
        
        <p>
            App.js Paragraph
        </p>
        {/* For some reason, this one got the CSS from the Component, too[which is very dumb] */}

        {/* Inline CSS */}
        <p style={{ 
        color: "magenta",
        padding: "25px",
        borderTop: "2px solid red"
        }}
        >
            Inline Paragraph01
        </p>
        <p style={{ 
            color: "magenta",
            padding: "25px",
            borderTop: "2px solid red"
        }}
        >
            Inline Paragraph02
        </p>

        {/* Dynamic Inline CSS */}
        <h2 style={cnletter < 10 ? ({color: "purple"}
        ) : ( {color: "greenyellow"})}>
            Dynamic CSS Inline
        </h2>
        <h2 style={cnletter > 10 ? ({color: "purple"}
        ) : ( {color: "greenyellow"})}>
        Dynamic CSS Inline
        </h2>
        {/* Basically, add "Rules" to it */}
        {/* Ex: In this case, if 'cnletter' was less than "10", the color of the 'h2' would be "greenyellow" */}
        <h2 style={canotherName === "Name that Starts with M, I guess" 
        ? ({color: "magenta", backgroundColor: "#000"}) : null }>
        Dynamic CSS Inline with Name
        </h2>
        {/* Can use "Null" for no CSS Changes */}

        {/* Dynamic Class */}
        <h2 className={credTitle ? "style-red-title" : "style-normal-title"}>
            H2 with "Dynamic Class"
        </h2>
        {/* An Interesting Code */}
        {/* It changes the Class based on wheter the Written thing is True or not */}
        {/* Can be done more specifically, ex: credTitle === true ? */}

        {/* CSS Modules */}
        <Title />
        <h2 className={['title-title']}>
            Any Title Name
        </h2>
        {/* The class won't work, as when used on a "module", it will be given an "unique ID" to the class, thus avoiding conflict in places with the same name an all that(?) */}
    </div>
  )
}

export default App