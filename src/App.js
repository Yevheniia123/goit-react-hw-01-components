import React from "react";

import Profile from "./components/Profile/Profile";
import profileInform from "./profile.json";

import statisticsData from "./statistics.json";
import StatisticsList from "./components/Statistics/StaticsList";

import friends from "./friends.json";
import FriendList from "./components/Friend-list/FriendList";

import transactions from "./transaction.json";
import Transactions from "./components/Transaction-history/TransactionHistory";

const App = () => {
  return (
    <div>
      <Profile
        name={profileInform.name}
        tag={profileInform.tag}
        location={profileInform.location}
        avatar={profileInform.avatar}
        followers={profileInform.stats.followers}
        views={profileInform.stats.views}
        likes={profileInform.stats.likes}
      />
      <StatisticsList items={statisticsData} />
      <FriendList friends={friends} />
      <Transactions items={transactions} />
    </div>
  );
};

export default App;
