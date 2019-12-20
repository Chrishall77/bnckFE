import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";


const Stages = ({ stages, handleClick }) => (
    <>
        <Header>Stages</Header>
        <div className="stagesBackground stagesBackgroundPosition">
            <ul className="stagesGrid gridPosition">
            {
                stages.map((stage) =>

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
    </>
);

export default Stages;