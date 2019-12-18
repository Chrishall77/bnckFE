import React from "react";

const Performances = ({ performances }) => (
    <div className="stageBackground stageBackgroundPosition">
        <ul className="performanceWrapper">
           {
               performances.map((performance, index) =>
               <li className="artist">
                    <div key = { performance.id } 
                        className="buttonStyleFour timeButtonTime"
                    >
                        Timedate: { performances.timedate }
                    </div>
                    <div key = { performance.id } 
                        className="buttonStyleFive timeButtonArtist"
                    >
                        Stage: { performance.stage_id }
                    </div>
                </li>
               )
           }
            
        </ul>
    </div>
);

export default Performances;

// Artist: { performance.artist_id } 
// Stage: { performance.stage_id }
// Duration: { performances.duration }
// Timedate: { performances.timedate }