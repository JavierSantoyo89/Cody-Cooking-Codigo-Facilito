import { ReactNode } from 'react';
import styled from "styled-components";


const Wrapper = styled.div`
    background: white;
    border-radius: 100px;
    max-width: 1200px;
    margin: 0 auto 20px;
    padding: 0 20px;
    padding: 50px;
    width: 100%;
`


const MainWrapper = ({ children }: { children: ReactNode }) => (
    <Wrapper>
        { children }
    </Wrapper>
);

export default MainWrapper;