import React from "react";
import DateFnsUtils from '@date-io/date-fns';
import axios from 'axios';
import ReactDOM from "react-dom";
import {CardActions, Button,Card,TextField, MenuItem,Typography,FormControl,Select} from "@material-ui/core";
import {MuiPickersUtilsProvider,KeyboardDatePicker} from "@material-ui/pickers";
const REG_URL="http://localhost:8080/api/userdetails/";
const CHECK_URL="http://localhost:8080/api/userdetails/id/";
const gender=[{
    value:"",
    label:""
},{
    value:"Male",
    label:"Male",
},
{
    value:"Female",
    label:"Female"
},
{
    value:"Transgender",
    label:"Transgender"
}]
class RegisterScreen extends React.Component
{
    
    constructor(props)
    {
        super(props); 
        this.state={

            regUserId:"",
            regPass:"",
            regFirst:"",
            regLast:"",
            regAddr:"",
            regCity:"",
            regGender:"",
            regResult:"",
            regState:"",
            regPName:"",
            regSuccess:false,
            regMobile:"",
            regAge:21,
            regBGroup:"",
            regEmail:"",
            regCurrDate:this.getCurrentDate(),
            regFSName:"",
            regDOB:new Date('2014-08-18T21:11:54'),
            regBResult:'',
            regXResult:'',
        }
        this.regUserIdHandler=this.regUserIdHandler.bind(this);
        this.regPassHandler=this.regPassHandler.bind(this);
        this.regFirstHandler=this.regFirstHandler.bind(this);
        this.regLastHandler=this.regLastHandler.bind(this);
        this.regDOBHandler=this.regDOBHandler.bind(this);
        this.regAddrHandler=this.regAddrHandler.bind(this);
        this.regCityHandler=this.regCityHandler.bind(this);
        this.regStateHandler=this.regStateHandler.bind(this);
        this.regMobileHandler=this.regMobileHandler.bind(this);
        this.regAgeHandler=this.regAgeHandler.bind(this);
        this.regBGroupHandler=this.regBGroupHandler.bind(this);
        this.regEmailHandler=this.regEmailHandler.bind(this);
        this.regFSNameHandler=this.regFSNameHandler.bind(this);
        this.regSubmitHandler=this.regSubmitHandler.bind(this);
        this.regGenderHandler=this.regGenderHandler(this);
        this.getCurrentDate=this.getCurrentDate.bind(this);
    }
    
    getCurrentDate(){
        let newDate = new Date()
        return newDate;
        }
        regSubmitHandler=()=>
        {
    const rand = Math.round(Math.random());
    const r=rand<=0.5?0:1;
    if(r===0)
    {
        this.setState({regResult:"Negative"})
    }
    else
    {
        this.setState({regResult:"Positive"})
    }
    if(this.state.pcrResult==="Positive"){
    const rand1 = Math.round(Math.random());
    const r1=rand1<=0.5?0:1;
    if(r1===0)
    {
        this.setState({regBResult:"Negative",
    regXResult:"Negative"});
    }
    else{
        this.setState({regBResult:"Positive",
    regXResult:"Positive"});
    }
}
            let user={
                patientName: this.state.regFirst+" "+this.state.regLast,
                date: this.state.regCurrDate,
                street: this.state.regAddr,
                city: this.state.regCity,
                state: this.state.regState,
                mobile: this.state.regMobile,
                gender: "Male",
                dob: this.state.regDOB,
                age:this.state.regAge,
                bloodGroup: this.state.regBGroup,
email: this.state.regEmail,
fOrSName: this.state.regFSName,
pcrResult: this.state.regResult,
password: this.state.regPass,
name: this.state.regUserId,
bloodResult:this.state.regBResult,
xRayResult:this.state.regXResult,
            }
            console.log("Details=>",JSON.stringify(user));
            axios.get(CHECK_URL+user.regUserId)
            .then((response)=>
            {
                this.setState({regSuccess:response.data})
            })
            if(!this.state.regSuccess)
            {
                axios.post(REG_URL,user)
                .then((response)=>
                {
                    console.log(response)
                    this.props.history.push("./")
                })
                .catch(e=>
                    {
                        console.log(e)
                    })
            }
            else{
                alert("UserID already taken");
            }
        }
       
    regUserIdHandler=(event)=>
    {
        this.setState({regUserId:event.target.value})
    }
    regPassHandler=(event)=>
    {
        this.setState({
            regPass:event.target.value
        })
    }
    regFirstHandler=(event)=>
    {
        this.setState({ 
            regFirst:event.target.value
        })
    }
    regLastHandler=(event)=>
    {
        this.setState({
            regLast:event.target.value
        })
    }
    regDOBHandler=(event)=>
    {
        this.setState({regDOB:event});
    }
    regAddrHandler=(event)=>
    {
        this.setState({regAddr:event.target.value})
    }
    regCityHandler=(event)=>
    {
        this.setState({regCity:event.target.value})
    }
    regStateHandler=(event)=>
    {
        this.setState({regState:event.target.value})
    }
    regMobileHandler=(event)=>
    {
        this.setState({regMobile:event.target.value})
    }
    regAgeHandler=(event)=>
    {
        if(!Number(event.target.value)){
            alert("Enter age in numbers");
        }else
        {
        this.setState({regAge:event.target.value})
        }
    }
    regBGroupHandler=(event)=>
    {
        this.setState({regBGroup:event.target.value})
    }
    regEmailHandler=(event)=>
    {
        this.setState({regEmail:event.target.value})
    }
    regFSNameHandler=(event)=>
    {
        this.setState({regFSName:event.target.value})
    }
    regGenderHandler=(e)=>
    {
       // console.log(e.target.value);
      // this.setState({regGenderHandler:etarget})
        }
    render()
    {
        return(
            
            <div>
                <Typography variant="h6" style={
                    {
                        marginLeft:"45%",
                    }
                }>Register</Typography>
                <Card style=
                {
                    {
                        marginBottom:"5%",
                    }
                }>
                    <CardActions>
                <div style={
                    {
                        display:"flex",
                        justifyContent:"space-between",
                    }
                }>
            <Typography style={
                {
                    marginLeft:"10%",
                    width:"20%",
                }
            }>User ID:</Typography>
            <TextField  id="registerUserID" value={this.state.regUserId} onChange={this.regUserIdHandler}/>
            <Typography style={
                {
                    marginLeft:"10%",
                    width:"20%",
                }}>Password:</Typography>
            <TextField  id="registerPass" value={this.state.regPass} onChange={this.regPassHandler}/>
            </div>
          </CardActions>
          </Card>
          <Card style=
          {
              {
                  marginBottom:"5%",
              }
          }>
          <CardActions>
            <div style={
                    {
                        display:"flex",
                        justifyContent:"space-between",
                    }
                }>
            <Typography style={
                {
                    marginLeft:"10%",
                    width:"20%",
                }
            }>FirstName:</Typography>
            <TextField  id="registerFirst" value={this.state.regFirst} onChange={this.regFirstHandler}/>
            <Typography style={
                {
                    marginLeft:"10%",
                    width:"20%",
                }}>LastName:</Typography>
            <TextField  id="registerLast" value={this.state.regLast} onChange={this.regLastHandler}/>
            </div>
            </CardActions>
            </Card>
            <Card style=
          {
              {
                  marginBottom:"5%",
              }
          }>
          <CardActions>
            <div style={
                    {
                        display:"flex",
                        justifyContent:"space-between",
                    }
                }>
            <Typography style={
                {
                    marginLeft:"10%",
                    width:"20%",
                }
            }>Address:</Typography>
            <TextField  id="registerAddr" value={this.state.regAddr} onChange={this.regAddrHandler}/>
            <Typography style={
                {
                    marginLeft:"10%",
                    width:"20%",
                }}>City:</Typography>
            <TextField  id="registerCity" value={this.state.regCity} onChange={this.regCityHandler}/>
            </div>
            </CardActions>
            </Card>
            <Card style=
          {
              {
                  marginBottom:"5%",
              }
          }>
          <CardActions>
            <div style={
                    {
                        display:"flex",
                        justifyContent:"space-between",
                    }
                }>
            <Typography style={
                {
                    marginLeft:"10%",
                    width:"20%",
                }
            }>State:</Typography>
            <TextField  id="registerState" value={this.state.regState} onChange={this.regStateHandler}/>
            <Typography style={
                {
                    marginLeft:"10%",
                    width:"20%",
                }}>Mobile:</Typography>
            <TextField  id="registerMobile" value={this.state.regMobile} onChange={this.regMobileHandler}/>
            </div>
            </CardActions>
            </Card>
            <Card style=
          {
              {
                  marginBottom:"5%",
              }
          }>
          <CardActions>
            <div style={
                    {
                        display:"flex",
                        justifyContent:"space-between",
                    }
                }>
            <Typography style={
                {
                    marginLeft:"10%",
                    width:"20%",
                }
            }>Gender:</Typography>
           <TextField
          id="outlined-select-currency"
          select
          label=""
          value={this.state.regGender}
          onChange={this.regGenderHandler}
          variant="outlined"
        >
          {gender.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>   ))}
        </TextField>
        
            <Typography style={
                {
                    marginLeft:"10%",
                    width:"20%",
                }}>DOB:</Typography>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          format="MM/dd/yyyy"
          value={this.state.regDOB}
          onChange={this.regDOBHandler}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </MuiPickersUtilsProvider>
            </div>
            </CardActions>
            </Card>
            <Card style=
          {
              {
                  marginBottom:"5%",
              }
          }>
          <CardActions>
            <div style={
                    {
                        display:"flex",
                        justifyContent:"space-between",
                    }
                }>
            <Typography style={
                {
                    marginLeft:"10%",
                    width:"20%",
                }
            }>Age:</Typography>
            <TextField  id="registerAge" value={this.state.regAge} onChange={this.regAgeHandler}/>
            <Typography style={
                {
                    marginLeft:"10%",
                    width:"20%",
                }}>Date:</Typography>
            <TextField  id="registerDate" value={this.state.regCurrDate} />
            </div>
            </CardActions>
            </Card>
            <Card style=
          {
              {
                  marginBottom:"5%",
              }
          }>
          <CardActions>
            <div style={
                    {
                        display:"flex",
                        justifyContent:"space-between",
                    }
                }>
            <Typography style={
                {
                    marginLeft:"10%",
                    width:"20%",
                }
            }>Blood Group:</Typography>
            <TextField  id="registerBlood" value={this.state.regBGroup} onChange={this.regBGroupHandler}/>
            <Typography style={
                {
                    marginLeft:"10%",
                    width:"20%",
                }}>Email Id:</Typography>
            <TextField  id="registerEmail" value={this.state.regEmail} onChange={this.regEmailHandler}/>
            </div>
            </CardActions>
            </Card>
            <Card style=
          {
              {
                  marginBottom:"5%",
              }
          }>
          <CardActions>
            <div style={
                    {
                        display:"flex",
                        justifyContent:"space-between",
                    }
                }>
            <Typography style={
                {
                    marginLeft:"10%",
                    width:"20%",
                }
            }>Father/Spouse Name:</Typography>
            <TextField  id="registerFSName" value={this.state.regFSName} onChange={this.regFSNameHandler}/>
            </div>
            </CardActions>
            </Card>
            <Button style={
                {
                    marginLeft:"50%",
                } 
            }size="medium" variant="contained" color="secondary"type="submit" onClick={this.regSubmitHandler}>Register</Button>
            </div>
        );
    }
}
export default RegisterScreen;