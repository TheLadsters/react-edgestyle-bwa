/* eslint-disable no-unused-vars */
import React from 'react'
import ChatspaceChat from '../components/ChatSpaceChat';
import SearchBar from '../components/SearchBar';
import ContactList from '../components/ContactList';
import Grid from '@mui/material/Grid';
import CustomerInfo from '../components/CustomerInfo';
function ChatSpace() {
return (
    <>
        <Grid container spacing={0.7} sx={{marginTop: '60px'}}>      
            
            <Grid item xs={3}>
                <Grid container gap={1} direction={'column'}>
                    <SearchBar />
                    <ContactList />
                </Grid>
            </Grid>

            <Grid item xs={7}>
                <ChatspaceChat />
            </Grid>

            <Grid item xs={2}>
                <CustomerInfo />
            </Grid>
        </Grid>
    </>
)
}

export default ChatSpace