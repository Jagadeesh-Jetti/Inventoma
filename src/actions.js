import axios from "axios";
import {
  ADD_DATA,
  DELETE_INVENTORY,
  FETCH_INVENTORIES,
  FETCH_SALES,
} from "./actionTypes";

const url = "https://inventory-management-backend-six.vercel.app";

export const GetInventories = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${url}/inventories`);
    dispatch({ type: FETCH_INVENTORIES, payload: data });
  } catch (error) {
    console.error("Error while fetching inventories: ", error);
  }
};

export const GetSales = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${url}/sales`);
    dispatch({ type: FETCH_SALES, payload: data });
  } catch (error) {
    console.error("Error while fetching sales: ", error);
  }
};

export const AddEntry = (entryDetails) => async (dispatch) => {
  try {
    let completeUrl;

    if (entryDetails.type === "inventories") {
      completeUrl = `${url}/inventories`;
    } else {
      completeUrl = `${url}/sales`;
    }

    const response = await axios.post(completeUrl, entryDetails, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    dispatch({ type: ADD_DATA, payload: response });
  } catch (error) {
    console.error("Error while adding entry to the database:", error);
  }
};

export const DeleteEntry = (id) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await axios.delete(`${url}/inventories/${id}`);
    console.log(data);
    dispatch({ type: DELETE_INVENTORY, payload: data });
  } catch (error) {
    console.error("Error while deleting the entry:", error);
  }
};
