import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onToggleSidebar }) => {
  const [searchFocused, setSearchFocused] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Handle keyboard shortcuts
    const handleKeyDown = (e) => {
      if (e.key === 'k' && e.ctrlKey) {
        e.preventDefault();
        document.getElementById('search')?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    // Apply dark mode to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header className="md:block hidden header-wrapper w-full fixed z-30">
      <div className="w-full h-[108px] dark:bg-darkblack-600 bg-white flex items-center justify-between 2xl:px-[76px] px-10 relative">
        <button
          title="Ctrl+b"
          type="button"
          className="drawer-btn-header absolute left-0 top-auto transform rotate-180"
          onClick={onToggleSidebar}
        >
          <span>
            <svg width="16" height="40" viewBox="0 0 16 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 10C0 4.47715 4.47715 0 10 0H16V40H10C4.47715 40 0 35.5228 0 30V10Z" fill="#22C55E" />
              <path d="M10 15L6 20.0049L10 25.0098" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
        
        {/* Page title */}
        <div>
          <h3 className="lg:text-3xl text-xl dark:text-bgray-50 text-bgray-900 font-bold lg:leading-[36.4px]">
            Dashboard
          </h3>
          <p className="lg:text-sm text-xs dark:text-bgray-50 text-bgray-600 font-medium lg:leading-[25.2px]">
            Let's check your update today
          </p>
        </div>
        
        {/* Search bar */}
        <div className="searchbar-wrapper">
          <div className="border border-transparent focus-within:border-success-300 lg:w-[400px] w-[300px] px h-[56px] px-4 bg-bgray-50 dark:bg-darkblack-500 rounded-lg flex justify-between items-center">
            <div className="flex space-x-3.5 items-center w-full">
              <span>
                <svg className="stroke-bgray-900 dark:stroke-bgray-50" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="9.78639" cy="9.78602" r="8.23951" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15.5176 15.9447L18.7479 19.1667" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <label htmlFor="search" className="w-full">
                <input
                  type="text"
                  id="search"
                  placeholder="Search..."
                  className="search-input w-full bg-none border-none bg-bgray-50 px-0 focus:outline-none focus:ring-0 text-sm placeholder:text-sm text-bgray-600 tracking-wide placeholder:font-semibold dark:placeholder:text-bgray-500 dark:bg-darkblack-500"
                />
              </label>
            </div>
            <div className="flex space-x-[6px] items-center">
              <span>
                <svg className="stroke-bgray-900 dark:stroke-gray-300" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.975 12.3875C5.975 12.8548 5.83644 13.3115 5.57685 13.7C5.31725 14.0885 4.94828 14.3914 4.51659 14.5702C4.0849 14.749 3.60988 14.7958 3.1516 14.7046C2.69332 14.6134 2.27236 14.3884 1.94196 14.058C1.61156 13.7276 1.38655 13.3067 1.2954 12.8484C1.20424 12.3901 1.25102 11.9151 1.42984 11.4834C1.60865 11.0517 1.91146 10.6827 2.29997 10.4232C2.68848 10.1636 3.14524 10.025 3.6125 10.025H12.3875C12.8548 10.025 13.3115 10.1636 13.7 10.4232C14.0885 10.6827 14.3914 11.0517 14.5702 11.4834C14.749 11.9151 14.7958 12.3901 14.7046 12.8484C14.6134 13.3067 14.3884 13.7276 14.058 14.058C13.7276 14.3884 13.3067 14.6134 12.8484 14.7046C12.3901 14.7958 11.9151 14.749 11.4834 14.5702C11.0517 14.3914 10.6827 14.0885 10.4232 13.7C10.1636 13.3115 10.025 12.8548 10.025 12.3875V3.6125C10.025 3.14524 10.1636 2.68848 10.4232 2.29997C10.6827 1.91146 11.0517 1.60865 11.4834 1.42984C11.9151 1.25102 12.3901 1.20424 12.8484 1.2954C13.3067 1.38655 13.7276 1.61156 14.058 1.94196C14.3884 2.27236 14.6134 2.69332 14.7046 3.1516C14.7958 3.60988 14.749 4.0849 14.5702 4.51659C14.3914 4.94828 14.0885 5.31725 13.7 5.57685C13.3115 5.83644 12.8548 5.975 12.3875 5.975H3.6125C3.14524 5.975 2.68848 5.83644 2.29997 5.57685C1.91146 5.31725 1.60865 4.94828 1.42984 4.51659C1.25102 4.0849 1.20424 3.60988 1.2954 3.1516C1.38655 2.69332 1.61156 2.27236 1.94196 1.94196C2.27236 1.61156 2.69332 1.38655 3.1516 1.2954C3.60988 1.20424 4.0849 1.25102 4.51659 1.42984C4.94828 1.60865 5.31725 1.91146 5.57685 2.29997C5.83644 2.68848 5.975 3.14524 5.975 3.6125V12.3875Z" strokeWidth="1.5" />
                </svg>
              </span>
              <span className="text-base dark:text-bgray-300 text-bgray-900">K</span>
            </div>
          </div>
        </div>
        
        {/* Quick access */}
        <div className="quick-access-wrapper relative">
          <div className="flex space-x-[43px] items-center">
            <div className="xl:flex hidden space-x-5 items-center">
              <button type="button" id="theme-toggle" className="w-[52px] h-[52px] rounded-[12px] border border-success-300 dark:border-darkblack-400 flex justify-center items-center relative" onClick={() => setDarkMode(!darkMode)}>
                <span className="block dark:hidden">
                  <svg className="stroke-bgray-900" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.3284 14.8687C13.249 14.8687 9.13135 10.751 9.13135 5.67163C9.13135 4.74246 9.26914 3.84548 9.5254 3C5.74897 4.14461 3 7.65276 3 11.803C3 16.8824 7.11765 21 12.197 21C16.3472 21 19.8554 18.251 21 14.4746C20.1545 14.7309 19.2575 14.8687 18.3284 14.8687Z" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="hidden dark:block">
                  <svg className="stroke-bgray-900 dark:stroke-bgray-50" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="5" strokeWidth="1.5"/>
                    <path d="M12 2V4" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M12 20V22" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M20.6602 7L18.9281 8" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M5.07178 16L3.33973 17" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M3.33984 7L5.07189 8" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M18.9282 16L20.6603 17" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>
              
              <button type="button" className="w-[52px] h-[52px] rounded-[12px] border border-success-300 dark:border-darkblack-400 flex justify-center items-center relative">
                <span className="w-3.5 h-3.5 rounded-full bg-bgray-300 dark:bg-bgray-600 dark:border-none border-2 border-white absolute -right-[5px] -top-[2px]"></span>
                <svg className="fill-bgray-900 dark:fill-white" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.9718 6.78149L19.2803 7.07178L19.9718 6.78149ZM19.3571 7.25473C19.5174 7.63666 19.957 7.81631 20.3389 7.65599C20.7209 7.49567 20.9005 7.05609 20.7402 6.67416L19.3571 7.25473ZM16.7784 2.77061C16.3937 2.61687 15.9573 2.80404 15.8036 3.18867C15.6498 3.5733 15.837 4.00973 16.2216 4.16347L16.7784 2.77061ZM16.6672 3.53388L16.3889 4.23031L16.6672 3.53388ZM4.0768 6.78149L4.76834 7.07178L4.0768 6.78149ZM3.30846 6.67416C3.14813 7.05609 3.32778 7.49567 3.70971 7.65599C4.09164 7.81631 4.53122 7.63666 4.69154 7.25473L3.30846 6.67416ZM7.82701 4.16347C8.21164 4.00973 8.39881 3.5733 8.24507 3.18867C8.09134 2.80405 7.65491 2.61687 7.27028 2.77061L7.82701 4.16347ZM7.38142 3.53388L7.10305 2.83745V2.83745L7.38142 3.53388ZM18.2395 9.93743L17.4943 10.0221V10.0221L18.2395 9.93743ZM18.6867 13.8746L19.4319 13.7899V13.7899L18.6867 13.8746ZM5.31328 13.8746L4.56807 13.7899L5.31328 13.8746ZM5.76046 9.93743L6.50567 10.0221L5.76046 9.93743ZM4.44779 15.83L3.87686 15.3436H3.87686L4.44779 15.83ZM19.5522 15.83L18.9813 16.3164L18.9813 16.3164L19.5522 15.83ZM14.2699 5.33931H13.5199C13.5199 5.65996 13.7238 5.94513 14.0272 6.04893L14.2699 5.33931ZM9.73005 5.33931L9.97284 6.04893C10.2762 5.94513 10.4801 5.65996 10.4801 5.33931H9.73005ZM15.7022 21.2175C15.8477 20.8296 15.6512 20.3973 15.2634 20.2518C14.8755 20.1064 14.4432 20.3029 14.2978 20.6907L15.7022 21.2175ZM9.70223 20.6907C9.55678 20.3029 9.12446 20.1064 8.73663 20.2518C8.34879 20.3973 8.15231 20.8296 8.29777 21.2175L9.70223 20.6907ZM19.2803 7.07178L19.3571 7.25473L20.7402 6.67416L20.6634 6.4912L19.2803 7.07178ZM16.2216 4.16347L16.3889 4.23031L16.9456 2.83745L16.7784 2.77061L16.2216 4.16347ZM20.6634 6.4912C19.9638 4.82468 18.6244 3.50849 16.9456 2.83745L16.3889 4.23031C17.6948 4.7523 18.7364 5.77599 19.2803 7.07178L20.6634 6.4912ZM3.38526 6.4912L3.30846 6.67416L4.69154 7.25473L4.76834 7.07178L3.38526 6.4912ZM7.27028 2.77061L7.10305 2.83745L7.65979 4.23031L7.82701 4.16347L7.27028 2.77061ZM4.76834 7.07178C5.31227 5.77599 6.35384 4.7523 7.65979 4.23031L7.10305 2.83745C5.4242 3.50849 4.08481 4.82468 3.38526 6.4912L4.76834 7.07178ZM17.7772 18.2056H6.22281V19.7056H17.7772V18.2056ZM17.4943 10.0221L17.9415 13.9592L19.4319 13.7899L18.9847 9.85279L17.4943 10.0221ZM6.05849 13.9592L6.50567 10.0221L5.01526 9.85279L4.56807 13.7899L6.05849 13.9592ZM5.01872 16.3164C5.59608 15.6386 5.96025 14.8241 6.05849 13.9592L4.56807 13.7899C4.50522 14.3432 4.2708 14.8812 3.87686 15.3436L5.01872 16.3164ZM17.9415 13.9592C18.0398 14.8241 18.4039 15.6386 18.9813 16.3164L20.1231 15.3436C19.7292 14.8812 19.4948 14.3432 19.4319 13.7899L17.9415 13.9592ZM6.22281 18.2056C5.5675 18.2056 5.10418 17.8817 4.89044 17.5053C4.68417 17.1421 4.68715 16.7056 5.01872 16.3164L3.87686 15.3436C3.11139 16.2422 3.0877 17.3685 3.5861 18.2461C4.07704 19.1105 5.04975 19.7056 6.22281 19.7056V18.2056ZM17.7772 19.7056C18.9503 19.7056 19.923 19.1105 20.4139 18.2461C20.9123 17.3685 20.8886 16.2422 20.1231 15.3436L18.9813 16.3164C19.3129 16.7056 19.3158 17.1421 19.1096 17.5053C18.8958 17.8817 18.4325 18.2056 17.7772 18.2056V19.7056ZM15.0199 5.33931V5.23567H13.5199V5.33931H15.0199ZM18.9847 9.85279C18.7054 7.39374 16.8802 5.43969 14.5127 4.6297L14.0272 6.04893C15.9445 6.70491 17.2914 8.23516 17.4943 10.0221L18.9847 9.85279ZM10.4801 5.33931V5.23567H8.98005V5.33931H10.4801ZM6.50567 10.0221C6.70863 8.23516 8.05551 6.70491 9.97284 6.04893L9.48727 4.6297C7.1198 5.43969 5.29456 7.39374 5.01526 9.85279L6.50567 10.0221ZM12 3.71741C12.84 3.71741 13.5199 4.39768 13.5199 5.23567H15.0199C15.0199 3.56821 13.6673 2.21741 12 2.21741V3.71741ZM12 2.21741C10.3327 2.21741 8.98005 3.56821 8.98005 5.23567H10.4801C10.4801 4.39768 11.16 3.71741 12 3.71741V2.21741ZM14.2978 20.6907C13.9752 21.5508 13.0849 22.2026 12 22.2026V23.7026C13.6851 23.7026 15.1514 22.686 15.7022 21.2175L14.2978 20.6907ZM12 22.2026C10.9151 22.2026 10.0248 21.5508 9.70223 20.6907L8.29777 21.2175C8.84856 22.686 10.3149 23.7026 12 23.7026V22.2026Z" />
                </svg>
              </button>
              
              <button type="button" className="w-[52px] h-[52px] rounded-[12px] border border-success-300 dark:border-darkblack-400 flex justify-center items-center relative">
                <span className="w-3.5 h-3.5 rounded-full bg-error-300 border-2 border-white absolute -right-[5px] -top-[2px] dark:border-none"></span>
                <svg className="stroke-bgray-900 dark:stroke-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 12V7C2 4.79086 3.79086 3 6 3H18C20.2091 3 22 4.79086 22 7V17C22 19.2091 20.2091 21 18 21H8M6 8L9.7812 10.5208C11.1248 11.4165 12.8752 11.4165 14.2188 10.5208L18 8M2 15H8M2 18H8" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
              
              <button type="button" className="w-[52px] h-[52px] rounded-[12px] border border-success-300 dark:border-darkblack-400 flex justify-center items-center relative">
                <span className="w-3.5 h-3.5 rounded-full bg-bgray-300 border-2 border-white absolute -right-[5px] -top-[2px] dark:bg-bgray-600 dark:border-none"></span>
                <svg className="stroke-bgray-900 dark:stroke-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 11H20M4 11C2.89543 11 2 10.1046 2 9V8C2 6.89543 2.89543 6 4 6H20C21.1046 6 22 6.89543 22 8V9C22 10.1046 21.1046 11 20 11M4 11L4 20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V11M12 6H16C17.1046 6 18 5.10457 18 4C18 2.89543 17.1046 2 16 2C13.7909 2 12 3.79086 12 6ZM12 6H8C6.89543 6 6 5.10457 6 4C6 2.89543 6.89543 2 8 2C10.2091 2 12 3.79086 12 6ZM12 6V22" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            
            {/* Profile dropdown */}
            <div className="profile-wrapper relative">
              <div className="flex items-center space-x-3">
                <div className="w-[52px] h-[52px] rounded-[12px] border border-success-300 dark:border-darkblack-400 flex justify-center items-center">
                  <img src="/assets/images/avatar/profile.png" alt="profile" className="w-8 h-8 rounded-full" />
                </div>
                <div>
                  {/* <h3 className="text-base font-semibold text-bgray-900 dark:text-white">
                    John Doe
                  </h3> */}
                  {/* <span>
                    <svg className="stroke-bgray-900 dark:stroke-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 10L12 14L17 10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span> */}
                </div>
                {/* <p className="text-sm font-medium leading-[20px] dark:text-bgray-50 text-bgray-600">
                  Super Admin
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
