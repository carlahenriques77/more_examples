import React from 'react'

const Message = ({handleMessageThing}) => {
  return (
    <div>
        <p>
            The Message is: {handleMessageThing}
            </p>
    </div>
  )
}

export default Message