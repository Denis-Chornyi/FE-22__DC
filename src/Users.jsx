import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import User from './User';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function Users({ match }) {
  useEffect(() => {
    console.log('Users component mounted')
  }, [])
  console.log('Users component rendered')
  return (
    <div className="page__content">
      <h1>Users</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to={`${match.url}/github`}>Github</Link>
        </li>
        <li className="navigation__item">
          <Link to={`${match.url}/facebook`}>Facebook</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.url}/:userId`} component={User} />
        <Route path={`${match.url}`}>
      <span>Select a user please</span>
        </Route>
      </Switch>
    </div>
  );
}

export default Users;