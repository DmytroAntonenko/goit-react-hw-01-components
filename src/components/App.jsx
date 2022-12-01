import { Profile } from "./Profile/Profile";
import user from "../data/user.json";

import { Statistics } from "./Statistics/Statistics";
import data from "../data/data.json";
export const App = () => { 
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
      username={user.username}
      avatar = {user.avatar}
      tag = {user.tag}
      location = {user.location}
      followers = {user.stats.followers}
      views = {user.stats.views}
      likes= {user.stats.likes}
      />

      <Statistics
      title="Upload stats"
      stats={data} />
    </div>
  );
};
