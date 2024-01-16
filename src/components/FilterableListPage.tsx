import { ChangeEvent, useEffect, useRef, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { getUsersFromAPI } from '../services/api-client';
import { deleteUser, filterUsers, setUsers } from '../redux/user-slice';
import List from './List';
import { User } from '../types/user.type';
import { logout } from '../redux/auth-slice';

const FilterableListPage = () => {
  const [searchText, setSearchText] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const { users } = useAppSelector((state) => state.user);

  useEffect(() => {
    getUsersFromAPI()
      .then((response) => dispatch(setUsers(response.data)))
      .catch((error) => console.error(error.message));
  }, []);

  const handleDeleteUser = (user: User) => {
    dispatch(deleteUser(user));
  };

  const highlightText = (text: string) => {
    const regex = new RegExp(searchText, 'gi');
    return text.replace(
      regex,
      (match) => `<span class="highlight">${match}</span>`
    );
  };

  const handleFilter = () => {
    const matchedUsers = users.filter((user) => {
      return `${user.name} ${user.username} ${user.email}`
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
    dispatch(filterUsers(matchedUsers));
  };

  const dispatch = useAppDispatch();

  const handleResent = () => {
    getUsersFromAPI()
      .then((response) => {
        dispatch(setUsers(response.data));
        setSearchText('');
        if (inputRef.current) {
          inputRef.current.value = '';
        }
      })
      .catch((error) => console.error(error.message));
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className='header'>
        <button className='button' onClick={handleLogOut}>
          Log Out
        </button>
      </div>
      <div className='flexContainer'>
        <div>
          <input
            className='inputField'
            ref={inputRef}
            onChange={(e) => handleSearch(e)}
          />
          <button className='button' onClick={handleFilter}>
            Filter
          </button>
        </div>
        <button className='button' onClick={handleResent}>
          Reset
        </button>
        <List
          handleDeleteUser={handleDeleteUser}
          users={users}
          highlightText={highlightText}
        />
      </div>
    </>
  );
};

export default FilterableListPage;
