import { useState } from "react"

const ConditionalRender = () => {
    const [cShow] = useState(false);
    // Oh, the useState can be Imported automatically, too
    // I bet more things can, too
    const [cName, setStateName] = useState("Cool Name");

  return (
    <div>
        <h1>Is this going to show?</h1>
        {cShow && <p>If it's true, then yes</p>}
        {!cShow && <p>The Const useState is False now</p>}
        {/* Odd, didn't knew that you could do that - Very weird, indeed */}
        {/* Apparently, if it's False, it will somehow not show it? */}

        <h1>If / else spot</h1>

        {cName === "Someone Name" ? (
            <div>
              <p>
                The Name is Someone Name lol
              </p>
            </div>
        ) : (
          <div>
          <p>
            Is that the "else" part?
          </p>
        </div>
        )}
        {/* How to do the "if / else" on React */}
        {/* Basically, {cName === "Content here" ? () : ()} */}
        <button onClick={() => setStateName("Someone Name")}>Some Name Button</button>
        {/* This button will set the cName useState("Cool Name") to someone name, thus making the "If" work and displaying the if Message */}
    </div>
  )
}

export default ConditionalRender