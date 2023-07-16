import { LoadingSlider, LoadingContainer, Loading } from "./Styles";

export default function LoadingAnimation() {
  return (
    <LoadingContainer>
      <Loading>
        <LoadingSlider />
      </Loading>
    </LoadingContainer>
  );
}
