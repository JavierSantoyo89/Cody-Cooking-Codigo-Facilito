import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import { ResponsiveContainer } from "../../common/layout"

export const Footer = () => {
  return (
    <ResponsiveContainer>
      <FooterContainer>
        <LeftSection>
          <Logo src="src/assets/imgs/cody-image.jpg" alt="Logo" />
          <TextContainer>
            <Text>Cody</Text>
            <Text>Cooking</Text>
          </TextContainer>
        </LeftSection>
        <CenterSection>Copyright 2024 Cody Cooking</CenterSection>
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
    </ResponsiveContainer>
  );
};

const FooterContainer = styled.footer`
  color: #fff;
  padding-bottom: 30px;
  margin: 50px 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 620px) {
    gap: 20px;
    flex-direction: column;
  }
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
