import { combineReducers } from "redux";
import ChartsReducer from "./reducer-charts";
import AvgChartsReducer from "./chart-average-reducer";
import MembersReducer from "./reducer-members";
import AuthReducer from "./reducer-auth";

const rootReducer = combineReducers({
  charts: ChartsReducer,
  avgCharts: AvgChartsReducer,
  members: MembersReducer,
  auth: AuthReducer,
});

export default rootReducer;
