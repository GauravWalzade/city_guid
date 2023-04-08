import React from "react";
import Navbar from "./components/layout/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/layout/Footer";
import "../src/App.css";
import {Switch,Route} from 'react-router-dom';

import Home from './components/pages/Home';
import News from './components/pages/News';
import Contacts from './components/pages/Contacts';
import Details from './components/pages/Details';
import NotFoundPage from './components/pages/NotFoundPage';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/news" component={News}/>
        <Route path="/contacts" component={Contacts}/>
        <Route path="/details" component={Details}/>
        <Route  component={NotFoundPage}/>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
