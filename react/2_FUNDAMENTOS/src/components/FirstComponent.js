// Imports / Components
import MyComponent from "./MyComponent";

// StyleSheet

const FirstComponent = () => {
    // Note: The Components "normally" have Camel Case on them, like this one

    // "This Function does that"
    
    return (
        // Cool Div
        <div>
            <h1>Component</h1>
            <p className="random-paragraph">My Text</p>
            {/* The Class is called ClassName in React */}
            {/* The Comment is weird here, too */}

            <MyComponent />

        </div> // Must be Inside a Div because of the JSX thing
               // Otherwise an Error will happen
    );
};

export default FirstComponent;