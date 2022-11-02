import { API } from 'aws-amplify';
import { DataStore } from "@aws-amplify/datastore";
import { useEffect, useState } from "react";
import { Transaction } from "../models";
import { TransactionItemCollection } from "../ui-components";

const initialState = {
    label: '',
    amount: ''
}

export const Transactions = () => {
    const [formState, setFormState] = useState(initialState)
    const [transactions, setTransactions] = useState([]);
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        const subscription = DataStore.observeQuery(
            Transaction,
        ).subscribe(snapshot => {
            const { items, isSynced} = snapshot;
            console.log("Found Items: {}", JSON.stringify(items));
            setTransactions(items);
            updateBalance();
        });

        return ()=> {
            subscription.unsubscribe();
        }
    }, []);
    
    const updateBalance = async () => {
        const result = await API.get('getbalance', '/balance');
        console.log(JSON.stringify(result));
        setBalance(result);
    }

    function setInput(key, value) {
        setFormState({...formState, [key]: value});
    }

    async function addTransaction() {
        if (!formState.amount || !formState.label) return;
        const transaction = {...formState};
        setTransactions([...transactions, transaction])
        setFormState(initialState);
        await DataStore.save(new Transaction({
            label: transaction.label,
            amount: parseFloat(transaction.amount)
        }));

    }

    return (
        <div>
            <h1>
                Balance: {balance}
            </h1>
            <h2>Transactions</h2>
            <input placeholder="Label" value={formState.label}
                onChange={event=> setInput('label', event.target.value)} />
            <input placeholder="Amount" value={formState.amount}
                onChange={event=> setInput('amount', event.target.value)} />
            <button onClick={addTransaction}>Create Transaction</button>

            <hr />
            <div>
                <TransactionItemCollection  />
            </div>
        </div>
    );
}