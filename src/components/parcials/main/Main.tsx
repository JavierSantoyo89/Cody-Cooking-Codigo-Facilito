import styled from "styled-components";
import Hero from "./hero/Hero";
const Main = () => {
    return(
        <>
            <MainContainer>
                <Hero/>
            </MainContainer>
        </>
    )
}

const MainContainer = styled.main`
    width: 100%;
    height: 800px;
    border-radius: 100px;
    background-color: #fafafa;


`    


export default Main;