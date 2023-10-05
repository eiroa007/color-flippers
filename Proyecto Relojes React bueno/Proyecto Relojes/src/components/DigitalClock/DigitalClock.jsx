import React, { useEffect, useState } from "react";
import "./DigitalClock.css"

const DigitalClock = () => {
    const [clocKState, setClocKState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClocKState(date.toLocaleTimeString());
        }, 1000);
    },[]);


        return (        
        <div className="digital-clock">
            <h2>{clocKState}</h2>
        </div>
    );
};

export default DigitalClock;