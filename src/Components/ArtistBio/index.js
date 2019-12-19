import { connect } from 'react-redux';
import ArtistBio from './ArtistBio';

const mapStateToProps = state => {
    return {
        artists: state.artist,
    }
}

export default connect(mapStateToProps)(ArtistBio);