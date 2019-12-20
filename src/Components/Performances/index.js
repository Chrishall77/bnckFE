import { connect } from "react-redux";
import Performances from "./Performances";
import { getPerformances } from "../../data/action/api";

const mapStateToProps = (state, { id, referrer }) => {
    const trimmedReferrer = referrer.slice(0,referrer.length - 1);
    console.log(trimmedReferrer)
    return {
        performances: state.performances.filter((performance )=> performance[`${ trimmedReferrer }_id`] === +id),
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