import React from 'react';

const BigLogger = ({ stages }) => (
    <div className="bigLoggerBackground bigLoggerBackgroundPosition">
        <ul className="">
           {
               stages.map((stage, index) =>
                <li key = { stage.id[1] }
                    className="buttonStyleThree bigLogger"
                >
                    <span className="stagesLink"> { /* ARTIST NAME X 4 */ }</span>
                </li>
               )
           }
            
        </ul>
    </div>
)

export default BigLogger;