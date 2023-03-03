import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import { logOut } from '../../redux/auth/authOperation';
import { Button } from '../ContactItem/ContactItem.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div>
      <p>Welcome, {user.name}!</p>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </div>
  );
};
export default UserMenu;
