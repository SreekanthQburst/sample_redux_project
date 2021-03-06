import { ActionTypes } from "../contants/actionTypes";
import api from "../../api";

export const setUsers = () => async (dispatch) => {
  dispatch({ type: ActionTypes.LOADING });
  const response = await api.get("/?results=100").catch((e) => {
    console.log("error : ", e);

    dispatch({ type: ActionTypes.ERROR, payload: e });
  });
  dispatch({
    type: ActionTypes.SET_USERS,
    payload: response.data.results,
  });
};

export const updatePage = (page) => {
  return { type: ActionTypes.UPDATE_PAGE, payload: page };
};
export const clean_data = () => {
  return { type: ActionTypes.CLEAN_DATA };
};

// actions for user details

export const selectedUser = (user) => {
  return {
    type: ActionTypes.SELECTED_USER,
    payload: user,
  };
};
