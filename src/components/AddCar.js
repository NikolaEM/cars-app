import React, { useState, useEffect, useHistory } from "react";

import CarService from "../Services/CarService";

function AddCar() {
  const [newCar, setNewCar] = useState({
    brand: "",
    model: "",
    year: "",
    maxSpeed: "",
    isAutomatic: "",
    engine: "",
    numberOfDoors: "",
  });
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await CarService.add(newCar);

    if (!data) {
      alert("New car is not created");
      return;
    }

    history.push("/cars");


  };

  const handleReset = () => {
    setNewCar({
      brand: "",
      model: "",
      year: "",
      maxSpeed: "",
      isAutomatic: "",
      engine: "",
      numberOfDoors: "",
    });
  };

  const getRange = (startYear, now) => Array.from({ length: now - startYear + 1 }, (v, i) => now - i);

  const handlePreview = () => {
    alert(JSON.stringify(newCar))
}
  
  return (
    <div>
      <h2>Add new</h2>
      <form onSubmit={handleSubmit}>
        <input
          required
          minLength={2}
          value={newCar.brand}
          placeholder="Car brand"
          onChange={({ target }) =>
            setNewCar({ ...newCar, brand: target.value })
          }
        />
        <input
          required
          minLength={2}
          value={newCar.model}
          placeholder="Model of car"
          onChange={({ target }) =>
            setNewCar({ ...newCar, model: target.value })
          }
        />

<select
            required
            name="year"
            value={newCar.year}
            onChange={(e) => setNewCar({ ...newCar, [e.target.name]: e.target.value })}
          >
            <option value="">Select year</option>
            {getRange(1990, new Date().getFullYear()).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
       
          <label>
        <input required type="checkbox" name="isAutomatic" />
        Automatic
      </label>
      
      <label>
        <input required type="checkbox" name="isAutomatic" />
        Manuel
      </label>
      <div>
      <input required type="radio" value="diesel" name="engine" /> Diesel
        <input required type="radio" value="petrol" name="engine" /> Petrol
        <input required type="radio" value="electric" name="engine" /> Electric
        <input required type="radio" value="hibrid" name="engine" /> Hibrid
      </div>

        <button >Add Car</button>
        <button type="button" onClick={handleReset}> Reset Form </button>
        <button onClick={handlePreview} >Preview</button>
       
       
      </form>
    </div>
  );
}

export default AddCar;