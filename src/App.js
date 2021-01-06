import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./Components";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <div>homePAge</div>
        </Route>
        <Route path="/button" exact>
          <div>button</div>
        </Route>
        <Route path="/form" exact>
          <div>form</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
