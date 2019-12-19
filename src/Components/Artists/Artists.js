
import React from "react";
import Header from "../Header/Header";

const Artists = ({ artists, handleClick }) => (
    <>
        <Header>Artists</Header>
        <div className="artistsBackground artistsBackgroundPosition">
            <ul className="artistList">
            {
                artists.map((artist) =>
                    <li key = { artist.id }
                        className="buttonStyleThree artists"
                        onClick = { () => handleClick(artist.id) }
                    >
                        { artist.name }

                    </li>
                )
            }
                
            </ul>
        </div>
    </>
);

export default Artists;