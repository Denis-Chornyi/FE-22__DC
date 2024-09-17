import React from 'react';

class User extends React.Component {

  state = {
    avatarUrl: null,
    name: null,
    location: null
  }
  componentDidMount() {
    this.getUser(this.props.match.params.userId)
  }

  componentDidUpdate(prevProps) {
    if(prevProps.match.params.userId !==this.props.match.params.userId) {
    this.getUser(this.props.match.params.userId)
    }
  }

  getUser(userId) {
    fetch(`https://api.github.com/users/${userId}`)
    .then(res => res.json())
    .then(({ avatar_url, name, location}) => {
      this.setState({avatarUrl: avatar_url, name, location})
    })
  }

  render() {

    const {avatarUrl, name, location} = this.state

    if(avatarUrl === null || name === null || location === null) {
      return <div className=''>Loading...</div>
    }

    return (
      <div className="user">
        <img alt="User Avatar" src={avatarUrl} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}

// TODO update solutiuins here

export default User;