import React from 'react';
import Button from '../atoms/Button';
import contributeBg from '../../assets/images/contributeBg.png'

const Environment = () => {

    const myStyle={
        backgroundImage: "url('../../assets/images/contributeBg.png')",
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    return (
        <div className='px-4 lg:px-10 mx-auto container'>
            <div className='relative h-[250px] md:h-auto'>
            <img className='bg-red-200 bg-opacity-20 rounded-xl h-full' src={contributeBg} alt="" />
            <div className='absolute top-1/4 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-50 '>
                <p className=' text-2xl md:text-3xl xl:text-5xl font-bold pb-8 text-center text-white w-full'>You can contribute to make the environment greener!</p>
                <div className=' text-center space-x-2 md:space-x-8'>
                    <Button title='Join a a Volunteer' className='bg-action text-white'></Button>
                    <Button title='Donate' className='bg-white'></Button>
                </div>
            </div>
            <div className='absolute  inset-0  bg-customBlack bg-opacity-50 rounded-xl'></div>

            </div>
            
        </div>
    );
};

export default Environment;