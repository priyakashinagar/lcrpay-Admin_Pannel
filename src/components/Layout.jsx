import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import MobileHeader from './MobileHeader';

const Layout = () => {
  const [sidebarActive, setSidebarActive] = useState(true);

  useEffect(() => {
    // Handle keyboard shortcuts
    const handleKeyDown = (e) => {
      if (e.key === 'b' && e.ctrlKey) {
        e.preventDefault();
        setSidebarActive(!sidebarActive);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [sidebarActive]);

  return (
    <div className={`w-full layout-wrapper ${sidebarActive ? 'active' : ''}`}>
      <div className="w-full flex relative">
        <Sidebar isActive={sidebarActive} onToggle={() => setSidebarActive(!sidebarActive)} />
        
        {/* Mobile overlay */}
        <div 
          style={{zIndex: 25}} 
          className={`aside-overlay block sm:hidden w-full h-full fixed left-0 top-0 bg-black bg-opacity-30 ${sidebarActive ? 'block' : 'hidden'}`} 
          onClick={() => setSidebarActive(false)}
        ></div>
        
        {/* Collapsed sidebar for larger screens - shows when main sidebar is closed */}
        <aside className={`sm:block hidden relative w-[96px] bg-white dark:bg-black ${sidebarActive ? 'hidden' : 'block'}`}>
          <div className="w-full sidebar-wrapper-collapse relative top-0 z-30">
            <div className="sidebar-header bg-white dark:bg-darkblack-600 dark:border-darkblack-500 sticky top-0 border-r border-b border-r-[#F7F7F7] border-b-[#F7F7F7] w-full h-[108px] flex items-center justify-center z-20">
              <Link to="/">
                <img src="/assets/images/logo/logo-short.svg" className="dark:hidden block" alt="logo" />
                <img src="/assets/images/logo/logo-short-white.svg" className="hidden dark:block" alt="logo" />
              </Link>
            </div>
            <div className="sidebar-body pt-[14px] w-full">
              <div className="flex flex-col items-center">
                <div className="nav-wrapper mb-[36px]">
                  <div className="item-wrapper mb-5">
                    <ul className="mt-2.5 flex justify-center items-center flex-col">
                      <li className="item py-[11px] px-[43px]">
                        <Link to="/">
                          <span className="item-ico">
                            <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path className="path-1" d="M0 8.84719C0 7.99027 0.366443 7.17426 1.00691 6.60496L6.34255 1.86217C7.85809 0.515019 10.1419 0.515019 11.6575 1.86217L16.9931 6.60496C17.6336 7.17426 18 7.99027 18 8.84719V17C18 19.2091 16.2091 21 14 21H4C1.79086 21 0 19.2091 0 17V8.84719Z" fill="#1A202C" />
                              <path className="path-2" d="M5 17C5 14.7909 6.79086 13 9 13C11.2091 13 13 14.7909 13 17V21H5V17Z" fill="#22C55E" />
                            </svg>
                          </span>
                        </Link>
                      </li>
                      <li className="item py-[11px] px-[43px]">
                        <Link to="/users">
                          <span className="item-ico">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <ellipse cx="11.7778" cy="17.5555" rx="7.77778" ry="4.44444" className="path-1" fill="#1A202C" />
                              <circle className="path-2" cx="11.7778" cy="6.44444" r="4.44444" fill="#22C55E" />
                            </svg>
                          </span>
                        </Link>
                      </li>
                      <li className="item py-[11px] px-[43px]">
                        <Link to="/transaction">
                          <span className="item-ico">
                            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M18 16V6C18 3.79086 16.2091 2 14 2H4C1.79086 2 0 3.79086 0 6V16C0 18.2091 1.79086 20 4 20H14C16.2091 20 18 18.2091 18 16Z" fill="#1A202C" className="path-1" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M4.25 8C4.25 7.58579 4.58579 7.25 5 7.25H13C13.4142 7.25 13.75 7.58579 13.75 8C13.75 8.41421 13.4142 8.75 13 8.75H5C4.58579 8.75 4.25 8.41421 4.25 8Z" fill="#22C55E" className="path-2" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H13C13.4142 11.25 13.75 11.5858 13.75 12C13.75 12.4142 13.4142 12.75 13 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12Z" fill="#22C55E" className="path-2" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M4.25 16C4.25 15.5858 4.58579 15.25 5 15.25H9C9.41421 15.25 9.75 15.5858 9.75 16C9.75 16.4142 9.41421 16.75 9 16.75H5C4.58579 16.75 4.25 16.4142 4.25 16Z" fill="#22C55E" className="path-2" />
                              <path d="M11 0H7C5.89543 0 5 0.895431 5 2C5 3.10457 5.89543 4 7 4H11C12.1046 4 13 3.10457 13 2C13 0.895431 12.1046 0 11 0Z" fill="#22C55E" className="path-2" />
                            </svg>
                          </span>
                        </Link>
                      </li>
                      <li className="item py-[11px] px-[43px]">
                        <Link to="/billpayments">
                          <span className="item-ico">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4 2H16L20 6V22H4V2Z" fill="#1A202C" className="path-1"/>
                              <path d="M16 2V6H20" fill="#1A202C" className="path-2"/>
                              <path d="M8 11H14" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M8 15H12" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                        </Link>
                      </li>
                      <li className="item py-[11px] px-[43px]">
                        <Link to="/primemembers">
                          <span className="item-ico">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4 5L7.5 11L12 5L16.5 11L20 5V19H4V5Z" fill="#1A202C" className="path-1"/>
                              <path d="M4 19H20" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <circle cx="4" cy="5" r="1.5" fill="#22C55E" />
                              <circle cx="12" cy="5" r="1.5" fill="#22C55E" />
                              <circle cx="20" cy="5" r="1.5" fill="#22C55E" />
                            </svg>
                          </span>
                        </Link>
                      </li>
                      <li className="item py-[11px] px-[43px]">
                        <Link to="/billers">
                          <span className="item-ico">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="2" y="2" width="20" height="20" rx="3" fill="#1A202C" className="path-1"/>
                              <path d="M7 7H17" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round"/>
                              <path d="M7 11H17" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round"/>
                              <path d="M7 15H13" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round"/>
                              <circle cx="18" cy="16.5" r="2" fill="#22C55E"/>
                              <path d="M18 15.5V17.5" stroke="#1A202C" strokeWidth="1.5" strokeLinecap="round"/>
                              <path d="M17 16.5H19" stroke="#1A202C" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                          </span>
                        </Link>
                      </li>
                      <li className="item py-[11px] px-[43px]">
                        <Link to="/paymentgateway">
                          <span className="item-ico">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="2" y="5" width="20" height="14" rx="2" fill="#1A202C" className="path-1"/>
                              <path d="M2 9H22" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <circle cx="6" cy="15" r="1.5" fill="#22C55E" />
                              <circle cx="10" cy="15" r="1.5" fill="#22C55E" />
                              <path d="M17 13L18.5 14.5L21 12" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                        </Link>
                      </li>
                      <li className="item py-[11px] px-[43px]">
                        <Link to="/kyc">
                          <span className="item-ico">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="2" y="4" width="20" height="16" rx="2" fill="#1A202C" className="path-1"/>
                              <circle cx="8" cy="10" r="2" fill="#22C55E" />
                              <path d="M4 16C4.5 14 6 13 8 13C10 13 11.5 14 12 16" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round"/>
                              <rect x="14" y="8" width="6" height="1.5" rx="0.75" fill="#22C55E"/>
                              <rect x="14" y="11" width="5" height="1.5" rx="0.75" fill="#22C55E"/>
                            </svg>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="item-wrapper mb-5">
                    <ul className="mt-2.5 flex justify-center items-center flex-col">
                      <li className="item py-[11px] px-[43px]">
                        <Link to="/team">
                          <span className="item-ico">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="7" cy="7" r="3" fill="#1A202C" className="path-1"/>
                              <circle cx="17" cy="7" r="3" fill="#1A202C" className="path-1"/>
                              <path d="M4 17C4 14.7909 5.79086 13 8 13H16C18.2091 13 20 14.7909 20 17V19H4V17Z" fill="#1A202C" className="path-1"/>
                              <path d="M7 11C4.79086 11 3 12.7909 3 15V16H11V15C11 12.7909 9.20914 11 7 11Z" fill="#22C55E"/>
                              <path d="M17 11C14.7909 11 13 12.7909 13 15V16H21V15C21 12.7909 19.2091 11 17 11Z" fill="#22C55E"/>
                            </svg>
                          </span>
                        </Link>
                      </li>
                      <li className="item py-[11px] px-[43px]">
                        <Link to="/settings">
                          <span className="item-ico">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path className="path-1" fill="#1A202C" d="M19.14 12.936a7.967 7.967 0 000-1.872l2.037-1.582a.5.5 0 00.121-.633l-1.928-3.338a.5.5 0 00-.605-.22l-2.397.96a7.977 7.977 0 00-1.62-.936l-.36-2.53a.5.5 0 00-.496-.429h-3.856a.5.5 0 00-.496.429l-.36 2.53a7.977 7.977 0 00-1.62.936l-2.397-.96a.5.5 0 00-.605.22L2.702 8.849a.5.5 0 00.121.633l2.037 1.582a7.967 7.967 0 000 1.872L2.823 14.67a.5.5 0 00-.121.633l1.928 3.338a.5.5 0 00.605.22l2.397-.96a7.977 7.977 0 001.62.936l.36 2.53a.5.5 0 00.496.429h3.856a.5.5 0 00.496-.429l.36-2.53a7.977 7.977 0 001.62-.936l2.397.96a.5.5 0 00.605-.22l1.928-3.338a.5.5 0 00-.121-.633l-2.037-1.582zM12 15a3 3 0 110-6 3 3 0 010 6z"/>
                              <circle cx="12" cy="12" r="2" fill="#22C55E" className="path-2"/>
                            </svg>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="upgrade-wrapper">
                  <div className="w-10 flex justify-center items-center h-10 rounded-full bg-success-300 border border-white">
                    <span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 12.75C14 11.7835 13.1046 11 12 11C10.8954 11 10 11.7835 10 12.75C10 13.7165 10.8954 14.5 12 14.5C13.1046 14.5 14 15.2835 14 16.25C14 17.2165 13.1046 18 12 18C10.8954 18 10 17.2165 10 16.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M12 9.5V11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 18V19.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5.63246 11.1026C6.44914 8.65258 8.74197 7 11.3246 7H12.6754C15.258 7 17.5509 8.65258 18.3675 11.1026L19.3675 14.1026C20.6626 17.9878 17.7708 22 13.6754 22H10.3246C6.22921 22 3.33739 17.9878 4.63246 14.1026L5.63246 11.1026Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                        <path d="M14.0859 7L9.91411 7L8.51303 5.39296C7.13959 3.81763 8.74185 1.46298 10.7471 2.10985L11.6748 2.40914C11.8861 2.47728 12.1139 2.47728 12.3252 2.40914L13.2529 2.10985C15.2582 1.46298 16.8604 3.81763 15.487 5.39296L14.0859 7Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
        
        <div className="body-wrapper dark:bg-darkblack-500 flex-1 overflow-x-hidden">
          <Header onToggleSidebar={() => setSidebarActive(!sidebarActive)} isActive={sidebarActive} />
          <MobileHeader onToggleSidebar={() => setSidebarActive(!sidebarActive)} />
          
          <main className="w-full xl:px-12 px-6 pb-6 xl:pb-12 sm:pt-[156px] pt-[100px]">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
