

const Footer = () => {
    return (
        <div>
            <footer className="h-auto bg-main font-Nunito">
                <div className="absolute   w-full leading-none overflow-hidden h-auto ">

                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="relative block fill-base-100 mb-5"></path>
                    </svg>
                </div>
                <div className="max-w-6xl mx-auto px-4 pt-9">
                        {/* logo */}
                        <div className="mt-8">
                            <h1 className=" text-5xl md:text-7xl text-sub_color_1 font-Allura"><span className="text-highlight_color">C</span>ulina</h1>
                            <p className="text-xl text-sub_color_1">Best Food of your choice</p>
                        </div>
                        {/* social links */}
                        <div>

                        </div>
                    </div>

            </footer>

        </div>
    );
};

export default Footer;