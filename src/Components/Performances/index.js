import { connect } from "react-redux";
import Performances from "./Performances";
import { getPerformances } from "../../data/action/api";

const mapStateToProps = (state, { id }) => {
    return {
        performances: state.performances.filter((performance )=> performance.stage_id === +id),
        stages: state.stages,
        artists: state.artists,
    };
};

const mapDispatchToProps = ( dispatch, { id, referrer } ) => {
    return {
        handleLoad: () => dispatch(getPerformances(referrer, id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps )(Performances);