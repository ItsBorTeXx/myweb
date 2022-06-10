import { combineReducers, AnyAction } from "redux";

const persistConfig = {
  key: "root",
  whitelist: ["auth"],
};

const appReducer = combineReducers({});

const rootReducer = (state: any, action: AnyAction) => {
  return appReducer(state, action);
};

export default rootReducer;
