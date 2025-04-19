// Milan Harshil Jay and Jenil 
import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import IWatch from "./Pages/IWatch";
import IPhone from "./Pages/IPhone";
import Airpod from "./Pages/Airpod";
import Macbook from "./Pages/Macbook";
import Contact from './Pages/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/iwatch" component={IWatch} />
        <Route path="/iphone" component={IPhone} />
        <Route path="/airpod" component={Airpod} />
        <Route path="/macbook" component={Macbook} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
