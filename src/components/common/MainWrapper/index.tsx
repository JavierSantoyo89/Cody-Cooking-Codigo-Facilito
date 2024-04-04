import { ReactNode } from 'react';
import styled from "styled-components";


const Wrapper = styled.div`
    background: white;
    border-radius: 100px;
    max-width: 960px;
    margin: 0 auto;
    padding: 50px;
    width: 100%;

    @media (max-width: 960px) {
        border-radius: 50px;
        margin: 0 5%;
        padding: 20px;
        width: 90%;
    }
`


const MainWrapper = ({ children }: { children: ReactNode }) => (
    <Wrapper>
        { children }
    </Wrapper>
);

export default MainWrapper;