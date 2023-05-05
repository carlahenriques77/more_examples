// import / style
import styles from './Car.module.css';
// An error will appear until the "styles" are used, which is nothing too big...

const Car = ({ pCar }) => {
  return (
    <div className={styles.card}>
        <h1>
            {pCar.carName}
        </h1>
        <p>
            KM: {pCar.carKM}
        </p>
        <p>
            Cor: {pCar.carColor}
        </p>
    </div>
  )
}

export default Car