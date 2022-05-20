import { combineReducers } from "redux";
import ChartsReducer from "./reducer-charts";
import AvgChartsReducer from "./chart-average-reducer";
import MembersReducer from "./reducer-members";

const rootReducer = combineReducers({
  charts: ChartsReducer,
  avgCharts: AvgChartsReducer,
  members: MembersReducer,
});

export default rootReducer;
