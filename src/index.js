import React from "react";
import ReactDOM from "react-dom";
import RegisterScreen from "./RegisterScreen.js";
import LoginCard from "./LoginCard.js";
import DetailsScreen from "./DetailsScreen.js";
import {Route,BrowserRouter as Router} from "react-router-dom";
import "./index.css";
import {AppBar,Toolbar,Typography} from "@material-ui/core";
ReactDOM.render(
  <div className={""} >
<AppBar position="static"style={{
      alignItems:"center"
    }}>
  <Toolbar>
    <img src={require('./images/covid.png')} alt="Logo"className={""} width="50" height="50"/>
    <Typography variant="h6" className={""} >
      Covid Outbreak
    </Typography>
    
  </Toolbar>
</AppBar>
<Router>
    <Route path="/" exact component={LoginCard}/>
      <Route path="/register" component={RegisterScreen}/>
      <Route path="/details/:id" component={DetailsScreen}/>
    
</Router>
</div>,
  document.getElementById("root")
);
