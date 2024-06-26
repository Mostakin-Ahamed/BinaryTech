"use client"
import Image from "next/image";

import Link from 'next/link';
import logo from '../../assets/Logo.png';
import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';



const Navbar = () => {
  const { user , logOut} = useContext(AuthContext)
  
  

  const handleSignOut = () =>{
    logOut()
  }

  
  return (
    <div className=" bg-blue-700" >
      <div className="navbar w-10/12 mx-auto">
        <div className="flex-auto w-2/3 mx-auto ">
          <div className='w-1/2 mx-auto  flex justify-start items-center'>
            <Image src={logo} alt='logo.png' height={100} width={100} />
            <Link href={'/'} className="btn btn-ghost text-white text-xl"> BinaryTech</Link>
          </div>
          <div className="w-1/2 flex form-control">
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            </label>
          </div>

        </div>

        <div className="w-1/3 mx-auto flex justify-evenly mr-5  gap-2">
          <div className='flex gap-5'>
            <Link className="mx-3 text-white cursor-pointer" href='/'>Home</Link>
            {
              user? 
                user?.email ==='admin@gmail.com' ? <> <Link className="mx-3 text-white cursor-pointer" href='/addProduct'>Add product</Link> </> :<Link className="mx-3 text-white cursor-pointer" href='/myCart/myCart'>My Cart</Link> : <></>
              
            }
            
            {
              user? <h3 className="text-bold text-white font-2xl mr-5">{user.displayName}</h3>:
              <Link className="mx-3 text-white cursor-pointer ml-10" href='/login'>Login</Link>
            }
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {
                  user? <Image alt="Tailwind CSS Navbar component" height={130} width={130} src={user.photoURL} /> :
                  <Image alt="Tailwind CSS Navbar component" height={100} width={100} src={logo} />
                }
              </div>
            </div>
            <ul tabIndex={0} className="text-black mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              {
                user?.email === 'admin@gmail.com' ? <li><Link className="text-left" href='/dashboard/dashboard' > Dashboard</Link></li>: <> </> 
              }
              
              {
                user? <li><a onClick={handleSignOut}>Logout</a></li>: <></>
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;