import React from "react";

const Performances = ({ performances }) => (
    <div>
        <ul>
           {
               performances.map((performance, index) =>
                <li key = { performance.id }>
                    Artist: { performance.artist_id } 
                    Stage: { performance.stage_id }
                    Duration: { performance.duration }
                    Timedate: { performance.timedate }
                </li>
               )
           }
            
        </ul>
    </div>
);

export default Performances;