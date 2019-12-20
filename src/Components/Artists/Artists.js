
import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

const Artists = ({ artists, handleClick }) => (
    <>
        <Header>Artists</Header>
        <div className="artistsBackground artistsBackgroundPosition">
            <ul className="artistList">
            {
                artists.map((artist) =>
                <Link to = { `bnckFE/artists/${ artist.id }` } > 
                    <li key = { artist.id }
                        className="buttonStyleThree artists"
                        onClick = { () => handleClick(artist.id) }
                    >
                        { artist.name }

                    </li>
                </Link>
                )
            }
                
            </ul>
        </div>
    </>
);

export default Artists;