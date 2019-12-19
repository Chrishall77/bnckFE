import React from 'react';

const BigLogger = ({ stages }) => (
    <div className="stagesBackground stagesBackgroundPosition">
        <ul className="stagesGrid gridPosition">
           {
               stages.map((stage, index) =>
                <li key = { stage.id }
                    className="buttonStyleTwo bigLogger"
                >
                    <span className="stagesLink"> { stage.name }</span>
                </li>
               )
           }
            
        </ul>
    </div>
)

export default BigLogger;