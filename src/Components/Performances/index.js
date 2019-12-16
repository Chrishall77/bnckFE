import { connect } from "react-redux";
import Performances from "./Performances";

const mapStateToProps = state => {
    return {
        performances: state.performances,
        };
    };

export default connect(mapStateToProps)(Performances);