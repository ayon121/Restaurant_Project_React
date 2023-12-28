import Title from "../../../Shared/Title";
import PopularDish from "./PopularDish";


const PopularDishes = () => {
    return (
        <div>
            <Title title={'Popular Dishes'}></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-4 ">
                <PopularDish></PopularDish>
                <PopularDish></PopularDish>
                <PopularDish></PopularDish>
            </div>
            
        </div>
    );
};

export default PopularDishes;