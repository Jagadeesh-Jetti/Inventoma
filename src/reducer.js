import { ADD_DATA, DELETE_INVENTORY, FETCH_INVENTORIES, FETCH_SALES } from "./actionTypes"

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
      case ADD_DATA: {
        if(payload.type === "inventories"){
          return{
            ...state,
            inventories: [...state.inventories, payload]
          }
        }
        else{
          return{
            ...state,
            sales: [...state.sales, payload]
          }
        }
      }
      case DELETE_INVENTORY: {
        return{
          ...state,
          inventories: state.inventories.filter((inventory) => inventory._id !== payload._id)
        }
      }
      default:
        return state;
    }
  };
  