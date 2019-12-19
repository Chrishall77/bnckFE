import { connect } from "react-redux";
import Performances from "./Performances";

const mapStateToProps = state => {
    return {
        performances: state.performances,
        stages: state.stages,
        artists: state.artists,
        };
    };

export default connect(mapStateToProps)(Performances);