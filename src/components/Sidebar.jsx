import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { logout } from '../utils/auth';
import Toast from './Toast';

const Sidebar = ({ isActive, onToggle }) => {
  const location = useLocation();
  const [showToast, setShowToast] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    setShowToast(true);
  };

  const menuItems = [
    {
      title: 'Menu',
      items: [
        { name: 'Dashboard', path: '/', icon: 'dashboard' },
        { name: 'All Users', path: '/users', icon: 'users' },
        { name: 'Transaction', path: '/transaction', icon: 'transaction' },
        { name: 'Bill Payments', path: '/billpayments', icon: 'billpayments' },
        { name: 'Prime Members', path: '/primemembers', icon: 'primemembers' },
        { name: 'Billers', path: '/billers', icon: 'billers' },
        { name: 'Payment Gateway', path: '/paymentgateway', icon: 'paymentgateway' },
        { name: 'KYC', path: '/kyc', icon: 'kyc' },
        
      ]
    },
    {
      title: 'Help',
      items: [
        { name: 'Team', path: '/team', icon: 'team' },
        { name: 'Settings', path: '/settings', icon: 'settings' },
      ]
    },
    {
      title: 'others',
      items: [
        { name: 'Commission Structure', path: '/team', icon: 'commissionstructure' },
        { name: 'Create Operator', path: '/settings', icon: 'createoperator' },
        { name: 'Logout', path: '/settings', icon: 'logout' },
      ]
    }
  ];

  const getIcon = (iconName) => {
    const icons = {
      dashboard: (
        <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="path-1" d="M0 8.84719C0 7.99027 0.366443 7.17426 1.00691 6.60496L6.34255 1.86217C7.85809 0.515019 10.1419 0.515019 11.6575 1.86217L16.9931 6.60496C17.6336 7.17426 18 7.99027 18 8.84719V17C18 19.2091 16.2091 21 14 21H4C1.79086 21 0 19.2091 0 17V8.84719Z" fill="#1A202C" />
          <path className="path-2" d="M5 17C5 14.7909 6.79086 13 9 13C11.2091 13 13 14.7909 13 17V21H5V17Z" fill="#22C55E" />
        </svg>
      ),
      transaction: (
        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 16V6C18 3.79086 16.2091 2 14 2H4C1.79086 2 0 3.79086 0 6V16C0 18.2091 1.79086 20 4 20H14C16.2091 20 18 18.2091 18 16Z" fill="#1A202C" className="path-1" />
          <path fillRule="evenodd" clipRule="evenodd" d="M4.25 8C4.25 7.58579 4.58579 7.25 5 7.25H13C13.4142 7.25 13.75 7.58579 13.75 8C13.75 8.41421 13.4142 8.75 13 8.75H5C4.58579 8.75 4.25 8.41421 4.25 8Z" fill="#22C55E" className="path-2" />
          <path fillRule="evenodd" clipRule="evenodd" d="M4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H13C13.4142 11.25 13.75 11.5858 13.75 12C13.75 12.4142 13.4142 12.75 13 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12Z" fill="#22C55E" className="path-2" />
          <path fillRule="evenodd" clipRule="evenodd" d="M4.25 16C4.25 15.5858 4.58579 15.25 5 15.25H9C9.41421 15.25 9.75 15.5858 9.75 16C9.75 16.4142 9.41421 16.75 9 16.75H5C4.58579 16.75 4.25 16.4142 4.25 16Z" fill="#22C55E" className="path-2" />
          <path d="M11 0H7C5.89543 0 5 0.895431 5 2C5 3.10457 5.89543 4 7 4H11C12.1046 4 13 3.10457 13 2C13 0.895431 12.1046 0 11 0Z" fill="#22C55E" className="path-2" />
        </svg>
      ),
      billpayments: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 2H16L20 6V22H4V2Z" fill="#1A202C" className="path-1"/>
          <path d="M16 2V6H20" fill="#1A202C" className="path-2"/>
          <path d="M8 11H14" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 15H12" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      
      primemembers: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 5L7.5 11L12 5L16.5 11L20 5V19H4V5Z" fill="#1A202C" className="path-1"/>
          <path d="M4 19H20" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="4" cy="5" r="1.5" fill="#22C55E" />
          <circle cx="12" cy="5" r="1.5" fill="#22C55E" />
          <circle cx="20" cy="5" r="1.5" fill="#22C55E" />
        </svg>
      ),
      
      billers: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="3" fill="#1A202C" className="path-1"/>
        <path d="M7 7H17" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7 11H17" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7 15H13" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="18" cy="16.5" r="2" fill="#22C55E"/>
        <path d="M18 15.5V17.5" stroke="#1A202C" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M17 16.5H19" stroke="#1A202C" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
      ),
      paymentgateway: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="5" width="20" height="14" rx="2" fill="#1A202C" className="path-1"/>
          <path d="M2 9H22" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="6" cy="15" r="1.5" fill="#22C55E" />
          <circle cx="10" cy="15" r="1.5" fill="#22C55E" />
          <path d="M17 13L18.5 14.5L21 12" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      
      users: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="11.7778" cy="17.5555" rx="7.77778" ry="4.44444" className="path-1" fill="#1A202C" />
          <circle className="path-2" cx="11.7778" cy="6.44444" r="4.44444" fill="#22C55E" />
        </svg>
      ),
      kyc: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="4" width="20" height="16" rx="2" fill="#1A202C" className="path-1"/>
          <circle cx="8" cy="10" r="2" fill="#22C55E" />
          <path d="M4 16C4.5 14 6 13 8 13C10 13 11.5 14 12 16" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round"/>
          <rect x="14" y="8" width="6" height="1.5" rx="0.75" fill="#22C55E"/>
          <rect x="14" y="11" width="5" height="1.5" rx="0.75" fill="#22C55E"/>
        </svg>
      ),
     
      team: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="7" cy="7" r="3" fill="#1A202C" className="path-1"/>
          <circle cx="17" cy="7" r="3" fill="#1A202C" className="path-1"/>
          <path d="M4 17C4 14.7909 5.79086 13 8 13H16C18.2091 13 20 14.7909 20 17V19H4V17Z" fill="#1A202C" className="path-1"/>
          <path d="M7 11C4.79086 11 3 12.7909 3 15V16H11V15C11 12.7909 9.20914 11 7 11Z" fill="#22C55E"/>
          <path d="M17 11C14.7909 11 13 12.7909 13 15V16H21V15C21 12.7909 19.2091 11 17 11Z" fill="#22C55E"/>
        </svg>
      ),
      logout: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="path-1" fill="#1A202C" d="M16 13v-2H7V8l-5 4 5 4v-3h9z"/>
          <path className="path-2" fill="#22C55E" d="M20 19h-6v-2h6v-6h-6v-2h6c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2z"/>
        </svg>
      ),
      settings: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="path-1" fill="#1A202C" d="M19.14 12.936a7.967 7.967 0 000-1.872l2.037-1.582a.5.5 0 00.121-.633l-1.928-3.338a.5.5 0 00-.605-.22l-2.397.96a7.977 7.977 0 00-1.62-.936l-.36-2.53a.5.5 0 00-.496-.429h-3.856a.5.5 0 00-.496.429l-.36 2.53a7.977 7.977 0 00-1.62.936l-2.397-.96a.5.5 0 00-.605.22L2.702 8.849a.5.5 0 00.121.633l2.037 1.582a7.967 7.967 0 000 1.872L2.823 14.67a.5.5 0 00-.121.633l1.928 3.338a.5.5 0 00.605.22l2.397-.96a7.977 7.977 0 001.62.936l.36 2.53a.5.5 0 00.496.429h3.856a.5.5 0 00.496-.429l.36-2.53a7.977 7.977 0 001.62-.936l2.397.96a.5.5 0 00.605-.22l1.928-3.338a.5.5 0 00-.121-.633l-2.037-1.582zM12 15a3 3 0 110-6 3 3 0 010 6z"/>
          <circle cx="12" cy="12" r="2" fill="#22C55E" className="path-2"/>
        </svg>
      ),
      commissionstructure: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="path-1" fill="#1A202C" d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8 0-4.41 3.59-8 8-8 4.41 0 8 3.59 8 8 0 4.41-3.59 8-8 8z"/>
          <path className="path-2" fill="#22C55E" d="M13 7h-2v6h6v-2h-4z"/>
        </svg>
      ),    
      createoperator: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="path-1" fill="#1A202C" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          <path className="path-2" fill="#22C55E" d="M19 11v2h-2v2h-2v-2h-2v-2h2v-2h2v2h2z"/>
        </svg>
      ),  
    };
    return icons[iconName] || null;
  };

  return (
    <>
      <aside className={`${isActive ? 'block xl:block' : 'hidden'} sm:hidden sidebar-wrapper w-[308px] fixed top-0 bg-white dark:bg-darkblack-600 h-full z-30 ${isActive ? 'active' : ''}`}>
        <div className="sidebar-header relative border-r border-b border-r-[#F7F7F7] border-b-[#F7F7F7] dark:border-darkblack-400 w-full h-[108px] flex items-center pl-[50px] z-30">
          <Link to="/">
            <img src="/assets/images/logo/HBPay.png" className="block dark:hidden" alt="logo" style={{height: '100px', width: '100px'}} />
            <img src="/assets/images/logo/logo-white.svg" className="hidden dark:block" alt="logo" />
          </Link>
          <button
            type="button"
            className={` absolute right-0 top-auto`}
            title="Ctrl+b"
            onClick={onToggle}
          >
            <span>
              <svg width="16" height="40" viewBox="0 0 16 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 10C0 4.47715 4.47715 0 10 0H16V40H10C4.47715 40 0 35.5228 0 30V10Z" fill="#22C55E" />
                <path d="M10 15L6 20.0049L10 25.0098" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </div>
        
        <div className="sidebar-body pl-[48px] pt-[14px] w-full relative z-30 h-screen overflow-style-none overflow-y-scroll pb-[200px]">
          <div className="nav-wrapper pr-[50px] mb-[36px]">
            {menuItems.map((section, sectionIndex) => (
              <div key={sectionIndex} className="item-wrapper mb-5">
                <h4 className="text-sm font-medium dark:text-bgray-50 text-bgray-700 border-b dark:border-darkblack-400 border-bgray-200 leading-7">
                  {section.title}
                </h4>
                <ul className="mt-2.5">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className={`item py-[11px] ${location.pathname === item.path ? 'text-success-300' : 'text-bgray-900 dark:text-white'}`}>
                      {item.name === 'Logout' ? (
                        <button onClick={handleLogout} className="w-full text-left">
                          <div className="flex items-center justify-between">
                            <div className="flex space-x-2.5 items-center">
                              <span className="item-ico">
                                {getIcon(item.icon)}
                              </span>
                              <span className="item-text text-lg font-medium leading-none">
                                {item.name}
                              </span>
                            </div>
                          </div>
                        </button>
                      ) : (
                        <Link to={item.path}>
                          <div className="flex items-center justify-between">
                            <div className="flex space-x-2.5 items-center">
                              <span className="item-ico">
                                {getIcon(item.icon)}
                              </span>
                              <span className="item-text text-lg font-medium leading-none">
                                {item.name}
                              </span>
                            </div>
                          </div>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </aside>
      
      {/* Mobile overlay */}
      <div className={`aside-overlay block sm:hidden w-full h-full fixed left-0 top-0 bg-black bg-opacity-30 ${isActive ? 'block' : 'hidden'}`} onClick={onToggle}></div>
      
      {/* Toast notification */}
      {showToast && (
        <Toast 
          message="Successfully logged out!" 
          type="success"
          duration={3000}
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
};

export default Sidebar;