import React from 'react'

const ChangeMessageState = ({cHandleHandleTheHandleMessage}) => {
    const cMessagess = ["L", "Do the L", "Octopus King"]
  return (
    <div>
        <button onClick={() => cHandleHandleTheHandleMessage(cMessagess[0])}>1</button>
        <button onClick={() => cHandleHandleTheHandleMessage(cMessagess[1])}>2</button>
        <button onClick={() => cHandleHandleTheHandleMessage(cMessagess[2])}>3</button>
    </div>
  )
}

export default ChangeMessageState