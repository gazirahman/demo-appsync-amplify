import { DataStore } from "@aws-amplify/datastore";
import { useEffect, useState } from "react";
import { Transaction } from "../models";

const initialState = {
    label: '',
    amount: ''
}

export const Transactions = () => {
    const [formState, setFormState] = useState(initialState)
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetchTransactions()
    }, []);

    async function fetchTransactions() {
        const models = await DataStore.query(Transaction);
        setTransactions(models);
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

        await fetchTransactions();
    }

    return (
        <div>
            <h1>
                Balance: {
                    transactions.reduce((total, transaction) => total + transaction.amount, 0)
                }
            </h1>
            <h2>Transactions</h2>
            <input placeholder="Label" value={formState.label}
                onChange={event=> setInput('label', event.target.value)} />
            <input placeholder="Amount" value={formState.amount}
                onChange={event=> setInput('amount', event.target.value)} />
            <button onClick={addTransaction}>Create Transaction</button>

            <hr />
            <div>
                {
                    transactions.map((transaction) => (
                        <div key={transaction.id}>{transaction.label}: {transaction.amount}</div>
                    ))
                }
            </div>
        </div>
    );
}