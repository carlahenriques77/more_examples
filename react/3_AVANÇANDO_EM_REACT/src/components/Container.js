const Container = ( { children, someValue } ) => {
  return (
    <div>
        <h2>Container</h2>
        {children}
        {/* Making this made the Content somehow appear inside the <Container></Container> */}
        {/* Note: It HAS to be called "children", even though it wasn't said */}
        <p>Some Value is: {someValue}</p>
    </div>
  )
}

export default Container