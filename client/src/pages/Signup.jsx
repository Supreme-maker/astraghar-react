import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserPlus, Shield, User, Lock, Mail } from 'lucide-react';
import axiosInstance from '../utils/axiosConfig';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    licenseVerified: false,
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.licenseVerified) {
      setError('Please verify your weapon license to sign up.');
      return;
    }

    try {
      // Example API call with axios
      const response = await axiosInstance.post('/auth/signup', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      alert('Signed up successfully!');
      navigate('/login');
    } catch (error) {
      console.error('Signup error:', error);
      setError(error.response?.data?.message || 'Signup failed. Please try again.');
    }
  };

  return (
    <section className="max-w-md mx-auto">
      <div className="bg-black/80 p-8 rounded-lg shadow-[0_0_20px_rgba(255,0,0,0.5)]">
        <div className="text-center mb-6">
          <UserPlus className="mx-auto mb-4 text-red-600" size={48} />
          <h2 className="text-3xl text-red-600 mb-2">Sign Up</h2>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-4">
            <label htmlFor="new-username" className="flex items-center gap-2 mb-2 text-white">
              <User size={18} />
              Username:
            </label>
            <input
              type="text"
              id="new-username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mb-4 border border-red-600 rounded-md bg-gray-800 text-white focus:outline-none focus:shadow-[0_0_10px_rgba(255,0,0,0.5)]"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="flex items-center gap-2 mb-2 text-white">
              <Mail size={18} />
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mb-4 border border-red-600 rounded-md bg-gray-800 text-white focus:outline-none focus:shadow-[0_0_10px_rgba(255,0,0,0.5)]"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="new-password" className="flex items-center gap-2 mb-2 text-white">
              <Lock size={18} />
              Password:
            </label>
            <input
              type="password"
              id="new-password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mb-4 border border-red-600 rounded-md bg-gray-800 text-white focus:outline-none focus:shadow-[0_0_10px_rgba(255,0,0,0.5)]"
            />
          </div>

          <div className="mb-6">
            <label className="flex items-center gap-2 text-white cursor-pointer">
              <input
                type="checkbox"
                id="signup-license-verify"
                name="licenseVerified"
                checked={formData.licenseVerified}
                onChange={handleChange}
                required
                className="mr-2"
              />
              <Shield size={18} />
              <span>I verify I have a valid weapon license.</span>
            </label>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-900/50 border border-red-600 rounded-md text-red-300 text-sm">
              {error}
            </div>
          )}

          <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
            <UserPlus size={20} />
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
};

export default Signup;

