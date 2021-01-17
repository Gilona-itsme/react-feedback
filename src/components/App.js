import React, { Component } from "react";

import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";

import { FEEDBACK_OPTIONS } from "../data/constansFeedBack";

export default class App extends Component {
  state = {};

  handlerFeedback = (e) => {
    const { feedback } = e.target.dataset;
    this.setState((prevState) => {
      const key = prevState[feedback] || 0;
      return {
        [feedback]: key + 1,
      };
    });
  };

  countTotalFeedback = () => {
    // const { Good, Neutral, Bad } = this.state;
    // return Good + Neutral + Bad;
    return Object.values(this.state).reduce((acc, item) => acc + item, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { Good = 0 } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((Good / total) * 100) : 0;
  };

  render() {
    //const { Good, Neutral, Bad } = this.state;

    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title="Please, leave feedback">
          <FeedbackOptions
            options={FEEDBACK_OPTIONS}
            onLeaveFeedback={this.handlerFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            statisticBtns={FEEDBACK_OPTIONS}
            data={this.state}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </div>
    );
  }
}
