import styled from "styled-components";

const Hero = () => {
    return(
        <>
            <SliderContainer>
                <HeroText>Hola mundo </HeroText> 
            </SliderContainer>
        </>
    )
}

const SliderContainer = styled.div`
    width: 100%;
`    
const HeroText = styled.p`
    font-size: 40px;
    color: #2b2b2b;
    text-align: center;
`    



export default Hero;