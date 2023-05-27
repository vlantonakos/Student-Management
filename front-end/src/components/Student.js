import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Student = () => {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[name,setName]=useState('')
    const[lastname,setLastname]=useState('')
    const[students,setStudents]=useState([])

    const handleClick = () => {
        const student = {name,lastname}
        fetch('/add', {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(student)
        }).then(() => {
            console.log('New Student added.')
            fetchStudents();
        }).catch((error) => {
            console.error('Error adding student:', error);
        });
    }

    const fetchStudents = () => {
        fetch('/getAll')
        .then((res) => res.json())
        .then((result) => {
          setStudents(result);
        })
        .catch((error) => {
          console.error('Error fetching students:', error);
        });
    }

    useEffect(() => {
        fetchStudents();
      }, []);


  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}>Add Student</h1>

            <form noValidate autoComplete="off">
    
            <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth 
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            <TextField id="outlined-basic" label="Student Last Name" variant="outlined" fullWidth
            value={lastname}
            onChange={(e)=>setLastname(e.target.value)}
            />
            <Button sx={{mt: '10px',mb: 0}} variant="contained" color="secondary" onClick={handleClick}>
                Submit
            </Button>
            </form>
   
        </Paper>
        <h1>Students</h1>

        <Paper elevation={3} style={paperStyle}>

            {students.map(student=>(
                <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={student.id}>
                    Id:&nbsp;{student.id}<br/>
                    Name:&nbsp;{student.name}<br/>
                    Last name:&nbsp;{student.lastname}
                </Paper>
            ))}

        </Paper>

    </Container>
  )
}

export default Student