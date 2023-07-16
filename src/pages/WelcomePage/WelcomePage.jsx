import {
  MainContainer,
  WelcomeContainer,
  Title,
  AuthorName,
  Button,
} from "./Styles";

export default function WelcomePage() {
  return (
    <MainContainer>
      <WelcomeContainer>
        <Title>PI Countries</Title>
        <AuthorName>By: Facundo Vázquez</AuthorName>
        <Button to="/home">Explore Now</Button>
      </WelcomeContainer>
    </MainContainer>
  );
}
