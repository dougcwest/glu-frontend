import "../../src/App.css"
import React from "react";
import styled from "styled-components";

import InterestChart from "./interest-chart";
import TopChart from "./top-chart";
import CauseChart from "./bottom-chart";
import MovieChart from "./movie-chart";

const CommonalityCharts = () => {
  
  return (
    <>
      <MainContainer>
        <FormGroup>
          <FormRow>
            <FormHeader>
              <h1>Team Commonality Charts</h1>
            </FormHeader>
            <TopChart />
            <InterestChart />
            <CauseChart />
            <MovieChart />
          </FormRow>
        </FormGroup>
      </MainContainer>
    </>
  );
};

export default CommonalityCharts;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 1200px;
  background: #fafafa;
  width: 100%;
`;

const FormGroup = styled.div`
  width: 90%;
  margin-top: 60px;
  margin-bottom: 60px;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 12px 12px 12px 12px;
  background: white;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
`;

const FormRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`;

const FormHeader = styled.h1`
  margin-bottom: 2rem;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 600;
  color: #9ff697;
`;
