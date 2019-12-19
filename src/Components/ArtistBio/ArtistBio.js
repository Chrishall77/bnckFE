import React from 'react';
import Performances from '../Performances';
import Header from "../Header/Header";
import { withRouter } from "react-router-dom";

const ArtistBio = ({ location,artists }) => {
    const { pathname } = location;
    const [ ,referrer, id ] = pathname.split("/")

    // let stageName = stages.find((stage)=> {
    //     return stage.id === performance.stage_id;
    // })
    
    let artist = artists.find((artist)=> {
        return artist.id === id;
    })

    return (
        <>
            <Header>{ artist.name }</Header>
            <div className="artistBioBackground artistBioBackgroundPosition artistName" id="artist#">
                <img className="artistBioImage" src={ artist.image } />
                <div className="artistBioText">
                    <p>{ artist.bio }</p>
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