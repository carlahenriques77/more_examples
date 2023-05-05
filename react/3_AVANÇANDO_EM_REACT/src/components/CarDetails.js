// imports

const CarDetails = (pApropsCar) => {
  return (
    <div>
        <h2>CarDetails</h2>
        <ul>
            <li>
                Brand: {pApropsCar.ballsBrand}
            </li>
            <li>
                Km: {pApropsCar.ballsKM}
            </li>
            <li>
                Color: {pApropsCar.ballsColor}
            </li>
        </ul>
    </div>
  )
}

export default CarDetails