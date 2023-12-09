import { FETCH_INVENTORIES, FETCH_SALES } from "./actionTypes"

export const initialState ={
    inventories: [],
    sales: [],

}

export const reducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case FETCH_INVENTORIES:
        return {
          ...state,
          inventories: payload,
        };
      case FETCH_SALES: {
        return{
          ...state,
          sales: payload
        }
      }
      default:
        return state;
    }
  };
  