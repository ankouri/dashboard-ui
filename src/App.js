
import Home from './pages/home/Home';
import  React from 'react';
import UserList from './pages/userList/UserList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProductList from './pages/productList/ProductList';
import Login from './pages/auth/Login';
import Dashboard from './components/dashboard/Dashboard';


function App() {
  return (
    <Router>
         <Switch >
          <Route path="/dashboard" exact>
            <Home><Dashboard/></Home> 
          </Route>
          <Route path="/users" exact>
          <Home><UserList /></Home> 
          </Route>
          <Route path="/products" exact>
          <Home><ProductList /></Home>
          </Route>
          <Route path="/" exact>
            <Login />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
