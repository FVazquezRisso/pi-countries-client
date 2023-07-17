import styled from "styled-components";

export const ActivitiesListContainer = styled.main`
  display: grid;
  width: 100%;
  margin-top: 3rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  row-gap: 3.5rem;

  &.noActivities {
    display: flex;
  }
`;
