import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext';
import { motion } from "framer-motion";
import axios from "axios";
import {toast } from "react-toastify";


const Login = () =>
{
  const [state, setState] = useState('Login');
  const { setShowLogin , backendUrl, setToken, setUser} = useContext(AppContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const onSubmitHandler = async (e) =>
  {
    e.preventDefault();

    try
    {
      if (state === 'Login')
      {
        const { data } = await axios.post(backendUrl + '/api/user/login', { email, password });
        
        if (data.success)
        {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem('token', data.token);
          setShowLogin(false);
        }
        else
        {
          toast.error(data.message);
        }
      }
      else
      {
        const { data } = await axios.post(backendUrl + '/api/user/register', {name, email, password });
        
        if (data.success)
        {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem('token', data.token);
          setShowLogin(false);
        }
        else
        {
          toast.error(data.message);
        }
      }
    }
    catch (error)
    {
      toast.error(error.message);
    }
  }





  useEffect(() =>
  {
    document.body.style.overflow = 'hidden';
    return () =>
    {
      document.body.style.overflow = 'unset';
    }
      
  }, [])
  

  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
      <motion.form
        
        onSubmit={onSubmitHandler}

        className='relative bg-white p-10 rounded-xl text-slate-500'
      initial={{ opacity: 0.2, y: 50 }}
      transiition={{ duration: 0.3 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{once: true}}
      >
        <div className='flex flex-col justify-center items-center'>
        <img src={assets.logo} alt="" width={60}/>
          <h1 className='text-center text-2xl text-black font-medium'>{state}</h1>
          {state === 'Login' ?
            <p className='text-center text-md text-black-100 font-medium my-2'>Welcome Back! Please Log in to continue</p>
            :
            <p className='text-center text-md text-black-100 font-medium my-2'>Create an Account to Enjoy GenArt</p>}
        </div>
        {state !== 'Login' &&<div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
          <img src={assets.profile_icon} alt="" width={20}/>
          <input onChange={e => setName(e.target.value)} value={name} type="text" placeholder='Full Name' required
          className='outline-none text-sm'/>
        </div>}

        <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
          <img src={assets.email_icon} alt="" width={15}/>
          <input onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder='Email' required
          className='outline-none text-sm'/>
        </div>

        <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4 mb-4'>
          <img src={assets.lock_icon} alt="" width={15}/>
          <input onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder='Password' required
          className='outline-none text-sm'/>
        </div>
        {state === 'Login' &&<p className='text-sm text-blue-600 my-4 cursor-pointer text-center'>Forgot Password?</p>}

        <button
          className='bg-blue-600 w-full text-white py-2 rounded-full'>{state === 'Login' ? 'Login' : 'Create Account' }</button>

        {state === 'Login' ? <p className='mt-4 text-center'>Don't have an account? <span className='text-blue-600 cursor-pointer'
          onClick={() => setState('Sign Up')}>Sign Up</span></p>
          :
          <p className='mt-4 text-center'>Already have an account? <span className='text-blue-600 cursor-pointer'
          onClick={() => setState('Login')}>Login</span></p>}

        <img
          onClick={()=>setShowLogin(false)}
          src={assets.cross_icon} alt=""
          className='absolute top-5 right-5 cursor-pointer' />
        
      </motion.form>
    </div>
  )
}

export default Login