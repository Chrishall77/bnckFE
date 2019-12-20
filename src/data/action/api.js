//do thunks here
import axios from "../../axios";
import { setStages, setArtists, setPerformances } from "./state";

export const getStages = () => (dispatch) => {
    axios.get("/stages").then(({ data })=>{
        console.log(dispatch);
        dispatch(setStages(data.data));
    }).catch((error)=>{console.error(error)})
}

export const getArtists = () => (dispatch) => {
    axios.get("/artists").then(({ data })=>{
        console.log(dispatch);
        dispatch(setArtists(data.data));
    }).catch((error)=>{console.error(error)})
}

export const getPerformances = ( referrer="stages", id="1" ) => (dispatch) => {
    axios.get(`/${ referrer }/${ id }/performances`).then(({ data })=>{
        console.log(dispatch);
        dispatch(setPerformances(data.data));
    }).catch((error)=>{console.error(error)})
}


