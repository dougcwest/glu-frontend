import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import ReduxThunk from "redux-thunk";
import rootReducer from './reducers/index';
import promise from "redux-promise";

import CategoryShow from "./components/category-show";
import PostsNew from "./components/posts-new";
import Header from "./components/header"
import Sidebar from './components/Sidebar';
import AllCharts from './components/all-charts';
import CommonalityCharts from './components/commonality-charts';
import MembersIndex from './components/members-index';
import MembersShow from './components/members-show';
import Inspiration from './components/inspiration';
import Login from './components/login';
import Register from './components/register';

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

//const createStoreWithMiddleware = applyMiddleware(ReduxThunk, promise)(createStore);

const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk, promise));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Container>
        <Header />
          <Main>
          <Sidebar />  
            <Switch>
              <Route path='/register' component={Register} />
              <Route path='/login' component={Login} />
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


