import { FETCH_POSTS } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_POSTS:
      return [
          { "title": "Starting 2021 Right", 
            "categories": ["health"], 
            "content": "I'm stating 2021 off the right way!"
          },
          { "title": "Learn to Code", 
            "categories": ["career"], 
            "content": "I'm learning to code!"
          },
          { "title": "Get Rich Quick!", 
            "categories": ["finances"], 
            "content": "Save your money!"
          }
        ]
    default:
      return state;
  }
}
