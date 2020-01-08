import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./views/index";

import NoMatchPage from "./views/nomatch";

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />

            <Route component={NoMatchPage} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
