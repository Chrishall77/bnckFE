import React from 'react';

const ArtistBio = () => (

    <>
        <div className="artistBioBackground artistBioBackgroundPosition artistName" id="artist#">
            <img className="artistBioImage" src={ artist.image } />
            <div className="artistStages">
                {/* { STAGE INFO } */}
            </div>
            <div className="artistBioText">
                { artist.bio }

            </div>
        </div>
    </>

);

export default ArtistBio;