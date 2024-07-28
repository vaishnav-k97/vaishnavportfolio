import React from 'react';
import vaishnav from '../assets/profile-pictures/vaishnav.png';
import { Download } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20'>
      <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center'>
        "Hi" I'm Vaishnav K
        {" "}<span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>  - frontend developer</span>
      </h1>
      <p className='mt-10 text-lg text-neutral-400 max-w-4xl text-center px-3'>
      IT professional with 2+ years of experience in software development, analysis, design, implementation, and maintenance of
application software in a Web-based environment. Having experience primarily with frontend technologies like ReactJS, and Redux.
Well-experienced in Scrum and Agile methodologies.
      </p>
      <div className='flex justify-center space-x-4 p-5'>
        <a 
          href='/Vaishnav_K.pdf' 
          download 
          className='py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md flex items-center space-x-2'
        >
          <span>Resume</span>
          <Download />
        </a>
      </div>
      <div className='flex justify-center mt-10 mx-7'>
        <img className='w-[300px] h-[324px]' src={vaishnav} alt="profile" />
      </div>
    </div>
  );
}
