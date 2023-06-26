/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Box } from '@mui/material'

function MessageRight(props) {
  const message = props.message ? props.message : '';
  const date = props.date ? props.date : '';
    return (
    <Box
        sx={{
          display: 'flex',
          flexDirection: 'row-reverse',
          borderRadius: 1,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column-reverse',
            alignItems: 'flex-start',
            p: 2,
            m: 1,
            bgcolor: '#08842c',
            borderRadius: 4,
            color: 'white',
            boxShadow: 2,
            maxWidth: '40vh'
          }}
        >
            {message}
            {date}
        </Box>
      </Box>
  )
}

export default MessageRight