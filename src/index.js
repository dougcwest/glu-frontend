import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PostsIndex from "./components/posts-index";
import Header from "./components/header";
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <BrowserRouter>
    <Header>
      <Switch>
        <Route path='/' component={PostsIndex} />
      </Switch>
    </Header>
  </BrowserRouter>,
  document.getElementById('root')
);