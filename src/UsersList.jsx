import React from 'react';
import User from './User';

const UsersList = ({ users }) => {
  return (
    <div>
      <ul className="users">
        {users.map(user => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
