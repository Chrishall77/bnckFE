import React from "react";

const Stages = ({ stages, handleClick }) => (
    <div className="stagesBackground stagesBackgroundPosition">
        <ul className="stagesGrid gridPosition">
           {
               stages.map((stage, index) =>
                <li key = { stage.id }
                    className="buttonStyleTwo"
                    onClick = { () => handleClick(stage.id) }
                >
                    { stage.name }
                </li>
               )
           }
            
        </ul>
    </div>
);

export default Stages;