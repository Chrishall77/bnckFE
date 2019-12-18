import App from "./App";
import { connect } from "react-redux";
import { getStages, getArtists, getPerformances } from "../../data/action/api";

const mapDispatchToProps = (dispatch) => {
    return { 
        getStages: ()=>dispatch(getStages()),
        getArtists: ()=>dispatch(getArtists()),
        getPerformances: ()=>dispatch(getPerformances()),
    }
}


export default connect(null, mapDispatchToProps)(App);