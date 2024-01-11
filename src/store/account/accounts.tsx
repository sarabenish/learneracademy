import { combineReducers } from "redux";

const accList = [
  {
    username: "sara27",
    password: "Sara!297",
  },
];

const initialState = accList;

function accounts(state = initialState, action: any) {
  return state;
}

export default accounts;
