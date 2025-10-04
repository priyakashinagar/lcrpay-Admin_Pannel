import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormData] = useState({
    phonenum: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://api.lcrpay.com/admin/admin_login', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phonenum: formData.phonenum,
          password: formData.password
        })
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful
        console.log('Login successful:', data);
        
        // Store user authentication data in the format expected by auth.js
        localStorage.setItem('userAuth', JSON.stringify({
          phonenum: formData.phonenum,
          isAuthenticated: true,
          loginTime: new Date().toISOString(),
          userData: data
        }));
        
        // Also store token separately if needed
        if (data.access_token) {
          localStorage.setItem('authToken', data.access_token);
        }
        
        // Redirect to dashboard
        navigate('/');
      } else {
        // Login failed
        setError(data.message || 'Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Network error. Please check your internet connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white dark:bg-darkblack-500">
      <div className="flex flex-col lg:flex-row justify-between min-h-screen">
        {/* Left */}
        <div className="lg:w-1/2 px-5 xl:pl-12 pt-10">
          <div className="max-w-[450px] m-auto pt-24 pb-16">
            <header className="text-center mb-8">
              <h2 className="text-bgray-900 dark:text-white text-4xl font-semibold font-poppins mb-2">
                Sign in
              </h2>
              <p className="font-urbanis text-base font-medium text-bgray-600 dark:text-bgray-50">
                Send, spend and save smarter
              </p>
            </header>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}
              
              <div>
                <label htmlFor="phonenum" className="block text-sm font-medium text-bgray-700 dark:text-bgray-50 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phonenum"
                  name="phonenum"
                  value={formData.phonenum}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-bgray-300 dark:border-darkblack-400 rounded-lg focus:ring-2 focus:ring-success-300 focus:border-transparent bg-white dark:bg-darkblack-500 text-bgray-900 dark:text-white"
                  placeholder="Phone Number"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-bgray-700 dark:text-bgray-50 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-bgray-300 dark:border-darkblack-400 rounded-lg focus:ring-2 focus:ring-success-300 focus:border-transparent bg-white dark:bg-darkblack-500 text-bgray-900 dark:text-white"
                  placeholder="Password"
                  required
                />
              </div>
              
    <button
  type="submit"
  disabled={loading}
  className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-black ${
    loading 
      ? '!bg-gray-300 cursor-not-allowed' 
      : '!bg-blue-300 hover:!bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:!ring-blue-400'
  }`}
>
  {loading ? (
    <div className="flex items-center">
      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Signing in...
    </div>
  ) : (
    'Login'
  )}
</button>



            </form>
          </div>
        </div>
        
        {/* Right */}
        <div className="lg:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-success-400 to-success-600"></div>
          <div className="relative h-full flex items-center justify-center p-12">
            <div className="text-center text-white">
              <img
                src="/assets/images/illustration/signin.svg"
                alt="Sign in illustration"
                className="mx-auto mb-8 max-w-md"
              />
              <h3 className="text-2xl font-bold mb-4">Welcome to HBA Pay</h3>
              <p className="text-lg opacity-90">
                The most secure and user-friendly payment platform for all your financial needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
