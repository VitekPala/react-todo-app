import { createStore } from "redux";
import createRootReducer from "./reducer";
import { createMemoryHistory } from "history";

const configureStore = (preloadedState: any) => {
  const initialState = { router: createMemoryHistory() };
  const history = initialState.router;

  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState
  );

  return { history, store };
};

export const { history } = configureStore({});
