import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import React, { useState } from 'react';
import GoogleLogin from "react-google-login";
import Hemnet41 from './images/Hemnet41.png';
import GetObject from './components/GetObject';
import PostObject from './components/PostObject';
import ChangeObject from './components/ChangeObject';
import DeleteObject from './components/DeleteObject';

function App() {
  const [token, setToken] = useState("");
    const [books, setBooks] = useState([]);

    const onResponse = (response) => {
        setToken(response.tokenId);
    };

    const fetchDataFromApi = async () => {
        const result = await fetch("http://localhost:58403/api/HouseObjects", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await result.json();

        setBooks(data);
    };

  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-toggleable-sm navbar-light border-bottom box-shadow mb-3" style={{backgroundColor: "#ecf9ff"}}>
          <div className="container">
            <Link className="navbar-brand" to="/"><img src={Hemnet41} alt="Logo"></img></Link>          
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">                  
                  <Link className="nav-link" to="/getobject"><p>Se objekt</p></Link>                  
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/postobject"><p>Lägg till objekt</p></Link>
                </li>
                <li className="nav-item">
                <GoogleLogin
                    clientId={
                        "12342795773-amov5bovsjivmcilbbkaj45ihc25qf33.apps.googleusercontent.com"
                    }
                    onSuccess={onResponse}
                ></GoogleLogin></li>                
              </ul>
            </div>             
          </div>
        </nav>
        
                {token && (
                    <button onClick={fetchDataFromApi}>Hämta data</button>
                )}
                {books.length > 0 && (
                    <table>
                        <thead>
                            <tr>
                                <th>Address</th>
                                <th>Pris</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map((book, i) => (
                                <tr key={i}>
                                    <td>{book.address}</td>
                                    <td>{book.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}      
        <Switch>                          
          <Route exact path="/"><h2>Hemnet40 mäklar sida</h2></Route>
          <Route exact path="/getobject" component={GetObject}/>
          <Route exact path="/postobject" component={PostObject}/>
          <Route exact path="/changeobject/:houseObjectId" component={ChangeObject}/>
          <Route exact path="/deleteobject/:houseObjectId" component={DeleteObject}/>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
