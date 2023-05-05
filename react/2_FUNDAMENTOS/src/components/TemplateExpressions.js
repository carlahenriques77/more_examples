
// Imports here
import MyComponent from "./MyComponent";

const TemplateExpressions = () => { 

    const cName = "AnyNameHere"
    // Can be used like JavaScript
    const cData = {
        prNuAge: 31,
        prStrJob: "Janitor",
    };

    return (
        
        <div>
            <h1>
                insert {cName} here
                {/* How to apply it in the HTML / JSX */}
            </h1>
            <p>
                Your Age is: {cData.prNuAge}
            </p>
            <p>
                Your Job is: {cData.prStrJob}
            </p>
            <p>
                4 + 4 = {4 + 4}
            </p>
            <p>
                {console.log("JSX React")}
            </p>

            <MyComponent />

        </div> 
             
    );
};

export default TemplateExpressions;