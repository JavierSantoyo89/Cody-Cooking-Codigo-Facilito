import { ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #fafafa;
  border-radius: 10px;
  max-width: 960px;
  margin: 0 auto;
  padding: 10px;
  width: 100%;
  box-shadow: 0px 4px 24px 0px rgba(43, 43, 43, 0.25);

  @media (max-width: 960px) {
    border-radius: 15px;
    margin: 0 5%;
    padding: 20px;
    width: 90%;
  }
`;

const MainWrapper = ({ children }: { children: ReactNode }) => (
  <Wrapper>{children}</Wrapper>
);

export default MainWrapper;
