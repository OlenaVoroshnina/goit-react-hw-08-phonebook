import { HomeContainer } from 'components/App.styled';
import { HomeTitle } from 'components/App.styled';

export default function HomePage() {
  return (
    <HomeContainer>
      <HomeTitle>
        Welcome to the app
        <br />
        <br />
        Phonebook
      </HomeTitle>
    </HomeContainer>
  );
}
