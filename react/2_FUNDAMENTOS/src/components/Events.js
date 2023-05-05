import React from 'react'

const Events = () => {

    const cHandleMyEvent = (paAnEvent) => {
        console.log(paAnEvent)
        console.log("Event Intiated")
    };

    const JSXRenderSomething = (paAnX) => {

        if(paAnX) {
            return <h1>Render this</h1>;
        } else {
            return <h1>Also Render this</h1>
        }
    };

    return (
        <div>
            <div>
                <button onClick={cHandleMyEvent}>Click01</button>
                {/* A way to do Events on React HTML */}
            </div>
            <div>
                <button onClick={() => console.log("Some Event")}>Click02</button>
                <button onClick={() => {
                    if(true) {
                        console.log("Complicated Code on HTML = Bad(?)")
                    }
                }}>Click03</button>
            </div>
            {JSXRenderSomething(true)}
            {JSXRenderSomething(false)}
            {/* How to Render it(??)
                I still don't quite get it, but...
                Both of them got into the HTML at the *End of the Page*
                I mostly don't get what the "True" and "False" was about here...
                Anyway, seems useful, somewhat */}
        </div>
    )
}

export default Events