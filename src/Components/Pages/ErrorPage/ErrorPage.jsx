import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";
import Title from "../../Shared/Title";


const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="h-screen flex justify-center items-center font-Nunito">
                <div className="text-center">
                    <Title title={'Error'}></Title>
                    <p className="text-3xl">Page is not found</p>
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default ErrorPage;