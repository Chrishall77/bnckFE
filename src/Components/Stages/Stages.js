import React from "react";

const Stages = ({ stages }) => (
    <div className="stagesBackground stagesBackgroundPosition">
        <ul className="stagesGrid gridPosition">
           {
               stages.map((stage, index) =>
                <li key = { stage.id }
                    className="buttonStyleTwo"
                >
                    <span className="stagesLink"> { stage.name }</span>
                </li>
               )
           }
            
        </ul>
    </div>
);

export default Stages;