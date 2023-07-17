import {
  MainContainer,
  WelcomeContainer,
  Title,
  AuthorName,
  ButtonsContainer,
  Button,
} from "./Styles";

export default function WelcomePage() {
  return (
    <MainContainer>
      <WelcomeContainer>
        <Title>PI Countries</Title>
        <AuthorName>By: Facundo Vázquez</AuthorName>
        <ButtonsContainer>
          <Button to="/login">Sign In</Button>
          <Button to="/register">Sign Up</Button>
        </ButtonsContainer>
      </WelcomeContainer>
    </MainContainer>
  );
}
