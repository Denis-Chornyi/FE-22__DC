import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const User = () => {
  const [userData, setUserData] = useState({
    avatar_url: null,
    name: null,
    location: null
  });

  const { userId } = useParams();

  useEffect(() => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => response.json())
      .then(({ avatar_url, name, location }) =>
        setUserData({
          avatarUrl: avatar_url,
          name,
          location
        })
      );
  }, [userId]);
  const { avatar_url, name, location } = userData;
  return (
    <div className="user">
      <img alt="User Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

// TODO update solutiuins here

export default User;
