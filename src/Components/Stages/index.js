import { connect } from "react-redux";
import Stages from "./Stages";
import { setStage } from "../../data/action/state";

const mapStateToProps = state => {
    return {
        stages: state.stages,
        };
    };

const mapDispatchToProps = dispatch => {
    return {
        handleClick: (stageId) => {
            dispatch(setStage(stageId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stages);