import React, { Component } from "react";

import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";

import { FEEDBACK_OPTIONS } from "../data/constansFeedBack";

export default class App extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };

  handlerFeedback = (e) => {
    const { feedback } = e.target.dataset;
    this.setState((prevState) => ({ [feedback]: prevState[feedback] + 1 }));
  };

  countTotalFeedback = () => {
    const { Good, Neutral, Bad } = this.state;
    return Good + Neutral + Bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { Good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((Good / total) * 100) : 0;
  };

  render() {
    const { Good, Neutral, Bad } = this.state;
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
            good={Good}
            neutral={Neutral}
            bad={Bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </div>
    );
  }
}
