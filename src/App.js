import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppCars from "./pages/AppCars";
import Car from "./components/Car";
import AddCar from "./components/AddCar";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/cars">Cars</Link>
              </li>
              <li>
                <Link to="/add">Add Car</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/cars" exact>
              <AppCars />
            </Route>
            <Route path="/car" exact>
              <Car />
            </Route>
            <Route path="/add" exact>
              <AddCar />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
