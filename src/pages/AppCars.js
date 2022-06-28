import Car from "../components/Car";
import React, { useState, useEffect, useHistory } from "react";
import CarService from "../Services/CarService";

function AppCars() {
  const [cars, setCars] = useState([]);

  const history = useHistory();

  useEffect(() => {
    async function getCars() {
      try {
        const cars = await CarService.getAll();

        setCars(cars);
      } catch (error) {
        console.log(error);
      }
    }

    getCars();
  }, []);

  return (
    <div>
    <ul>
      {cars.map((car) =>
      <li  key={car.id}>
        <span>Brand: {car.brand}</span>
        <span>Model: {car.model}</span>
        <span>Year: {car.year}</span>
        <span>Max Speed: {car.maxSpeed}</span>
        <span>Is it automatic: {car.isAutomatic}</span>
        <span>Engine: {car.engine}</span>
      </li>)}
    
    </ul>
    </div>
  )
}

export default AppCars;