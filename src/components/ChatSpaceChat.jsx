/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import {Grid, Card, Button, Typography, TextField, IconButton} from '@mui/material';
import {Forum, Send, Error, InsertEmoticon, Add} from '@mui/icons-material';
import {Tabs, TabList, Tab, TabPanel} from '@mui/joy';
import EscalatePopup from './Modals/EscalatePopup';
import CustomerInfoPopup from './Modals/CustomerInfoPopup';


export default function ChatSpaceChat() {
    const [openEscalate, setOpenEscalate] = React.useState(false);
    const [openInfo, setOpenInfo] = React.useState(false);

    function openEscalateModal(){
        setOpenEscalate(true)
    }

    function closeEscalateModal(){
        setOpenEscalate(false)
    }

    function openInfoModal(){
        setOpenInfo(true)
    }

    function closeInfoModal(){
        setOpenInfo(false)
    }

    const styles = {
        card: {
            borderRadius: '10px', marginTop: '20px', 
            height: '90vh', marginRight: '10px',
            padding: '20px 20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
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
        }
    }

  return (
    <>
<Card sx={{ minWidth: 275 }} style={styles.card}>
        <Tabs>
            <TabList>
                <Tab>
                    タイムライン
                </Tab>

                <Tab>
                    Timeline
                </Tab>
            </TabList>

            <TabPanel value={0}>
                {/* Japanese Chat translation */}
                <Grid>
                    タイムライン
                </Grid>
            </TabPanel>

            <TabPanel value={1}>
                {/* English Chat translation */}
                <Grid>
                    ENGLISH TRANSLATION
                </Grid>
            </TabPanel>
        </Tabs>


    <Grid container direction={'column'}> 
            <Grid container>
                <Grid item xs={12}>
                <TextField fullWidth label="Enter a message..." style={{marginBottom: '15px'}} />
            </Grid>
        </Grid>

        <Grid container justifyContent={'space-between'}>  
            <Grid item>
                <IconButton size="large">
                    <Add sx={styles.addAndEmoticon} />
                </IconButton>

                <IconButton size="large">
                    <InsertEmoticon sx={styles.addAndEmoticon} />
                </IconButton>
            </Grid>

            <Grid item>
                <Button variant="contained" style={styles.escalate}
                    onClick={openEscalateModal}
                >
                    <Error style={{marginRight: '5px'}} />
                    Escalate
                </Button>

                <Button variant="contained" style={styles.template}>
                    <Forum style={{marginRight: '5px'}} />
                    Template
                </Button>

                <Button variant="contained" style={styles.sendAndInfo}>
                    Send
                    <Send style={{marginLeft: '5px'}} />
                </Button>
            </Grid>
        </Grid>
    </Grid>
</Card>

    <EscalatePopup open={openEscalate} handleClose={closeEscalateModal} />
    <CustomerInfoPopup open={openInfo} handleClose={closeInfoModal} />

    </>
  )
}
