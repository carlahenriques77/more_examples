// Import / hooks
import { useState } from "react"

const ManageData = () => {

    let lSomeData = 10
    // From Const to Let

    console.log(lSomeData)

    const [cNumber, setStateNumber] = useState(10)
    // Gave the "Number" a Value of 10

    console.log(cNumber)
    // Apparently, when the Button is Clicked, it will re-render it, thus making it Duplicate in the Console

  return (
    <div>
        <div>
            <p>
                Value01: {lSomeData}
            </p>
            <button onClick={() => (lSomeData = 15)}>Change the Value01</button>
            {/* He Changed the Const to a Let because he altered the Value */}
            {/* Didn't change the Value, it was still 10 */}
            {/* The useState did change it */}
        </div>
        <div>
            <p>
                Value02: {cNumber}
            </p>
            <button onClick={() =>setStateNumber(25)}>Change the Value02</button>
            {/* Clicking here will make them "Value02: {cNumber} = 10" go to 25 */}
        </div>
    </div>
  )
}

export default ManageData