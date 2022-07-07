import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Comp/Nav'
import Home from "./Pages/Home";


function App() {

  return (
    <>
       <Router>
        <Nav/>
          <Switch>
            <Route path="/" component={Home} exact></Route>
          </Switch>
      </Router>
    
    </>
  )
}

export default App;