import React,{useEffect,useState} from "react";
import axios from 'axios';
import { Typography } from "@material-ui/core";
const URL="http://localhost:8080/api/userdetails/";
function DetailsScreen({match})
{
    useEffect(()=>
    {
            console.log(match);
    },[]);
    const [item,setItem]=useState({});
    const fetchItem=async()=>{
            //axios.get(URL+match.params.id)
    }
        return(
            <div>
                <Typography variant="h6" style={
                    {
                        marginLeft:"45%"
                    }
                }>Details</Typography>
                <Typography variant="h6" style={{
                    marginLeft:"5%",
                }}>
                    Name:
                </Typography>
                <Typography variant="h6" style={{
                    marginLeft:"5%",
                }}>
                    Age:
                </Typography>
                <Typography variant="h6" style={{
                    marginLeft:"5%",
                }}>
                    Blood Group:
                </Typography>
            </div>
        )
    }
export default DetailsScreen;