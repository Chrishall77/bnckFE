import { connect } from "react-redux";
import Stages from "./Stages";

const mapStateToProps = state => {
    return {
        stages: state.stages,
        };
    };

export default connect(mapStateToProps)(Stages);