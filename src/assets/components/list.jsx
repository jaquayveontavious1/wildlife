import React, { useState } from "react";
import WildlifeEntry from "./entry";

function WildlifeList () {

    const [selectedEntry, setSelectedEntry] = useState(false)

    const toggleDetails = (index) => {
        setSelectedEntry(selectedEntry === index ? null : index);
    }
    const wildlifeEntries = [
        {
            species : "Lion",
            numberSpotted : Number(3),
            location : "Maasai Mara",
            dateSpotted : "15-04-2024",
            gender : "Male & 2 Female",
            time : "1700 hrs",
            color : "Reddish-Brown",
            body : "Strong && Compact",
            weight : "25kg",
            status : "Alive",
            registered_by :"Richarlison",
            national_park : "Maasai Mara National Park"

        }, 
        {
            species : "Rhino",
            numberSpotted : Number(3),
            location : "Nairobi",
            dateSpotted : "13-04-2023",
            gender : "3 Male",
            time : "1500 hrs",
            color : "Grey",
            body : "Strong",
            weight : "40kg",
            status : "Alive && One Dead",
            registered_by : "Michael",
            national_park : "Nairobi National Park"
            
        }
    ];
    return (
        <>
            <div>
                <h1>Wildlife List</h1>
                   {wildlifeEntries.map((entry, index) => (
                    <div key={index}>
                        <WildlifeEntry  
                            key={entry.id}
                            species={entry.species}
                            numberSpotted={entry.numberSpotted}
                            location={entry.location}
                            dateSpotted={entry.dateSpotted}
                            
                        />
                        {selectedEntry === index && (
                            <div>
                                <p> Gender: {entry.gender}</p>
                                <p> Time Caught :{entry.time}</p>
                                <p>Color : {entry.color}</p>
                                <p>Body : {entry.body}</p>
                                <p>Weight : {entry.weight}</p>
                                <p>Status : {entry.status}</p>
                                <p>Registered By : {entry.registered_by}</p>
                                <p>National Park : {entry.national_park}</p>
                            </div>

                        )}
                        <button className="button bg-blue-500 hover:bg-blue-700" onClick={() => toggleDetails(index)}>
                            {selectedEntry === index ?  "Hide Details" : "Show Details"}
                        </button>
                    </div>
                ))}
            
            </div>
                        
                
           
        </>
    );
}

export default WildlifeList;

