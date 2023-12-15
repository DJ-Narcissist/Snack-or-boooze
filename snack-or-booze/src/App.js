import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";
import FoodForm from "./AddItem";
import NotFound from "./NotFound";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        let snacks = await SnackOrBoozeApi.getSnacks();
        let drinks = await SnackOrBoozeApi.getDrinks();
        setSnacks(snacks);
        setDrinks(drinks);
      } catch (error) {
        // Handle errors if needed
      } finally {
        setIsLoading(false); // Set Loading to false after both snacks and drinks are loaded
      }
    }
    getData();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route exact path="/snacks">
              <Menu snacks={snacks} title="Snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu drinks={drinks} title="Drinks" />
            </Route>
            <Route path="/snacks/:id">
              <Snack items={snacks} cantFind="/snacks" />
            </Route>
            <Route path="/drinks/:id">
              <Snack items={drinks} cantFind="/drinks" />
            </Route>
            <Route exact path="/add">
              <FoodForm />
            </Route>
            <Route path="/*">
              <NotFound />
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
      console.log(snacks)
    </div>
  );
}

export default App;
