import { connect } from "react-redux";
import Performances from "./Performances";
import { getPerformances } from "../../data/action/api";

const mapStateToProps = (state, { stage }) => {
    console.log(stage);
    return {
        performances: state.performances.filter((performance )=> performance.stage_id === +stage),
        stages: state.stages,
        artists: state.artists,
    };
};

const mapDispatchToProps = ( dispatch, { stage, referrer } ) => {
    return {
        handleLoad: () => dispatch(getPerformances(referrer, stage))
    }
}


export default connect(mapStateToProps, mapDispatchToProps )(Performances);