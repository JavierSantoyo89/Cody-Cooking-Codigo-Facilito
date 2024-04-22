import styled from "styled-components";

const ResponsiveContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;

  /* Responsive styles */
  @media (max-width: 960px) {
    margin: 0 5%;
    padding: 20px;
    width: 90%;
  }
`;

export { ResponsiveContainer };
