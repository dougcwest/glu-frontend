import styled from 'styled-components';
import { sidebarItems } from '../data/SidebarData';
import { categoryItems } from '../data/CategoryData';
import { Link } from 'react-router-dom';

import React from 'react'

const Sidebar = () => {
  return (
    <Container>
        <WorkSpaceContainer>
          <Name>
            <h3><a href="/members">My Team</a></h3>
          </Name>
        </WorkSpaceContainer>  
        <MainChannels>
          {
            sidebarItems.map((item, index) => (
              <MainChannelLink tabIndex={1} key={index}>
                <Link style={linkStyle} to={item.path}>{item.icon}{item.text} </Link>
              </MainChannelLink>
            ))
          }
        </MainChannels>
        <WorkSpaceContainer>
          <Name>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <h3><a href="">Categories</a></h3>
          </Name>
        </WorkSpaceContainer>  
        <MainChannels>
          {
            categoryItems.map((item, index) => (
              <MainChannelLink tabIndex={1} key={index}> 
                <Link style={linkStyle} to={item.path}>{item.icon}{item.text} 
                </Link>
              </MainChannelLink>
            ))
          }
        </MainChannels>
      </Container>
  )
}

export default Sidebar;

const linkStyle = {
  textDecoration: "none",
  fontSize: "18px",
  color: '#333333'
};

const Container = styled.div`
  background: #ececec;
`;

const WorkSpaceContainer = styled.div`
  color: white;
  background: #9ff697;
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 19px;
`;

const Name = styled.div`
a {
  text-decoration: none;
}

a:link, a:visited {
  color: #333333;
}
`;

const MainChannels = styled.div`
`;

const MainChannelLink = styled.div`
color: #333333;
height: 64px;
display: flex;
align-items: center;
padding-left: 19px;
font-size: 18px;
cursor: pointer;

&:hover {
  background: #cccccc;
}
&:focus {
  background: #9ff697;
  font-weight: 700;
}
`;
