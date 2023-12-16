import Navbar from "../../Shared/Navbar";
import Banner from "./Banner/Banner";
import OurStory from "./OurStory/OurStory";
import PopularDishes from "./PopularDishes/PopularDishes";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <OurStory></OurStory>
            <PopularDishes></PopularDishes>
        </div>
    );
};

export default Home;