import React, {useContext} from 'react'
import {List as MUIList,ListItem,ListItemAvatar,ListItemText,Avatar,ListItemSecondaryAction, IconButton,Slide} from '@material-ui/core' 
import {Delete,MoneyOff} from '@material-ui/icons'
import useStyles from './styles'
import { ExpenseTrackerContext } from '../../../context/context'

const List = () => {
    const classes = useStyles()
    const {deleteTransaction, transactions} = useContext(ExpenseTrackerContext)
    
    
   
    return (
        <MUIList dense={false} className={classes.list}>
            {transactions.map((transaction)=>(
                <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem style={{border:'2px solid white',borderRadius:'10px',fontWeight:'600', background:'black',margin:'2vh auto' }}>
                        <ListItemAvatar>
                            <Avatar className={transaction.type === 'Dochody' ? classes.avatarIncome : classes.avatarExpense}>
<MoneyOff/>
                            </Avatar>
                        </ListItemAvatar>
                        <div >
                        <ListItemText primary={`${transaction.text} - ${transaction.amount} PLN`}  />
                        <ListItemText  primary={`${transaction.category} - ${transaction.date}`}/>
                        </div>
                        <ListItemSecondaryAction>
                            <IconButton edge='end' aria-label='delete' style={{color:'darkred',}} onClick={()=> deleteTransaction(transaction.id)}>
                                <Delete/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUIList>
    )
}

export default List
