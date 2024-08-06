import React from 'react';
import { CiHome } from "react-icons/ci";
import { MdGridView } from "react-icons/md";
import { BsChat } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { CgFileDocument } from "react-icons/cg";

const Sidebar = () => {
    return (
        <div className='w-20 md:w-16 lg:w-12 xl:w-16 bg-blue-50 h-screen flex flex-col items-center py-4'>
            <div className='mb-4'>
                <img className='w-10 h-10' src="https://www.google.com/u/2/ac/images/logo.gif?uid=102248287900093422159&service=google_gsuite" alt="DataPlatr-logo" />
            </div>

            <div className='w-8 h-8 rounded-full bg-white hover:bg-blue-800 flex items-center justify-center hover:cursor-pointer mt-5'>
                <CiHome size={'20px'} />
            </div>

            <div className='w-8 h-8 rounded-full bg-white hover:bg-blue-800 flex items-center justify-center hover:cursor-pointer mt-5'>
                <MdGridView size={'20px'} />
            </div>

            <div className='w-8 h-8 rounded-full bg-white hover:bg-blue-800 flex items-center justify-center hover:cursor-pointer mt-5'>
                <BsChat size={'20px'} />
            </div>

            <div className='w-8 h-8 rounded-full bg-white hover:bg-blue-800 flex items-center justify-center hover:cursor-pointer mt-5'>
                <FiUser size={'20px'} />
            </div>

            <div className='w-8 h-8 rounded-full bg-white hover:bg-blue-800 flex items-center justify-center hover:cursor-pointer mt-5'>
                <CgFileDocument size={'20px'} />
            </div>
        </div>
    );
}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
export default Sidebar;
