import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const View = () => {
    var [user, setuser] = useState([]);
    var navigate=useNavigate()
    axios.get("http://localhost:3004/view")
        .then((response) => {
            console.log(response)
            setuser(response.data)
        })
    const delvalue = (id) => {
         axios.delete("http://localhost:3004/remove/"+id)
            .then((res) => {
                alert(res.data.message)
            })
    }

    const updateValue = (val) => {
        navigate("/add", { state:{val}})
    }
  return (
      <div>
          <TableContainer>
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell>NAME</TableCell>
                          <TableCell>AGE</TableCell>
                          <TableCell>DEPT</TableCell>
                          <TableCell>SALARY</TableCell>
                          <TableCell></TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {user.map((val) => {
                          return (
                              <TableRow>
                                  <TableCell>{ val.Name}</TableCell>
                                  <TableCell>{ val.Age}</TableCell>
                                  <TableCell>{ val.Dept}</TableCell>
                                  <TableCell>{val.Salary}</TableCell>
                                  <TableCell>
                                      <Button variant="contained" color="error" onClick={() => {
                                          delvalue(val._id)
                                      }}>Delete</Button>&nbsp;&nbsp;
                                      <Button variant="contained" color="error" onClick={() => {
                                          updateValue(val)
                                      }}>Update</Button>
                                  </TableCell>
                                  
                              </TableRow>
                          )
                      })}        
                  </TableBody>
                  </Table>
                </TableContainer>

    </div>
  )
}

export default View