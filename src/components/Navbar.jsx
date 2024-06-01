import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from '../assets/Logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='fixed top-0 left-0 w-full flex justify-between items-center h-24 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 text-white bg-black z-50'>
      <img src={Logo} alt='Dendritic Learning' className='aspect-auto w-48'/>
      <ul className='hidden md:flex'>
        <li className='p-4 hover:text-gray-400'>Home</li>
        <li className='p-4 hover:text-gray-400'>About</li>
        <li className='p-4 hover:text-gray-400'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed top-0 left-0 w-full h-[60%] border-b border-b-gray-900 bg-black ease-in-out duration-500' : 'ease-in-out duration-500 fixed top-[-100%] left-0'}>
        <div className='flex justify-between items-center p-4'>
          <img src={Logo} alt='Dendritic Learning' className='aspect-auto w-48' />
          <AiOutlineClose size={20} onClick={handleNav} className='text-white cursor-pointer' />
        </div>
        <li className='p-4 border-b border-gray-600 hover:text-gray-400'>Home</li>
        <li className='p-4 border-b border-gray-600 hover:text-gray-400'>About</li>
        <li className='p-4 hover:text-gray-400'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
