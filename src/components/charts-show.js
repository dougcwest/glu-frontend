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

const ChartsShow = (props) => {

  const [week, setWeek] = useState(curWeek);
  const [prevDisable, setPrevDisable] = useState(false);
  const [nextDisable, setNextDisable] = useState(true);
  const [selectedMetric, setSelectedMetric] = useState('');

  const chart = useSelector(({ charts }) => {

    return charts.find((chart) => {
 
    return chart.memberId === props.memberId && chart.week === week
    })
  }); 

  const chartData = chart.chart;

  const [data, setData] = useState(chartData);

  function handleSelectChange(event) {
    setSelectedMetric(event.target.value);

    if (chartData) {
    setData(_.map(chartData, _.partialRight(_.pick, ['day', event.target.value])))
    } else {
      return (
        <div>No data exists for this week.</div>
      )
    }
};

  const handlePrevClick = (e) => {
    e.preventDefault();
    setNextDisable(false);

    if (week > 1) {
      setWeek(week - 1)
    } else {
      setPrevDisable(true);
    };
    setData(chartData);
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
    setData(chartData);
    setSelectedMetric('');
  };

  const renderCharts = () => {
    if (chart) {
      return (
        <>
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
          <br />
        <ButtonContainer>
          <Delete disabled={nextDisable} onClick={handleNextClick}><AiIcons.AiOutlineArrowLeft /> Next</Delete>
          <FormHeader><h3>Wellness Week {chart.week}</h3></FormHeader>
          <Delete disabled={prevDisable} onClick={handlePrevClick}>Previous <AiIcons.AiOutlineArrowRight /></Delete>
        </ButtonContainer>
        <br />
        <LineChart
          key={chart.id}
          width={600}
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
              activeDot={{ r: 8 }} />
            <Line
              type="monotone"
              dataKey="stress"
              stroke="gray"
              activeDot={{ r: 8 }} />
            <Line
              type="monotone"
              dataKey="satisfaction"
              stroke="blue"
              activeDot={{ r: 8 }} />
            <Line
              type="monotone"
              dataKey="positivity"
              stroke="gold"
              activeDot={{ r: 8 }} />
            <Line
              type="monotone"
              dataKey="balance"
              stroke="purple"
              activeDot={{ r: 8 }} />
            <Line
              type="monotone"
              dataKey="burnout"
              stroke="#ff6961"
              activeDot={{ r: 8 }} />
          </LineChart></>
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
  };
  
  return (
    <>
      {renderCharts()}
    </>
  )

}

export default ChartsShow;

const SelectRow = styled.div`
  margin-left: 500px;
  margin-top: -20px;
  margin-bottom: 40px;

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
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: -30px;
`;

const Delete = styled.button`
    background: none;
    border: none;
    border-radius: 6px;
  `;

  const FormHeader = styled.h1`
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #9ff697;
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


