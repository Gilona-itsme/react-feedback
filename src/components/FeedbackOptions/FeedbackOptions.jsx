import React from "react";
import PropTypes from "prop-types";

import s from "./FeedbackOptions.module.scss";

const FeedbackButton = ({ feedback, onLeaveFeedback }) => {
  return (
    <button
      className={s.FeedbackButton}
      key={feedback}
      type="button"
      data-feedback={feedback}
      onClick={onLeaveFeedback}
    >
      {feedback}
    </button>
  );
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  // return options.map((option) => (
  //   <FeedbackButton feedback={option} onLeaveFeedback={onLeaveFeedback} />
  // ));

  return (
    <div>
      {options.map((option) =>
        FeedbackButton({ feedback: option, onLeaveFeedback })
      )}
    </div>
  );
};

FeedbackButton.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
