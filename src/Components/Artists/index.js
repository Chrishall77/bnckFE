import { connect } from "react-redux";
import Artists from "./Artists";
import { setArtist } from "../../data/action/state";

const mapStateToProps = state => {
    return {
        artists: state.artists,
        };
    };

const mapDispatchToProps = dispatch => {
    return {
        handleClick: (artistId) => {
            dispatch(setArtist(artistId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Artists);