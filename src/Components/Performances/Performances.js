import React from "react";

const Performances = ({ performances, stages, titleStage, artists }) => (
    <div>
        <ul>
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

                        <li key={performance.id}>
                            <div>
                                <p>Start: { performance.starttime } </p>
                                <p>End: { performance.endtime } </p>
                            </div>
                            <div>
                                <p>{ titleStage ? "Stage: " + stageName.name : "Artist: " + artistName.name }</p>
                            </div>
                        </li>
                    )
                }
            )
            }
        </ul>
    </div>
);

export default Performances;

