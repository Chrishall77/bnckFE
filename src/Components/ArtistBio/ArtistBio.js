import React from 'react';
import Performances from '../Performances';
import Header from "../Header/Header";
import { withRouter } from "react-router-dom";

const ArtistBio = ({ location, artists }) => {
    const { pathname } = location;
    const [ ,, referrer, id ] = pathname.split("/")

    // let stageName = stages.find((stage)=> {
    //     return stage.id === performance.stage_id;
    // })
    console.log(id);
    console.log(artists);
    const artistInfo = artists.find((artist)=> {
        console.log(artist.id)
        return artist.id === +id;
    })
    console.log(artistInfo);

    return (
        <>
            <Header>{ artistInfo ? artistInfo.name : "" }</Header>
            <div className="artistBioBackground artistBioBackgroundPosition artistName" id="artist#">
                <img className="artistBioImage" src={ artistInfo ? artistInfo.image : "" } />
                <div className="artistBioText">
                    <p>{ artistInfo ? artistInfo.bio : "" }</p>
                </div>
                <div className="artistStages">
                    <Performances 
                        referrer={ referrer }
                        id={ id }
                    />
                </div>
            </div>
        </>
    )

};

export default withRouter(ArtistBio);
