import axios from "axios";
import { ADD_DATA, DELETE_INVENTORY, FETCH_INVENTORIES, FETCH_SALES } from "./actionTypes";

const url = "https://assignment18.vishalsoni7.repl.co"

export const GetInventories = () => async (dispatch) => {
    try{
        setTimeout(async () => {
            const {
                data: {data}
            } = await axios.get(`${url}/inventories`)
            dispatch({ type: FETCH_INVENTORIES, payload: data})
        }, 500)
    }
    catch(error){
        console.error("Error while fetching inventories: ", error)
    }
}

export const GetSales = () => async (dispatch) => {
    try{
        setTimeout(async () => {
            const {
                data: {data}
            } = await axios.get(`${url}/sales`)
            dispatch({ type: FETCH_SALES, payload: data})
        }, 500);
    }
    catch(error){
        console.error("Error while fetching sales: ", error)
    }
}

export const AddEntry = (entryDetails) => async (dispatch) => {
    try{
        let completeUrl;
        
        if(entryDetails.type === "inventories"){
            completeUrl = `${url}/inventories`
        }
        else{
            completeUrl = `${url}/sales`
        }

        const { 
            data : { data } 
        } = await axios.post(completeUrl, entryDetails, {
            headers: {
                "Content-Type" : "application/json"
            }
        })
        console.log(data)
        dispatch({ type: ADD_DATA, payload: data})
    } 
    catch(error){
        console.log("Error while adding entry to the database:", error)
    }
}

export const DeleteEntry = (id) => async (dispatch) => {
    try{
        const { 
            data : {data} 
        } = await axios.delete(`${url}/inventories/${id}`);
        dispatch({ type: DELETE_INVENTORY, payload: data})
    }
    catch(error){
        console.log("Error while deleting the entry:", error)
    }
}
