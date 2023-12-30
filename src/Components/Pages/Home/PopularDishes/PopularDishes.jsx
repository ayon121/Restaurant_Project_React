import Title from "../../../Shared/Title";
import PopularDish from "./PopularDish";
import Marquee from "react-fast-marquee";

const PopularDishes = () => {
    return (
        <div>
            <Title title={'Popular Dishes'}></Title>
            <Marquee autoFill="true" >
                <div className="grid grid-cols-3  gap-1 px-2 max-w-7xl mx-auto mb-5">

                    <PopularDish></PopularDish>
                    <PopularDish></PopularDish>
                    <PopularDish></PopularDish>

                </div>
            </Marquee>

        </div>
    );
};

export default PopularDishes;