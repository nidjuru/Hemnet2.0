import React, { useState, useEffect } from 'react'
import { Link, Redirect, useParams, useHistory } from "react-router-dom";
import GetObject from './GetObject';

const url = `http://localhost:58403/api/HouseObjects`;

const DeleteObject = () =>{
    // let {houseObjectId} = useParams();
    // const getObjectURL = `${url}/${houseObjectId}`;
    // const [objectState, setObjectState] = useState(null);
    // console.log(houseObjectId);

    // const Submit = (event) =>{  
    //     event.preventDefault();      
    //     useEffect(() => {
    //         fetch(getObjectURL, {
    //             method: 'DELETE',
    //             header:{'Accept':'application/json',
    //             'Content-Type': 'application/json' 
    //         }})
    //         .then(() => this.setObjectState({ status: 'Delete successful' }))
    //     }, []);        
    // }
    
    let {houseObjectId} = useParams(); 

    let history = useHistory();
    const propertyUrl = `http://localhost:58403/api/HouseObjects/${houseObjectId}`
    const [properties, setProperties] = useState([]);
    function GoBack(houseObjectId) {
        history.push(`/`);
    }
    const Delete = () => {
        fetch(`http://localhost:58403/api/HouseObjects/${houseObjectId}`, {
            method: 'DELETE'
        }).then(() => {
            history.push(`/`)
        })
    }
    // const useStyles = makeStyles((theme) => ({
    //     root: {
    //       '& > *': {
    //         margin: theme.spacing(1),
    //         width: '25ch',
    //       },
    //     },
    //   }));
    // const classes = useStyles();

    useEffect(() => {
        if(properties.length === 0) {
            fetch(propertyUrl).then(res => res.json().then(data => setProperties(data)))
        }
    })

    return (
        <>
            <p>Ta bort objekt</p>
            <p>{properties.houseObjectId}</p>
            <p>{properties.address}</p>
            <button className="btn btn-danger" onClick={()=>Delete()}>Ta bort</button>
            <button className="btn btn-primary" onClick={()=>GoBack()}>Tillbaka</button>
        </>
    )

};

export default DeleteObject;