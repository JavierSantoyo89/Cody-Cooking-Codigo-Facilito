import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <LeftSection>
          <Logo src="src/assets/imgs/cody-image.jpg" alt="Logo" />
          <TextContainer>
            <Text>Cody</Text>
            <Text>Cooking</Text>
          </TextContainer>
        </LeftSection>
        <RightSection>
          <Icon href="https://www.facebook.com">
            <FaFacebook />
          </Icon>
          <Icon href="https://www.twitter.com">
            <FaTwitter />
          </Icon>
          <Icon href="https://www.instagram.com">
            <FaInstagram />
          </Icon>
        </RightSection>
      </FooterContainer>
      <CenterSection>Copyright 2024 Cody Cooking</CenterSection>
    </div>
  );
};

const FooterContainer = styled.footer`
  // background-color: #333;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 824px;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 50px;
  margin-right: 10px;
  border-radius: 50%;
  border: 1px solid white;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Text = styled.p`
  font-size: 1rem;
  margin: 0;
  line-height: normal;
`;

const RightSection = styled.div`
  display: flex;
`;

const Icon = styled.a`
  color: #fff;
  font-size: 1.5rem;
  margin: 0 0.5rem;
`;

const CenterSection = styled.div`
  display: block;
  font-size: 8px;
`;
