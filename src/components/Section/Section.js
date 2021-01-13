import React from "react";
import PropTypes from "prop-types";
import "./Section.scss";

const Section = ({ title, children }) => (
  <section className="Section">
    <h2>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
