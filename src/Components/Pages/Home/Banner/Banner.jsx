import "../Banner/Banner.css"
const Banner = () => {
    return (
        <div className='featuredimage bg-fixed mb-5 h-screen font-Nunito'>
            <div className="carousel w-full h-full bg-main bg-opacity-40">
                <div id="slide1" className="carousel-item relative w-full ">
                    {/* img */}
                    <div className="flex justify-center items-center w-3/4 text-sub_color_1 max-w-5xl mx-auto">
                        <div className="">
                            <h1 className="text-3xl md:text-6xl py-2"> Where Every Bite Tells a Delicious Story! Join us at 
                            <a className=" text-3xl md:text-6xl text-sub_color_1 font-Allura"><span className="text-highlight_color"> C</span>ulina</a>
                            </h1>
                            <p className="py-2">Indulge in a culinary narrative like no other at Calina, where every bite is a chapter of delicious tales waiting to be savored. Join us on a gastronomic journey that transcends flavors and creates unforgettable moments. Your table is set, and the story begins with each delectable bite. Welcome to Calina, where every taste tells a delicious story!</p>
                            <button className="btn btn-xs sm:btn-sm md:btn-md font-bold">JOIN</button>
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
                            <h1 className="text-3xl md:text-6xl">Flavors that Speak Louder than Words: Elevate your dining experience at 
                            <a className=" text-3xl md:text-6xl text-sub_color_1 font-Allura"><span className="text-highlight_color"> C</span>ulina</a>
                            </h1>
                            <p className="py-2">
                            Embark on a flavor-filled journey at Calina, where each bite speaks louder than words. Elevate your dining experience with our meticulously crafted dishes a symphony of tastes that promises to captivate your palate. Welcome to Calina, where flavors take the spotlight!
                            </p>
                            <div className="flex items-center gap-2">
                            <p className="py-3 px-3 bg-sub_color_1 text-main font-bold w-44 text-lg rounded-2xl">Coupon <span className="text-highlight_color">AYON12</span></p>
                            <p><span className="text-xl"> ($20 Offer)</span> </p>
                            </div>
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
                            <h1 className="text-3xl md:text-6xl py-2"> Tantalize Your Taste Buds: Immerse yourself in the exquisite symphony of flavors at 
                            <a className=" text-3xl md:text-6xl text-sub_color_1 font-Allura"><span className="text-highlight_color"> C</span>ulina</a>
                            </h1>

                            <p className="py-2">Dive into a world of taste bud enchantment at Calina. Immerse yourself in an exquisite symphony of flavors, where each dish is a masterpiece. Elevate your dining experience and let your taste buds dance with delight. Calina invites you to savor the extraordinary!</p>
                            <div className="">
                                <button className="btn btn-xs sm:btn-sm md:btn-md font-bold py-2">Best Dishes</button>
                            </div>
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
                            <h1 className="text-3xl md:text-6xl py-2"> Where Passion Meets Palate. Join us for a feast of flavors that will leave an everlasting impression.</h1>
                            <p className="py-2">At Calina, it is where passion meets palate. Indulge in a feast of flavors that promises to leave an everlasting impression. Join us for an extraordinary culinary journey where every bite is a celebration of taste and a testament to our commitment to excellence. Welcome to a dining experience that lingers in your memory , welcome to Calina.</p>
                            <button className="btn btn-xs sm:btn-sm md:btn-md font-bold py-2">JOIN</button>

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