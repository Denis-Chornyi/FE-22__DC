import React, { Component } from 'react';
import UsersList from './UsersList';
import Pagination from './Pagination';

export const users = [
  {
    id: 'id-0',
    age: 21,
    name: 'Bob'
  },
  {
    id: 'id-1',
    age: 17,
    name: 'Tom'
  },
  {
    id: 'id-2',
    age: 18,
    name: 'Tad'
  },
  {
    id: 'id-3',
    age: 45,
    name: 'Justin'
  },
  {
    id: 'id-4',
    age: 45,
    name: 'Franklin'
  },
  {
    id: 'id-5',
    age: 45,
    name: 'John'
  },
  {
    id: 'id-6',
    age: 45,
    name: 'Andrew'
  },
  {
    id: 'id-7',
    age: 45,
    name: 'Pol'
  },
  {
    id: 'id-8',
    age: 45,
    name: 'Ron'
  },
  {
    id: 'id-9',
    age: 45,
    name: 'Harry'
  },
  {
    id: 'id-10',
    age: 45,
    name: 'Anna'
  }
];

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
