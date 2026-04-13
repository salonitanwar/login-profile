import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import myImage from '../assets/self.jpg';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSliding, setIsSliding] = useState(false);
  
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      alert("Not Login: Fill Your Details !");
      setUsername('');
      setPassword('');
      return;
    }

    setIsSliding(true); 
    
    setTimeout(() => {
      navigate('/dashboard');
    }, 500);
  };

  return (
    <div className="min-h-screen w-full bg-[#121212] flex items-center justify-center p-4 font-sans overflow-hidden">
      <div className="relative w-full max-w-[360px] h-[700px] bg-black rounded-[45px] overflow-hidden border-[6px] border-[#1a1a1a] shadow-2xl">
        
        
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 blur-bg-image transition-all duration-700"
          style={{ backgroundImage: `url(${myImage})` }}
        ></div>

        <div className="relative z-10 flex flex-col h-full p-8 pt-26">
          <h2 className="text-white text-xs tracking-[0.3em] font-bold mb-2 border-l-2 border-green-500 pl-3 uppercase">
            My Profile
          </h2>
          <h1 className="text-white text-5xl font-bold mb-12 italic">Login </h1>
          
          <div className="space-y-10 mt-4">
            
            <div className="border-b border-gray-700 focus-within:border-green-500 transition-all">
               <label className="text-gray-500 text-[10px] uppercase font-bold tracking-widest ml-1">Username</label>
               <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="off"
                name="new-username"
                className="w-full bg-transparent py-2 text-white outline-none" 
              />
            </div>

          
            <div className="border-b border-gray-700 focus-within:border-green-500 transition-all">
               <label className="text-gray-500 text-[10px] uppercase font-bold tracking-widest ml-1">Password</label>
               <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                className="w-full bg-transparent py-2 text-white outline-none" 
              />
            </div>
          </div>

          
          <div className="mt-16 relative">
            <div className="w-full h-14 bg-white/5 border border-white/10 rounded-xl flex items-center p-1 overflow-hidden">
              <div 
                onClick={handleLogin}
                style={{ 
                  transform: isSliding ? 'translateX(180px)' : 'translateX(0px)',
                  transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                className="w-[45%] h-full bg-green-500 rounded-lg flex items-center justify-center text-black text-[10px] font-black uppercase cursor-pointer z-20 shadow-lg shadow-green-500/40"
              >
                {isSliding ? 'Success' : 'Login Now'}
              </div>
              <span className="absolute inset-0 flex items-center justify-center text-[9px] text-gray-500 font-bold uppercase tracking-widest pointer-events-none opacity-40">
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;        Go to login
              </span>
            </div>
          </div>

          <div className="mt-auto flex justify-between text-[10px] font-bold text-gray-500 uppercase tracking-tighter pb-4">
            <span className="hover:text-green-500 cursor-pointer">Signup Now</span>
            <span className="hover:text-white cursor-pointer">Forgot Password?</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;