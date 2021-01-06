import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MatomoProvider, createInstance } from "@datapunt/matomo-tracker-react";

import { Header } from "./Components";
import { ButtonPage, FormPage } from "./Pages";

const urlBase = process.env.REACT_APP_URL;
const siteId = process.env.REACT_APP_ID;

const instance = createInstance({
  urlBase,
  siteId,
});

function App() {
  return (
    <MatomoProvider value={instance}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <div>homePAge</div>
          </Route>
          <Route path="/button" exact>
            <ButtonPage />
          </Route>
          <Route path="/form" exact>
            <FormPage />
          </Route>
        </Switch>
      </Router>
    </MatomoProvider>
  );
}

export default App;
