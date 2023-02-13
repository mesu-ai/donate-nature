
import Button from "../../components/atoms/Button";
import { headerRoutes } from "../../routes/headerRoutes";



const MobileScreen = () => {

    return(
        <div className="relative">
        <div
            className='py-10 block lg:hidden absolute  top-4 left-0 right-0 bottom-0  bg-greenTertiary  z-50 rounded-xl h-screen'
        >
        
                <ul className="items-start gap-y-3 flex flex-col px-10 space-y-2">
                        {headerRoutes?.map((item) => 
                             <li key={item?.id} className="text-customBlack cursor-pointer">{item?.name}</li>
                         )}

                        <Button title='Donate' className='bg-customBlack text-white'/>
                    
                </ul>
              

                
            
        </div>
    </div>

    );
    
                };

export default MobileScreen;
