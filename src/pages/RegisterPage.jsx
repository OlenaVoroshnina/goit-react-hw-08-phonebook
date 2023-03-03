import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperation';
import { FormTitle, FormButton, FormRegister } from './RegisterPage.styled';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const { name, email, password } = event.target.elements;
    const user = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    dispatch(register(user));
    event.target.reset();
  };
  return (
    <FormRegister onSubmit={handleSubmit} autoComplete="off">
      <FormTitle>Create your free account!</FormTitle>
      <label for="name">Username</label>
      <input type="text" name="name" required />
      <label for="email">Email</label>
      <input type="email" name="email" required />
      <label for="password">Password</label>
      <input type="password" name="password" required />
      <FormButton type="submit">Register</FormButton>
    </FormRegister>
  );
};
export default RegisterPage;
