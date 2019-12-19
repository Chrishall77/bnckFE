
import React from "react";

const Artists = ({ artists, handleClick }) => (
    <div className="artistsBackground artistsBackgroundPosition">
        <ul className="artistList">
           {
               artists.map((artist, index) =>
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
);

export default Artists;