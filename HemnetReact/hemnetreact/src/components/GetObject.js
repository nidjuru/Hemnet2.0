import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const url = `http://localhost:58403/api/HouseObjects`;

const GetObject = () => {    
    const [objectState, setObjectState] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(res => res.json()
        .then(data => {
            setObjectState(data)
        }));
    }, []);

    return (
        <div>
            <h2>Lista på hus</h2>
        <ul>
            {objectState.map(object => (
                <>
                <Link to={`/houseobject/${object.houseObjectId}`}>                               
                    <li>Address: {object.address}</li>
                    <li>Pris: {object.price}</li>
                </Link> 
                </>           
            ))}
        </ul>
        </div>
    )
};

export default GetObject;