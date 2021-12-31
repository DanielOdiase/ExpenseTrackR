import React,{useContext} from 'react'
import {Card,CardHeader,CardContent,Grid,Divider, Typography} from '@material-ui/core'
import useStyles from './styles'
import Form from './Form.js/Form'
import List from './List/List'
import { ExpenseTrackerContext } from '../../context/context'
function Main() {
const classes =useStyles()
const { balance } = useContext(ExpenseTrackerContext)
    return (
        
            <Card className={classes.root}>
                <CardHeader title="Track Your Spending" subheader="with TrackR" />
                <CardContent>
                    <Typography align='center' variant='h5'>
                    Total Balance ${balance}
                    </Typography>
                    <Typography variant='subtitle1' style={{lineheight:'1.5em',marginTop:'20px'}}>
                        {/* InforCard... */}
                        Try saying: Add income for $100 in category Salary for Monday..
                    </Typography>
                    <Divider />
                    <Form />
                </CardContent>
                <CardContent className={classes.cardContent}>
                   <Grid container spacing={2}>
                       <Grid item xs={12}>
                           <List />
                       </Grid>
                   </Grid>
                </CardContent>
            </Card>
        
    )
}

export default Main
