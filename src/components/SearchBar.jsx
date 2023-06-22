/* eslint-disable no-unused-vars */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchIcon from '@mui/icons-material/Search';
import { Card, Grid, Button } from '@mui/material';
import { Checkbox, IconButton, Input, Select, Option } from '@mui/joy';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';


export default function SearchBar() {
    const styles = {
      card: {
        padding: '8px 8px',
        marginTop: '20px',
        width: '100%'
      },
      mainGrid: {
        flexDirection: 'column',
        justifyContent: 'space-between'
      },
      gridItem: {
        marginBottom: '8px'
      }, 
      gridContainer: {

      },
      checkBox: {
        backgroundColor: '#e8e4e4'
      },
      searchBar: {
          borderRadius: '20px',
          marginBottom: '20px', 
          marginTop: '20px',
        },
        clearBtn: {
          backgroundColor: '#e8e4e4',
          color: 'black'
        },
        searchBtn : {
          backgroundColor: 'RGB(0,128,45)',
        }
    }



  return (
    <Card sx={styles.card}>
      <Grid container sx={styles.mainGrid}>
        
        <Grid sx={styles.gridItem} item>
          <Select placeholder="Single Selection"
           indicator={<KeyboardArrowDown />}>
            <Option value="dog">Dog</Option>
            <Option value="cat">Cat</Option>
          </Select>
        </Grid>

        <Grid sx={styles.gridItem} item>
          <Select placeholder="Multiple Selection"
           indicator={<KeyboardArrowDown />}>
            <Option value="dog">Dog</Option>
            <Option value="cat">Cat</Option>
          </Select>
        </Grid>

        <Grid sx={styles.gridItem} item>
          <Input 
          // sx={styles.searchBar}
            size="md"
            placeholder="Search..."
            type="text"
            endDecorator={
          <IconButton color="white">
            <SearchIcon color="action" />
          </IconButton>
            }
          />
        </Grid>

        <Grid sx={styles.gridItem}>
            <Grid item>
            <Checkbox label="Include Unread Messages" 
             variant="soft"  />
            </Grid>
        </Grid>

        <Grid sx={styles.gridItem} justifyContent={'space-around'} container>
            <Grid item>
              <Button style={styles.clearBtn} variant="contained">
                Clear
                </Button>
            </Grid>

            <Grid item>
                <Button style={styles.searchBtn} variant="contained">
                  Search
                </Button>
            </Grid>
        </Grid>

      </Grid>

    </Card>
  )
}
