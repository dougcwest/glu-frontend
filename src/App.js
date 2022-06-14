import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./actions";

import CategoryShow from "./components/category-show";
import PostsNew from "./components/posts-new";
import Header from "./components/header"
import Sidebar from './components/Sidebar';
import AllCharts from './components/all-charts';
import CommonalityCharts from './components/commonality-charts';
import MembersIndex from './components/members-index';
import MembersShow from './components/members-show';
import Inspiration from './components/inspiration';
import Signup from "./components/register";
// import Register from './components/register';

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

const App = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector((state) => state.auth.authenticated);

  useEffect(() => {
    if (authenticated) {
      dispatch(fetchUser());
    }
  }, [authenticated, dispatch]);


  const user = localStorage.getItem('token');

  return (
    <BrowserRouter> 
      {
        !user ? 
          <Signup />
        :
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
      }
    </BrowserRouter>
    )
};

export default App;