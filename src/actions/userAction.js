import { GET_USERS } from "../actionTypes";
import { database } from "../config/fbConfig";

export function getUsers() {
  return dispatch => {
    database.on("value", snap => {
      dispatch({
        type: GET_USERS,
        payload: snap.val()
      });
    });
  };
}

export function saveUser(user) {
  return dispatch => database.push(user);
}
