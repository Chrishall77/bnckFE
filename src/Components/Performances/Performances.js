import React from "react";

const Performances = ({ performances, stages, titleStage, artists }) => (
    <div>
        <ul>
            {
                performances.map((performance) => {

                    let startTime = new Date( performance.timedate );
                    let duration = performance.duration;
                    startTime.setHours( startTime.getHours() + duration );
                    console.log(duration);
                    console.log(startTime);

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
                                <p>Start: { performance.timedate } </p>
                                <p>End: {
                                                                
                                    
                                    } </p>
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