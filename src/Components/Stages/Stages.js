import React from "react";

const Stages = ({ stages }) => (
    <div>
        <ul>
           {
               stages.map((stage, index) =>
                <li key = { stage.id }>
                    { stage.name }
                </li>
               )
           }
            
        </ul>
    </div>
);

export default Stages;