import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

const url = `http://localhost:58403/api/HouseObjects`;

const ChangeObject = () =>{    
    let {houseObjectId} = useParams();
    const getObjectURL = `${url}/${houseObjectId}`;
    const [objectState, setObjectState] = useState([]);

    useEffect(() => {
        fetch(getObjectURL)
        .then(res => res.json()
        .then(data => {
            setObjectState(data)
        }));
    }, []);

    return (
        <>
        <p>Ändra på objekt</p>
        </>
    )

};

export default ChangeObject;