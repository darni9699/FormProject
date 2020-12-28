import React,{useEffect,useState} from "react";
import axios from 'axios';
import {withRouter} from "react-router-dom";
import { Typography } from "@material-ui/core";
const URL="http://localhost:8080/api/userdetails/";
class DetailsScreen extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            Id:'',
            bGroup:'',
            age:null,
        }
        axios.get(URL+props.match.params.id).then(response=>{
            if(response.status===200)
            {
                this.setState({
                    Id:response.data.patientName,
                    bGroup:response.data.bloodGroup,
                    age:response.data.age
                    
                })
            }
        });
    }
       render(){ return(
            <div>
               
                <Typography variant="h6" style={
                    {
                        marginLeft:"45%"
                    }
                }>Test Report</Typography>
                 <div style={{
                    display:"flex",
                }}>
                <Typography variant="h6" style={{
                    marginLeft:"5%",
                }}>
                    Name:
                </Typography>
                <Typography style={
                    {
                        marginTop:"0.5%",
                        marginLeft:"1%"
                    }}>{this.state.Id}</Typography>
                </div>
                <div style={{
                    display:"flex",
                }}>
                <Typography variant="h6" style={{
                    marginLeft:"5%",
                }}>
                    Age:
                </Typography>
                <Typography style={
                    {
                        marginTop:"0.5%",
                        marginLeft:"1%"
                    }
                }>{this.state.age}</Typography>
                </div>
                <div style={{
                    display:"flex",
                }}>
                <Typography variant="h6" style={{
                    marginLeft:"5%",
                }}>
                    Blood Group:
                </Typography>
                <Typography style={
                    {
                        marginTop:"0.5%",
                        marginLeft:"1%"
                    } }>{this.state.bGroup}</Typography>
                </div>
            </div>
        )
    }
}
export default withRouter(DetailsScreen);