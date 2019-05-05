/**
 * src/Components/CardList.js
 */
import React from "react";
import PropTypes from "prop-types";

const CardList = props => (
  <div>{props.profiles.map(profile => props.children)}</div>
);

CardList.defaultProps = {
  children: null,
};

CardList.propTypes = {
  children: PropTypes.node,
};

export default CardList;
