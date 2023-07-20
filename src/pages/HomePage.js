import React, { useContext } from 'react'
import Header from '../components/Header';
import Balance from '../components/Balance';
import IncomeExpense from '../components/IncomeExpense';
import TransactionList from '../components/TransactionList';
import AddTransaction from '../components/AddTransaction';
import { GlobalContext } from '../context/GlobalState';

const HomePage = () => {
    const {user} = useContext(GlobalContext)
    return (
        <div>
            <Header />
            {console.log(user)}
            <div className='container'>
                <Balance />
                <IncomeExpense />
                <TransactionList />
                <AddTransaction />
            </div>
        </div>
    );
}

export default HomePage
