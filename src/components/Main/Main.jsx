import React, {useContext} from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import { ExpenseTrackerContext } from '../../context/context';
import useStyles from './styles'
import Form from './Form/Form'
import List from './List/List'


const Main = () => {
    const {balance} = useContext(ExpenseTrackerContext)
    const classes = useStyles()
    return ( 
        <Card classes={classes.root}
        style={{background:'rgba(0,0,0,.8)',color: "white"}}
        >
<CardHeader style={{textAlign:'center'}} title='Aplikacja Budżetowa'  />
<CardContent style={{color:'white'}}>
    <Typography align='center' variant='h5'>suma: {balance.toFixed(2)} PLN</Typography>
    <Divider className={classes.divider}/>
    <Form />
</CardContent>
<CardContent className={classes.cartContent}>
<Grid container spacing={2}>
    <Grid item xs={12}>
        <List/>
    </Grid>
</Grid>
</CardContent>
        </Card>
     );
}
 
export default Main;