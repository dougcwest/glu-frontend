import { FETCH_MEMBERS, FETCH_MEMBER, FETCH_BY_QUERY, DELETE_MEMBER, CREATE_MEMBER, SORT_MEMBERS, UPDATE_CATEGORY } from '../actions';

import * as _ from "lodash";

// eslint-disable-next-line default-param-last
const MembersReducer = function (state = [], action) {
  switch (action.type) {
    case FETCH_MEMBERS:
      return action.payload.data.map(function (m) {
        return {
          id: m.id,
          firstName: m.firstName || "",
          lastName: m.lastName || "",
          feedback: m.feedback,
          department: m.department,
          photo: m.photo,
          email: m.email,
          pw: m.pw,
          dob: m.dob,
          position: m.position,
          supervisor: m.supervisor,
          interests: m.interests,
          personalMilestones: m.personalMilestones,
          professionalMilestones: m.professionalMilestones,
          favoriteFoods: m.favoriteFoods,
          movieGenre: m.movieGenre,
          favoriteMusic: m.favoriteMusic,
          favoriteCauses: m.favoriteCauses,
          rewards_points: m.rewards_points,
          category: m.category,
        };
      });
    case FETCH_MEMBER:
      if (state.length > 0) {
        return state.map(function (m) {
          if (m.id === action.payload.data.id) {
            return action.payload.data;
          } else {
            return m;
          }
        });
      } else {
        return [action.payload.data, ...state];
      }
    case DELETE_MEMBER:
      return state.filter(member => member.id === action.payload.data);
    case CREATE_MEMBER:
      return [action.payload.data, ...state];
      case SORT_MEMBERS:
        return _.orderBy(state, 'feedback', 'desc'); 
      case UPDATE_CATEGORY:
        return [action.payload, ...state];  
        case FETCH_BY_QUERY:
          return action.payload.data;  
    default:
      return state;
  }
};

export default MembersReducer;