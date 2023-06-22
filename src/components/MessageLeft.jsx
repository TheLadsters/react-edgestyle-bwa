/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Box } from '@mui/material'

function MessageLeft(props) {
  const message = props.message ? props.message : '';
  const date = props.date ? props.date : '';
    return (
        <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
        {message}
        {date}
      </Box>
  )
}

export default MessageLeft