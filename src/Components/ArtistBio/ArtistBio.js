import React from 'react';
import Performances from '../Performances';
import Header from "../Header/Header";

const ArtistBio = ({ artist }) => (
    
    <>
        <Header>Name of Artist</Header>
           { console.log(artist) }
        
            <div className="artistBioBackground artistBioBackgroundPosition artistName" id="artist#">
                <img className="artistBioImage" src="https://placebear.com/200/300" />
                <div className="artistBioText">
                    <p>{ artist.name }</p>
                    <p>{ artist.bio }</p>
                </div>
                <div className="artistStages">
                    <Performances titleStage={ true }/>
                </div>
            </div>
    </>

);

export default ArtistBio;