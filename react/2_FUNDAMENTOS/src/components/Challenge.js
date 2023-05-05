const Challenge = () => {
    const cNumA = 10
    const cNumB = 15
  return (
    <div>
        <p>A: {cNumA}</p>
        <p>B: {cNumB}</p>
        <button onClick={() => console.log(cNumA + cNumB)}>10 + 15 Button</button>
    </div>
  )
}

export default Challenge