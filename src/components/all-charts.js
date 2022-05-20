import { useSelector } from "react-redux";
import { useState } from "react";
import styled from "styled-components";
import * as AiIcons from "react-icons/ai";
import * as _ from "lodash";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

let currentdate = new Date();
var oneJan = new Date(currentdate.getFullYear(),0,1);
var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
var curWeek = Math.ceil(( currentdate.getDay() + 1 + numberOfDays) / 7);
var maxWeek = Math.ceil(( currentdate.getDay() + 1 + numberOfDays) / 7);


const AllCharts = () => {
  const [week, setWeek] = useState(curWeek);
  const [prevDisable, setPrevDisable] = useState(false);
  const [nextDisable, setNextDisable] = useState(true);
  const [selectedMetric, setSelectedMetric] = useState('');
  
  let avgCharts = useSelector((state) => state.avgCharts);

  const iterator = avgCharts.values();

  const getChartByWeek = (thisWeek) => {
    for (const value of iterator) {
      avgCharts = value.chart; 

      const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

      // eslint-disable-next-line no-loop-func
      const groupedByDay = days.map(day => avgCharts.filter(x => x.day === day));

      const avg = (avgCharts) => Array.from(avgCharts.reduce(
    (acc, obj) => Object.keys(obj).reduce( 
        (acc, key) => typeof obj[key] == "number"
            ? acc.set(key, (acc.get(key) || []).concat(obj[key]))
            : acc,
    acc),
  new Map()), 
    ([name, values]) =>
        ({ [name]: values.reduce( (a,b) => a+b ) / values.length })
  ).reduce((acc, value) => Object.assign(acc, value), {});

      const dayAvg = groupedByDay.map((element, index) => {
      const averages = avg(element)
        return {
          day: days[index],
          ...averages
        }
    });

      if (value.week === thisWeek) {
        return dayAvg;
      }
    }
  };

  const parsedData = (getChartByWeek(week));

  const [data, setData] = useState(parsedData);

  function handleSelectChange(event) {
    setSelectedMetric(event.target.value);

    setData(_.map(parsedData, _.partialRight(_.pick, ['day', event.target.value])))
};
                 
  const handlePrevClick = (e) => {
    e.preventDefault();
    setNextDisable(false);

    if (week > 1) {
      setWeek(week - 1)
    } else {
      setPrevDisable(true);
    };
    setData(parsedData);
    setSelectedMetric('');
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    
    if (week < maxWeek) {
      setWeek(week + 1)
    } 
    
    if (week === maxWeek - 1) {
      setNextDisable(true);
    } 
    setData(parsedData);
    setSelectedMetric('');
  };

  const renderCharts = () => {
    if (parsedData) {
        return (
          <MainContainer>
            <FormGroup>
              <FormRow>
                <FormColumn>
                  <SelectRow>
                    <select value={selectedMetric} onChange={handleSelectChange}>
                      <option value="" selected disabled hidden>Filter</option>
                      <option value="energy">Energy</option>
                      <option value="stress">Stress</option>
                      <option value="positivity">Positivity</option>
                      <option value="satisfaction">Satisfaction</option>
                      <option value="balance">Balance</option>
                      <option value="burnout">Burnout</option>
                    </select>
                  </SelectRow>
                  <FormHeader>
                    Team Member Averages
                  </FormHeader>
                  <WeekContainer>
                    <h5>Week {week} of {new Date().getFullYear()}</h5>
                  </WeekContainer>
                  <br />
                  <ButtonContainer>
                    <Delete disabled={nextDisable} onClick={handleNextClick}><AiIcons.AiOutlineArrowLeft /> Next</Delete>
                    <Delete disabled={prevDisable} onClick={handlePrevClick}>Previous <AiIcons.AiOutlineArrowRight /></Delete>
                  </ButtonContainer>
                  <br />
                  <LineChart
                    width={700}
                    height={500}
                    data={data}
                    margin={{
                      top: 5,
                      right: 5,
                      left: -30,
                      bottom: 5
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="energy"
                      stroke="#9ff697"
                      strokeWidth={2}
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="stress"
                      stroke="gray"
                      strokeWidth={2}
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="satisfaction"
                      stroke="#781a78"
                      strokeWidth={2}
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="positivity"
                      stroke="#1981db"
                      strokeWidth={2}
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="balance"
                      stroke="#fa9a85"
                      strokeWidth={2}
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="burnout"
                      stroke="#ff6961"
                      strokeWidth={2}
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </FormColumn>
              </FormRow>
          </FormGroup>
          </MainContainer>
        );
      } else {
        return (
          <>
            <ButtonContainer>
              <Delete disabled={nextDisable} onClick={handleNextClick}><AiIcons.AiOutlineArrowLeft /> Next</Delete>
              <NoData><h3>No data exists for this week</h3></NoData>
              <Delete disabled={prevDisable} onClick={handlePrevClick}>Previous <AiIcons.AiOutlineArrowRight /></Delete>
            </ButtonContainer>
          </>
        );
      }; 
  } 
  return (
    <>
      {renderCharts()}
    </>
  )
};

export default AllCharts;

const MainContainer = styled.div`
  width: 100%;
  background: #fafafa;
  margin: ${({ margin }) => (margin ? margin : '0 auto')};
  padding: ${({ padding }) => (padding ? padding : '0 15px')};
`;

const SelectRow = styled.div`
  margin-left: 650px;
  margin-top: -20px;
  margin-bottom: 40px;
`;

const FormGroup = styled.div`
  padding: 80px 0;
  background: #fafafa;

  select {
    border-radius: 6px;
    padding-left: 4px;
    padding-right: 4px;
    outline: none;
    color: #333;

    &:hover {
      background: rgba(51, 51, 51, 0.7);
      color: white;
    }
  }
`;

const FormHeader = styled.h1`
  margin-bottom: 2rem;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 600;
  padding-bottom: 30px;
  color: #9ff697;
`;

const FormColumn = styled.div`
  padding: 50px;
  background: white;
  border-radius: 20px;
  width: 850px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  align-items: center;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    width: 80%
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: -30px;
  width: 100%;
`;

const WeekContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: -20px;
  margin-bottom: 15px;
  justify-content: center;
  width: 100%;
`;

const Delete = styled.button`
    background: none;
    border: none;
    border-radius: 6px;
  `;


const FormRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 -15px -15px;
  flex-wrap: wrap;
  align-items: center;
`;

const NoData = styled.div`
  min-width: 480px;
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    color: #ff6961;
  }
`;