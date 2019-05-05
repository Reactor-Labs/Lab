/**
 * src/Components/Card.js
 */
import React from "react";
import PropTypes from "prop-types";

const Card = props => (
  <div>
    <img src={props.avatar_url} />
    <div>
      <div>{profile.name}</div>
      <div>{profile.company}</div>
    </div>
  </div>
);

Card.defaultProps = {};

Card.propTypes = {};

export default Card;
