import styled from "styled-components";
import error404 from "./404Background.webp";

export const Error404 = () => {
  const handleClickBack = () => {
    window.history.back();
  };

  return (
    <ErrorBody onClick={handleClickBack} style={{ cursor: "pointer" }}>
      <Logo src={error404} alt="Logo" />
    </ErrorBody>
  );
};

const ErrorBody = styled.div`
  display: flex;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 100vw;
  height: 100vh;
`;
