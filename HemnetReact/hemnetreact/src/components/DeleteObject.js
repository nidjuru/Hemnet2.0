import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom";

const url = `http://localhost:58403/api/HouseObjects`;

const DeleteObject = () =>{ 
    let {houseObjectId} = useParams();
    const token = localStorage.getItem('myToken'); 

    let history = useHistory();
    const getObjectURL = `${url}/${houseObjectId}`;
    const [objectState, setObjectState] = useState([]);
    function GoBack(houseObjectId) {
        history.push(`/`);
    }
    const Delete = () => {
        fetch(getObjectURL, {
            method: 'DELETE',
            headers:{"Authorization": `Bearer ${token}`}
        }).then(() => {
            history.push(`/`)
        })
    }

    useEffect(() => {
        if(objectState.length === 0) {
            fetch(getObjectURL).then(res => res.json().then(data => setObjectState(data)))
        }
    })

    return (
        <>
            <p>Ta bort objekt</p>
            <p>{objectState.houseObjectId}</p>
            <p>{objectState.address}</p>
            <button className="btn btn-danger" onClick={()=>Delete()}>Ta bort</button>
            <button className="btn btn-primary" onClick={()=>GoBack()}>Tillbaka</button>
        </>
    )

};

export default DeleteObject;