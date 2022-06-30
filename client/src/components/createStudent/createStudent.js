import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import axios from 'axios'
import { Button } from "@material-ui/core";

export default function Create() {

    const[student, setStudent] = useState({
        registrationNumber:"",
        name:"",
        age:"",
        school:"",
    })

    const createStudent = () => {
        axios.post("http://localhost:5000/students", student)
    }

  return (
    <>
      <h2>Create Student</h2>
      
    <Box component="form" sx={{"& > :not(style)": { m: 1, width: "25ch" },}} noValidate autoComplete="off" >

      <TextField id="outlined-basic" label="Name" variant="outlined" value={student.name} type="text"
      onChange={(e) => { setStudent({...student, name:e.target.value})
      }} />

      <TextField id="outlined-basic" label="Age" variant="outlined" value={student.age} type="number"
      onChange={(e) => { setStudent({...student, age:e.target.value})
      }} />

      <TextField id="outlined-basic" label="School" variant="outlined" value={student.school} type="text"
        onChange={(e) => { setStudent({...student, school:e.target.value})
      }} />

      <TextField id="outlined-basic" label="registrationNumber" variant="outlined" value={student.registrationNumber} type="number"
        onChange={(e) => { setStudent({...student, registrationNumber:e.target.value})
      }} />

      <Button variant="outlined" onClick={createStudent}>submit</Button>

    </Box>
    </>
  );
}