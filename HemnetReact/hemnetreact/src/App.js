import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Hemnet41 from './images/Hemnet41.png';
import GetObject from './components/GetObject';
import PostObject from './components/PostObject';
import GetSingelObject from "./components/GetSingelObject";

function App() {
  return (
    <div>
      <Router>
        <nav class="navbar navbar-expand-lg navbar-toggleable-sm navbar-light border-bottom box-shadow mb-3" style={{backgroundColor: "#ecf9ff"}}>
          <div class="container">
            <Link class="navbar-brand" to="/"><img src={Hemnet41} alt="Logo"></img></Link>          
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">                  
                  <Link class="nav-link" to="/getobject"><p>Se objekt</p></Link>                  
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/postobject"><p>Lägg till objekt</p></Link>
                </li>                
              </ul>
            </div>             
          </div>
        </nav>      
        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/getobject" component={GetObject}/>
          <Route exact path="/postobject" component={PostObject}/>
          <Route exact path="/houseobject/:houseObjectId" component={GetSingelObject}/>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
