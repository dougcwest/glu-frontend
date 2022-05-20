import { FETCH_CHARTS } from "../actions";

let currentdate = new Date();
var oneJan = new Date(currentdate.getFullYear(),0,1);
var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
var curWeek = Math.ceil(( currentdate.getDay() + 1 + numberOfDays) / 7);

const data = [
  
  {
    id: 66,
    memberId: '20',
    week: curWeek,
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
    id: 62,
    memberId: '20',
    week: curWeek - 1,
    chart: [
    {
      day: "Monday",
      energy: 45,
      stress: 27,
      positivity: 49,
      satisfaction: 60, 
      balance: 53,
      burnout: 31
    },
    {
      day: "Tuesday",
      energy: 56,
      stress: 45,
      positivity: 63,
      satisfaction: 70, 
      balance: 75,
      burnout: 20
    },
    {
      day: "Wednesday",
      energy: 80,
      stress: 27,
      positivity: 78,
      satisfaction: 85, 
      balance: 85,
      burnout: 12
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
    id: 66,
    memberId: '20',
    week: curWeek - 2,
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
    id: 25,
    memberId: '20',
    week: curWeek - 3,
    chart: [
    {
      day: "Monday",
      energy: 48,
      stress: 27,
      positivity: 55,
      satisfaction: 63, 
      balance: 70,
      burnout: 29
    },
    {
      day: "Tuesday",
      energy: 40,
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
      energy: 78,
      stress: 12,
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
      id: 25,
      memberId: '20',
      week: curWeek - 4,
      chart: [
      {
        day: "Monday",
        energy: 48,
        stress: 27,
        positivity: 55,
        satisfaction: 63, 
        balance: 70,
        burnout: 29
      },
      {
        day: "Tuesday",
        energy: 40,
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
        energy: 78,
        stress: 12,
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
    id: 26,
    memberId: '20',
    week: curWeek - 5,
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
      id: 62,
      memberId: '21',
      week: curWeek - 1,
      chart: [
      {
        day: "Monday",
        energy: 45,
        stress: 27,
        positivity: 49,
        satisfaction: 60, 
        balance: 53,
        burnout: 31
      },
      {
        day: "Tuesday",
        energy: 56,
        stress: 45,
        positivity: 63,
        satisfaction: 70, 
        balance: 75,
        burnout: 20
      },
      {
        day: "Wednesday",
        energy: 80,
        stress: 27,
        positivity: 78,
        satisfaction: 85, 
        balance: 85,
        burnout: 12
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
      id: 66,
      memberId: '21',
      week: curWeek - 2,
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
      id: 25,
      memberId: '21',
      week: curWeek - 3,
      chart: [
      {
        day: "Monday",
        energy: 48,
        stress: 27,
        positivity: 55,
        satisfaction: 63, 
        balance: 70,
        burnout: 29
      },
      {
        day: "Tuesday",
        energy: 40,
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
        energy: 78,
        stress: 12,
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
        id: 25,
        memberId: '21',
        week: curWeek - 4,
        chart: [
        {
          day: "Monday",
          energy: 48,
          stress: 27,
          positivity: 55,
          satisfaction: 63, 
          balance: 70,
          burnout: 29
        },
        {
          day: "Tuesday",
          energy: 40,
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
          energy: 78,
          stress: 12,
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
      id: 26,
      memberId: '21',
      week: curWeek - 5,
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
        id: 66,
        memberId: '21',
        week: curWeek,
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
        id: 62,
        memberId: '21',
        week: curWeek - 1,
        chart: [
        {
          day: "Monday",
          energy: 45,
          stress: 27,
          positivity: 49,
          satisfaction: 60, 
          balance: 53,
          burnout: 31
        },
        {
          day: "Tuesday",
          energy: 56,
          stress: 45,
          positivity: 63,
          satisfaction: 70, 
          balance: 75,
          burnout: 20
        },
        {
          day: "Wednesday",
          energy: 80,
          stress: 27,
          positivity: 78,
          satisfaction: 85, 
          balance: 85,
          burnout: 12
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
        id: 66,
        memberId: '21',
        week: curWeek - 2,
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
        id: 25,
        memberId: '21',
        week: curWeek - 3,
        chart: [
        {
          day: "Monday",
          energy: 48,
          stress: 27,
          positivity: 55,
          satisfaction: 63, 
          balance: 70,
          burnout: 29
        },
        {
          day: "Tuesday",
          energy: 40,
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
          energy: 78,
          stress: 12,
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
          id: 25,
          memberId: '21',
          week: curWeek - 4,
          chart: [
          {
            day: "Monday",
            energy: 48,
            stress: 27,
            positivity: 55,
            satisfaction: 63, 
            balance: 70,
            burnout: 29
          },
          {
            day: "Tuesday",
            energy: 40,
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
            energy: 78,
            stress: 12,
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
        id: 26,
        memberId: '21',
        week: curWeek - 5,
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
          id: 66,
          memberId: '22',
          week: curWeek,
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
          id: 62,
          memberId: '22',
          week: curWeek - 1,
          chart: [
          {
            day: "Monday",
            energy: 45,
            stress: 27,
            positivity: 49,
            satisfaction: 60, 
            balance: 53,
            burnout: 31
          },
          {
            day: "Tuesday",
            energy: 56,
            stress: 45,
            positivity: 63,
            satisfaction: 70, 
            balance: 75,
            burnout: 20
          },
          {
            day: "Wednesday",
            energy: 80,
            stress: 27,
            positivity: 78,
            satisfaction: 85, 
            balance: 85,
            burnout: 12
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
          id: 66,
          memberId: '22',
          week: curWeek - 2,
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
          id: 25,
          memberId: '22',
          week: curWeek - 3,
          chart: [
          {
            day: "Monday",
            energy: 48,
            stress: 27,
            positivity: 55,
            satisfaction: 63, 
            balance: 70,
            burnout: 29
          },
          {
            day: "Tuesday",
            energy: 40,
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
            energy: 78,
            stress: 12,
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
            id: 25,
            memberId: '22',
            week: curWeek - 4,
            chart: [
            {
              day: "Monday",
              energy: 48,
              stress: 27,
              positivity: 55,
              satisfaction: 63, 
              balance: 70,
              burnout: 29
            },
            {
              day: "Tuesday",
              energy: 40,
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
              energy: 78,
              stress: 12,
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
          id: 26,
          memberId: '22',
          week: curWeek - 5,
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
            id: 66,
            memberId: '23',
            week: curWeek,
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
            id: 62,
            memberId: '23',
            week: curWeek - 1,
            chart: [
            {
              day: "Monday",
              energy: 45,
              stress: 27,
              positivity: 49,
              satisfaction: 60, 
              balance: 53,
              burnout: 31
            },
            {
              day: "Tuesday",
              energy: 56,
              stress: 45,
              positivity: 63,
              satisfaction: 70, 
              balance: 75,
              burnout: 20
            },
            {
              day: "Wednesday",
              energy: 80,
              stress: 27,
              positivity: 78,
              satisfaction: 85, 
              balance: 85,
              burnout: 12
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
            id: 66,
            memberId: '23',
            week: curWeek - 2,
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
            id: 25,
            memberId: '23',
            week: curWeek - 3,
            chart: [
            {
              day: "Monday",
              energy: 48,
              stress: 27,
              positivity: 55,
              satisfaction: 63, 
              balance: 70,
              burnout: 29
            },
            {
              day: "Tuesday",
              energy: 40,
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
              energy: 78,
              stress: 12,
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
              id: 25,
              memberId: '23',
              week: curWeek - 4,
              chart: [
              {
                day: "Monday",
                energy: 48,
                stress: 27,
                positivity: 55,
                satisfaction: 63, 
                balance: 70,
                burnout: 29
              },
              {
                day: "Tuesday",
                energy: 40,
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
                energy: 78,
                stress: 12,
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
            id: 26,
            memberId: '23',
            week: curWeek - 5,
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
  id: 50,
  memberId: '24',
  week: curWeek,
  chart: [
  {
    day: "Monday",
    energy: 48,
    stress: 27,
    positivity: 55,
    satisfaction: 63, 
    balance: 70,
    burnout: 29
  },
  {
    day: "Tuesday",
    energy: 40,
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
    energy: 78,
    stress: 12,
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
  id: 66,
  memberId: '24',
  week: curWeek,
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
  id: 62,
  memberId: '24',
  week: curWeek - 1,
  chart: [
  {
    day: "Monday",
    energy: 45,
    stress: 27,
    positivity: 49,
    satisfaction: 60, 
    balance: 53,
    burnout: 31
  },
  {
    day: "Tuesday",
    energy: 56,
    stress: 45,
    positivity: 63,
    satisfaction: 70, 
    balance: 75,
    burnout: 20
  },
  {
    day: "Wednesday",
    energy: 80,
    stress: 27,
    positivity: 78,
    satisfaction: 85, 
    balance: 85,
    burnout: 12
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
  id: 66,
  memberId: '24',
  week: curWeek - 2,
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
  id: 25,
  memberId: '24',
  week: curWeek - 3,
  chart: [
  {
    day: "Monday",
    energy: 48,
    stress: 27,
    positivity: 55,
    satisfaction: 63, 
    balance: 70,
    burnout: 29
  },
  {
    day: "Tuesday",
    energy: 40,
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
    energy: 78,
    stress: 12,
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
    id: 25,
    memberId: '24',
    week: curWeek - 4,
    chart: [
    {
      day: "Monday",
      energy: 48,
      stress: 27,
      positivity: 55,
      satisfaction: 63, 
      balance: 70,
      burnout: 29
    },
    {
      day: "Tuesday",
      energy: 40,
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
      energy: 78,
      stress: 12,
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
  id: 26,
  memberId: '24',
  week: curWeek - 5,
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
    id: 66,
    memberId: '25',
    week: curWeek,
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
    id: 62,
    memberId: '25',
    week: curWeek - 1,
    chart: [
    {
      day: "Monday",
      energy: 45,
      stress: 27,
      positivity: 49,
      satisfaction: 60, 
      balance: 53,
      burnout: 31
    },
    {
      day: "Tuesday",
      energy: 56,
      stress: 45,
      positivity: 63,
      satisfaction: 70, 
      balance: 75,
      burnout: 20
    },
    {
      day: "Wednesday",
      energy: 80,
      stress: 27,
      positivity: 78,
      satisfaction: 85, 
      balance: 85,
      burnout: 12
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
    id: 66,
    memberId: '25',
    week: curWeek - 2,
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
    id: 25,
    memberId: '25',
    week: curWeek - 3,
    chart: [
    {
      day: "Monday",
      energy: 48,
      stress: 27,
      positivity: 55,
      satisfaction: 63, 
      balance: 70,
      burnout: 29
    },
    {
      day: "Tuesday",
      energy: 40,
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
      energy: 78,
      stress: 12,
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
      id: 25,
      memberId: '25',
      week: curWeek - 4,
      chart: [
      {
        day: "Monday",
        energy: 48,
        stress: 27,
        positivity: 55,
        satisfaction: 63, 
        balance: 70,
        burnout: 29
      },
      {
        day: "Tuesday",
        energy: 40,
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
        energy: 78,
        stress: 12,
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
    id: 26,
    memberId: '25',
    week: curWeek - 5,
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
      id: 66,
      memberId: '26',
      week: curWeek,
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
      id: 62,
      memberId: '26',
      week: curWeek - 1,
      chart: [
      {
        day: "Monday",
        energy: 45,
        stress: 27,
        positivity: 49,
        satisfaction: 60, 
        balance: 53,
        burnout: 31
      },
      {
        day: "Tuesday",
        energy: 56,
        stress: 45,
        positivity: 63,
        satisfaction: 70, 
        balance: 75,
        burnout: 20
      },
      {
        day: "Wednesday",
        energy: 80,
        stress: 27,
        positivity: 78,
        satisfaction: 85, 
        balance: 85,
        burnout: 12
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
      id: 66,
      memberId: '26',
      week: curWeek - 2,
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
      id: 25,
      memberId: '26',
      week: curWeek - 3,
      chart: [
      {
        day: "Monday",
        energy: 48,
        stress: 27,
        positivity: 55,
        satisfaction: 63, 
        balance: 70,
        burnout: 29
      },
      {
        day: "Tuesday",
        energy: 40,
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
        energy: 78,
        stress: 12,
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
        id: 25,
        memberId: '26',
        week: curWeek - 4,
        chart: [
        {
          day: "Monday",
          energy: 48,
          stress: 27,
          positivity: 55,
          satisfaction: 63, 
          balance: 70,
          burnout: 29
        },
        {
          day: "Tuesday",
          energy: 40,
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
          energy: 78,
          stress: 12,
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
      id: 26,
      memberId: '26',
      week: curWeek - 5,
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
        id: 66,
        memberId: '27',
        week: curWeek,
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
        id: 62,
        memberId: '27',
        week: curWeek - 1,
        chart: [
        {
          day: "Monday",
          energy: 45,
          stress: 27,
          positivity: 49,
          satisfaction: 60, 
          balance: 53,
          burnout: 31
        },
        {
          day: "Tuesday",
          energy: 56,
          stress: 45,
          positivity: 63,
          satisfaction: 70, 
          balance: 75,
          burnout: 20
        },
        {
          day: "Wednesday",
          energy: 80,
          stress: 27,
          positivity: 78,
          satisfaction: 85, 
          balance: 85,
          burnout: 12
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
        id: 66,
        memberId: '27',
        week: curWeek - 2,
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
        id: 25,
        memberId: '27',
        week: curWeek - 3,
        chart: [
        {
          day: "Monday",
          energy: 48,
          stress: 27,
          positivity: 55,
          satisfaction: 63, 
          balance: 70,
          burnout: 29
        },
        {
          day: "Tuesday",
          energy: 40,
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
          energy: 78,
          stress: 12,
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
          id: 25,
          memberId: '27',
          week: curWeek - 4,
          chart: [
          {
            day: "Monday",
            energy: 48,
            stress: 27,
            positivity: 55,
            satisfaction: 63, 
            balance: 70,
            burnout: 29
          },
          {
            day: "Tuesday",
            energy: 40,
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
            energy: 78,
            stress: 12,
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
        id: 26,
        memberId: '27',
        week: curWeek - 5,
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
          id: 66,
          memberId: '28',
          week: curWeek,
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
          id: 62,
          memberId: '28',
          week: curWeek - 1,
          chart: [
          {
            day: "Monday",
            energy: 45,
            stress: 27,
            positivity: 49,
            satisfaction: 60, 
            balance: 53,
            burnout: 31
          },
          {
            day: "Tuesday",
            energy: 56,
            stress: 45,
            positivity: 63,
            satisfaction: 70, 
            balance: 75,
            burnout: 20
          },
          {
            day: "Wednesday",
            energy: 80,
            stress: 27,
            positivity: 78,
            satisfaction: 85, 
            balance: 85,
            burnout: 12
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
          id: 66,
          memberId: '28',
          week: curWeek - 2,
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
          id: 25,
          memberId: '28',
          week: curWeek - 3,
          chart: [
          {
            day: "Monday",
            energy: 48,
            stress: 27,
            positivity: 55,
            satisfaction: 63, 
            balance: 70,
            burnout: 29
          },
          {
            day: "Tuesday",
            energy: 40,
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
            energy: 78,
            stress: 12,
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
            id: 25,
            memberId: '28',
            week: curWeek - 4,
            chart: [
            {
              day: "Monday",
              energy: 48,
              stress: 27,
              positivity: 55,
              satisfaction: 63, 
              balance: 70,
              burnout: 29
            },
            {
              day: "Tuesday",
              energy: 40,
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
              energy: 78,
              stress: 12,
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
          id: 26,
          memberId: '28',
          week: curWeek - 5,
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
            id: 66,
            memberId: '29',
            week: curWeek,
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
            id: 62,
            memberId: '29',
            week: curWeek - 1,
            chart: [
            {
              day: "Monday",
              energy: 45,
              stress: 27,
              positivity: 49,
              satisfaction: 60, 
              balance: 53,
              burnout: 31
            },
            {
              day: "Tuesday",
              energy: 56,
              stress: 45,
              positivity: 63,
              satisfaction: 70, 
              balance: 75,
              burnout: 20
            },
            {
              day: "Wednesday",
              energy: 80,
              stress: 27,
              positivity: 78,
              satisfaction: 85, 
              balance: 85,
              burnout: 12
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
            id: 66,
            memberId: '29',
            week: curWeek - 2,
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
            id: 25,
            memberId: '29',
            week: curWeek - 3,
            chart: [
            {
              day: "Monday",
              energy: 48,
              stress: 27,
              positivity: 55,
              satisfaction: 63, 
              balance: 70,
              burnout: 29
            },
            {
              day: "Tuesday",
              energy: 40,
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
              energy: 78,
              stress: 12,
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
              id: 25,
              memberId: '29',
              week: curWeek - 4,
              chart: [
              {
                day: "Monday",
                energy: 48,
                stress: 27,
                positivity: 55,
                satisfaction: 63, 
                balance: 70,
                burnout: 29
              },
              {
                day: "Tuesday",
                energy: 40,
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
                energy: 78,
                stress: 12,
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
            id: 26,
            memberId: '29',
            week: curWeek - 5,
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
              id: 66,
              memberId: '30',
              week: curWeek,
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
              id: 62,
              memberId: '30',
              week: curWeek - 1,
              chart: [
              {
                day: "Monday",
                energy: 45,
                stress: 27,
                positivity: 49,
                satisfaction: 60, 
                balance: 53,
                burnout: 31
              },
              {
                day: "Tuesday",
                energy: 56,
                stress: 45,
                positivity: 63,
                satisfaction: 70, 
                balance: 75,
                burnout: 20
              },
              {
                day: "Wednesday",
                energy: 80,
                stress: 27,
                positivity: 78,
                satisfaction: 85, 
                balance: 85,
                burnout: 12
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
              id: 66,
              memberId: '30',
              week: curWeek - 2,
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
              id: 25,
              memberId: '30',
              week: curWeek - 3,
              chart: [
              {
                day: "Monday",
                energy: 48,
                stress: 27,
                positivity: 55,
                satisfaction: 63, 
                balance: 70,
                burnout: 29
              },
              {
                day: "Tuesday",
                energy: 40,
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
                energy: 78,
                stress: 12,
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
                id: 25,
                memberId: '30',
                week: curWeek - 4,
                chart: [
                {
                  day: "Monday",
                  energy: 48,
                  stress: 27,
                  positivity: 55,
                  satisfaction: 63, 
                  balance: 70,
                  burnout: 29
                },
                {
                  day: "Tuesday",
                  energy: 40,
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
                  energy: 78,
                  stress: 12,
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
              id: 26,
              memberId: '30',
              week: curWeek - 5,
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
                id: 66,
                memberId: '31',
                week: curWeek,
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
                id: 62,
                memberId: '31',
                week: curWeek - 1,
                chart: [
                {
                  day: "Monday",
                  energy: 45,
                  stress: 27,
                  positivity: 49,
                  satisfaction: 60, 
                  balance: 53,
                  burnout: 31
                },
                {
                  day: "Tuesday",
                  energy: 56,
                  stress: 45,
                  positivity: 63,
                  satisfaction: 70, 
                  balance: 75,
                  burnout: 20
                },
                {
                  day: "Wednesday",
                  energy: 80,
                  stress: 27,
                  positivity: 78,
                  satisfaction: 85, 
                  balance: 85,
                  burnout: 12
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
                id: 66,
                memberId: '31',
                week: curWeek - 2,
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
                id: 25,
                memberId: '31',
                week: curWeek - 3,
                chart: [
                {
                  day: "Monday",
                  energy: 48,
                  stress: 27,
                  positivity: 55,
                  satisfaction: 63, 
                  balance: 70,
                  burnout: 29
                },
                {
                  day: "Tuesday",
                  energy: 40,
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
                  energy: 78,
                  stress: 12,
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
                  id: 25,
                  memberId: '31',
                  week: curWeek - 4,
                  chart: [
                  {
                    day: "Monday",
                    energy: 48,
                    stress: 27,
                    positivity: 55,
                    satisfaction: 63, 
                    balance: 70,
                    burnout: 29
                  },
                  {
                    day: "Tuesday",
                    energy: 40,
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
                    energy: 78,
                    stress: 12,
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
                id: 26,
                memberId: '31',
                week: curWeek - 5,
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
                  id: 66,
                  memberId: '32',
                  week: curWeek,
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
                  id: 62,
                  memberId: '32',
                  week: curWeek - 1,
                  chart: [
                  {
                    day: "Monday",
                    energy: 45,
                    stress: 27,
                    positivity: 49,
                    satisfaction: 60, 
                    balance: 53,
                    burnout: 31
                  },
                  {
                    day: "Tuesday",
                    energy: 56,
                    stress: 45,
                    positivity: 63,
                    satisfaction: 70, 
                    balance: 75,
                    burnout: 20
                  },
                  {
                    day: "Wednesday",
                    energy: 80,
                    stress: 27,
                    positivity: 78,
                    satisfaction: 85, 
                    balance: 85,
                    burnout: 12
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
                  id: 66,
                  memberId: '32',
                  week: curWeek - 2,
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
                  id: 25,
                  memberId: '32',
                  week: curWeek - 3,
                  chart: [
                  {
                    day: "Monday",
                    energy: 48,
                    stress: 27,
                    positivity: 55,
                    satisfaction: 63, 
                    balance: 70,
                    burnout: 29
                  },
                  {
                    day: "Tuesday",
                    energy: 40,
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
                    energy: 78,
                    stress: 12,
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
                    id: 25,
                    memberId: '32',
                    week: curWeek - 4,
                    chart: [
                    {
                      day: "Monday",
                      energy: 48,
                      stress: 27,
                      positivity: 55,
                      satisfaction: 63, 
                      balance: 70,
                      burnout: 29
                    },
                    {
                      day: "Tuesday",
                      energy: 40,
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
                      energy: 78,
                      stress: 12,
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
                  id: 26,
                  memberId: '32',
                  week: curWeek - 5,
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
                    id: 66,
                    memberId: '33',
                    week: curWeek,
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
                    id: 62,
                    memberId: '33',
                    week: curWeek - 1,
                    chart: [
                    {
                      day: "Monday",
                      energy: 45,
                      stress: 27,
                      positivity: 49,
                      satisfaction: 60, 
                      balance: 53,
                      burnout: 31
                    },
                    {
                      day: "Tuesday",
                      energy: 56,
                      stress: 45,
                      positivity: 63,
                      satisfaction: 70, 
                      balance: 75,
                      burnout: 20
                    },
                    {
                      day: "Wednesday",
                      energy: 80,
                      stress: 27,
                      positivity: 78,
                      satisfaction: 85, 
                      balance: 85,
                      burnout: 12
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
                    id: 66,
                    memberId: '33',
                    week: curWeek - 2,
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
                    id: 25,
                    memberId: '33',
                    week: curWeek - 3,
                    chart: [
                    {
                      day: "Monday",
                      energy: 48,
                      stress: 27,
                      positivity: 55,
                      satisfaction: 63, 
                      balance: 70,
                      burnout: 29
                    },
                    {
                      day: "Tuesday",
                      energy: 40,
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
                      energy: 78,
                      stress: 12,
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
                      id: 25,
                      memberId: '33',
                      week: curWeek - 4,
                      chart: [
                      {
                        day: "Monday",
                        energy: 48,
                        stress: 27,
                        positivity: 55,
                        satisfaction: 63, 
                        balance: 70,
                        burnout: 29
                      },
                      {
                        day: "Tuesday",
                        energy: 40,
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
                        energy: 78,
                        stress: 12,
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
                    id: 26,
                    memberId: '33',
                    week: curWeek - 5,
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
                      id: 66,
                      memberId: '41',
                      week: curWeek,
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
                      id: 62,
                      memberId: '41',
                      week: curWeek - 1,
                      chart: [
                      {
                        day: "Monday",
                        energy: 45,
                        stress: 27,
                        positivity: 49,
                        satisfaction: 60, 
                        balance: 53,
                        burnout: 31
                      },
                      {
                        day: "Tuesday",
                        energy: 56,
                        stress: 45,
                        positivity: 63,
                        satisfaction: 70, 
                        balance: 75,
                        burnout: 20
                      },
                      {
                        day: "Wednesday",
                        energy: 80,
                        stress: 27,
                        positivity: 78,
                        satisfaction: 85, 
                        balance: 85,
                        burnout: 12
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
                      id: 66,
                      memberId: '41',
                      week: curWeek - 2,
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
                      id: 25,
                      memberId: '41',
                      week: curWeek - 3,
                      chart: [
                      {
                        day: "Monday",
                        energy: 48,
                        stress: 27,
                        positivity: 55,
                        satisfaction: 63, 
                        balance: 70,
                        burnout: 29
                      },
                      {
                        day: "Tuesday",
                        energy: 40,
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
                        energy: 78,
                        stress: 12,
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
                        id: 25,
                        memberId: '41',
                        week: curWeek - 4,
                        chart: [
                        {
                          day: "Monday",
                          energy: 48,
                          stress: 27,
                          positivity: 55,
                          satisfaction: 63, 
                          balance: 70,
                          burnout: 29
                        },
                        {
                          day: "Tuesday",
                          energy: 40,
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
                          energy: 78,
                          stress: 12,
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
                      id: 26,
                      memberId: '41',
                      week: curWeek - 5,
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

const ChartsReducer = function(state = data, action) {
  switch (action.type) {
    case FETCH_CHARTS:
      return state;
    default:
      return state;
  }
};

export default ChartsReducer;