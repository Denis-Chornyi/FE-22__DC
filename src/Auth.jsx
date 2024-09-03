import React, { useState } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

// class component /////////////////////////////////////////////////

// class Auth extends React.Component {
//   state = {
//     isLoggedIn: false,
//     isSpinnerVisible: false
//   };

//   sizeSpinner = {
//     width: '40px',
//     height: '40px'
//   };

//   handleLogin = () => {
//     this.setState({ isSpinnerVisible: true });
//     setTimeout(() => {
//       this.setState({
//         isLoggedIn: true,
//         isSpinnerVisible: false
//       });
//     }, 2000);
//   };

//   handleLogout = () => {
//     this.setState({
//       isLoggedIn: false
//     });
//   };

//   render() {
//     const { isLoggedIn, isSpinnerVisible } = this.state;

//     if (isSpinnerVisible) {
//       return <Spinner size={this.sizeSpinner} />;
//     }

//     if (isLoggedIn) {
//       return <Logout onLogout={this.handleLogout} />;
//     }

//     return <Login onLogin={this.handleLogin} />;
//   }
// }

// function component /////////////////////////////////////////////////

const Auth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);

  const sizeSpinner = {
    width: '40px',
    height: '40px'
  };

  const handleLogin = () => {
    setIsSpinnerVisible(true);
    setTimeout(() => {
      setIsLoggedIn(true);
      setIsSpinnerVisible(false);
    }, 2000);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isSpinnerVisible) {
    return <Spinner size={sizeSpinner} />;
  }

  if (isLoggedIn) {
    return <Logout onLogout={handleLogout} />;
  }

  return <Login onLogin={handleLogin} />;
};

export default Auth;
