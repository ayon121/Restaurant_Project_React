
import PropTypes from 'prop-types';

import popular from '../../../../assets/popularbg.jpg'

const PopularDish = ({title}) => {
    return (
        <div className="card w-4/5 md:w-4/5 lg:w-4/5  bg-base-100 shadow-xl image-full border-2 border-highlight_color font-Nunito">
            <figure><img src={popular} alt="popular img" /></figure>
            <div className="card-body">
                <h2 className="text-2xl md:text-4xl text-center ">{title}</h2>
                <hr />
                <p className='text-center'>Savor the magic of quick bites that dance on your taste buds, delivering a culinary experience thats as swift as it is sensational. Elevate your cravings with our delectable offerings, where every bite is a celebration of taste, speed, and pure delight.</p>
            </div>
        </div>
    );
};

PopularDish.propTypes = {
    title : PropTypes.string
};

export default PopularDish;