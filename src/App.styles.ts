import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding-right: 10rem;
  background-color: #003472;
  padding-left: 10rem;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 1000px) {
    padding-right: 0rem;
    padding-left: 0rem;
  }
  > .logout-button {
    color: #ffffff;
  }
`;