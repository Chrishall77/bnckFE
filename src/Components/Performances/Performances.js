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
                        Artist: { performance.artist_id } 
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

{/* <li className="artist">
                    <div key = { performance.id } 
                        className="buttonStyleFour timeButtonTime"
                    >
                        Timedate: { performances.timedate }
                    </div>
                    <div key = { performance.id } 
                        className="buttonStyleFive timeButtonArtist"
                    >
                      <ul className="performanceWrapper">
                          <li className="artist">
                            Artist: { performance.artist_id } 
                          </li>
                          <li className="artist">
                            Duration: { performances.duration }
                          </li>
                      </ul>
                    </div>
                </li> */}