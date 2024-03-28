import styled from "styled-components";
import Carousel from "./carousel/Carousel";
import PopularRecipes from "./homeSection/PopularRecipes";

const Main = () => (
    <MainContainer>
        <Carousel images={images} autoPlay={true}/>
        <PopularRecipes/>
    </MainContainer>
);

const MainContainer = styled.div`
    background: #fafafa;
    border-radius: 100px;
    // max-width: 1200px;
    margin: 0 auto 20px;
    padding: 0 20px;
    padding: 50px;
    width: 100%;
`

const images = ["angular.jpeg", "jquery.jpeg", "node-chat.jpeg", "php-login.jpeg", "redux_angular.jpg"];

export default Main;