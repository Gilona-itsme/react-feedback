import React from "react";
import PropTypes from "prop-types";

import s from "./Statistics.module.scss";

import Notification from "../Notification";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {total > 0 && (
        <ul className={s.list}>
          <li className={s.item}>Good: {good}</li>
          <li className={s.item}>Neutral: {neutral}</li>
          <li className={s.item}>Bad: {bad}</li>
          <li className={s.itemTotal}>Total: {total}</li>
          <li className={s.itemTotal}>
            Positive feedback: {positivePercentage} %
          </li>
        </ul>
      )}
      {total === 0 && <Notification message="No feedback given" />}
    </>
  );
};

Statistics.propTypes = {
good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
