import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Header, HomePageHeader } from "./components/presentation/Header";
import Footer from "./components/presentation/Footer";

import HomePage from "./views/index";

import BirdsPage from "./views/birds/index";
import BirdDetailPage from "./views/birds/detail";

import NoMatchPage from "./views/nomatch";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePageHeader} />
          <Route component={Header} />
        </Switch>
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />

            <Route exact path="/birds" component={BirdsPage} />
            <Route exact path="/birds/:slug" component={BirdDetailPage} />

            <Route component={NoMatchPage} />
          </Switch>
        </main>
        <Route component={Footer} />
      </div>
    </Router>
  );
}

export default App;
