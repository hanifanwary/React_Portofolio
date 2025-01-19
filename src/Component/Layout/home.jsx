import ParticleJs from '../Element/particlejs/particle';
import TypingAnimation from '../Element/typing animation';
import React from 'react';
import myPicture from '../../assets/HANIF ROMDHON DSC07359 copy 1.jpg'


const HomeLayout = () => {
  return (
    <div className="h-screen overflow-hidden relative">
      <ParticleJs className="absolute top-0 left-0 w-full h-full pointer-events-none -z-50" />
      <section id="home" className="min-h-screen text-white  flex items-center justify-center relative z-10">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
          <img src={myPicture} alt="IMAGE HANIF ROMDHON ANWARY" loading='lazy' className="w-48 h-48 rounded-full mx-auto object-cover mb-4 shadow-md" />
          <p className="text-lg md:text-xl mb-6">
            I'm Hanif Romdhon Anwary, a{' '}
            <TypingAnimation />
          </p>
          <a
            href="#projects"
            className="px-6 py-3 bg-[#9C92A3] text-black rounded-md hover:bg-[#d4bde4] hover:text-white transition duration-300 ease-in-out"
          >
            View Projects
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomeLayout;