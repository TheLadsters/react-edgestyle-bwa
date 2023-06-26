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
          bgcolor: '#e8e4e4',
          borderRadius: 4,
          boxShadow: 2,
          p: 2,
          my: 1,
          maxWidth: '40vh'
        }}
      >
        {message}
        {date}
      </Box>
  )
}

export default MessageLeft