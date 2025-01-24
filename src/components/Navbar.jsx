import { getKindeServerSession, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/server';
import Image from 'next/image';
import Link from 'next/link';

import React from 'react';

const Navbar = async () => {
    const {getUser} = getKindeServerSession();
    const user = await getUser();
    // console.log(user)

    const menuNav = <>
       <li><Link href={'/'} className='text-secondary text-base'>Home</Link></li>
       <li><Link href={'/profile'} className='text-secondary text-base'> Profile</Link></li> 
      
     </>

    return (
     <section className='bg-white shadow-xl'>
           <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {menuNav}
            </ul>
          </div>
        <Image src="/blog.png" width={150} height={100} alt='blog'/> 
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu navliks menu-horizontal px-1 gap-4">
            {menuNav}
          </ul>
        </div>
        <div className="navbar-end gap-4">
         {
            user ? <>
              <LogoutLink className='px-3 py-2 font-semibold rounded-md bg-blue-500 text-white' href='/api/auth/logout'>
            Logout
            </LogoutLink>
            </> : <>
                <Link className='px-3 py-2 font-semibold rounded-md bg-blue-500 text-white' href="/api/auth/login">
            Login
            </Link>
            </>         
            }
        </div>
      </div>
     </section>
    );
};

export default Navbar;