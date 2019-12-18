  
import React from "react";

const Artists = ({ artists }) => (
    <div>
        <ul>
           {
               artists.map((artist, index) =>
                <li key = { artist.id }>
                    { artist.name } : { artist.image }
                </li>
               )
           }
            
        </ul>
    </div>
);

export default Artists;