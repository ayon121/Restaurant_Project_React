
import PropTypes from 'prop-types';

const Title = ({title}) => {
    return (
        <div>
            <div className='text-center font-Allura text-3xl md:text-5xl lg:text-6xl text-highlight_color font-extrabold py-3 mb-3'>
                <h1>{title}</h1>
            </div>
        </div>
    );
};

Title.propTypes = {
    title : PropTypes.string
};

export default Title;