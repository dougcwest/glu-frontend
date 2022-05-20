import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as _ from "lodash";

const Authentication = (props) => {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //const register = () => {
    //axios({
      //method: "POST",
      //data: {
        //username: registerUsername,
        //password: registerPassword
      //},
      //withCredentials: true,
      //url: "http://localhost:8000/register",
    //}).then((res) => console.log(res));
  //};
  const [errors, setErrors] = useState({});

  const validFields = (input) => {
    const errorMessages = _.reduce(input, function (acc, field, key) {
      if (!field) {
        acc[key] = { message: `The ${key} field is required`}
      }

      return acc;
    }, {});

    setErrors(errorMessages);

    return _.isEmpty(errorMessages);
  };

  const login = (e) => {
    e.preventDefault();

    if (validFields({
      username,
      password
    })) {
          props.history.push('/members');
    }
  };

  //const getUser = () => {
    //axios({
      //method: "GET",
      //data: {
        //username: registerUsername,
        //password: registerPassword
      //},
      //withCredentials: true,
      //url: "http://localhost:8000/get-user",
    //}).then((res) => console.log(res));
  //};

  return (
    <Container>
      <Content>
        <FormHeader>Glu. <SlackImg src="https://i.ibb.co/Jktn6KJ/glu-bottle-2.png" alt="logo" /></FormHeader> 
        <SubHeader>Teams that stick together.</SubHeader> 
        <h3>Login</h3>
        <br />
        <input value={username} placeholder='username' required onChange={e => setUsername(e.target.value)} />
        <p style={{color: 'red'}}>{errors.username?.message}</p>
        <input value={password} type="password" placeholder='password' required onChange={e => setPassword(e.target.value)} />
        <p style={{color: 'red'}}>{errors.password?.message}</p>
        <SignInButton type="submit" onClick={login}>
            Submit
        </SignInButton>
      </Content>
  </Container>
  )
}

export default Authentication;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormHeader = styled.h1`
  margin-bottom: 2rem;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #9ff697;
`;

const SubHeader = styled.h1`
  margin-top: -2.5rem;
  margin-bottom: 3.5rem;
  font-size: 28px;
  line-height: 1.1;
  font-weight: 600;
  color: #9ff697;
`;

const Content = styled.div`
  background: white;
  padding: 80px;
  border-radius: 10px;
  box-shadow: -3px 6px 12px -3px rgba(0,0,0,0.24);
  display: flex;
  width: 700px;
  align-items: center;
  flex-direction: column;

  p {
    font-size: 13px;
  }
`;

const SlackImg = styled.img`
  height: 80px;
  margin-bottom: 15px;
`;

const SignInButton = styled.button`
  margin-top: 25px;
  margin-bottom: 25px;
  background: #9ff697;
  color: white;
  border: none;
  padding: 5px;
  height: 35px;
  border-radius: 4px;
  cursor: pointer;
`;

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: '#333333'
};
