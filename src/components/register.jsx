import React from 'react'
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import styled from "styled-components";
import { signup } from "../actions";

const userSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

const Signup = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(userSchema),
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleFormSubmit = (data) => {
    dispatch(
      signup(data, () => {
        history.push("/");
      })
    );
  };


  return (
    <Container>
      <Content>
        <FormHeader>Glu. <SlackImg src="https://i.ibb.co/Jktn6KJ/glu-bottle-2.png" alt="logo" /></FormHeader> 
        <SubHeader>Teams that stick together.</SubHeader> 
        <h3>Create An Account</h3>
        <br />
        <input 
          type="email" 
          name="email" 
          placeholder='Email'      
          ref={register({ required: true })}
        />
        {errors.email?.message}
        
        <input 
          type="password" 
          name="password" 
          placeholder='Password'      
          ref={register({ required: true })}
        />
        {errors.password?.message}
        <SignInButton type="submit" onClick={handleSubmit(handleFormSubmit)}>
            Submit
        </SignInButton>
        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </Content>
  </Container>
  )
}

export default Signup;

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

