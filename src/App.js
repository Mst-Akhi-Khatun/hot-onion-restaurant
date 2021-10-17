import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/FoodNav/FoodNav";
import Breakfast from "./components/Breakfast/Breakfast";
import Lunch from "./components/Lunch/Lunch";
import Dinner from "./components/Dinner/Dinner";

function App() {
  return (
    <div className="overflow-hidden">
      <Router>
      <Header></Header>
      <Navbar></Navbar>
        <Switch>
          <Route path="/breakfast">
            <Breakfast></Breakfast>
          </Route>
          <Route path="/lunch">
            <Lunch></Lunch>
          </Route>
          <Route path="/dinner">
            <Dinner></Dinner>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
