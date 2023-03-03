import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperation';
import { FormTitle, FormButton, FormRegister } from './RegisterPage.styled';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    const user = {
      email: email.value,
      password: password.value,
    };
    dispatch(logIn(user));
    event.target.reset();
  };
  return (
    <FormRegister onSubmit={handleSubmit} autoComplete="off">
      <FormTitle>Please login to your account!</FormTitle>
      <label for="email">Email</label>
      <input type="email" name="email" required />
      <label for="password">Password</label>
      <input type="password" name="password" required />
      <FormButton type="submit">Login</FormButton>
    </FormRegister>
  );
};
export default LoginPage;
