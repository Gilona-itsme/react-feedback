import React from "react";
import PropTypes from "prop-types";

import s from "./Statistics.module.scss";

import Notification from "../Notification";

const Statistics = ({ statisticBtns, data, total, positivePercentage }) => {
  return (
    <>
      {total > 0 && (
        <ul className={s.list}>
          {statisticBtns.map(statisticBtn => <li key={statisticBtn.id} className={s.item}>{`${statisticBtn.text}: ${data[statisticBtn.id] || 0}`}</li>)}
          
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
  //statisticBtns: PropTypes.arrayOf(PropTypes.object),
  //data: PropTypes.objectOf(PropTypes.string),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
