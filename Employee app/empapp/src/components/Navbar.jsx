import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
          <AppBar >
          <Toolbar>
              <Typography variant='h6' sx={{ flexGrow: 1 }}  > EMP APP</Typography>
              <Link to='/add'>
                  <Button variant="contained" color="error">ADD</Button>
              </Link>&nbsp;&nbsp;
              <Link to='/view'>
                  <Button variant="contained" color="error">VIEW</Button>
              </Link>&nbsp;&nbsp;
          </Toolbar>
          </AppBar>
    </div>
  )
}

export default Navbar