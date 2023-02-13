import React from 'react';
import Button from '../atoms/Button';


const Contribute = () => {

    return (
        <div className='px-4 lg:px-10 py-[96px] container mx-auto'>
            <div className=' grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-20'>
                <div className=''>
                    <p className=' text-2xl md:text-3xl xl:text-5xl font-bold '>How you can contribute to protect Earth</p>
                    <p className='pt-7 text-[#525560]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                </div>
                <div className=''>
                    <div>
                        <Button title='Overview' className='border-b-2 border-action'></Button>
                        <Button title='Impact'></Button>
                        <Button title='What You Get'></Button>
                    </div>
                    <p className='pt-6 text-[#525560]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. </p>
                <p className='pt-6 text-[#525560]'>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                </div>
            </div>
            <hr className='my-10'/>
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-10'>
                <p className='text-2xl md:text-3xl xl:text-5xl font-bold '>How we use your donation</p>
                <p className='px-10 text-[#525560]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.  Nunc ut sem vitae risus tristique posuere.</p>
                <p className='px-10 text-[#525560]'>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.</p>
            </div>
        </div>
    );
};

export default Contribute;