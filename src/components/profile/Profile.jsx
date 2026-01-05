import React, { useEffect, useState } from 'react';

const defaultProfile = {
  name: 'John Doe',
  email: 'xxx@gmail.com',
  phone: '123-456-7890',
  gender: 'M'
};

const Profile = () => {
  const [profile, setProfile] = useState(defaultProfile);

  useEffect(() => {
    fetch('/api/user/profile')
      .then(response => response.json())
      .then(data => {
        setProfile(data);
        console.log('Profile data:', data);
      })
      .catch(error => {
        console.error('Error fetching profile:', error);
      });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center py-10">
      <div className="bg-white p-6 rounded-lg shadow-md w-[80%] max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">Profile</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              value={profile.name}
              readOnly
              className="w-full border border-gray-300 p-2 rounded mt-1 bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={profile.email}
              readOnly
              className="w-full border border-gray-300 p-2 rounded mt-1 bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone</label>
            <input
              type="tel"
              value={profile.phone}
              readOnly
              className="w-full border border-gray-300 p-2 rounded mt-1 bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-gray-700">Gender</label>
            <input
              type="text"
              value={profile.gender}
              readOnly
              className="w-full border border-gray-300 p-2 rounded mt-1 bg-gray-50"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;