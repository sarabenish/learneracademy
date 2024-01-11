import { combineReducers } from "redux";
import accounts from "../store/account/accounts";

const rootReducer = combineReducers({
  account: accounts,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
