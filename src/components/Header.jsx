/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { AppBar, Toolbar, Grid } from '@mui/material';
import SSTEP from '../assets/SSTEP.png';
import STYLEEDGE from '../assets/STYLEEDGE.png';

function Header({ styling }) {
  return (
    <AppBar sx={styling} position="fixed">
      <Toolbar>
        <Grid container justifyContent={'space-between'}>
            <Grid item>
                <img src={SSTEP} style={{marginTop: '10px'}} />
            </Grid>

            <Grid item>
                <img src={STYLEEDGE} />
            </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header