import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'



export default function ShowStudent() {
  const [studentsList, setStudentsList] = useState([]);

  useEffect (()=> {
    axios.get('http://localhost:5000/students').then((allStudents) => {
       setStudentsList(allStudents.data)})}
  ,[])

        
    return (
        <>
            <h3>All Students</h3>
            <TableContainer component={Paper}>
               <TableContainer sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Registration Number</TableCell>
                    <TableCell align="right">Age</TableCell>
                    <TableCell align="right">School</TableCell>
                  </TableRow>
                </TableHead>
                </TableContainer>

                <TableBody>
                    {studentsList.map((student, key) => (
                        <TableRow
                          key={key}
                          sx={{ '&: last-child td, &: last-child th': { border: 0 } }}>
                          <TableCell component="th" scope="row">
                            {student.name}
                          </TableCell>
                          <TableCell align="right">{student.registrationNumber}</TableCell>
                          <TableCell align="right">{student.age}</TableCell>
                          <TableCell align="right">{student.school}</TableCell>


                          
                        </TableRow>
                      ))}
                    </TableBody>
            </TableContainer>
        </>
      )
  }