import { NavLink } from 'react-router-dom';
import { HeaderNav } from 'components/App.styled';

export const AuthNav = () => {
  return (
    <div>
      <HeaderNav to="/register">Register</HeaderNav>
      <NavLink to="/login">Log In</NavLink>
    </div>
  );
};
