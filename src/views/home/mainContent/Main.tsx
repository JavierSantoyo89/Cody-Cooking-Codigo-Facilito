import Carousel from "./carousel/Carousel";
import PopularRecipes from "./homeSection/PopularRecipes";

import MainWrapper from '../../../components/common/MainWrapper';
import { useGetCategoriesService } from '../../../hooks/useCategories';


const Main = () => {
    const { categories } = useGetCategoriesService();
    return (
        <MainWrapper>
            {categories.length > 0 && <Carousel categories={categories}/>}
            
            <PopularRecipes/>
        </MainWrapper>
    )
};

export default Main;