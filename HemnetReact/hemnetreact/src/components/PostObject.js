import React, { useState } from "react";

const url = `http://localhost:58403/api/HouseObjects`;

const PostObject = () => {  
  const [images, setImages] = useState("");
  const [address, setAddress] = useState("");
  const [housingType, setHousingType] = useState("");
  const [formOfLease, setFormOfLease] = useState("");
  const [price, setPrice] = useState("");
  const [rooms, setRooms] = useState();
  const [livingArea, setLivingArea] = useState();
  const [biArea, setBiArea] = useState();
  const [plotArea, setPlotArea] = useState();
  const [descriptions, setDescriptions] = useState("");
  const [showingDate, setShowingDate] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [buildYear, setBuildYear] = useState();
  const [brookerId, setBrookerId] = useState();

  const SubmitForm = () => {
    const body = {
      images: images,
      address: address,
      housingType: housingType,
      formOfLease: formOfLease,
      price: price,
      rooms: rooms,
      livingArea: livingArea,
      biArea: biArea,
      plotArea: plotArea,
      descriptions: descriptions,
      showingDate: showingDate,
      buildYear: buildYear,
      latitude: latitude,
      longitude: longitude,
      brookerId: brookerId
      // brooker: null,
    };
    fetch(url,{
        method: "POST",
        headers: { "content-type": "application/JSON" },
        body: JSON.stringify(body),
      }
    ).then((res) =>
      res.json().then((data) => {
        setImages("");
        setAddress("");
        setHousingType("");
        setFormOfLease("");
        setPrice("");
        setRooms(0);
        setLivingArea(0);
        setBiArea(0);
        setPlotArea(0);
        setDescriptions("");
        setShowingDate("");
        setLatitude("");
        setLongitude("");
        setBuildYear(0);
        setBrookerId(0);
      })
    );
  };

  return (
    <div>
      <form>
      <input
        type="text"
        placeholder="Bild länk"
        value={images}
        onChange={(event) => setImages(event.target.value)}
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />
      <input
        type="text"
        placeholder="Pris"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
      <input
        type="text"
        placeholder="Bostadstyp"
        value={housingType}
        onChange={(event) => setHousingType(event.target.value)}
      />
      <input
        type="text"
        placeholder="Upplåtelseform"
        value={formOfLease}
        onChange={(event) => setFormOfLease(event.target.value)}
      />
      <input
        type="number"
        placeholder="Antal rum"
        value={rooms}
        onChange={(event) => setRooms(event.target.value)}
      />
      <input
        type="number"
        placeholder="Boarea"
        value={livingArea}
        onChange={(event) => setLivingArea(event.target.value)}
      />
      <input
        type="number"
        placeholder="Tomtarea"
        value={plotArea}
        onChange={(event) => setPlotArea(event.target.value)}
      />
      <input
        type="number"
        placeholder="Biarea"
        value={biArea}
        onChange={(event) => setBiArea(event.target.value)}
      />
      <input
        type="number"
        placeholder="Byggår"
        value={buildYear}
        onChange={(event) => setBuildYear(event.target.value)}
      />
      <input
        type="text"
        placeholder="Latitude"
        value={latitude}
        onChange={(event) => setLatitude(event.target.value)}
      />
      <input
        type="text"
        placeholder="Longitude"
        value={longitude}
        onChange={(event) => setLongitude(event.target.value)}
      /> 
      <input
        type="date"
        placeholder="Visningstid"
        value={showingDate}
        onChange={(event) => setShowingDate(event.target.value)}
      />
      <textarea
        type="text"
        placeholder="Beskrivning"
        class="form-control"
        rows="3"           
        value={descriptions}
        onChange={(event) => setDescriptions(event.target.value)}
      />
      <input
        type="number"
        placeholder="Mäklar ID"
        value={brookerId}
        onChange={(event) => setBrookerId(event.target.value)}
      />
      <button onClick={() => SubmitForm()}>Submit</button>
      </form>
    </div>
  );
};

export default PostObject;