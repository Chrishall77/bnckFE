import React from "react";

const Artists = ({ artists }) => (
    <div className="artistsBackground artistsBackgroundPosition">
        <ul className="artistList">
           {
               artists.map((artist, index) =>
                <li key = { artist.id }
                    className="buttonStyleThree artists"
                >
                    { artist.name }
                </li>
               )
           }
            
        </ul>
    </div>
);

export default Artists;