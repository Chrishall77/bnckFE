import React from "react";

const Performances = ({ performances, stages, titleStage, artists, background }) => (
   
        <ul className="performanceWrapper">
            {
                performances.map((performance) => {
                    let stageName = stages.find((stage)=> {
                        return stage.id === performance.stage_id;
                    })
                    console.log(stageName); 
                    
                    let artistName = artists.find((artist)=> {
                        return artist.id === performance.artist_id;
                    })
                    console.log(artistName); 

                    return (

                        <li className="artist" key={performance.id}>
                            <div className="buttonStyleFour timeButtonTime">
                                <p>Start: {performance.starttime} </p>
                                <p>End: {performance.endtime} </p>
                            </div>
                            <div className="buttonStyleFive timeButtonArtist">
                                <p>{ titleStage ? "Stage: " + stageName.name : "Artist: " + artistName.name }</p>
                            </div>

                        </li>

                    )
                }
                )
            }
        </ul>
    
);

export default Performances;

