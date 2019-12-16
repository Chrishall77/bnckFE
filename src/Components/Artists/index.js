import { connect } from "react-redux";
import Artists from "./Artists";

const mapStateToProps = state => {
    return {
        artists: state.artists,
        };
    };

export default connect(mapStateToProps)(Artists);