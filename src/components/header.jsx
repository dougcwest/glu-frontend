import styled from 'styled-components';
import { useState, useEffect } from "react";
import { fetchUser } from '../actions';
import { useSelector, useDispatch } from 'react-redux';

const Header = (props) => {
  const dispatch = useDispatch();
  const [confirm, setConfirm] = useState(false);

  const authenticated = useSelector((state) => state.auth.authenticated);
  const email = useSelector((state) => state.auth.email);

  useEffect(() => {
    if (authenticated) {
      dispatch(fetchUser());
    }
  }, [authenticated, dispatch]);

  const onClick = () => {
    if (!confirm) {
      setConfirm(true)
    } else {
      setConfirm(false)
    }
  };

  const signOut = () => {

    localStorage.removeItem('token');

    window.location.reload();
  };

  const ConfirmPopUp = () => (
    <ConfirmColumn>
      <Delete onClick={signOut}>
            Logout
      </Delete>
    </ConfirmColumn>
  )

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
          {email}
        </Name>
        <UserImage onClick={onClick}>
          <img src={"https://i.ibb.co/gMSQPXp/green-avatar.jpg"} alt="avatar" />
        </UserImage>
        { confirm ? <ConfirmPopUp /> : null }
      </UserContainer>
    </Container>
  )
};

export default Header; 


const Delete = styled.button`
    background: #ff6961;
    border: none;
    border-radius: 6px;
    height: 38px;
    width: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const FirstLetter = styled.button`
    background: #ff6961;
    height: 38px;
    width: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
`;


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
  padding-right: 12px;
  font-size: 18px;
  font-weight: 700;
`;

const UserImage = styled.button`
  width: 38px;
  height: 38px;
  border: 2px solid #white;
  border-radius: 4px;

  img {
    width: 100%;
    cursor: pointer;
  }
`;

const ConfirmColumn = styled.div`
  padding: 20px;
  background: #333;
  width: 160px;
  border-radius: 0 0 12px 12px;
  height: 65px;
  display: flex;
  color: white;
  z-index: 100;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  align-items: center;
  margin-left: 120px;
  margin-top: 142px;
  position: absolute;
  margin-bottom: 20px;

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: -1.5rem;
  }
  }
`;