import React from "react";


function ManipulationComponent({formData}) {
    if(formData.registered === '') {
            return 'Please enter a valid name'
    }
    else if (formData.species === '') {
        return "Please enter a species"
    } else if (formData.numberSpotted === '' || isNaN(Number(formData.numberSpotted))) {
        return "Please enter a valid number"
    } else if (formData.gender === "") {
        return "Please enter a gender"
    } else if (formData.time_caught === "") {
        return "Please enter a valid time"
    } else if (formData.color === "") {
        return "Please enter a valid color"
    } else if (formData.body === "") {
        return "Please enter a valid body type"
    } else if (formData.weight === "") {
        return "Please enter a valid weight of animal(s)"
    } else if(formData.status === "") {
        return "Please enter a status of the animal(s)"
    } else if (formData.national_park === "") {
        return "Please enter an existing national park"
    }

    return (
        <>
        <div>
            <h1>New Wildlife Information</h1>
            <p>Registered By : {formData.registered}</p>
            <p>Species : {formData.species}</p>
            <p>Number Spotted : {formData.numberSpotted}</p>
            <p>Gender : {formData.gender}</p>
            <p>Time Caught : {formData.time_caught}</p>
            <p>Color : {formData.color}</p>
            <p>Body : {formData.body}</p>
            <p>Weight : {formData.weight}</p>
            <p>Status : {formData.status}</p>
            <p>National Park : {formData.national_park}</p>
        </div>
        </>
    )

}
export default ManipulationComponent;