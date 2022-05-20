import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import promise from "redux-promise";

import CategoryShow from "./components/category-show";
import PostsNew from "./components/posts-new";
import Header from "./components/header"
import reducers from "./reducers";
import Sidebar from './components/Sidebar';
import AllCharts from './components/all-charts';
import CommonalityCharts from './components/commonality-charts';
import MembersIndex from './components/members-index';
import MembersShow from './components/members-show';
import Inspiration from './components/inspiration';
import Authentication from './components/authentication';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 60px minmax(0, 1fr);
`;

const Main = styled.div`
  background: white;
  display: grid;
  grid-template-columns: 260px auto;
`;

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <Route path='/login' component={Authentication} />
      <Container>
        <Header />
          <Main>
          <Sidebar />  
            <Switch>
              <Route path='/members/:id' component={MembersShow} />
              <Route path='/members' component={MembersIndex} />
              <Route path='/commonality' component={CommonalityCharts} />
              <Route path='/charts' component={AllCharts} />
              <Route path='/inspiration' component={Inspiration} />
              <Route path='/create-member' component={PostsNew} />
              <Route path='/categories/:category' component={CategoryShow} />
              <Route path='/' component={MembersIndex} />
            </Switch>
          </Main>
      </Container>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
); 


