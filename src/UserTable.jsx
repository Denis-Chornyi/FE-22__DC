import React, { Component } from 'react';
import { users } from './userList';
import UsersList from './UsersList';
import Pagination from './Pagination';

class UserTable extends Component {
  state = {
    currentPage: 0,
    itemsPerPage: 3
  };

  setCurrentPage = page => {
    this.setState({
      currentPage: page
    });
  };

  handlePrevClick = () => {
    this.setState(prevState => ({
      currentPage: Math.max(prevState.currentPage - 1, 0)
    }));
  };

  handleNextClick = () => {
    const totalPages = Math.ceil(users.length / this.state.itemsPerPage);
    this.setState(prevState => ({
      currentPage: Math.min(prevState.currentPage + 1, totalPages - 1)
    }));
  };

  render() {
    const { currentPage, itemsPerPage } = this.state;
    const startIndex = currentPage * itemsPerPage;
    const usersToDisplay = users.slice(startIndex, startIndex + itemsPerPage);

    return (
      <div>
        <Pagination
          goPrev={this.handlePrevClick}
          goNext={this.handleNextClick}
          currentPage={currentPage}
          totalItems={users.length}
          itemsPerPage={itemsPerPage}
        />
        <UsersList users={usersToDisplay} />
      </div>
    );
  }
}

export default UserTable;
