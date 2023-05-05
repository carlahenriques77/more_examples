// imports

const CarDetailsExample02 = ({ exBrand, exKm, exColor, exNewCar }) => {
    return (
      <div>
          <h2>CarDetailsExample02</h2>
          <ul>
              <li>
                  Brand: {exBrand}
              </li>
              <li>
                  Km: {exKm}
              </li>
              <li>
                  Color: {exColor}
              </li>
          </ul>
          {exNewCar && <p>New Kart</p>}
      </div>
    )
  }
//   A more Simple result
  
  export default CarDetailsExample02