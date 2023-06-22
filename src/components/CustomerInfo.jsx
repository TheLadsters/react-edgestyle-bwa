/* eslint-disable no-unused-vars */
import React from 'react'
import {Grid, Card, Button, Typography, TextField, Divider, Box} from '@mui/material';


function CustomerInfo() {
    const styles = {
        mainCard: {
            marginTop: '20px',
            height: '90vh',
            paddingTop: '15px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent:'flex-start', 
            alignItems: 'flex-start',
            overflowY: 'auto',
            gap: 3

        },
        container: {
            flexDirection:'column',
            justifyContent:'space-between', 
            alignContent: 'center',
            padding: '0px 15px'
        },
        subCard: {
            backgroundColor: '#e8e4e4',
            padding: '10px 10px',
            margin: '10px 0px',
            width: '100%'
        },
        divider: {
            borderBottomWidth: '1px',
            backgroundColor: 'black',
            margin: '8px 0px'
        }
    }
  return (
    <Card sx={styles.mainCard}>
        <Grid container sx={styles.container}>
            <Grid item>
                <Typography variant="h4">
                    山田 花子
                </Typography>
            </Grid>

            <Grid item>
                <Typography variant="h7">
                    2023-06-21 17:00~
                </Typography>
            </Grid>
        </Grid>

            <Grid container sx={styles.container}>
                <Grid item>
                    <Card sx={styles.subCard}>
                        <Typography variant="h7">
                            友だち基本情報の表示/編集                        
                        </Typography>
                    </Card>
                </Grid>

                <Grid item>
                    <Card sx={styles.subCard}>
                        <Typography variant="h7">
                            {`特記メモの表示と編集（複数アカウント共通)`}
                        </Typography>
                    </Card>
                </Grid>

                <Divider sx={styles.divider} />

                <Grid item>
                    <Card sx={styles.subCard}>
                        <Typography variant="h7">
                        非表示・ブロック切り替え
                        </Typography>
                    </Card>
                </Grid>

                <Grid item>
                    <Card sx={styles.subCard}>
                        <Typography variant="h7">
                            対応マーク の表示／変更
                        </Typography>
                    </Card>
                </Grid>

                <Grid item>
                    <Card sx={styles.subCard}>
                        <Typography variant="h7">
                            メッセージ対応マークの一括操作
                        </Typography>
                    </Card>
                </Grid>

                <Grid item>
                    <Card sx={styles.subCard}>
                        <Typography variant="h7">
                            トーク  メモの表示と編集
                        </Typography>
                    </Card>
                </Grid>

                <Divider sx={styles.divider} />

                <Grid item>
                    <Card sx={styles.subCard}>
                        <Typography variant="h7">
                            タグの表示、編集
                        </Typography>
                    </Card>
                </Grid>

                <Grid item>
                    <Card sx={styles.subCard}>
                        <Typography variant="h7">
                            友だち情報の表示、編集
                        </Typography>
                    </Card>
                </Grid>

                <Grid item>
                    <Card sx={styles.subCard}>
                        <Typography variant="h7">
                            リッチメニューの割り当て表示、変更
                        </Typography>
                    </Card>
                </Grid>

                <Grid item>
                    <Card sx={styles.subCard}>
                        <Typography variant="h7">
                        シナリオの割り当て表示、変更シナリオの配信状態のリセット購読済シナリオの表示
                        </Typography>
                    </Card>
                </Grid>
            </Grid>
    </Card>
  )
}

export default CustomerInfo