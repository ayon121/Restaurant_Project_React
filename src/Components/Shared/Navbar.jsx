import { NavLink } from "react-router-dom";
import { Spin as Hamburger } from 'hamburger-react'
import { useState } from "react";


const Navbar = () => {
    // hamburger
    const [isOpen, setOpen] = useState(false)
    const navlinks = <>
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-sm font-bold text-highlight_color' : 'text-sm bg-transparent text-[#f8f5f5]'}>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'text-sm  font-bold text-highlight_color' : 'text-sm  bg-transparent text-[#f8f5f5]'} to="/menu" >Menu</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'text-sm  font-bold text-highlight_color' : 'text-sm  bg-transparent text-[#f8f5f5]'} to="/contact" >Contact</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'text-sm  font-bold text-highlight_color' : 'text-sm  bg-transparent text-[#f8f5f5]'} to="/about" >About</NavLink></li>

    </>
    return (
        <div className=" bg-main font-Nunito">
            <div className="navbar max-w-6xl mx-auto px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-highlight_color">
                            <Hamburger size={20} toggled={isOpen} toggle={setOpen} direction="left" duration={0.8} />
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}

                        </div>
                        {
                            isOpen &&  <ul tabIndex={0} className="menu menu-sm dropdown-content dropdown-left mt-3 z-[1] p-2 shadow bg-main text-xl rounded-box w-52">
                            {navlinks}
                        </ul>
                        }
                    </div>
                    <a className=" text-3xl md:text-5xl text-sub_color_1 font-Allura"><span className="text-highlight_color">C</span>ulina</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn font-extrabold bg-sub_color_1 text-main  hover:bg-highlight_color hover:text-main border-sub_color_1">Book A Table</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;