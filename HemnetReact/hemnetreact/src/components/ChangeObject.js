import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom";

const url = `http://localhost:58403/api/HouseObjects`;

const ChangeObject = () =>{    
    let {houseObjectId} = useParams();
    const getObjectURL = `${url}/${houseObjectId}`;
    const token = localStorage.getItem('myToken');
    //const [objectState, setObjectState] = useState([]);
    let history = useHistory();

//   const [images, setImages] = useState("");
//   const [address, setAddress] = useState("");
//   const [housingType, setHousingType] = useState("");
//   const [formOfLease, setFormOfLease] = useState("");
//   const [price, setPrice] = useState("");
//   const [rooms, setRooms] = useState();
//   const [livingArea, setLivingArea] = useState();
//   const [biArea, setBiArea] = useState();
//   const [plotArea, setPlotArea] = useState();
//   const [descriptions, setDescriptions] = useState("");
//   const [showingDate, setShowingDate] = useState("");
//   const [latitude, setLatitude] = useState("");
//   const [longitude, setLongitude] = useState("");
//   const [buildYear, setBuildYear] = useState();
//   const [brookerId, setBrookerId] = useState();
  const [property, setProperty] = useState({
    images: "",
    address: "",
    housingType: "",
    formOfLease: "",
    price: "",
    rooms: 0,
    livingArea: 0,
    biArea: 0,
    plotArea: 0,
    descriptions: "",
    showingDate: "",
    buildYear: 0,
    latitude: "",
    longitude: "",
    brookerId: 0
  });


  useEffect(() => {
    if(token === null)
    {
        history.push(`/`);
        alert('Du måste logga in');                 
    }    
    else{
    fetch(getObjectURL, {
        headers:{"Authorization": `Bearer ${token}`}
    })
    .then(res => res.json()
    .then(data => {
        setProperty(data)
    }));
    
    }
}, []);

  const SubmitForm = (event) => {
    event.preventDefault();
    const body = {
        houseObjectId: property.houseObjectId,
      images: property.images,
      address: property.address,
      housingType: property.housingType,
      formOfLease: property.formOfLease,
      price: property.price,
      rooms: property.rooms,
      livingArea: property.livingArea,
      biArea: property.biArea,
      plotArea: property.plotArea,
      descriptions: property.descriptions,
      showingDate: property.showingDate,
      buildYear: property.buildYear,
      latitude: property.latitude,
      longitude: property.longitude,
      brookerId: property.brookerId
      // brooker: null,
    };
    if(token === null){
      alert('Du måste vara inloggad för att ändra ett objekt')
    }
    else{
    fetch(getObjectURL,{
        method: 'PUT',
        headers: { 'Accept': 'application/json','Content-Type': 'application/json', 
        "Authorization": `Bearer ${token}` },
        body: JSON.stringify(body),
      }
    ).then((res) => {
        res.json().then((data) => {
            setProperty([]);
        })
        
    }
    ).then(() => {
        history.push(`/getobject`)
    });
    
  }
  };

  return (
    <div>        
      <form>
          <lable>Bild länk</lable>
      <input
        type="text"
        //placeholder="Bild"
        value={property.images}
        //defaultValue={objectState.images}
        onChange={(event) => setProperty({ ...property, images: event.target.value})}
      />
      <input
        type="text"
        //placeholder="Address"
        value={property.address}
        //defaultValue={objectState.address}
        onChange={(event) => setProperty({ ...property, address: event.target.value})}
      />
      <input
        type="text"
        //placeholder={objectState.price}
        value={property.price}
        //defaultValue={objectState.price}
        onChange={(event) => setProperty({ ...property, price: event.target.value})}
      />
      <input
        type="text"
        //placeholder={objectState.housingType}
        value={property.housingType}
        //defaultValue={objectState.address}
        onChange={(event) => setProperty({ ...property, housingType: event.target.value})}
      />
      <input
        type="text"
        //placeholder={objectState.formOfLease}
        value={property.formOfLease}
        //defaultValue={objectState.formOfLease}
        onChange={(event) => setProperty({ ...property, formOfLease: event.target.value})}
      />
      <input
        type="number"
        //placeholder={objectState.rooms}
        value={property.rooms}
        //defaultValue={objectState.rooms}
        onChange={(event) => setProperty({ ...property, rooms: event.target.value})}
      />
      <input
        type="number"
        //placeholder={objectState.livingArea}
        value={property.livingArea}
        //defaultValue={objectState.livingArea}
        onChange={(event) => setProperty({ ...property, livingArea: event.target.value})}
      />
      <input
        type="number"
        //placeholder={objectState.plotArea}
        value={property.plotArea}
        //defaultValue={objectState.plotArea}
        onChange={(event) => setProperty({ ...property, plotArea: event.target.value})}
      />
      <input
        type="number"
        //placeholder={objectState.biArea}
        value={property.biArea}
        //defaultValue={objectState.biArea}
        onChange={(event) => setProperty({ ...property, biArea: event.target.value})}
      />
      <input
        type="number"
        //placeholder={objectState.buildYear}
        value={property.buildYear}
        //defaultValue={objectState.buildYear}
        onChange={(event) => setProperty({ ...property, buildYear: event.target.value})}
      />
      <input
        type="text"
        //placeholder={objectState.latitude}
        value={property.latitude}
        //defaultValue={objectState.latitude}
        onChange={(event) => setProperty({ ...property, latitude: event.target.value})}
      />
      <input
        type="text"
        //placeholder={objectState.longitude}
        value={property.longitude}
        //defaultValue={objectState.longitude}
        onChange={(event) => setProperty({ ...property, longitude: event.target.value})}
      /> 
      <input
        type="date"
        //placeholder={objectState.showingDate}
        value={property.showingDate}
        //defaultValue={objectState.showingDate}
        onChange={(event) => setProperty({ ...property, showingDate: event.target.value})}
      />
      <textarea
        type="text"
        //placeholder={objectState.descriptions}
        className="form-control"
        rows="3"           
        value={property.descriptions}
        //defaultValue={objectState.descriptions}
        onChange={(event) => setProperty({ ...property, descriptions: event.target.value})}
      />
      <input
        type="number"
        //placeholder={objectState.brookerId}
        value={property.brookerId}
        //defaultValue={objectState.brookerId}
        onChange={(event) => setProperty({ ...property, brookerId: event.target.value})}
      />
      <button onClick={SubmitForm}>Submit</button>
      </form>
    </div>
  );

};

export default ChangeObject;