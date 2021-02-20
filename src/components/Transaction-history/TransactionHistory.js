import React from "react";
import PropTypes from "prop-types";
import s from "./Transaction.module.css";

const Transactions = ({ items }) => (
  <table className={s.transactionHistory}>
    <thead>
      <tr>
        <th className={s.name}>Type</th>
        <th className={s.name}>Amount</th>
        <th className={s.name}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <td className={s.type}>{type}</td>
          <td className={s.amount}>{amount}</td>
          <td className={s.currency}>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};

export default Transactions;
