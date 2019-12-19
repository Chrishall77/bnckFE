import React from "react";
import { Link } from "react-router-dom";


const Stages = ({ stages, handleClick }) => (
    <div className="stagesBackground stagesBackgroundPosition">
        <ul className="stagesGrid gridPosition">
           {
               stages.map((stage, index) =>
                <Link to = { `stages/${ stage.id }` } > 
                    <li key = { stage.id }
                        className="buttonStyleTwo"
                        onClick = { () => handleClick(stage.id) }
                    >
                        { stage.name }
                    </li>
                </Link>
               )
           }
            
        </ul>
    </div>
);

export default Stages;