import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className='flex flex-wrap items-center justify-between gap-4 py-4 mt-20 px-4 border-t border-gray-300'>
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col items-center text-center">
          <img 
            src={assets.logo} 
            alt="Logo" 
            width={100} 
            className="w-20" 
          />
           <p className="text-black text-md     sm:text-lg ">
            Generate Images with GenArt
          </p>
      </div>
    </div>
      <p className='flex-1 text-center sm:text-left  pl-4 text-sm text-black hidden sm:block'>
        Copyright © Arfan | All rights reserved.
      </p>
      <div className='flex gap-3 justify-center sm:justify-end w-full sm:w-auto'>
        <img
          src={assets.facebook_icon}
          alt="Facebook"
          width={35}
          onClick={() => handleSocialClick('https://www.facebook.com')}
          className='cursor-pointer hover:scale-110 hover:bg-blue-600 p-1 rounded-md transition-all duration-300'
        />
        <img
          src={assets.twitter_icon}
          alt="Twitter"
          width={35}
          onClick={() => handleSocialClick('https://www.twitter.com')}
          className='cursor-pointer hover:scale-110 hover:bg-blue-600 p-1 rounded-md transition-all duration-300'
        />
        <img
          src={assets.instagram_icon}
          alt="Instagram"
          width={35}
          onClick={() => handleSocialClick('https://www.instagram.com')}
          className='cursor-pointer hover:scale-110 hover:bg-blue-600 p-1 rounded-md transition-all duration-300'
        />
      </div>
      <p className='text-center text-sm text-black sm:hidden w-full mt-4'>
        Copyright © Arfan | All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
