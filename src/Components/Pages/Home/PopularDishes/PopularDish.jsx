
// import PropTypes from 'prop-types';

const PopularDish = () => {
    return (
        <div className="card w-4/5 md:w-4/5 lg:w-4/5  bg-base-100 shadow-xl image-full">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Pizza</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        </div>
    );
};

PopularDish.propTypes = {

};

export default PopularDish;