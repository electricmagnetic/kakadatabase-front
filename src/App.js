import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header, HomePageHeader } from './components/presentation/Header';
import Footer from './components/presentation/Footer';

import HomePage from './views/index';

import AboutPage from './views/about';
import LegalPage from './views/legal';

import LearnPage from './views/learn/index';

import BirdsPage from './views/birds/index';
import BirdDetailPage from './views/birds/detail';

import ObservationsPage from './views/observations/index';
import ObservationDetailPage from './views/observations/detail';

import ReportPage from './views/report/index';

import NoMatchPage from './views/nomatch';

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

            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/legal" component={LegalPage} />

            <Route exact path="/learn" component={LearnPage} />

            <Route exact path="/birds" component={BirdsPage} />
            <Route exact path="/birds/:slug" component={BirdDetailPage} />

            <Route exact path="/observations" component={ObservationsPage} />
            <Route exact path="/observations/:slug" component={ObservationDetailPage} />

            <Route exact path="/report" component={ReportPage} />

            <Route component={NoMatchPage} />
          </Switch>
        </main>
        <Route component={Footer} />
      </div>
    </Router>
  );
}

export default App;
