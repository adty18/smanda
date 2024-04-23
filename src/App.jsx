// App.jsx
import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import akreditasi from './assets/certificate_1.png';
import elearning from './assets/elearning.png';
import generasi from './assets/winners.png';
import './App.css';
import Navbar from './components/Navbar';
import Alpine from 'alpinejs';
import hero from './assets/hero.jpg';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-cover bg-no-repeat" style={{
        backgroundPosition: '50%',
        backgroundImage: "",
        backgroundImage: `url(${hero})`,
        height: '600px',
      }}>
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-black bg-opacity-75">
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center text-white md:px-12">
              <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl animated-fadeInUp">
                Selamat datang di <br /><span>SMA Negeri 2 Mojokerto</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

    <div className="container mx-auto px-4 pt-10 grid grid-cols-3 gap-4">
      {/* Your generated container */}
    <div className="bg-white shadow-md text-green-400 rounded-lg p-6 flex flex-col items-center justify-center">
      <img className="w-auto h-28" src={akreditasi} alt="" />
      <h2 className="text-xl font-bold mb-4">Akreditasi A</h2>
      <p className="text-gray-600 font-semibold">Terakreditasi Cukup Baik</p>
      
    </div>
    <div className="bg-white shadow-md text-green-400 rounded-lg p-6 flex flex-col items-center justify-center">
      <img className="w-auto h-28" src={elearning} alt="" />
      <h2 className="text-xl font-bold mb-4">E-Learning</h2>
      <p className="text-gray-600 font-semibold">Memiliki Fasilitas E-Learning Bagus</p>
      
    </div>
    <div className="bg-white shadow-md text-green-400 rounded-lg p-6 flex flex-col items-center justify-center">
      <img className="w-auto h-28" src={generasi} alt="" />
      <h2 className="text-xl font-bold mb-4">Generasi Unggul</h2>
      <p className="text-gray-600 font-semibold">Mencetak Generasi Unggul dan Berkarakter</p>
      
    </div>


    </div>
    </>
  );
}

export default App;



