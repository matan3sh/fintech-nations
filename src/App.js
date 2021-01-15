import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from 'components/layout/Navbar';
import Footer from 'components/layout/Footer';
import { Home, Blogs } from 'components/pages';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/blogs' component={Blogs} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
