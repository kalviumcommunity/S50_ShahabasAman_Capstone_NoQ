import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Cookies from "js-cookie";
import "../App.css";
import { imDB } from "./firebase/firebase";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useLocation } from 'react-router-dom';

function SignUp() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const isUpdatingProfileQueryParam = query.get('isUpdatingProfile') === 'true';
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [error, setError] = useState(null);
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(isUpdatingProfileQueryParam);
  
  // Get username from URL or fallback to existingUsername
  const usernameFromURL = query.get('username');
  const [username, setUsername] = useState(usernameFromURL || ''); // Set initial state to empty or URL username

  const GoogleLogin = () => {
    window.location.href = "http://localhost:2024/auth/google";
  };

  const onSubmit = (data) => {
    // If username is provided in the form, update the username state
    if (data.username) {
      setUsername(data.username);
    }

    axios.post('http://localhost:2024/service', data)
      .then(response => {
        const token = response.data.token;
        Cookies.set('token', token, { expires: 7 });
        setIsUpdatingProfile(true);
      })
      .catch(error => {
        setError('Error signing up. Please try again.');
      });
  };

  const handleProfileUpdate = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('bio', data.bio);
    formData.append('location', data.location);
    formData.append('category', data.category);
    formData.append('website', data.website);
    formData.append('zip', data.zip);

    const imgS = ref(imDB, `images${v4()}`);
    const uploadDataofAvatar = await uploadBytes(imgS, data.avatar[0]);
    const imageUrlofAvatar = await getDownloadURL(uploadDataofAvatar.ref);

    if (data.avatar[0]) formData.append('avatar', imageUrlofAvatar);

    // Use the current username from state
    axios.put(`http://localhost:2024/profile/username/${username}`, formData)
      .then(response => {
        window.location.href = `/profile/${username}`;
      })
      .catch(error => {
        setError('Error updating profile. Please try again.');
      });
  };

  return (
    <>
      <div className="flex justify-center align-middle bg-violet-950 pt-2 ">
        <a href="/" className="logo text-white">NoQ</a>
      </div>
      <div className="bg-gray-100 min-h-screen flex justify-center">
        <div className="flex flex-col items-center py-10 w-full max-w-xl">
          <h2 className="text-3xl font-bold mt-8 mb-4">Welcome!!</h2>
          <p className="text-gray-600 text-lg mb-6 text-center">
            Minimize wait times, maximize efficiency. Join us on this journey.
          </p>
          {!isUpdatingProfile && (
            <form onSubmit={handleSubmit(onSubmit)} className="w-full bg-violet-950 text-gray-50 rounded-2xl px-8 py-6 shadow-lg">
              <div className="flex justify-center mb-6">
                <button
                  type="button"
                  className="login-with-google-btn bg-white text-gray-800 font-semibold py-2 px-4 rounded-full flex items-center justify-center space-x-2 hover:shadow-lg focus:outline-none"
                  onClick={GoogleLogin}
                >
                  <span>Sign Up with Google</span>
                  <img
                    src="https://w7.pngwing.com/pngs/344/344/png-transparent-google-logo-google-logo-g-suite-google-text-logo-symbol.png"
                    alt="Google logo"
                    className="w-5 h-5"
                  />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label htmlFor="username" className="block text-yellow-200">Username</label>
                  <input
                    {...register("username", { required: true })}
                    className="w-full p-2 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    type="text"
                    value={username} // Set the value to the username state
                    onChange={(e) => setUsername(e.target.value)} // Update state on change
                  />
                  {errors.username && <p className="text-red-500">Username is required</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-yellow-200">Email</label>
                  <input
                    {...register("email", { required: true })}
                    className="w-full p-2 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    type="email"
                  />
                  {errors.email && <p className="text-red-500">Email is required</p>}
                </div>
                <div>
                  <label htmlFor="password" className="block text-yellow-200">Password</label>
                  <input
                    {...register("password", { required: true })}
                    className="w-full p-2 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    type="password"
                  />
                  {errors.password && <p className="text-red-500">Password is required</p>}
                </div>
              </div>
              <div className="flex justify-center mt-6">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full">
                  Sign Up
                </button>
              </div>
              {error && <div className="text-center mt-4 text-red-600">{error}</div>}
              <div className="text-center mt-6 text-gray-300">
                <p>Already have an account? <a href="/sign-in" className="text-yellow-300 hover:underline">Sign In</a></p>
              </div>
            </form>
          )}

          {isUpdatingProfile && (
            <form onSubmit={handleSubmit(handleProfileUpdate)} id="updateForm" className="mt-8 w-full bg-violet-950 text-gray-50 rounded-2xl px-8 py-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Update Profile Details</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="username" className="block text-yellow-200">Username</label>
                  <input
                    {...register("username", { required: true })}
                    className="w-full p-2 rounded-full text-black focus:outline-none focus:ring-2"
                    type="text"
                    value={username} // Set the value to the username state
                    readOnly // Keep it read-only if you don't want it to be editable
                  />
                  {errors.username && <p className="text-red-500">Username is required</p>}
                </div>
                <div>
                  <label htmlFor="name" className="block text-yellow-200">Name</label>
                  <input
                    {...register("name")}
                    className="w-full p-2 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    type="text"
                  />
                </div>
                <div>
                  <label htmlFor="bio" className="block text-yellow-200">Bio</label>
                  <textarea
                    {...register("bio")}
                    className="w-full p-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    rows="3"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-yellow-200">Location</label>
                  <input
                    {...register("location")}
                    className="w-full p-2 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    type="text"
                  />
                </div>
                <div>
                  <label htmlFor="category" className="block text-yellow-200">Category</label>
                  <input
                    {...register("category")}
                    className="w-full p-2 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    type="text"
                  />
                </div>
                <div>
                  <label htmlFor="website" className="block text-yellow-200">Website</label>
                  <input
                    {...register("website")}
                    className="w-full p-2 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    type="text"
                  />
                </div>
                <div>
                  <label htmlFor="zip" className="block text-yellow-200">Zip Code</label>
                  <input
                    {...register("zip")}
                    className="w-full p-2 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    type="text"
                  />
                </div>
                <div>
                  <label htmlFor="avatar" className="block text-yellow-200">Profile Picture</label>
                  <input
                    {...register("avatar")}
                    className="w-full p-2 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    type="file"
                  />
                </div>
              </div>
              <div className="flex justify-center mt-6">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full">
                  Submit
                </button>
              </div>
              {error && <div className="text-center mt-4 text-red-600">{error}</div>}
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default SignUp;
