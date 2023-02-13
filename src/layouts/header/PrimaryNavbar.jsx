import { useState } from 'react';
import Logo from '../../assets/Logo';
import ClosebarIcon from '../../assets/svg/ClosebarIcon';
import MenubarIcon from '../../assets/svg/MenubarIcon';
import MobileScreen from './MobileScreen';

import { headerRoutes } from '../../routes/headerRoutes';
import Button from '../../components/atoms/Button';






const PrimaryNavbar = () => {
    const [open, setOpen] = useState(false);
    
    

  

    return (
        <nav className="w-full z-50 bg-greenTertiary shadow-lg">
            <div className="px-4 sm:px-10 container mx-auto py-7 ">
                <div className=" relative flex justify-between items-center ">
                    <div>
                        <Logo />
                    </div>
                   
                    <div className=" flex items-center  gap-5">
                    <div className='hidden lg:flex items-center list-none gap-x-10 text-customBlack font-medium'>
                        {headerRoutes?.map((item) => 
                             <li key={item?.id} className='cursor-pointer'>{ item?.name}</li>
                         )}

                         <Button title='Donate' className='bg-customBlack text-white'/>
                    </div>

                        <div className=" flex items-center lg:hidden">
                            <button
                                type="button"
                                onClick={() => setOpen(!open)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            >
                                <span className="sr-only">Open main menu</span>
                                {open ? (
                                    <ClosebarIcon className="h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <MenubarIcon className="h-6 w-6" aria-hidden="true" />
                                )}
                            </button>
                        </div>
                    </div>
                    
                </div>
                {open && <MobileScreen setOpen={setOpen} />}
            </div>
        </nav>
    );
};

export default PrimaryNavbar;
