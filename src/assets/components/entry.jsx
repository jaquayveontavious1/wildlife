import React from "react";
import { useState, useEffect } from "react";

function WildlifeEntry ({species, numberSpotted, location, dateSpotted}) {
    const[id,setId] = useState(null);
   
   
    useEffect(() => {
        const generateRandomId = () => {
            return Math.random().toString(36).substr(2,9);
        };

        setId(generateRandomId());
    }, []);
    return (
        <>
        <div>
            <p>ID : {id}</p>
            <p>Species : {species}</p>
            <p>Number Spotted : {numberSpotted}</p>
            <p>Location : {location}</p>
            <p>Date Spotted : {dateSpotted}</p>
        </div>
        </>
    );
}

export default WildlifeEntry;