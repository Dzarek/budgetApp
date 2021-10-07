import React, {useState, useContext} from 'react'
import { Grid,Button,FormControl,InputLabel,Select,MenuItem } from '@material-ui/core'
import useStyles from './styles'
import { ExpenseTrackerContext } from '../../../context/context'
import {v4 as uuidv4} from 'uuid'
import { incomeCategories,expenseCategories } from '../../../constants/categories'
import formatDate from '../../../utils/formatDate'
import CustomizedSnackbar from '../../Snackbar/Snackbar'
import './styleForm.css'

const initialState = {
    amount: '',
    category: '',
    type: '',
    date: formatDate(new Date()),
    text:'',
}

const Form = () => {
    const {addTransaction} = useContext(ExpenseTrackerContext)
    const classes = useStyles()
    const [formData, setFormData] = useState(initialState)
    const [open,setOpen] = useState(false)
    
    const createTransaction = ()=> {
        if(Number.isNaN(Number(formData.amount)) || !formData.date.includes('-')) {
             return}
             if(formData.amount === '' || formData.category === ''){
                 return alert('uzupełni wartości')
             }
        const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4() }
        setOpen(true)
addTransaction(transaction)
setFormData(initialState)
    }


    const selectedCategories = formData.type === 'Dochody' ? incomeCategories : expenseCategories
    return (
        <Grid container spacing={2}>
            <CustomizedSnackbar open={open} setOpen={setOpen}/>
            <Grid  item xs={12}>
                <input className='formAll' type='text' placeholder='TYTUŁ...' value={formData.text} onChange={(e)=> setFormData({...formData, text:e.target.value})}/>
            </Grid>
            <Grid item xs={6}>
                <FormControl   fullWidth>
                    <InputLabel style={{color:'white', marginLeft:'20%',fontWeight:'600'}}>Typ</InputLabel>
                    <Select className='formSelect' value={formData.type} label='typ' onChange={(e)=> setFormData({ ...formData, type: e.target.value})}>
                        <MenuItem  value='Dochody'>Dochody</MenuItem>
                        <MenuItem value='Wydatki'>Wydatki</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl  fullWidth>
                    <InputLabel style={{color:'white', marginLeft:'20%', fontWeight:'600'}}>Kategoria</InputLabel>
                    <Select className='formSelect' value={formData.category} onChange={(e)=> setFormData({ ...formData,category: e.target.value})}>
                 {selectedCategories.map((c)=> <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <input className='formSelect2' type='number' placeholder='Kwota'  value={formData.amount} onChange={(e)=> setFormData({...formData, amount:e.target.value})}/>
            </Grid>
          
            <Grid item xs={6}>
                <input className='formSelect3' type='date' value={formData.date} onChange={(e)=> setFormData({...formData, date:formatDate(e.target.value)})}/>
            </Grid>
            <Button className={classes.button} variant='outlined' color='primary' fullWidth onClick={createTransaction}>Dodaj</Button>
        </Grid>
    )
}

export default Form
