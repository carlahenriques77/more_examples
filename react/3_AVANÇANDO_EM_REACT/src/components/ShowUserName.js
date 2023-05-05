const ShowUserName = (pAprops) => {
  return (
    <div>
        <h2>Name of the User: {pAprops.ball}</h2>
        {/* Now the Name appears on the Site... Odd, indeed */}
        {/* It somehow got it from there with only the "pAprops" thing */}
        <h2>Name of the User: {pAprops.ball}</h2>
    </div>
  )
}

export default ShowUserName