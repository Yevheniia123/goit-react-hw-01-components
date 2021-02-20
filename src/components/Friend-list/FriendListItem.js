import React from "react";
import PropTypes from "prop-types";
import s from "./Friends.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <>
    <span className={isOnline ? s.green : s.red}>{isOnline ? "" : ""}</span>
    <img className="avatar" src={avatar} alt={name} width="48" />
    <p className={s.name}>{name}</p>
  </>
);
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendListItem;
