import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react';

const Profile = async () => {
    const {getUser} = getKindeServerSession();
        const user = await getUser();
        // console.log(user)

        if (!user) {
          redirect('/api/auth/login');
        }


    return (
      
      <div className='py-10'>
        <p className="text-2xl my-6 text-center  text-secondary font-semibold">
          Welcome to your profile!
        </p>
        <div className="flex justify-center  items-center">
          
          <div className="bg-white border border-gray-200  shadow-lg rounded-lg overflow-hidden w-full max-w-sm">
            {/* Profile Image */}
            <div className="flex justify-center  p-6">
              <img
                src={user.picture}
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-white"
              />
            </div>
    
            {/* Profile Info */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 text-center">
                {user.given_name} {user.family_name}
              </h2>
              <p className="text-sm mt-4 text-gray-500 text-center">{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Profile;

