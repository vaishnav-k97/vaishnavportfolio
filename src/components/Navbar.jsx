import { useState } from 'react';
import { navItems } from '../constants';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
      <div className='container px-4 mx-auto relative text-sm'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center flex-shrink-0'>
            <span className='text-xl tracking-tight'>Vaishnav K</span>
          </div>
          <ul className='hidden lg:flex ml-14 space-x-4'>
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <img src={item.image} alt="nav icon" className={`h-6 w-6 inline-block mr-2 ${item.className}`} />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className='justify-center space-x-4 items-center hidden lg:flex'>
            <a href='#' className='py-2 rounded-md'>7012371625</a>
            <a href='#' className='bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text py-2 px-3 rounded-md'>vaishnavprami19@gmail.com</a>
          </div>
          <div className='lg:hidden md:flex flex-col justify-end'>
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className='fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className='py-4'>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <img src={item.image} alt="nav icon" className={`h-6 w-6 inline-block mr-2 ${item.className}`} />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className='flex space-x-4'>
            <a href='#' className='py-2 rounded-md'>7012371625</a>
            <a href='#' className='bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text py-2 px-3 rounded-md'>vaishnavprami19@gmail.com</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
