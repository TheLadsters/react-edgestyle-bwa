/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import { Modal, ModalDialog, ModalClose, 
    Typography, Tabs, TabList, Tab, TabPanel, Input, IconButton} from '@mui/joy'
import { Box, Grid, List} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function TemplatePopup(props) {
    const [index, setIndex] = useState(0);
    const style = {
        dialog: {
            width: '60%'
        },
        tabPanel: {
            p: 2, height: 300, width: '100%',
            overflowY: 'auto'
        },
        selectedTab: {
            backgroundColor: "RGB(0,128,45)",
            color: 'white'
        }
    }

    const categoryOptions = [
        {optionTitle: 'INITIAL CONTACT'},
        {optionTitle: 'RESERVATION'},
        {optionTitle: 'RESCHEDULE'},
        {optionTitle: 'CANCEL'},
    ]


    const options = categoryOptions.map((opt, idx) => {
        return (
                <Tab 
                sx={index === idx ? style.selectedTab : null}
                key={idx}
                >
                    {opt.optionTitle}
                </Tab>
            )
    })
    

  return (
    <Modal open={props.open}>
        <ModalDialog size={'lg'} sx={style.dialog}>
            <ModalClose onClick={props.handleClose} />
            <Grid container sx={{marginTop: '25px'}} direction={'column'}>
                <Grid container>
                    <Grid item sx={{mb: 2}}>
                        <Typography sx={{marginLeft: '10px'}} level="h4">CATEGORIES</Typography>
                          <Tabs 
                            size="lg"
                            value={index} 
                            onChange={(event, value) => setIndex(value)}
                            aria-label="Vertical tabs"
                            orientation="vertical"
                            sx={{ minWidth: 300, borderRadius: 'lg' }}
                            >
                            <TabList sx={{width: 300, backgroundColor: 'white'}} >
                                {options}
                            </TabList>
                            <TabPanel sx={style.tabPanel}>
                                <div style={{marginBottom: '20px'}}>
                                    <div>
                                        <b>
                                        上記の時間の始めに事前カウンセリングを行います。
                                        注意事項に同意いただいた後、そのまま治療を行います。
                                        </b>
                                    </div>
                                    <div>
                                        The pre-counseling will be held at the beginning of the above time, 
                                        and after you agree to the precautions, the treatment will be performed as it is.
                                    </div>
                                </div>

                                <div style={{marginBottom: '20px'}}>
                                    <div>
                                        <b>
                                        {`<YEAR>年<MONTH>月<DAY>日の予約には、<TIME>時または<TIME>時のいずれかの時間をご用意できます。`}
                                        </b>
                                    </div>
                                    <div>
                                        {`We can make an appointment for either <TIME> or <TIME> on <MONTH> <DAY>, <YEAR>.`}
                                    </div>
                                </div>

                                <div style={{marginBottom: '20px'}}>
                                    <div>
                                        <b>
                                            お問い合わせありがとうございます。全額一括払いを受け付けております。
                                        </b>
                                    </div>
                                    <div>
                                        Thank you for your inquiry. We accept payment in full.
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel value={1} sx={style.tabPanel}>
                                <div style={{marginBottom: '20px'}}>
                                    <div>
                                        <b>
                                        {`<YEAR>年<MONTH>月<DAY>日の予約には、<TIME>時または<TIME>時のいずれかの時間をご用意できます。`}
                                        </b>
                                    </div>
                                    <div>
                                        {`We can make an appointment for either <TIME> or <TIME> on <MONTH> <DAY>, <YEAR>.`}
                                    </div>
                                </div>
                                
                                <div style={{marginBottom: '20px'}}>
                                    <div>
                                        <b>
                                        上記の時間の始めに事前カウンセリングを行います。
                                        注意事項に同意いただいた後、そのまま治療を行います。
                                        </b>
                                    </div>
                                    <div>
                                        The pre-counseling will be held at the beginning of the above time, 
                                        and after you agree to the precautions, the treatment will be performed as it is.
                                    </div>
                                </div>

                                <div style={{marginBottom: '20px'}}>
                                    <div>
                                        <b>
                                            お問い合わせありがとうございます。全額一括払いを受け付けております。
                                        </b>
                                    </div>
                                    <div>
                                        Thank you for your inquiry. We accept payment in full.
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel value={2} sx={style.tabPanel}>
                                <div style={{marginBottom: '20px'}}>
                                    <div>
                                        <b>
                                            お問い合わせありがとうございます。全額一括払いを受け付けております。
                                        </b>
                                    </div>
                                    <div>
                                        Thank you for your inquiry. We accept payment in full.
                                    </div>
                                </div>

                                <div style={{marginBottom: '20px'}}>
                                    <div>
                                        <b>
                                        上記の時間の始めに事前カウンセリングを行います。
                                        注意事項に同意いただいた後、そのまま治療を行います。
                                        </b>
                                    </div>
                                    <div>
                                        The pre-counseling will be held at the beginning of the above time, 
                                        and after you agree to the precautions, the treatment will be performed as it is.
                                    </div>
                                </div>

                                <div style={{marginBottom: '20px'}}>
                                    <div>
                                        <b>
                                        {`<YEAR>年<MONTH>月<DAY>日の予約には、<TIME>時または<TIME>時のいずれかの時間をご用意できます。`}
                                        </b>
                                    </div>
                                    <div>
                                        {`We can make an appointment for either <TIME> or <TIME> on <MONTH> <DAY>, <YEAR>.`}
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel value={3} sx={style.tabPanel}>
                                <div style={{marginBottom: '20px'}}>
                                    <div>
                                        <b>
                                        {`<YEAR>年<MONTH>月<DAY>日の予約には、<TIME>時または<TIME>時のいずれかの時間をご用意できます。`}
                                        </b>
                                    </div>
                                    <div>
                                        {`We can make an appointment for either <TIME> or <TIME> on <MONTH> <DAY>, <YEAR>.`}
                                    </div>
                                </div>
                                
                                <div style={{marginBottom: '20px'}}>
                                    <div>
                                        <b>
                                        上記の時間の始めに事前カウンセリングを行います。
                                        注意事項に同意いただいた後、そのまま治療を行います。
                                        </b>
                                    </div>
                                    <div>
                                        The pre-counseling will be held at the beginning of the above time, 
                                        and after you agree to the precautions, the treatment will be performed as it is.
                                    </div>
                                </div>

                                <div style={{marginBottom: '20px'}}>
                                    <div>
                                        <b>
                                            お問い合わせありがとうございます。全額一括払いを受け付けております。
                                        </b>
                                    </div>
                                    <div>
                                        Thank you for your inquiry. We accept payment in full.
                                    </div>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </Grid>
                </Grid>

                <Grid item>
                <Input 
                    size="lg"
                    placeholder="Search..."
                    type="text"
                    startDecorator={
                    <IconButton color="white">
                        <SearchIcon color="action" />
                    </IconButton>
                    }
                />
                </Grid>
            </Grid>
        </ModalDialog>
    </Modal>
  )
}

export default TemplatePopup