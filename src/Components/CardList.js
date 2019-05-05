/**
 * src/Components/CardList.js
 */
import React from "react";
import PropTypes from "prop-types";

const CardList = props => (
  <div>
    {props.profiles.map(profile => (
      <div key={profile.id}>
        <img src={profile.avatar_url} />
        <div>
          <div>{profile.name}</div>
          <div>{profile.company}</div>
        </div>
      </div>
    ))}
  </div>
);

CardList.defaultProps = {
  profiles: [],
};

CardList.propTypes = {
  profiles: PropTypes.array,
};

export default CardList;
