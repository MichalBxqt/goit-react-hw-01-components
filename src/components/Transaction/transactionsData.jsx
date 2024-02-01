import React from 'react';
import css from './Transactions.module.css';
import PropTypes from 'prop-types';

const TransactionsHistory = ({ items }) => {
  return (
    <div className={css.wrapper}>
      <table className={css.transactionsHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(transaction => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
TransactionsHistory.propTypes = {
  items: PropTypes.array,
};

const TransactionItem = ({ transaction }) => {
  const { type, amount, currency } = transaction;

  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};
TransactionItem.propTypes = {
  transaction: PropTypes.object,
};

export default TransactionsHistory;