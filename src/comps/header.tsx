import Link from 'next/link';
import Image from 'next/image';
import closeIcon from '../assets/smalclose.png';
import menuIcon from '../assets/menu.png';
import { useState } from 'react';

const Headers = () => {
    const [isClick,setIsClicked] = useState(false);

    const handleClick = ()=>{

        setIsClicked(!isClick);
    }

return(
    <div className="flex justify-between mx-5 iphone:mx-10 tablet:mx-20 py-12">

    <div className="text-2xl font-bold text-blue-500 font-Comforter">
        <h3>RaingoFall?</h3>
    </div>
 
     <div className="gap-12 font-Roboto text-base font-bold hidden tablet:flex">
         <Link href='/aboutsrgf' className="flex-1"> About</Link>
         <Link href='/contactsrgf' className="flex-1">Contact</Link>
     </div>
     <div className='flex gap-12 font-Roboto text-base font-bold tablet:hidden z-50' onClick={handleClick}>
 
        {isClick ? <Image src={closeIcon} className='animate-bounce  '/>:<Image src={menuIcon}/>}
 
 </div>
 
 <div className={isClick? 'w-screen h-full bg-black opacity-50 absolute top-0 left-0 z-40 ': 'hidden'}>
             <ul className='text-white text-center mt-20 text-xl font-Roboto animate-upward '>
                 <li className='mt-5' >
                     <Link href='/aboutsrgf' onClick={handleClick}>ABOUT</Link>
                 </li>
                 <li className='mt-5' >
                     <Link href='/contactsrgf' onClick={handleClick}>CONTACT</Link>
                 </li>
             </ul>
             </div>
 </div>

)


}

export default Headers