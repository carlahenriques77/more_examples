import React from 'react'

// styles / css
import "./MyComponent.css"

const MyComponent = () => {
  return (
    <div>
        <h1>CSS Component</h1>
        <p>MyComponent Paragraph</p>
        <p className="my-component-p">MyComponent Paragraph but with className</p>
    </div>
  )
}

export default MyComponent