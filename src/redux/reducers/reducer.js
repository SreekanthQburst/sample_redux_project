import { ActionTypes } from "../contants/actionTypes";

const initialState = {
  loading: false,
  list: [],
  subList: [],
  error: "",
  page: 1,
};
export const listReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // loading api
    case ActionTypes.LOADING:
      return { ...state, loading: true, list: [], subList: [] };
    // error handling
    case ActionTypes.ERROR:
      return { ...state, error: payload, loading: false };
    // added api response
    case ActionTypes.SET_USERS:
      return {
        ...state,
        loading: false,
        list: payload,
        subList: payload.slice(
          (state.page - 1) * 10,
          (state.page - 1) * 10 + 10
        ),
      };
    case ActionTypes.UPDATE_PAGE:
      return {
        ...state,
        page: payload,
        subList: state.list.slice((payload - 1) * 10, (payload - 1) * 10 + 10),
      };
    default:
      return state;
  }
};

export const SelectedUserReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_USER:
      return { ...state, ...payload };
    default:
      return state;
  }
};
