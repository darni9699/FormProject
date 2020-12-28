import React from "react";
import Card from '@material-ui/core/Card';
import axios from 'axios';
import {withRouter} from "react-router-dom";
import CardActions from '@material-ui/core/CardActions';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import {TextField,Typography,Grid,Button} from "@material-ui/core";
const ID_URL='http://localhost:8080/api/userdetails/id/';
const PWD_URL='http://localhost:8080/api/userdetails/pass/';
axios.default.timeout=5000;
class LoginCard extends React.Component{
 constructor(props)
 {
   super(props);
   this.state={
    userID:'',
    password:'',
    authID:false,
    authPwd:false
   }
   this.IdHandler=this.IdHandler.bind(this);
   this.passwordHandler=this.passwordHandler.bind(this);
   this.handleSubmit=this.handleSubmit.bind(this);
   this.handleResponse=this.handleResponse.bind(this);
 }

 IdHandler=(e)=>
  {
    this.setState({userID:e.target.value});
  }
  passwordHandler=(event)=>
  {
    this.setState({password:event.target.value});
  }
  handleResponse= ()=>
  {
   if(this.state.authId &&this.state.authPwd)
   {
this.props.history.push(`/details/${this.state.userID}`)
   }
   else
   {
    this.props.history.push("/");
   }
  }
 handleSubmit= async (e)=>
  {
    let user={userID:this.state.userID,
      password:this.state.password}
    
    axios.all([
      axios.get(ID_URL+user.userID),
      axios.get(PWD_URL+user.password)
    ])
    .then(response=>{
        this.setState({authId:response[0].data});
        this.setState({authPwd:response[1].data});
      this.handleResponse();
     
      console.log(this.state.authId);
    })
    .catch((error)=>
    {
      console.log(error.response);
    });
   
     
}

    render(){return(
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
              <TextField id="input-with-icon-grid" required label="UserID" value={this.state.userID} onChange={this.IdHandler} />
            </Grid>
          </Grid>
        </div>
        </CardActions>
        <CardActions>
         
        <div className={"form"}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <LockOpenIcon />
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" required label="Password" type="password"value={this.state.password} onChange={this.passwordHandler}/>
            </Grid>
          </Grid>
        </div>
      
        </CardActions>
        <CardActions>
          <Button size="small" color="primary" type="submit"onClick={this.handleSubmit}>
            Log In
          </Button>
        </CardActions>
      </Card>
      
    <div style={
      {
        marginLeft:"40%",
        marginTop:"15px"
      }
    }><Typography>Not a user?<a href="http://localhost:3000/register">Register Here</a></Typography></div>
      </div>
    );}
  }
export default withRouter(LoginCard);