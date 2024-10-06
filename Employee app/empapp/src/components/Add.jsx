import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Add = (props) => {
  var [inputs, setInputs] = useState({ Name: "", Age: "", Dept: "", Salary: "" })
  var location = useLocation()
  var navigate = useNavigate()
  console.log(location.state)
  const inputHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
    console.log(inputs)
  }
  const addHandler = () => {
    if (location.state !== null) {
      axios.post('http://localhost:3004/update/' + location.state.val._id, inputs)
        .then((res) => {
          alert(res.data.message)
          navigate("/view")
        })
        .catch((err) => { console.log(err) })
    } else {
      Salary
      axios.post("http://localhost:3004/add", inputs)
        .then((res) => {
          console.log(res)
          alert(res.data.message)
        })
        .catch((err) => { console.log(err) })
    }
  }

  useEffect(() => {
    setInputs({
      ...inputs,
      Name: location.state.val.Name,
      Age: location.state.val.Age,
      Dept: location.state.val.Dept,
      Salary: location.state.val.Salary
    })
  }), []
  return (
      <div>
      <TextField id="filled-basic" label="Name" value={inputs.Name} onChange={inputHandler} name="Name" variant="filled" /><br /><br />
      <TextField id="filled-basic" label="Age" value={inputs.Age} onChange={inputHandler} name="Age" variant="filled" /><br /><br />
      <TextField id="filled-basic" label="Dept" value={inputs.Dept} onChange={inputHandler} name="Dept" variant="filled" /><br /><br />
      <TextField id="filled-basic" label="Salary" value={inputs.Salary} onChange={inputHandler} name="Salary"variant="filled" /><br /><br />
          <Button variant="contained" onClick={addHandler}>Submit</Button>

    </div>
  )
}

export default Add