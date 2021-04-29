import React, { useState, useEffect } from 'react'
import { Link, Redirect, useParams } from "react-router-dom";
import GetObject from './GetObject';

const url = `http://localhost:58403/api/HouseObjects`;

const DeleteObject = () =>{
    let {houseObjectId} = useParams();
    const getObjectURL = `${url}/${houseObjectId}`;
    const [objectState, setObjectState] = useState(null);
    console.log(houseObjectId);

    const Submit = (event) =>{  
        event.preventDefault();      
        useEffect(() => {
            fetch(getObjectURL, {
                method: 'DELETE',
                header:{'Accept':'application/json',
                'Content-Type': 'application/json' 
            }})
            .then(() => this.setObjectState({ status: 'Delete successful' }))
        }, []);        
    }    

    return (
        <>
        <p>Ta bort objekt</p>
        <p>status: {objectState}</p>
        <button className="btn btn-danger" onClick={Submit}>Ta bort</button>
        </>
    )

};

export default DeleteObject;