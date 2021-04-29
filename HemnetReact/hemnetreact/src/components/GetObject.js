import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import DeleteObject from './DeleteObject';
import './styles/style.css';

const url = `http://localhost:58403/api/HouseObjects`;

const GetObject = () => {    
    const [objectState, setObjectState] = useState([]);
    const [token, setToken] = useState("");

    const onResponse = (response) => {
        setToken(response.tokenId);
    };

    useEffect(() => {
        fetch(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.json()
        .then(data => {
            setObjectState(data)
        }));
    }, []);

    // deleteObject(houseObjectId){
    //     if(window.confirm('Är du säker?'))
    //     {
    //         fetch(url/ + houseObjectId, {
    //             method: 'DELETE',
    //             header:{'Accept':'application/json',
    //             'Content-Type': 'application/json'
    //         }
    //         })

    //     }
    // }



    return (
        <div className="container">
            <div className="main">
                <h2>Lista på hus</h2>
                <ul className="cards">
                    {objectState.map(object => (
                        <>
                            <li className="cards_item">
                                <div className="card">
                                    <div className="card_image"><img className="img-card" src={object.images}></img></div>
                                    <div className="card_content">
                                        <h2 className="card_title">{object.address}</h2>
                                        <Link to={`/changeobject/${object.houseObjectId}`}><p style={{display: "inline", paddingRight: "15px"}}>Ändra</p></Link>
                                        <Link to={`/deleteobject/${object.houseObjectId}`}><p style={{display: "inline"}}>Ta bort</p></Link>
                                    </div>
                                </div>
                            </li> 
                        </>           
                    ))}
                </ul>
            </div>
        </div>
    )
};

export default GetObject;