import { connect } from 'react-redux';
import ArtistBio from './ArtistBio';

const mapStateToProps = state => {
    return {
        artistId: state.artist,
        artists: state.artists,
        artist: state.artists.find((artist) => {
            return artist.id === state.artist
        })
    }
}

export default connect(mapStateToProps)(ArtistBio);