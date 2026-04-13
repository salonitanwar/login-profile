import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


import { FiInstagram } from 'react-icons/fi';
import {  FaSnapchatGhost,FaLinkedin } from 'react-icons/fa';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { IoChevronBackOutline } from 'react-icons/io5';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0f0e0e] flex items-center justify-center p-4 font-sans">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-full max-w-[400px] h-[750px] bg-[#D6C4B8] rounded-[45px] shadow-2xl overflow-hidden border-[2px] border-white/10"
      >
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="src/assets/Back.jpg" 
            alt="Profile" 
            className="w-full h-full object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
        </div>

        <div className="relative z-20 flex justify-between items-center p-8 text-white/90">
          <IoChevronBackOutline 
            className="text-2xl cursor-pointer hover:scale-110 transition-transform" 
            onClick={() => navigate('/')} 
          />
          <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Profile</span>
          <p className="text-2xl cursor-pointer" />
        </div>

        <div className="absolute left-6 top-[40%] z-20 flex flex-col gap-10">
          <div className="flex flex-col items-center">
            <span className="text-[8px] font-bold text-white/60 mb-1 italic"></span>
            <div className="w-[1px] h-10 bg-white/30"></div>
          </div>

          <a 
            href="https://instagram.com/yuvani_tan86" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl text-white/80 hover:text-pink-400 hover:scale-120 transition-all cursor-pointer"
          >
            <FiInstagram />
          </a>

          <a 
            href="https://www.snapchat.com/add/salonitanwa24" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl text-white/80 hover:text-yellow-300 hover:scale-120 transition-all cursor-pointer"
          >
            <FaSnapchatGhost />
          </a>

        
          <a href="https://linkedin.com/in/saloni-tanwar-25a545329" target="_blank" rel="noopener noreferrer" 
             className="text-2xl text-white/80 hover:text-blue-400 hover:scale-120 transition-all cursor-pointer">
            <FaLinkedin />
          </a>
            
        </div>

        <div className="absolute bottom-12 left-0 w-full text-center z-20 px-10">
          <div className="mb-6">
            <h1 className="text-white text-5xl font-light tracking-tight mb-2">
            Saloni <br /> 
              <span className="font-semibold text-6xl ">&nbsp;Tanwar</span>
            </h1>
            <div className="w-16 h-[1px] bg-green-100 mx-auto mb-4"></div>
            <p className="text-white/80 text-[11px] uppercase font-bold tracking-[0.4em]">
              Software Engineer
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-white/50 text-[10px] font-bold uppercase tracking-[0.2em]">
              India, IN
            </p>
            <p className="text-white/70 text-xs leading-relaxed italic px-2">
              "Building digital experiences with code and creativity."
            </p>
          </div>
        </div>

      
      </motion.div>
    </div>
  );
};

export default Dashboard;

