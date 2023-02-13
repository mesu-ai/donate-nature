import React from 'react';
import Button from '../atoms/Button';
import heroBanner from '../../assets/images/hero-banner.png';

const HeroSection = () => {
  return (
    <div className='bg-greenTertiary py-10 md:py-0 min-h-[576px] flex items-center'>
      <div className='px-4 lg:px-10 container mx-auto my-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center'>
        <div className='col-span-2 flex items-start gap-x-6 max-w-2xl 2xl:max-w-3xl'>
          <div className='mt-2.5'>
            <span>
              <hr className='bg-customBlack h-[2px] w-[72px]' />
            </span>
            
          </div>

          <div>
          <h6 className='text-customBlack font-bold tracking-[2px]'>
              Donate
            </h6>
            <h3 className='text-darkBlack font-bold text-2xl lg:text-5xl leading-10 capitalize mt-[5px]'>
              Making a donation for Nature.
            </h3>
            <p className='text-lightBlack leading-[18px] mt-5'>
              When you donate, you’re supporting effective solutions to big
              environmental challenges—an investment in the future of our
              planet.
            </p>
            <div className='flex gap-3 mt-8'>
              <Button
                title='Donate now'
                className='bg-action text-snowWhite'
              />
            </div>
          </div>
        </div>

        <div>
          <img
            src={heroBanner}
            alt='hero_banner'
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
