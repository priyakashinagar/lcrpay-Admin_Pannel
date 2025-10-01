import React from 'react';
import { Link } from 'react-router-dom';

const MobileHeader = ({ onToggleSidebar }) => {
  return (
    <header className="md:hidden block mobile-wrapper w-full fixed z-20">
      <div className="w-full h-[80px] bg-white dark:bg-darkblack-600 flex justify-between items-center">
        <div className="w-full h-full flex items-center space-x-5">
          <button type="button" className="drawer-btn transform rotate-180" onClick={onToggleSidebar}>
            <span>
              <svg width="16" height="40" viewBox="0 0 16 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 10C0 4.47715 4.47715 0 10 0H16V40H10C4.47715 40 0 35.5228 0 30V10Z" fill="#F7F7F7" />
                <path d="M10 15L6 20.0049L10 25.0098" stroke="#A0AEC0" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
          <div>
            <Link to="/">
              <img src="/assets/images/logo/logo-color.svg" className="block dark:hidden" alt="logo" />
              <img src="/assets/images/logo/logo-white.svg" className="hidden dark:block" alt="logo" />
            </Link>
          </div>
        </div>
        <div className="mr-2">
          <div className="flex lg:space-x-3 space-x-0 cursor-pointer">
            <div className="w-[52px] h-[52px] rounded-xl border border-bgray-300 overflow-hidden">
              <img
                className="object-cover"
                src="/assets/images/avatar/profile-52x52.png"
                alt="avatar"
              />
            </div>
            <div className="2xl:block hidden">
              <div className="flex space-x-2.5 items-center">
                {/* <h3 className="text-base text-bgray-900 font-bold leading-[28px]">
                  John Doe
                </h3> */}
                {/* <span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10L12 14L17 10" stroke="#28303F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span> */}
              </div>
              {/* <p className="text-sm font-medium leading-[20px] text-bgray-600">
                Super Admin
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
