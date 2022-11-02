import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type TransactionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Transaction {
  readonly id: string;
  readonly label: string;
  readonly amount: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Transaction, TransactionMetaData>);
  static copyOf(source: Transaction, mutator: (draft: MutableModel<Transaction, TransactionMetaData>) => MutableModel<Transaction, TransactionMetaData> | void): Transaction;
}