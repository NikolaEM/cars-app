import AppCars from "../pages/AppCars";

function Car({
  id,
  brand,
  model,
  year,
  maxSpeed,
  isAutomatic,
  engine,
  numberOfDoors,
}) {
  return (
    <ul>
      <li>
        {brand} {model}: year:{year},max speed:{maxSpeed},is it automatic:
        {isAutomatic},fuel:{engine}
      </li>
    </ul>
  );
}
export default Car;