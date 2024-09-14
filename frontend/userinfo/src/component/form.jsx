import { useState } from "react"
import {TextField,
    Button,
    Grid,
    Container,
    Typography,
    InputLabel,MenuItem,FormHelperText,FormControl,Select,Box} from '@mui/material';
import axios from 'axios';
export default function Userinfoform(){


let [formdata,setFormdata]=useState({
    username:'',
    email:'',
    gender:''
});

const handlechange=(evt)=>{
setFormdata((val)=>{
    return {...val,[evt.target.name]:evt.target.value}
});
}

const handlesubmit=async(evt)=>{
  evt.preventDefault();
  try{
let response=await axios.post('http://localhost:5137/userinfostore',formdata);
console.log('user created successfully.',response.data);
  }catch(err){
    console.log(err);
  }
   

 console.log(formdata);   
}
    return (<>
    <Container maxWidth="sm">
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          User Information Form
        </Typography>
        <form onSubmit={handlesubmit}>

        <Grid container spacing={2}>
           
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="user name"
                variant="outlined"
                name="username"
                value={formdata.username}
                onChange={handlechange}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                name="email"
                type="email"
                value={formdata.email}
                onChange={handlechange}
                required
              />
            </Grid>
            <Grid item xs={12} >
            <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={formdata.gender}
          label="Age"
          name="gender"
          onChange={handlechange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'male'}>male</MenuItem>
          <MenuItem value={'female'}>female</MenuItem>
        </Select>
        <FormHelperText>select your gender</FormHelperText>
      </FormControl>
</Grid>
          
            <Grid item xs={12}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
    </>)
}
