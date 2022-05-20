import * as _ from "lodash";

const defaultState = [
  {
    id: "20",
    name: "Paula Weaver",
    feedback: 90,
    department: "Human Resources",
    photo: "https://randomuser.me/api/portraits/women/84.jpg",
    email: "adamW@example.com",
    pw: "string",
    dob: "date",
    position: "HR Coordinator",
    supervisor: "Don Juan",
    interests: {
      int1: "rock climbing",
      int2: "hiking",
      int3: "puzzles"
    },
    personalMilestones: ["ran a marathon"],
    professionalMilestone: ["got a promotion"],
    favoriteFoods: {
      food1: "italian",
      food2: "mexican",
      food3: "american"
    },
    movieGenre: {
      genre: "sci-fi"
    },
    favoriteMusic: ["Pearl Jam", "Amy Winehouse"],
    favoriteCauses: {
      cause1: "environment",
      cause2: "homelessness",
      cause3: "autism awareness"
    },
    rewards_points: 50
  },
  {
    id: "21",
    name: "Dennis Nichols",
    department: "Accounting",
    feedback: 59,
    photo: "https://randomuser.me/api/portraits/men/69.jpg",
    email: "adamW@example.com",
    pw: "string",
    dob: "date",
    position: "HR Coordinator",
    supervisor: "Don Juan",
    interests: {
      int1: "rock climbing",
      int2: "puzzles",
      int3: "skiing"
    },
    personalMilestones: ["ran a marathon"],
    professionalMilestone: ["got a promotion"],
    favoriteFoods: {
      food1: "italian",
      food2: "mexican",
      food3: "american"
    },
    movieGenre: {
      genre: "horror"
    },
    favoriteMusic: ["Pearl Jam", "Amy Winehouse"],
    favoriteCauses: {
      cause1: "LBGTQ",
      cause2: "cure cancer",
      cause3: "autism awareness"
    },
    rewards_points: 50
  },
  {
    id: "22",
    name: "Harold Frazier",
    department: "Technology",
    feedback: 71,
    photo: "https://randomuser.me/api/portraits/men/5.jpg",
    email: "adamW@example.com",
    pw: "string",
    dob: "date",
    position: "HR Coordinator",
    supervisor: "Don Juan",
    interests: {
      int1: "hiking",
      int2: "paddle boarding",
      int3: "cooking"
    },
    personalMilestones: ["ran a marathon"],
    professionalMilestone: ["got a promotion"],
    favoriteFoods: {
      food1: "asian",
      food2: "american",
      food3: "mediterranean"
    },
    movieGenre: {
      genre: "comedy"
    },
    favoriteMusic: ["Pearl Jam", "Amy Winehouse"],
    favoriteCauses: {
      cause1: "environment",
      cause2: "homelessness",
      cause3: "autism awareness"
    },
    rewards_points: 50
  },
  {
    id: "23",
    name: "Landon Morrison",
    feedback: 93,
    department: "Communications",
    photo: "https://randomuser.me/api/portraits/men/70.jpg",
    email: "adamW@example.com",
    pw: "string",
    dob: "date",
    position: "HR Coordinator",
    supervisor: "Don Juan",
    interests: {
      int1: "paddle boarding",
      int2: "cooking",
      int3: "puzzles"
    },
    personalMilestones: ["ran a marathon"],
    professionalMilestone: ["got a promotion"],
    favoriteFoods: {
      food1: "asian",
      food2: "mexican",
      food3: "mediterranean"
    },
    movieGenre: {
      genre: "drama"
    },
    favoriteMusic: ["Pearl Jam", "Amy Winehouse"],
    favoriteCauses: {
      cause1: "environment",
      cause2: "homelessness",
      cause3: "autism awareness"
    },
    rewards_points: 50
  },
  {
    id: "24",
    name: "Leta Mitchelle",
    department: "Advertising",
    photo: "https://randomuser.me/api/portraits/women/39.jpg",
    email: "adamW@example.com",
    pw: "string",
    dob: "date",
    position: "HR Coordinator",
    supervisor: "Don Juan",
    interests: {
      int1: "hiking",
      int2: "paddle boarding",
      int3: "cooking"
    },
    personalMilestones: ["ran a marathon"],
    professionalMilestone: ["got a promotion"],
    favoriteFoods: {
      food1: "mediterranean",
      food2: "mexican",
      food3: "american"
    },
    movieGenre: {
      genre: "comedy"
    },
    favoriteMusic: ["Pearl Jam", "Amy Winehouse"],
    favoriteCauses: {
      cause1: "environment",
      cause2: "cure cancer",
      cause3: "autism awareness"
    },
    rewards_points: 50
  },
  {
    id: "25",
    name: "Tristan Ortiz",
    department: "Human Resources",
    photo: "https://randomuser.me/api/portraits/men/36.jpg",
    email: "adamW@example.com",
    pw: "string",
    dob: "date",
    position: "HR Coordinator",
    supervisor: "Don Juan",
    interests: {
      int1: "rock climbing",
      int2: "hiking",
      int3: "puzzles"
    },
    personalMilestones: ["ran a marathon"],
    professionalMilestone: ["got a promotion"],
    favoriteFoods: {
      food1: "mexican",
      food2: "italian",
      food3: "american"
    },
    movieGenre: {
      genre: "comedy"
    },
    favoriteMusic: ["Pearl Jam", "Amy Winehouse"],
    favoriteCauses: {
      cause1: "environment",
      cause2: "LBGTQ",
      cause3: "autism awareness"
    },
    rewards_points: 50
  },
  {
    id: "26",
    name: "Tracey Larson",
    department: "Facilities",
    photo: "https://randomuser.me/api/portraits/women/73.jpg",
    email: "adamW@example.com",
    pw: "string",
    dob: "date",
    position: "HR Coordinator",
    supervisor: "Don Juan",
    interests: {
      int1: "paddle boarding",
      int2: "cooking",
      int3: "puzzles"
    },
    personalMilestones: ["ran a marathon"],
    professionalMilestone: ["got a promotion"],
    favoriteFoods: {
      food1: "mexican",
      food2: "italian",
      food3: "asian"
    },
    movieGenre: {
      genre: "romance"
    },
    favoriteMusic: ["Pearl Jam", "Amy Winehouse"],
    favoriteCauses: {
      cause1: "environment",
      cause2: "homelessness",
      cause3: "autism awareness"
    },
    rewards_points: 50
  },
  {
    id: "27",
    name: "Elaine Gray",
    department: "Information Technologies",
    photo: "https://randomuser.me/api/portraits/women/10.jpg",
    email: "adamW@example.com",
    pw: "string",
    dob: "date",
    position: "HR Coordinator",
    supervisor: "Don Juan",
    interests: {
      int1: "hiking",
      int2: "paddle boarding",
      int3: "cooking"
    },
    personalMilestones: ["ran a marathon"],
    professionalMilestone: ["got a promotion"],
    favoriteFoods: {
      food1: "mexican",
      food2: "italian",
      food3: "american"
    },
    movieGenre: {
      genre: "horror"
    },
    favoriteMusic: ["Pearl Jam", "Amy Winehouse"],
    favoriteCauses: {
      cause1: "environment",
      cause2: "cure cancer",
      cause3: "LBGTQ"
    },
    rewards_points: 50
  },
  {
    id: "28",
    name: "Jeffrey Newman",
    department: "Accounting",
    photo: "https://randomuser.me/api/portraits/men/29.jpg",
    email: "adamW@example.com",
    pw: "string",
    dob: "date",
    position: "HR Coordinator",
    supervisor: "Don Juan",
    interests: {
      int1: "hiking",
      int2: "paddle boarding",
      int3: "cooking"
    },
    personalMilestones: ["ran a marathon"],
    professionalMilestone: ["got a promotion"],
    favoriteFoods: {
      food1: "asian",
      food2: "american",
      food3: "mediterranean"
    },
    movieGenre: {
      genre: "sci-fi"
    },
    favoriteMusic: ["Pearl Jam", "Amy Winehouse"],
    favoriteCauses: {
      cause1: "environment",
      cause2: "alzheimer's",
      cause3: "LBGTQ"
    },
    rewards_points: 50
  },
  {
    id: "29",
    name: "Yvonne Ryan",
    department: "Social Media / Outreach",
    photo: "https://randomuser.me/api/portraits/women/29.jpg",
    email: "adamW@example.com",
    pw: "string",
    dob: "date",
    position: "HR Coordinator",
    supervisor: "Don Juan",
    interests: {
      int1: "hiking",
      int2: "puzzles",
      int3: "cooking"
    },
    personalMilestones: ["ran a marathon"],
    professionalMilestone: ["got a promotion"],
    favoriteFoods: {
      food1: "mediterranean",
      food2: "italian",
      food3: "american"
    },
    movieGenre: {
      genre: "drama"
    },
    favoriteMusic: ["Pearl Jam", "Amy Winehouse"],
    favoriteCauses: {
      cause1: "alzheimer's",
      cause2: "homelessness",
      cause3: "autism awareness"
    },
    rewards_points: 50
  },
  {
    id: "30",
    name: "Gwendolyn Cruz",
    department: "Administrative Support",
    photo: "https://randomuser.me/api/portraits/women/62.jpg",
    email: "adamW@example.com",
    pw: "string",
    dob: "date",
    position: "HR Coordinator",
    supervisor: "Don Juan",
    interests: {
      int1: "rock climbing",
      int2: "shopping",
      int3: "cooking"
    },
    personalMilestones: ["ran a marathon"],
    professionalMilestone: ["got a promotion"],
    favoriteFoods: {
      food1: "mediterranean",
      food2: "mexican",
      food3: "american"
    },
    movieGenre: {
      genre: "comedy"
    },
    favoriteMusic: ["Pearl Jam", "Amy Winehouse"],
    favoriteCauses: {
      cause1: "alzheimer's",
      cause2: "cure cancer",
      cause3: "autism awareness"
    },
    rewards_points: 50
  }
];

const mapTest = _.map(defaultState, "interests");

const foodMap = _.map(defaultState, "favoriteFoods");

const causeMap = _.map(defaultState, "favoriteCauses");

const genreMap = _.map(defaultState, "movieGenre");

// console.log(genreMap);

const countValuesInObj = function (obj, value) {
  let count = 0;

  for (const property in obj) {
    if (typeof obj[property] === "object") {
      count = count + countValuesInObj(obj[property], value);
    }

    if (obj[property] === value) {
      return 1; // count = count + 1; // count++;
    }
  }
  return count;
};

const rockClimbCount = countValuesInObj(mapTest, "rock climbing");
const hikingCount = countValuesInObj(mapTest, "hiking");
const cookingCount = countValuesInObj(mapTest, "cooking");
const puzzleCount = countValuesInObj(mapTest, "puzzles");
const shoppingCount = countValuesInObj(mapTest, "shopping");

export const data = [
  { name: "rock climbing", value: rockClimbCount },
  { name: "hiking", value: hikingCount },
  { name: "cooking", value: cookingCount },
  { name: "puzzles", value: puzzleCount },
  { name: "shopping", value: shoppingCount }
];

//console.log(defaultState)
export const hikingNames = [];
export const rockClimbingNames = [];
export const cookingNames = [];
export const puzzleNames = [];
export const shoppingNames = [];

for (let index = 0; index < defaultState.length; index++) {
  if (_.includes(defaultState[index].interests, "hiking")) {
    hikingNames.push(defaultState[index].name);
  }
}

for (let index = 0; index < defaultState.length; index++) {
  if (_.includes(defaultState[index].interests, "rock climbing")) {
    rockClimbingNames.push(defaultState[index].name);
  }
}

for (let index = 0; index < defaultState.length; index++) {
  if (_.includes(defaultState[index].interests, "cooking")) {
    cookingNames.push(defaultState[index].name);
  }
}

for (let index = 0; index < defaultState.length; index++) {
  if (_.includes(defaultState[index].interests, "puzzles")) {
    puzzleNames.push(defaultState[index].name);
  }
}

for (let index = 0; index < defaultState.length; index++) {
  if (_.includes(defaultState[index].interests, "shopping")) {
    shoppingNames.push(defaultState[index].name);
  }
}

const italianNames = [];
export const burgerNames = [];
const asianNames = [];
const chickenNames = [];
const tacoNames = [];

const italianCount = countValuesInObj(foodMap, "italian");
const burgerCount = countValuesInObj(foodMap, "american");
const asianCount = countValuesInObj(foodMap, "asian");
const chickenCount = countValuesInObj(foodMap, "mediterranean");
const tacoCount = countValuesInObj(foodMap, "mexican");

for (let index = 0; index < defaultState.length; index++) {
  if (_.includes(defaultState[index].favoriteFoods, "italian")) {
    italianNames.push(defaultState[index].name);
  }
}

for (let index = 0; index < defaultState.length; index++) {
  if (_.includes(defaultState[index].favoriteFoods, "american")) {
    burgerNames.push(defaultState[index].name);
  }
}

for (let index = 0; index < defaultState.length; index++) {
  if (_.includes(defaultState[index].favoriteFoods, "asian")) {
    asianNames.push(defaultState[index].name);
  }
}

for (let index = 0; index < defaultState.length; index++) {
  if (_.includes(defaultState[index].favoriteFoods, "mediterranean")) {
    chickenNames.push(defaultState[index].name);
  }
}

for (let index = 0; index < defaultState.length; index++) {
  if (_.includes(defaultState[index].favoriteFoods, "mexican")) {
    tacoNames.push(defaultState[index].name);
  }
}

export const foodData = [
  { name: "italian", value: italianCount },
  { name: "american", value: burgerCount },
  { name: "asian", value: asianCount },
  { name: "mediterranean", value: chickenCount },
  { name: "mexican", value: tacoCount }
];

const environmentNames = [];
export const cancerNames = [];
const homelessNames = [];
const lNames = [];
const alzNames = [];

const environmentCount = countValuesInObj(causeMap, "environment");
const cancerCount = countValuesInObj(causeMap, "cure cancer");
const homelessCount = countValuesInObj(causeMap, "homelessness");
const lbgtqCount = countValuesInObj(causeMap, "LBGTQ");
const alzCount = countValuesInObj(causeMap, "alzheimer's");

for (let index = 0; index < defaultState.length; index++) {
  if (_.includes(defaultState[index].favoriteCauses, "environment")) {
    environmentNames.push(defaultState[index].name);
  }
}

for (let index = 0; index < defaultState.length; index++) {
  if (_.includes(defaultState[index].favoriteCauses, "cure cancer")) {
    cancerNames.push(defaultState[index].name);
  }
}

for (let index = 0; index < defaultState.length; index++) {
  if (_.includes(defaultState[index].favoriteCauses, "homelessness")) {
    homelessNames.push(defaultState[index].name);
  }
}

for (let index = 0; index < defaultState.length; index++) {
  if (_.includes(defaultState[index].favoriteCauses, "LBGTQ")) {
    lNames.push(defaultState[index].name);
  }
}

for (let index = 0; index < defaultState.length; index++) {
  if (_.includes(defaultState[index].favoriteCauses, "alzheimer's")) {
    alzNames.push(defaultState[index].name);
  }
}

export const comedyNames = [];

for (let index = 0; index < defaultState.length; index++) {
  if (_.includes(defaultState[index].movieGenre, "comedy")) {
    comedyNames.push(defaultState[index].name);
  }
}

export const causeData = [
  { name: "environment", value: italianCount },
  { name: "cancer", value: burgerCount },
  { name: "homelessness", value: asianCount },
  { name: "LBGTQ", value: chickenCount },
  { name: "alzheimer's", value: tacoCount }
];

//console.log(causeData);

const horrorCount = countValuesInObj(genreMap, "horror");
const sciFiCount = countValuesInObj(genreMap, "sci-fi");
const comedyCount = countValuesInObj(genreMap, "comedy");
const dramaCount = countValuesInObj(genreMap, "drama");
const romanceCount = countValuesInObj(genreMap, "romance");

export const movieData = [
  { name: "horror", value: horrorCount },
  { name: "sci-fi", value: sciFiCount },
  { name: "drama", value: dramaCount },
  { name: "comedy", value: comedyCount },
  { name: "romance", value: romanceCount }
];
//console.log(movieData);
