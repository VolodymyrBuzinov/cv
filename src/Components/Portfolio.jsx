import {
    BrowserRouter as Router,
    Switch,
    Route,   
  } from "react-router-dom";
import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About';
import Examples from './Examples/Examples';

export default function Portfolio () {
    return (<Router>
        <Header />
        <Switch>          
          <Route path="/about">
          <About />
          </Route>
          <Route path="/examples">
          <Examples />
          </Route>          
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
    
    </Router>);    
}