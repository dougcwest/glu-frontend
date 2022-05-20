import styled from 'styled-components';
import { Link } from "react-router-dom";

const header = () => {
  return (
    <Container>
      <Main>
        <LogoContainer>
          <h1><strong>Glu.</strong></h1>
          <img src="https://i.ibb.co/Jktn6KJ/glu-bottle-2.png" alt="glu logo" />
        </LogoContainer>
        <SubLogoContainer>
          <h5>Teams that stick together</h5>
        </SubLogoContainer>
      </Main>
      <UserContainer>
        <Name>
          dougcwest
        </Name>
        <UserImage>
          <Link to="/login">
          <img src={"https://i.ibb.co/5BgzRZK/doug-thumb-pic.jpg"} alt="avatar" />
          </Link>
        </UserImage>
      </UserContainer>
    </Container>
  )
};

export default header; 

const Container = styled.div`
  background: #333333;
  color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Main = styled.div`
  display: flex;
  flex-direction: row
  justify-content: space-between;
  margin-right: 16px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 260px;
  height: 60px;
  margin-right: 260px;
  color: #9ff697;
  background: #333333; 
`;

const SubLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 400px;
  height: 60px;
  color: #9ff697;
  background: #333333;
`;

const UserContainer = styled.div`
  display: flex;  
  align-items: center;
  padding-right: 16px;
  position: absolute;
  right: 0;
`;

const Name = styled.div`
  padding-right: 16px;
  font-size: 18px;
  font-weight: 700;
`;

const UserImage = styled.div`
  width: 28px;
  height: 28px;
  border: 2px solid #white;
  border-radius: 4px;

  img {
    width: 100%;
    cursor: pointer;
  }
`;