/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import {Grid, Card, Button, Box, TextField, IconButton} from '@mui/material';
import {Forum, Send, Error, InsertEmoticon, Add} from '@mui/icons-material';
import {Tabs, TabList, Tab, TabPanel} from '@mui/joy';
import EscalatePopup from './Modals/EscalatePopup';
import TemplatePopup from './Modals/TemplatePopup';
import MessageLeft from './MessageLeft';
import MessageRight from './MessageRight';
import axiosClient from "../axios-client";


export default function ChatSpaceChat() {
    const [openEscalate, setOpenEscalate] = React.useState(false);
    const [openTemplate, setOpenTemplate] = React.useState(false);
    const [messages, setMesssages] = useState([]);

    function openEscalateModal(){
        setOpenEscalate(true)
    }

    function closeEscalateModal(){
        setOpenEscalate(false)
    }

    function openTemplateModal(){
        setOpenTemplate(true)
    }

    function closeTemplateModal(){
        setOpenTemplate(false)
    }

    useEffect(() => {
        async function fetchMessages(){
            try{
                await axiosClient.get("/get_messages").then(({ data }) => {
                    setMesssages(data);
                });
            }
            catch(err){
                console.log(err);
            }
        }

        fetchMessages();
    }, [setMesssages]);

    const styles = {
        card: {
            borderRadius: '10px', marginTop: '20px', 
            height: '90vh', marginRight: '10px',
            padding: '20px 20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        sendAndInfo: {
            borderRadius: '20px', padding: '10px 15px', backgroundColor: 'RGB(0,128,45)'
        },
        escalate: {
            borderRadius: '20px', backgroundColor: '#68c42c',
            padding: '10px 10px', marginRight: '5px'
        },
        template: {
            borderRadius: '20px', backgroundColor: '#ba68c8',
            padding: '10px 10px', marginRight: '5px'
        },
        addAndEmoticon: {
            backgroundColor: '#e8e4e4',
        },
        scrollableContent: {
            maxHeight: 'calc(100vh - 350px)', // Adjust the height as needed
            overflowY: 'auto',
            marginTop: '20px',
          },
    }

    const messageArea  = messages.map((msg, idx)=> {
        return (
            msg.sender_id === 1 ? 
            <MessageLeft key={idx} message={msg.message} />
            :
            <MessageRight key={idx} message={msg.message} />
    )});

  return (
    <>
<Card sx={{ minWidth: 275, height: '100%' }} style={styles.card}>
      <Tabs>
        <TabList>
          <Tab>タイムライン</Tab>
          <Tab>Timeline</Tab>
        </TabList>

        <TabPanel value={0} sx={styles.scrollableContent}>
          {/* Japanese Chat translation */}
          <Grid container direction={'column'}>
            {messageArea}
          </Grid>
        </TabPanel>

        <TabPanel value={1}>
          {/* English Chat translation */}
          <Grid>
            ENGLISH TRANSLATION
          </Grid>
        </TabPanel>
      </Tabs>

      <Grid item>
        <Grid container>
          <Grid item xs={12}>
            <TextField fullWidth label="Enter a message..." style={{ marginBottom: '15px' }} />
          </Grid>
        </Grid>

        <Grid container justifyContent="space-between">
          <Grid item>
            <IconButton size="large">
              <Add sx={styles.addAndEmoticon} />
            </IconButton>

            <IconButton size="large">
              <InsertEmoticon sx={styles.addAndEmoticon} />
            </IconButton>
          </Grid>

          <Grid item>
            <Button variant="contained" style={styles.escalate} onClick={openEscalateModal}>
              <Error style={{ marginRight: '5px' }} />
              Escalate
            </Button>

            <Button variant="contained" style={styles.template} onClick={openTemplateModal}>
              <Forum style={{ marginRight: '5px' }} />
              Template
            </Button>

            <Button variant="contained" style={styles.sendAndInfo}>
              Send
              <Send style={{ marginLeft: '5px' }} />
            </Button>
          </Grid>
        </Grid>
      </Grid>
</Card>

    <EscalatePopup open={openEscalate} handleClose={closeEscalateModal} />
    <TemplatePopup open={openTemplate} handleClose={closeTemplateModal} />
    </>
  )
}
