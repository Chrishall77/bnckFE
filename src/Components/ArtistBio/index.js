import { connect } from 'react-redux';
import ArtistBio from './ArtistBio';

const mapStateToProps = ({ artists }) => {
    console.log("ArtistBio: Index")
    return {
        artists: artists,
    }
}

export default connect(mapStateToProps)(ArtistBio);