import Carousel from "./carousel/Carousel";
import PopularRecipes from "./homeSection/PopularRecipes";

import MainWrapper from '../../../components/common/MainWrapper';


const Main = () => (
    <MainWrapper>
        <Carousel images={images} autoPlay={true}/>
        <PopularRecipes/>
    </MainWrapper>
);


const images = ["angular.jpeg", "jquery.jpeg", "node-chat.jpeg", "php-login.jpeg", "redux_angular.jpg"];

export default Main;