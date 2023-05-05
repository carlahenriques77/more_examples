// import / style / css
import "./App.css";
import Car from "./components/Car";

// import / components

const App = () => {

    const cCars = [
        { id: 1, carName: 'HB20', carKM: 0, carColor: "pink"},
        { id: 2, carName: 'Uno Attractive', carKM: 47000, carColor: "rainbow"},
        { id: 3, carName: 'Gol G4', carKM: 666000, carColor: "black"}
    ];

  return (
    <div className="App">
        <h1>
            Cars Showroom
        </h1>
        <div className="car-container">
            {cCars.map((mapCar) => (
                <Car pCar={mapCar}/>
            ))}
        </div>
    </div>
  )
}

export default App