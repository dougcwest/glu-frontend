import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Inspiration = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const quoteAPI = async () => {
    let quoteArray = [];

    try {
      const data = await axios.get("https://api.quotable.io/random");
      quoteArray = data.data;
    } catch (error) {
      console.log(error);
    }

    try {
      setQuote(quoteArray.content);
      setAuthor(quoteArray.author);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    quoteAPI();
  }, [])

  return (
  <MainContainer>
    <FormGroup>
      <FormRow>
          <FormColumn>
              <FormHeader>"{quote}"<br />
              <h4>{author}</h4>
              <Sort onClick={quoteAPI}>New Quote</Sort>
              </FormHeader>
          </FormColumn>
      </FormRow>
    </FormGroup>
  </MainContainer>
  );
};


export default Inspiration;

const MainContainer = styled.div`
  width: 100%;
  background: #fafafa;
`;

const FormGroup = styled.div`
  padding: 80px 0;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 -15px -15px;
  flex-wrap: wrap;
  align-items: center;
`;

const FormHeader = styled.h1`
  margin-bottom: 2rem;
  margin-top: -700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: white;
  text-shadow: 2px 2px rgba(51, 51, 51, 0.6);

  h4 {
    font-size: 36px;
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;

  }
`;

const Sort = styled.button`
  background: none;
  border: 1px solid white;
  border-radius: 6px;
  width: 150px;
  height: 36px;
  color: white;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
 
`;

const FormColumn = styled.div`
  padding: 50px;
  background-image: url("https://static.rootsrated.com/image/upload/s--wFHMuXdN--/t_rr_large_natural/kntxugnawdhqcpgkfzu5.jpg");
  border-radius: 20px;
  display: flex;
  background-size: cover;
  background-repeat: no-repeat;
  width: 80%;
  min-width: 1000px;
  height: 0;
  padding-top: 66.64%; /* (img-height / img-width * container-width)*/
  /* (853 / 1280 * 100) */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 60px;
  box-shadow:inset 0 0 0 2000px rgba(51, 51, 51, 0.5);
  }
`;
