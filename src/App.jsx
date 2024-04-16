import React from "react"; //to use inbuilt functions of React
import WildlifeList from "./assets/components/list"; //Displayed on page
import { useState } from "react"
import ManipulationComponent from "./assets/components/manipulation"; //where the input from the form is being validated

function App () { //created empty formData setFormData will update
      const [formData, setFormData] = useState({
          registered : "",
          species : "",
          numberSpotted : "",
          location : "",
          dataSpotted : "",
          gender : "",
          time_caught : "",
          color : "",
          body : "",
          weight : "",
          status : "",
          national_park : ""
    }); //formData represents the objects and setFormData will be used to update the data
        //manipulated Data will be taken to another component manipulated and brought back
      const [manipulatedDataList, setManipulatedDataList] = useState([]) //manipulated data equals to no / absence of Data
//This function is supposed to deal with the button which will have a value of handleInputChange
      const handleInputChange = (event) => { //event is the parameter we want to deal with -dealing with a button click
          const {name , value} = event.target; // we are targeting the name and value
          setFormData({
            ...formData, //spreadoperator has been used
            [name] : value
          });
      };
      //this function will deal with the form 
      const handleSubmit = (event) => {
        event.preventDefault(); //preventdefault is to prevent the form from doing its default actions
        setManipulatedDataList([...manipulatedDataList, formData]); //spread operator has been used so that more data is created based on the previous data
        //created a list so that it can hold on to all new information inserted
        setFormData({
          registered : "",
          species : "",
          numberSpotted : "",
          location : "",
          dataSpotted : "",
          gender : "",
          time_caught : "",
          color : "",
          body : "",
          weight : "",
          status : "",
          national_park : ""
        });
      };

      
  return (
    <>
      <div>
        <WildlifeList />
      </div>
      <h1 className="topic mt-16 ml-20">Wildlife Form</h1>
      <form onSubmit={handleSubmit} >
          <label htmlFor="registered">Registered By : </label>
          <input type="text" name="registered" id="registered" value={formData.registered} onChange={handleInputChange}/>
          <br />
          <label htmlFor="species">Species : </label>
          <input type="text" name="species" id="species" value={formData.species} onChange={handleInputChange} />
          <br />
          <label htmlFor="numberSpotted">Number Spotted : </label>
          <input type="number" name="numberSpotted" id="numberSpotted" value={formData.numberSpotted} onChange={handleInputChange} />
          <br />
          <label htmlFor="gender">Gender : </label>
          <input type="text" name="gender" id="gender" value={formData.gender} onChange={handleInputChange}/>
          <br />
          <label htmlFor="time_caught">Time Caught : </label>
          <input type="text" name="time_caught" id="time_caught" value={formData.time_caught} onChange={handleInputChange} />
          <br />
          <label htmlFor="color">Color : </label>
          <input type="text" name="color" id="color" value={formData.color} onChange={handleInputChange} />
          <br />
          <label htmlFor="body">Body : </label>
          <input type="text" name="body" id="body" value={formData.body} onChange={handleInputChange} />
          <br />
          <label htmlFor="weight">Weight : </label>
          <input type="text" name="weight" id="weight" value={formData.weight} onChange={handleInputChange}/>
          <br />
          <label htmlFor="status">Status : </label>
          <input type="text" name="status" id="status" value={formData.status} onChange={handleInputChange} />
          <br />
          <label htmlFor="national_park">National Park : </label>
          <input type="text" name="national_park" id="national_park" value={formData.national_park} onChange={handleInputChange} />
          <br />
          <button type="submit">Submit</button>
        
      </form>

      <h2>New Wildlife Data</h2>
        <div>
        {manipulatedDataList.map((data,index) => (
          <ManipulationComponent key={index} formData={data} />
        ))}
        </div>
    </>
  )
}

export default App;
