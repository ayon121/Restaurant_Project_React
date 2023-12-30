import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";
import Banner from "./Banner/Banner";
import OurStory from "./OurStory/OurStory";
import PopularDishes from "./PopularDishes/PopularDishes";

const Home = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Banner></Banner>
            <OurStory></OurStory>
            <PopularDishes></PopularDishes>
            <Footer></Footer>
        </div>
    );
};

export default Home;