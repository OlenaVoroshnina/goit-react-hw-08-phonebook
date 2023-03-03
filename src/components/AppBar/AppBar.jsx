import UserMenu from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { HeaderBar } from 'components/App.styled';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <HeaderBar>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderBar>
  );
};
export default AppBar;
