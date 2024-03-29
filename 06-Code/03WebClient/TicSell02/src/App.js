import React from 'react';

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from './pages/costumers/userList'
import UserRegister from './pages/costumers/userRegister'

function App() {
  return (
    <Router>
      <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/userRegister" component={UserRegister} />
      </div>
    </Router>
  );
}

export default App;