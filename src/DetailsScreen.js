import React,{useEffect,useState} from "react";
import axios from 'axios';
import {withRouter} from "react-router-dom";
import { Typography,Table,Paper,TableBody,TableContainer,TableHead,TableRow,TableCell } from "@material-ui/core";
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
            pcrResult:'',
            bloodRes:'',
            XrayRes:'',
            pDate:new Date(),
            bDate:new Date(),
            XDate:new Date(),
        }
        this.generateNext=this.generateNext.bind(this);
        axios.get(URL+props.match.params.id).then(response=>{
            if(response.status===200)
            {
                this.setState({
                    Id:response.data.patientName,
                    bGroup:response.data.bloodGroup,
                    age:response.data.age,
                    pcrResult:response.data.pcrResult,
                    pDate:response.data.date,
                    bloodRes:response.data.bloodResult,
                    XrayRes:response.data.xRayResult,
                });
                this.generateNext();
            }
        });
    }
   
    generateNext=()=>
    {
        Date.prototype.addDays = function(date,days) {
            var date = new Date(date);
            date.setDate(date.getDate() + days);
            return date;
        }
        this.setState({
            bDate:new Date(this.state.pDate).addDays(this.state.pDate,2),
            XDate:new Date(this.state.pDate).addDays(this.state.pDate,2),
        })
        
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
                <div>
                <TableContainer component={Paper}>
      <Table className={"result_table"} aria-label="customized table">
        <TableHead>
          <TableRow>
              <TableCell> </TableCell>
            <TableCell align="right" >PCR</TableCell>
            <TableCell align="right">Blood Test</TableCell>
            <TableCell align="right">X-Ray</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow key={"results"}>
              <TableCell component="th" scope="row">
                {"Test Date"}
              </TableCell>
              <TableCell align="right">{new Date(this.state.pDate).toDateString()}</TableCell>
              <TableCell align="right">{new Date(this.state.bDate).toDateString()}</TableCell>
              <TableCell align="right">{new Date(this.state.XDate).toDateString()}</TableCell>
            </TableRow>
            <TableRow key={"results"}>
              <TableCell component="th" scope="row">
                {"Results"}
              </TableCell>
              <TableCell align="right">{this.state.pcrResult}</TableCell>
              <TableCell align="right">{this.state.bloodRes}</TableCell>
              <TableCell align="right">{this.state.XrayRes}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
                </div>
            </div>
        )
    }
}
export default withRouter(DetailsScreen);