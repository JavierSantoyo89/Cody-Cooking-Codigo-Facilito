import styled from 'styled-components';

const ResponsiveContainer = styled.div`
    width: 824px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;

    /* Responsive styles */
    @media screen and (max-width: 768px) {
        padding: 0 10px;
    }
`;


export {
    ResponsiveContainer,
};


