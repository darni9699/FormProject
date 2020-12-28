import React from "react";
import ReactDOM from "react-dom";
import Card from '@material-ui/core/Card';
import axios from 'axios';
import {Redirect} from "react-router-dom";
import CardActions from '@material-ui/core/CardActions';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import {TextField,Typography,Grid,Button} from "@material-ui/core";
const ID_URL='http://localhost:8080/api/userdetails/id/';
const PWD_URL='http://localhost:8080/api/userdetails/pass/';
function LoginCard(){
  
 
  const [userID,setUserID]=React.useState('');
  const [password,setPassword]=React.useState('');
  const [authId,setAuthId]=React.useState(false);
  const [authPwd,setAuthPwd]=React.useState(false);
 let IdHandler=(e)=>
  {
    setUserID(e.target.value);
  }
  let passwordHandler=(event)=>
  {
    setPassword(event.target.value);
  }
  let handleResponse=async ()=>
  {
   if(authId &&authPwd)
   {
     alert('Hi');
 return <Redirect to={`/details/${userID}`}/>;
   }
   else
   {
     return <Redirect  to="/"/>;
   }
  }
 let handleSubmit= async (e)=>
  {
    let user={userID:userID,
      password:password}
    
    axios.all([
      axios.get(ID_URL+user.userID),
      axios.get(PWD_URL+user.password)
    ])
    .then(response=>{
        setAuthId(response[0].data);
        setAuthPwd(response[1].data);
      handleResponse();
      console.log(authId);
      
    })
    .catch((error)=>
    {
      console.log(error.response);
    });
   
     
}

    return(
      <div>
      <div style={
        {
          marginLeft:"50%",
          marginTop:"10%"
        }
      }>
      <Typography variant="h5">Log In</Typography>
      </div>
      <Card className={""} width="100" height="250" style={
        {
          minWidth:"20%",
          width:"30%",
          marginLeft:"40%",
          position:"center" ,
        }
      }>
       
        <CardActions>
        <div className={"form"}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" required label="UserID" value={userID} onChange={(e)=>IdHandler(e)} />
            </Grid>
          </Grid>
        </div>
        </CardActions>
        <form >
        <CardActions>
         
        <div className={"form"}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <LockOpenIcon />
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" required label="Password" type="password"value={password} onChange={(e)=>passwordHandler(e)}/>
            </Grid>
          </Grid>
        </div>
      
        </CardActions>
        <CardActions>
          <Button size="small" type="submit"color="primary" onClick={(e)=>handleSubmit(e)}>
            Log In
          </Button>
        </CardActions>
        </form>
      </Card>
      
    <div style={
      {
        marginLeft:"40%",
        marginTop:"15px"
      }
    }><Typography>Not a user?<a href="http://localhost:3000/register">Register Here</a></Typography></div>
      </div>
    );}
export default LoginCard;