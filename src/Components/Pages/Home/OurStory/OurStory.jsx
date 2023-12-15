import Title from "../../../Shared/Title";
import storypic from "../../../../assets/OurStory.jpg"

const OurStory = () => {
    return (
        <div>
            <Title title={'Our Story'}></Title>
            <div className="flex flex-col md:flex-row justify-center items-center gap-3 px-3 mb-6">
                
                {/* story */}
                <div className=" w-full md:w-2/4 ">
                <h1 className="text-2xl md:text-4xl font-bold mb-3"> The Extraordinary Journey of Culina</h1>
                    <p className="text-sm md:text-lg w-4/5">Welcome to Culina, where every dish tells a story steeped in passion, dedication, and a love for culinary artistry. Our journey began with a dream to create a haven where flavors come alive and moments turn into memories.</p>
                    <p className="text-xs  md:text-sm lg:text-lg w-4/5">
                        In the heart of Dhaka, Culina was born from a shared love for exceptional food and warm hospitality. Our chefs, each a maestro in their craft, bring together a symphony of flavors inspired by both tradition and innovation.
                    </p>
                    <p className="text-xs  md:text-sm lg:text-lg  w-4/5">
                        As we evolve, our commitment remains unwavering—to provide you with a culinary journey that transcends the ordinary.
                    </p>
                    <a className="btn font-extrabold bg-highlight_color text-main  hover:bg-sub_color_1 hover:text-highlight_color border-highlight_color my-4">Know More</a>
                </div>
                {/* img */}
                <div className="w-full md:w-1/4 ">
                    <div>
                        <img className=" w-full rounded-2xl " src={storypic} alt="our story" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurStory;