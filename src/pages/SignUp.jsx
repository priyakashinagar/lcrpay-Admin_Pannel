import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <section className="bg-white dark:bg-darkblack-500">
      <div className="flex flex-col lg:flex-row justify-between min-h-screen">
        {/* Left */}
        <div className="lg:w-1/2 px-5 xl:pl-12 pt-10">
          <div className="max-w-[450px] m-auto pt-24 pb-16">
            <header className="text-center mb-8">
              <h2 className="text-bgray-900 dark:text-white text-4xl font-semibold font-poppins mb-2">
                Create your account
              </h2>
              <p className="font-urbanis text-base font-medium text-bgray-600 dark:text-bgray-50">
                Join HBA Pay and start managing your finances
              </p>
            </header>
            
            <div className="flex flex-col md:flex-row gap-4">
              <a
                href="#"
                className="inline-flex justify-center items-center gap-x-2 border border-bgray-300 dark:border-darkblack-400 rounded-lg px-6 py-4 text-base text-bgray-900 dark:text-white font-medium"
              >
                <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.8758 11.2137C20.8758 10.4224 20.8103 9.84485 20.6685 9.24597H11.4473V12.8179H16.8599C16.7508 13.7055 16.1615 15.0424 14.852 15.9406L14.8336 16.0602L17.7492 18.2737L17.9512 18.2935C19.8063 16.6144 20.8758 14.144 20.8758 11.2137Z" fill="#4285F4" />
                </svg>
                Continue with Google
              </a>
              <a
                href="#"
                className="inline-flex justify-center items-center gap-x-2 border border-bgray-300 dark:border-darkblack-400 rounded-lg px-6 py-4 text-base text-bgray-900 dark:text-white font-medium"
              >
                <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.8758 11.2137C20.8758 10.4224 20.8103 9.84485 20.6685 9.24597H11.4473V12.8179H16.8599C16.7508 13.7055 16.1615 15.0424 14.852 15.9406L14.8336 16.0602L17.7492 18.2737L17.9512 18.2935C19.8063 16.6144 20.8758 14.144 20.8758 11.2137Z" fill="#1877F2" />
                </svg>
                Continue with Facebook
              </a>
            </div>
            
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-bgray-300 dark:border-darkblack-400"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-darkblack-500 text-bgray-500">Or continue with email</span>
              </div>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-bgray-700 dark:text-bgray-50 mb-2">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 border border-bgray-300 dark:border-darkblack-400 rounded-lg focus:ring-2 focus:ring-success-300 focus:border-transparent bg-white dark:bg-darkblack-500 text-bgray-900 dark:text-white"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-bgray-700 dark:text-bgray-50 mb-2">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 border border-bgray-300 dark:border-darkblack-400 rounded-lg focus:ring-2 focus:ring-success-300 focus:border-transparent bg-white dark:bg-darkblack-500 text-bgray-900 dark:text-white"
                    placeholder="Last name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-bgray-700 dark:text-bgray-50 mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-bgray-300 dark:border-darkblack-400 rounded-lg focus:ring-2 focus:ring-success-300 focus:border-transparent bg-white dark:bg-darkblack-500 text-bgray-900 dark:text-white"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-bgray-700 dark:text-bgray-50 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-3 border border-bgray-300 dark:border-darkblack-400 rounded-lg focus:ring-2 focus:ring-success-300 focus:border-transparent bg-white dark:bg-darkblack-500 text-bgray-900 dark:text-white"
                  placeholder="Create a password"
                />
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-bgray-700 dark:text-bgray-50 mb-2">
                  Confirm password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="w-full px-4 py-3 border border-bgray-300 dark:border-darkblack-400 rounded-lg focus:ring-2 focus:ring-success-300 focus:border-transparent bg-white dark:bg-darkblack-500 text-bgray-900 dark:text-white"
                  placeholder="Confirm your password"
                />
              </div>
              
              <div className="flex items-center">
                <input
                  id="terms"
                  type="checkbox"
                  className="h-4 w-4 text-success-600 focus:ring-success-500 border-bgray-300 rounded"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-bgray-700 dark:text-bgray-50">
                  I agree to the{' '}
                  <a href="#" className="text-success-600 hover:text-success-700">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-success-600 hover:text-success-700">
                    Privacy Policy
                  </a>
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-success-600 hover:bg-success-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-success-500"
              >
                Create account
              </button>
            </form>
            
            <p className="mt-8 text-center text-sm text-bgray-600 dark:text-bgray-50">
              Already have an account?{' '}
              <Link to="/signin" className="font-medium text-success-600 hover:text-success-700">
                Sign in
              </Link>
            </p>
          </div>
        </div>
        
        {/* Right */}
        <div className="lg:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-success-400 to-success-600"></div>
          <div className="relative h-full flex items-center justify-center p-12">
            <div className="text-center text-white">
              <img
                src="/assets/images/illustration/signup.svg"
                alt="Sign up illustration"
                className="mx-auto mb-8 max-w-md"
              />
              <h3 className="text-2xl font-bold mb-4">Join HBA Pay Today</h3>
              <p className="text-lg opacity-90">
                Experience the future of digital payments with our secure and intuitive platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
