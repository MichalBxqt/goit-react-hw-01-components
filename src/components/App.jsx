import Profile from './Profile/profile';
import user from './Profile/user.json';
import Statistics from './Statistics/statistics';
import data from './Statistics/data.json';
import FriendList from './FriendList/friendList'
import friends from './FriendList/friends.json'
import TransactionsInfo from './Transaction/transactionsData'
import transactions from './Transaction/transactions.json'


export const App = () => {
  return (
    <div
    style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontSize: 40,
      color: '#010101',
    }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionsInfo items={transactions} />
    </div>
  );
};
