import axios from "axios";

class CarService {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "localhost:3000",
    });
  }

  async getAll() {
    try {
      const { data } = await this.httpClient.get("/api/cars");

      return data;
    } catch (error) {
      return [];
    }
  }

  async add(newCar) {
    try {
      const { data } = await this.httpClient.post("/api/cars", newCar);

      return data;
    } catch (error) {
      console.log(error);
    }

    return null;
  }

  async get(id) {
    try {
      const { data } = await this.httpClient.get(`/api/cars/${id}`);

      return data;
    } catch (error) {
      console.log(error);
    }

    return null;
  }

 
 
}

export default CarService;