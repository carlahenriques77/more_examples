import React from 'react'

const Fragment = ( {pApropFragment} ) => {
                // Forgot the {}
  return (
    <>
        <h1>First</h1>
        <h2>Second</h2>
        <h4>{pApropFragment}</h4>
    </>
    // You can Remove the Divs by Deleting the Word
    // The Component will work Normally, but withou the Div
  )
}

export default Fragment