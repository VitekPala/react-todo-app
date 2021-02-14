import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

const reducer = (history: any) =>
  combineReducers<any>({
    router: connectRouter(history),
  });
export default reducer;
