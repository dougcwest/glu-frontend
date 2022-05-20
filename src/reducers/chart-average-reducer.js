import { FETCH_CHARTS } from "../actions";

let currentdate = new Date();
var oneJan = new Date(currentdate.getFullYear(),0,1);
var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
var currentWeek = Math.ceil(( currentdate.getDay() + 1 + numberOfDays) / 7); 

let data = [
  {
    week: currentWeek,  
    chart: [
    {
      day: "Monday",
      energy: 80,
      stress: 12,
      positivity: 75,
      satisfaction: 89, 
      balance: 75,
      burnout: 12
    },
    {
      day: "Tuesday",
      energy: 29,
      stress: 56,
      positivity: 48,
      satisfaction: 60, 
      balance: 64,
      burnout: 30
    },
    {
      day: "Wednesday",
      energy: 45,
      stress: 35,
      positivity: 70,
      satisfaction: 68, 
      balance: 75,
      burnout: 21
    },
    {
      day: "Thursday",
      energy: 60,
      stress: 15,
      positivity: 85,
      satisfaction: 78, 
      balance: 87,
      burnout: 12
    },
    {
      day: "Friday",
      energy: 90,
      stress: 7,
      positivity: 85,
      satisfaction: 81, 
      balance: 87,
      burnout: 10
    },
    {
    day: "Monday",
    energy: 75,
    stress: 19,
    positivity: 61,
    satisfaction: 73, 
    balance: 82,
    burnout: 17
  },
  {
    day: "Tuesday",
    energy: 69,
    stress: 36,
    positivity: 88,
    satisfaction: 75, 
    balance: 64,
    burnout: 20
  },
  {
    day: "Wednesday",
    energy: 45,
    stress: 35,
    positivity: 70,
    satisfaction: 68, 
    balance: 75,
    burnout: 21
  },
  {
    day: "Thursday",
    energy: 75,
    stress: 15,
    positivity: 85,
    satisfaction: 78, 
    balance: 67,
    burnout: 12
  },
  {
    day: "Friday",
    energy: 90,
    stress: 7,
    positivity: 85,
    satisfaction: 81, 
    balance: 87,
    burnout: 10
  },
  ]
},
{
  week: currentWeek - 1,
  chart: [
  {
    day: "Monday",
    energy: 60,
    stress: 19,
    positivity: 61,
    satisfaction: 73, 
    balance: 82,
    burnout: 17
  },
  {
    day: "Tuesday",
    energy: 29,
    stress: 56,
    positivity: 48,
    satisfaction: 60, 
    balance: 64,
    burnout: 30
  },
  {
    day: "Wednesday",
    energy: 45,
    stress: 35,
    positivity: 70,
    satisfaction: 68, 
    balance: 75,
    burnout: 21
  },
  {
    day: "Thursday",
    energy: 60,
    stress: 15,
    positivity: 85,
    satisfaction: 78, 
    balance: 87,
    burnout: 12
  },
  {
    day: "Friday",
    energy: 90,
    stress: 7,
    positivity: 85,
    satisfaction: 81, 
    balance: 87,
    burnout: 10
  },
  {
    day: "Monday",
    energy: 100,
    stress: 40,
    positivity: 50,
    satisfaction: 50, 
    balance: 50,
    burnout: 30
  },
  {
    day: "Tuesday",
    energy: 29,
    stress: 56,
    positivity: 48,
    satisfaction: 60, 
    balance: 64,
    burnout: 30
  },
  {
    day: "Wednesday",
    energy: 45,
    stress: 35,
    positivity: 70,
    satisfaction: 68, 
    balance: 75,
    burnout: 21
  },
  {
    day: "Thursday",
    energy: 60,
    stress: 15,
    positivity: 85,
    satisfaction: 78, 
    balance: 87,
    burnout: 12
  },
  {
    day: "Friday",
    energy: 90,
    stress: 7,
    positivity: 85,
    satisfaction: 81, 
    balance: 87,
    burnout: 10
  },
  {
    day: "Monday",
    energy: 75,
    stress: 19,
    positivity: 61,
    satisfaction: 73, 
    balance: 82,
    burnout: 17
  },
  {
    day: "Tuesday",
    energy: 69,
    stress: 36,
    positivity: 88,
    satisfaction: 75, 
    balance: 64,
    burnout: 20
  },
  {
    day: "Wednesday",
    energy: 45,
    stress: 35,
    positivity: 70,
    satisfaction: 68, 
    balance: 75,
    burnout: 21
  },
  {
    day: "Thursday",
    energy: 75,
    stress: 15,
    positivity: 85,
    satisfaction: 78, 
    balance: 67,
    burnout: 12
  },
  {
    day: "Friday",
    energy: 70,
    stress: 25,
    positivity: 75,
    satisfaction: 65, 
    balance: 67,
    burnout: 25
  },
]
},
{
  week: currentWeek - 2,
  chart: [
  {
    day: "Monday",
    energy: 75,
    stress: 19,
    positivity: 61,
    satisfaction: 73, 
    balance: 82,
    burnout: 17
  },
  {
    day: "Tuesday",
    energy: 69,
    stress: 36,
    positivity: 88,
    satisfaction: 75, 
    balance: 64,
    burnout: 20
  },
  {
    day: "Wednesday",
    energy: 45,
    stress: 35,
    positivity: 70,
    satisfaction: 68, 
    balance: 75,
    burnout: 21
  },
  {
    day: "Thursday",
    energy: 75,
    stress: 15,
    positivity: 85,
    satisfaction: 78, 
    balance: 67,
    burnout: 12
  },
  {
    day: "Friday",
    energy: 70,
    stress: 25,
    positivity: 75,
    satisfaction: 65, 
    balance: 67,
    burnout: 25
  },
  {
    day: "Monday",
    energy: 85,
    stress: 35,
    positivity: 68,
    satisfaction: 56, 
    balance: 60,
    burnout: 24
  },
  {
    day: "Tuesday",
    energy: 29,
    stress: 56,
    positivity: 48,
    satisfaction: 60, 
    balance: 64,
    burnout: 30
  },
  {
    day: "Wednesday",
    energy: 45,
    stress: 35,
    positivity: 70,
    satisfaction: 68, 
    balance: 75,
    burnout: 21
  },
  {
    day: "Thursday",
    energy: 60,
    stress: 15,
    positivity: 85,
    satisfaction: 78, 
    balance: 87,
    burnout: 12
  },
  {
    day: "Friday",
    energy: 90,
    stress: 7,
    positivity: 85,
    satisfaction: 81, 
    balance: 87,
    burnout: 10
  },
]
},
{
  week: currentWeek - 3,  
    chart: [
    {
      day: "Monday",
      energy: 80,
      stress: 12,
      positivity: 75,
      satisfaction: 89, 
      balance: 75,
      burnout: 12
    },
    {
      day: "Tuesday",
      energy: 29,
      stress: 56,
      positivity: 48,
      satisfaction: 60, 
      balance: 64,
      burnout: 30
    },
    {
      day: "Wednesday",
      energy: 45,
      stress: 35,
      positivity: 70,
      satisfaction: 68, 
      balance: 75,
      burnout: 21
    },
    {
      day: "Thursday",
      energy: 60,
      stress: 15,
      positivity: 85,
      satisfaction: 78, 
      balance: 87,
      burnout: 12
    },
    {
      day: "Friday",
      energy: 90,
      stress: 7,
      positivity: 85,
      satisfaction: 81, 
      balance: 87,
      burnout: 10
    },
    {
    day: "Monday",
    energy: 75,
    stress: 19,
    positivity: 61,
    satisfaction: 73, 
    balance: 82,
    burnout: 17
  },
  {
    day: "Tuesday",
    energy: 69,
    stress: 36,
    positivity: 88,
    satisfaction: 75, 
    balance: 64,
    burnout: 20
  },
  {
    day: "Wednesday",
    energy: 45,
    stress: 35,
    positivity: 70,
    satisfaction: 68, 
    balance: 75,
    burnout: 21
  },
  {
    day: "Thursday",
    energy: 75,
    stress: 15,
    positivity: 85,
    satisfaction: 78, 
    balance: 67,
    burnout: 12
  },
  {
    day: "Friday",
    energy: 90,
    stress: 7,
    positivity: 85,
    satisfaction: 81, 
    balance: 87,
    burnout: 10
  },
  ]
},
]; 


const AvgChartsReducer = function(state = data, action) {
  switch (action.type) {
    case FETCH_CHARTS:
      return state
    default:
      return state;
  }
};

export default AvgChartsReducer;

