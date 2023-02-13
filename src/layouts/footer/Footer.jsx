import React from 'react';
import Logo from '../../assets/Logo';
import { footerRoutes } from '../../routes/footerRoutes';

const Footer = () => {

  return (
    <div className='bg-customBlack py-20 mt-20'>
      <div className='px-4 lg:px-10 mx-auto container'>
        <div className='grid grid-cols-1 lg:grid-cols-5 text-white gap-14 lg:gap-5'>
          
          <div className='lg:col-span-3 grid grid-cols-1 md:grid-cols-4 gap-y-8'>
            <Logo color='#ffffff' />

            <div className='md:col-span-3 grid grid-cols-3'>
            <ul className=' list-none space-y-4 '>
            <li className='text-white font-bold '>Our team</li>
              {footerRoutes[0].data?.map((item) => (
                <li key={item?.id} className='text-sm font-normal text-white/80 cursor-pointer'>{item?.name}</li>
              ))}
            </ul>
            <ul className='space-y-4 list-none'>
            <li className='text-white font-bold'>More</li>
              {footerRoutes[1].data?.map((item) => (
               <li key={item?.id} className='text-sm font-normal text-white/80 cursor-pointer'>{item?.name}</li>
              ))}
            </ul>
            <ul className='space-y-4 list-none'>
            <li className='text-white font-bold'>Connect</li>
              {footerRoutes[2].data?.map((item) => (
               <li key={item?.id} className='text-sm font-normal text-white/80 cursor-pointer'>{item?.name}</li>
              ))}
            </ul>

            </div>
           
           
            
          </div>

          <div className='lg:col-span-2'>
            <h4 className='text-3xl font-bold text-center lg:text-start'>
              Subscribe to get latest updates
            </h4>

            <form className='mt-8 w-full'>
              <input
                className='p-3 rounded-l-md bg-transparent border-2 border-lightBlack w-3/5 md:w-4/5'
                type='text'
                placeholder='Your email'
              />
              <input
                className='cursor-pointer w-2/5 md:w-1/5 bg-white p-3 border-2 border-white rounded-r-md font-medium text-black'
                type='submit'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
