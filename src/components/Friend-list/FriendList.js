import React from "react";
import FriendListItem from "./FriendListItem";
import PropTypes from "prop-types";
import s from "./Friends.module.css";

const FriendList = ({ friends }) => (
  <ul className={s.friendList}>
    {friends.map(({ avatar, name, id, isOnline }) => (
      <li key={id} className={s.friendItem}>
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};
export default FriendList;
