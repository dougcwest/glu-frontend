import "../../src/App.css";
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector } from "recharts";
import { data, cookingNames } from "../data/interest-data";
import styled from "styled-components";
import _ from "lodash";

const greatestInterest = _.maxBy(data, "value");

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={8}
        fontSize={32}
        fontWeight={600}
        textAnchor="middle"
        fill={fill}
      >
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
        fontSize={18}
        fontWeight={500}
      >{`${value} Members`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed()}%)`}
      </text>
    </g>
  );
};

export default function TopChart() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showNames, setShowNames] = useState(false);

  const onClick = () => {
    if (!showNames) {
      setShowNames(true)
    } else {
      setShowNames(false);
    }
  };

  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  const Results = () => (
    <TopNames id="results">{cookingNames.map((index) => {
      return (
        <p>{index}</p>
      )
    }
    )
  }
    </TopNames>  
  )

  return (
    <div className="container">
      <div className="reverse-fave-container">
        <h1>Common Interests</h1>
        <div className="reverse-favorite">
          <button title="Show Team Members" onMouseEnter={onClick} onMouseLeave={onClick}>
            <h2>{greatestInterest.name}</h2>
          </button>
          { showNames ? <Results /> : null }
          <h4>is your team's favorite hobby</h4>
        </div>
      </div>
      <div className="reverse-circle"></div>
      <PieChart width={400} height={400}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx={200}
          cy={200}
          innerRadius={108}
          outerRadius={140}
          fill="#fedf00"
          dataKey="value"
          onMouseEnter={onPieEnter}
        />
      </PieChart>
    </div>
  );
}

const TopNames = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
  justify-content: center;
  position: absolute;
  margin-top: 65px;
  padding: 4px;
  width: 150px;
  margin-left: -300px;
  border-radius: 25px;
  background: rgba(250, 250, 250, 0.7);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);

  p {
    padding-left: 4px;
    font-weight: 500;
    margin-top: 4px;
    padding-right: 4px;
    padding-bottom: 1px;
    margin-bottom: 0;
  }
`;
