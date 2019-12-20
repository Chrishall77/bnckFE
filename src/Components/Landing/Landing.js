import React from "react";
import { Link } from "react-router-dom";

const landing = () => (
    <>
        <div className="landingBackground">
            <h1 className="logoText">BNCK</h1>
        </div>
        <Link to="stages" className="linkStyle">
            <div className="buttonStyleOne buttonStyleOne1">
                Stages
            </div>
        </Link>
        <Link to="artists" className="linkStyle">
            <div className="buttonStyleOne buttonStyleOne2">
                Artists
            </div>
        </Link>
    </>
);

export default landing;