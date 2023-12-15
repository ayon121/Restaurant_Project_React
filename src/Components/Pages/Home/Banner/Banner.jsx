import "../Banner/Banner.css"
const Banner = () => {
    return (
        <div className='featuredimage bg-fixed mb-5 h-screen font-Nunito'>
            <div className="carousel w-full h-full bg-main bg-opacity-40">
                <div id="slide1" className="carousel-item relative w-full ">
                    {/* img */}
                    <div className="flex justify-center items-center w-3/4 text-sub_color_1 max-w-5xl mx-auto">
                        <div>
                            <h1 className="text-3xl md:text-6xl"> Where Every Bite Tells a Delicious Story! Join us at Calina</h1>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    {/* img */}
                    <div className="flex justify-center items-center w-3/4 text-sub_color_1 max-w-5xl mx-auto">
                        <div>
                            <h1 className="text-3xl md:text-6xl"> Where Every Bite Tells a Delicious Story! Join us at Calina</h1>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    {/* img */}
                    <div className="flex justify-center items-center w-3/4 text-sub_color_1 max-w-5xl mx-auto">
                        <div>
                            <h1 className="text-3xl md:text-6xl"> Where Every Bite Tells a Delicious Story! Join us at Calina</h1>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    {/* img */}
                    <div className="flex justify-center items-center w-3/4 text-sub_color_1 max-w-5xl mx-auto">
                        <div>
                            <h1 className="text-3xl md:text-6xl"> Where Every Bite Tells a Delicious Story! Join us at Calina</h1>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;