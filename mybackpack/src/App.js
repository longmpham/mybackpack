import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/navbar.component";
import HomePage from "./components/views/homepage.component";
import ItemList from "./components/items-list.component";
import EditItem from "./components/edit-item.component";
import CreateItem from "./components/create-item.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <NavBar />     
      <Route path="/" exact component={HomePage} />
      <div className="container">
        <Route path="/list" component={ItemList} />
        <Route path="/edit/:id" component={EditItem} />
        <Route path="/create" component={CreateItem} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
