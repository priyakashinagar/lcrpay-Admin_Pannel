import React, { useState, useEffect } from 'react';
import { getUserData } from '../utils/auth';

const Transaction = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [transferAmount, setTransferAmount] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleDropdown = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.classList.toggle('hidden');
    }
  };

  // Fetch wallet transactions from API
  const fetchWalletTransactions = async () => {
    try {
      console.log('🔍 Step 1: Starting fetchWalletTransactions');
      
      // Get token from localStorage - same approach as Dashboard component
      let authToken = localStorage.getItem('authToken');
      console.log('🔍 Step 2: Direct authToken from localStorage:', authToken);
      
      // If no direct token, try to get it from userAuth (same as Dashboard)
      if (!authToken) {
        console.log('🔍 Step 3: No direct authToken, checking userAuth...');
        const userAuth = localStorage.getItem('userAuth');
        console.log('🔍 Step 3.1: Raw userAuth from localStorage:', userAuth);
        
        if (userAuth) {
          try {
            const parsedAuth = JSON.parse(userAuth);
            console.log('🔍 Step 3.2: Parsed userAuth object:', parsedAuth);
            
            // Try the same path as Dashboard component
            authToken = parsedAuth.userData?.access_token;
            console.log('🔍 Step 3.3: Token from userData.access_token:', authToken);
            
            // If still no token, check all possible locations
            if (!authToken) {
              const possibleTokens = {
                'parsedAuth.token': parsedAuth?.token,
                'parsedAuth.access_token': parsedAuth?.access_token,
                'parsedAuth.userData.token': parsedAuth?.userData?.token,
                'parsedAuth.userData.access_token': parsedAuth?.userData?.access_token,
                'parsedAuth.userData.authToken': parsedAuth?.userData?.authToken,
                'parsedAuth.data.token': parsedAuth?.data?.token,
                'parsedAuth.data.access_token': parsedAuth?.data?.access_token,
              };
              
              console.log('🔍 Step 3.4: All possible token locations:', possibleTokens);
              
              // Find the first available token
              for (const [key, value] of Object.entries(possibleTokens)) {
                if (value) {
                  authToken = value;
                  console.log(`✅ Step 3.5: Found token at ${key}:`, authToken);
                  break;
                }
              }
            }
          } catch (parseError) {
            console.error('❌ Step 3.6: Error parsing userAuth JSON:', parseError);
          }
        }
      }

      console.log('🔍 Step 4: Final token for API call:', authToken);

      if (!authToken) {
        console.error('❌ Step 4.1: No authentication token found for wallet transactions');
        setLoading(false);
        return;
      }

      console.log('🔍 Step 5: Making API call with token:', authToken);

      const response = await fetch('https://api.lcrpay.com/admin/get_all_wallet_transactions', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
      });

      console.log('🔍 Step 6: API response status:', response.status);
      console.log('🔍 Step 6.1: API response headers:', Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ Step 6.2: API error response:', errorText);
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }

      const result = await response.json();
      console.log('🔍 Step 7: API response data:', result);
      
      if (result.status && result.data) {
        console.log('🔍 Step 8: Transforming API data, count:', result.data.length);
        
        // Transform API data to match existing UI structure
        const transformedTransactions = result.data.map((transaction, index) => ({
          id: index + 1,
          transactionBy: transaction.transactionBy || 'N/A',
          amount: `₹${transaction.amount.toFixed(2)}`,
          transaction_date: new Date(transaction.transaction_date).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          }),
          remark: transaction.remark,
          status: transaction.status,
          transaction_type: transaction.transaction_type,
          reference_id: transaction.reference_id,
          avatar: '/assets/images/avatar/user-40x40.png'
        }));
        
        console.log('✅ Step 9: Transformed transactions:', transformedTransactions);
        setTransactions(transformedTransactions);
      } else {
        console.log('❌ Step 8.1: Invalid API response structure:', result);
      }
    } catch (error) {
      console.error('❌ Error in fetchWalletTransactions:', error);
    } finally {
      console.log('🔍 Step 10: Setting loading to false');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWalletTransactions();
  }, []);

  // Sample chat messages
  const chatMessages = [
    { id: 1, type: 'received', message: 'Hi, What can I help you with?', time: '10:00 PM', avatar: '/assets/images/avatar/user-1.png' },
    { id: 2, type: 'received', message: 'audio', time: '10:00 PM', avatar: '/assets/images/avatar/user-1.png', isAudio: true },
    { id: 3, type: 'sent', message: 'Hi, What can I help you with?', time: '10:00 PM', avatar: '/assets/images/avatar/user-1.png' },
    { id: 4, type: 'received', message: 'Hi, What can I help you with?', time: '10:00 PM', avatar: '/assets/images/avatar/user-1.png' }
  ];

  return (
    <div className="2xl:flex 2xl:space-x-[48px]">
      <section className="2xl:flex-1 2xl:mb-0 mb-6">
        {/* Transaction Table */}
        <div className="w-full py-[20px] px-[24px] rounded-lg bg-white dark:bg-darkblack-600">
          <div className="flex flex-col space-y-5">
            {/* Search and Filter Section */}
            <div className="w-full flex h-[56px] space-x-4">
              <div className="lg:w-88 sm:w-70 sm:block hidden border border-transparent focus-within:border-success-300 h-full bg-bgray-100 dark:bg-darkblack-500 rounded-lg px-[18px]">
                <div className="flex w-full h-full items-center space-x-[15px]">
                  <span>
                    <svg
                      className="stroke-bgray-900 dark:stroke-white"
                      width="21"
                      height="22"
                      viewBox="0 0 21 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="9.80204"
                        cy="10.6761"
                        r="8.98856"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.0537 17.3945L19.5777 20.9094"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <label htmlFor="listSearch" className="w-full">
                    <input
                      type="text"
                      id="listSearch"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search by name, email, or others..."
                      className="search-input w-full bg-bgray-100 border-none px-0 focus:outline-none focus:ring-0 text-sm placeholder:text-sm text-bgray-600 tracking-wide placeholder:font-medium placeholder:text-bgray-500 dark:bg-darkblack-500 dark:text-white"
                    />
                  </label>
                </div>
              </div>
              <div className="flex-1 h-full relative">
                <button
                  onClick={() => toggleDropdown('table-filter')}
                  type="button"
                  className="w-full h-full flex justify-center items-center bg-bgray-100 dark:bg-darkblack-500 dark:border-darkblack-500 border border-bgray-300 rounded-lg"
                >
                  <div className="flex space-x-3 items-center">
                    <span>
                      <svg
                        width="18"
                        height="17"
                        viewBox="0 0 18 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.55169 13.5022H1.25098"
                          stroke="#0CAF60"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.3623 3.80984H16.663"
                          stroke="#0CAF60"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-base text-success-300 font-medium">Filters</span>
                  </div>
                </button>
                <div
                  id="table-filter"
                  className="rounded-lg w-full shadow-lg bg-white dark:bg-darkblack-500 absolute right-0 z-10 top-[60px] overflow-hidden hidden"
                >
                  <ul>
                    <li
                      onClick={() => toggleDropdown('table-filter')}
                      className="text-sm text-bgray-900 dark:text-white cursor-pointer px-5 py-2 hover:bg-bgray-100 hover:dark:bg-darkblack-600 font-semibold"
                    >
                      All Transactions
                    </li>
                    <li
                      onClick={() => toggleDropdown('table-filter')}
                      className="text-sm text-bgray-900 dark:text-white cursor-pointer px-5 py-2 hover:bg-bgray-100 hover:dark:bg-darkblack-600 font-semibold"
                    >
                      This Month
                    </li>
                    <li
                      onClick={() => toggleDropdown('table-filter')}
                      className="text-sm text-bgray-900 dark:text-white cursor-pointer px-5 py-2 hover:bg-bgray-100 hover:dark:bg-darkblack-600 font-semibold"
                    >
                      Last Month
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Filter Options */}
            <div className="filter-content w-full">
              <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
                <div className="w-full">
                  <p className="text-base text-bgray-900 dark:text-white leading-[24px] font-bold mb-2">
                    Location
                  </p>
                  <div className="w-full h-[56px] relative">
                    <button
                      onClick={() => toggleDropdown('province-filter')}
                      type="button"
                      className="w-full h-full rounded-lg bg-bgray-100 px-4 flex justify-between items-center relative dark:bg-darkblack-500"
                    >
                      <span className="text-base text-bgray-500">State or province</span>
                      <span>
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.58203 8.3186L10.582 13.3186L15.582 8.3186"
                            stroke="#A0AEC0"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                    <div
                      id="province-filter"
                      className="rounded-lg w-full shadow-lg bg-white dark:bg-darkblack-500 absolute right-0 z-10 top-14 overflow-hidden hidden"
                    >
                      <ul>
                        <li
                          onClick={() => toggleDropdown('province-filter')}
                          className="text-sm text-bgray-900 dark:text-white hover:dark:bg-darkblack-600 cursor-pointer px-5 py-2 hover:bg-bgray-100 font-semibold"
                        >
                          USA
                        </li>
                        <li
                          onClick={() => toggleDropdown('province-filter')}
                          className="text-sm text-bgray-900 dark:text-white hover:dark:bg-darkblack-600 cursor-pointer px-5 py-2 hover:bg-bgray-100 font-semibold"
                        >
                          Canada
                        </li>
                        <li
                          onClick={() => toggleDropdown('province-filter')}
                          className="text-sm text-bgray-900 dark:text-white hover:dark:bg-darkblack-600 cursor-pointer px-5 py-2 hover:bg-bgray-100 font-semibold"
                        >
                          UK
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-base text-bgray-900 dark:text-white leading-[24px] font-bold mb-2">
                    Amount Spent
                  </p>
                  <div className="w-full h-[56px] relative">
                    <button
                      onClick={() => toggleDropdown('amount-filter')}
                      type="button"
                      className="w-full h-full rounded-lg bg-bgray-100 px-4 flex justify-between items-center relative dark:bg-darkblack-500"
                    >
                      <span className="text-base text-bgray-500">&gt; $1,000</span>
                      <span>
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.58203 8.3186L10.582 13.3186L15.582 8.3186"
                            stroke="#A0AEC0"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                    <div
                      id="amount-filter"
                      className="rounded-lg w-full shadow-lg bg-white dark:bg-darkblack-500 absolute right-0 z-10 top-14 overflow-hidden hidden"
                    >
                      <ul>
                        <li
                          onClick={() => toggleDropdown('amount-filter')}
                          className="text-sm text-bgray-900 cursor-pointer px-5 py-2 hover:dark:bg-darkblack-600 hover:bg-bgray-100 font-semibold dark:text-white"
                        >
                          $0 - $100
                        </li>
                        <li
                          onClick={() => toggleDropdown('amount-filter')}
                          className="text-sm text-bgray-900 cursor-pointer px-5 py-2 hover:dark:bg-darkblack-600 hover:bg-bgray-100 font-semibold dark:text-white"
                        >
                          $100 - $500
                        </li>
                        <li
                          onClick={() => toggleDropdown('amount-filter')}
                          className="text-sm text-bgray-900 cursor-pointer px-5 py-2 hover:dark:bg-darkblack-600 dark:text-white hover:bg-bgray-100 font-semibold"
                        >
                          $500+
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-base text-bgray-900 dark:text-white leading-[24px] font-bold mb-2">
                    Transaction list Date
                  </p>
                  <div className="w-full h-[56px] relative">
                    <button
                      onClick={() => toggleDropdown('date-filter-table')}
                      type="button"
                      className="w-full h-full rounded-lg bg-bgray-100 px-4 flex justify-between items-center relative dark:bg-darkblack-500"
                    >
                      <span className="text-base text-bgray-500">Select date</span>
                      <span>
                        <svg
                          className="stroke-bgray-500 dark:stroke-white"
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.6758 5.8186H6.67578C5.57121 5.8186 4.67578 6.71403 4.67578 7.8186V19.8186C4.67578 20.9232 5.57121 21.8186 6.67578 21.8186H18.6758C19.7804 21.8186 20.6758 20.9232 20.6758 19.8186V7.8186C20.6758 6.71403 19.7804 5.8186 18.6758 5.8186Z"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.6758 3.8186V7.8186"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.67578 3.8186V7.8186"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.67578 11.8186H20.6758"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                    <div
                      id="date-filter-table"
                      className="rounded-lg w-full shadow-lg bg-white dark:bg-darkblack-500 absolute right-0 z-10 top-14 overflow-hidden hidden"
                    >
                      <ul>
                        <li
                          onClick={() => toggleDropdown('date-filter-table')}
                          className="text-sm text-bgray-900 cursor-pointer px-5 py-2 hover:dark:bg-darkblack-600 hover:bg-bgray-100 font-semibold dark:text-white"
                        >
                          Today
                        </li>
                        <li
                          onClick={() => toggleDropdown('date-filter-table')}
                          className="text-sm text-bgray-900 cursor-pointer px-5 py-2 hover:dark:bg-darkblack-600 hover:bg-bgray-100 font-semibold dark:text-white"
                        >
                          This Week
                        </li>
                        <li
                          onClick={() => toggleDropdown('date-filter-table')}
                          className="text-sm text-bgray-900 cursor-pointer px-5 py-2 hover:dark:bg-darkblack-600 dark:text-white hover:bg-bgray-100 font-semibold"
                        >
                          This Month
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-base text-bgray-900 dark:text-white leading-[24px] font-bold mb-2">
                    Type of transaction
                  </p>
                  <div className="w-full h-[56px] relative">
                    <button
                      onClick={() => toggleDropdown('trans-filter-tb')}
                      type="button"
                      className="w-full h-full rounded-lg bg-bgray-100 px-4 flex justify-between items-center relative dark:bg-darkblack-500"
                    >
                      <span className="text-base text-bgray-500">All transaction</span>
                      <span>
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.58203 8.3186L10.582 13.3186L15.582 8.3186"
                            stroke="#A0AEC0"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                    <div
                      id="trans-filter-tb"
                      className="w-full rounded-lg shadow-lg bg-white dark:bg-darkblack-500 absolute right-0 z-10 top-14 overflow-hidden hidden"
                    >
                      <ul>
                        <li
                          onClick={() => toggleDropdown('trans-filter-tb')}
                          className="text-sm text-bgray-900 cursor-pointer px-5 py-2 hover:bg-bgray-100 font-semibold hover:dark:bg-darkblack-600 dark:text-white"
                        >
                          Credit
                        </li>
                        <li
                          onClick={() => toggleDropdown('trans-filter-tb')}
                          className="text-sm text-bgray-900 cursor-pointer px-5 py-2 hover:bg-bgray-100 font-semibold hover:dark:bg-darkblack-600 dark:text-white"
                        >
                          Debit
                        </li>
                        <li
                          onClick={() => toggleDropdown('trans-filter-tb')}
                          className="text-sm text-bgray-900 cursor-pointer px-5 py-2 hover:bg-bgray-100 font-semibold hover:dark:bg-darkblack-600 dark:text-white"
                        >
                          Transfer
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Transaction Table */}
            <div className="table-content w-full overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-bgray-300 dark:border-darkblack-400">
                    <td className="">
                      <label className="text-center">
                        <input
                          type="checkbox"
                          className="focus:outline-none focus:ring-0 rounded-full border border-bgray-400 cursor-pointer w-5 h-5 text-success-300 dark:bg-darkblack-600 dark:border-darkblack-400"
                        />
                      </label>
                    </td>
                    <td className="py-5 px-6 xl:px-0 w-[250px] lg:w-auto inline-block">
                      <div className="w-full flex space-x-2.5 items-center">
                        <span className="text-base font-medium text-bgray-600 dark:text-bgray-50">
                          Transaction By
                        </span>
                        <span>
                          <svg
                            width="14"
                            height="15"
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.332 1.31567V13.3157"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M5.66602 11.3157L3.66602 13.3157L1.66602 11.3157"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </td>
                    <td className="py-5 px-6 xl:px-0">
                      <div className="w-full flex space-x-2.5 items-center">
                        <span className="text-base font-medium text-bgray-600 dark:text-bgray-50">Transaction Date</span>
                        <span>
                          <svg
                            width="14"
                            height="15"
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.332 1.31567V13.3157"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </td>
                    <td className="py-5 px-6 xl:px-0">
                      <div className="flex space-x-2.5 items-center">
                        <span className="text-base font-medium text-bgray-600 dark:text-gray-50">Remark</span>
                        <span>
                          <svg
                            width="14"
                            height="15"
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.332 1.31567V13.3157"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </td>
                    <td className="py-5 px-6 xl:px-0">
                      <div className="flex space-x-2.5 items-center">
                        <span className="text-base font-medium text-bgray-600 dark:text-gray-50">Status</span>
                        <span>
                          <svg
                            width="14"
                            height="15"
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.332 1.31567V13.3157"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </td>
                    <td className="py-5 px-6 xl:px-0">
                      <div className="flex space-x-2.5 items-center">
                        <span className="text-base font-medium text-bgray-600 dark:text-gray-50">Transaction Type</span>
                        <span>
                          <svg
                            width="14"
                            height="15"
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.332 1.31567V13.3157"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </td>
                    <td className="py-5 px-6 xl:px-0 w-[165px]">
                      <div className="w-full flex space-x-2.5 items-center">
                        <span className="text-base font-medium text-bgray-600 dark:text-bgray-50">Amount</span>
                        <span>
                          <svg
                            width="14"
                            height="15"
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.332 1.31567V13.3157"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </td>
                    <td className="py-5 px-6 xl:px-0">
                      <div className="flex space-x-2.5 items-center">
                        <span className="text-base font-medium text-bgray-600 dark:text-gray-50">Reference ID</span>
                        <span>
                          <svg
                            width="14"
                            height="15"
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.332 1.31567V13.3157"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </td>
                    <td className="py-5 px-6 xl:px-0"></td>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="9" className="py-8 text-center">
                        <div className="flex justify-center items-center">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-success-300"></div>
                          <span className="ml-3 text-bgray-600 dark:text-bgray-50">Loading transactions...</span>
                        </div>
                      </td>
                    </tr>
                  ) : transactions.length === 0 ? (
                    <tr>
                      <td colSpan="9" className="py-8 text-center">
                        <span className="text-bgray-600 dark:text-bgray-50">No transactions found</span>
                      </td>
                    </tr>
                  ) : (
                    transactions.map((transaction) => (
                      <tr key={transaction.id} className="border-b border-bgray-300 dark:border-darkblack-400">
                        <td className="">
                          <label className="text-center">
                            <input
                              type="checkbox"
                              className="focus:outline-none focus:ring-0 rounded-full border border-bgray-400 cursor-pointer w-5 h-5 text-success-300 dark:bg-darkblack-600 dark:border-darkblack-400"
                            />
                          </label>
                        </td>
                        <td className="py-5 px-6 xl:px-0">
                          <div className="w-full flex space-x-2.5 items-center">
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                              <img
                                src={transaction.avatar}
                                alt="avatar"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <p className="font-semibold text-base text-bgray-900 dark:text-white">
                              {transaction.transactionBy}
                            </p>
                          </div>
                        </td>
                        <td className="py-5 px-6 xl:px-0">
                          <p className="font-medium text-base text-bgray-900 dark:text-bgray-50">
                            {transaction.transaction_date}
                          </p>
                        </td>
                        <td className="py-5 px-6 xl:px-0">
                          <p className="font-medium text-sm text-bgray-900 dark:text-bgray-50" title={transaction.remark}>
                            {transaction.remark.length > 50 ? transaction.remark.substring(0, 50) + '...' : transaction.remark}
                          </p>
                        </td>
                        <td className="py-5 px-6 xl:px-0">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            transaction.status === 'success' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                              : transaction.status === 'failed'
                              ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                              : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                          }`}>
                            {transaction.status}
                          </span>
                        </td>
                        <td className="py-5 px-6 xl:px-0">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            transaction.transaction_type === 'credit' 
                              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' 
                              : 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
                          }`}>
                            {transaction.transaction_type}
                          </span>
                        </td>
                        <td className="py-5 px-6 xl:px-0 w-[165px]">
                          <p className="font-semibold text-base text-bgray-900 dark:text-white">
                            {transaction.amount}
                          </p>
                        </td>
                        <td className="py-5 px-6 xl:px-0">
                          <p className="font-mono text-sm text-bgray-900 dark:text-bgray-50">
                            {transaction.reference_id}
                          </p>
                        </td>
                        <td className="py-5 px-6 xl:px-0">
                          <div className="flex justify-center">
                            <button type="button">
                              <svg
                                width="18"
                                height="4"
                                viewBox="0 0 18 4"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8 2.00024C8 2.55253 8.44772 3.00024 9 3.00024C9.55228 3.00024 10 2.55253 10 2.00024C10 1.44796 9.55228 1.00024 9 1.00024C8.44772 1.00024 8 1.44796 8 2.00024Z"
                                  stroke="#A0AEC0"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M1 2.00024C1 2.55253 1.44772 3.00024 2 3.00024C2.55228 3.00024 3 2.55253 3 2.00024C3 1.44796 2.55228 1.00024 2 1.00024C1.44772 1.00024 1 1.44796 1 2.00024Z"
                                  stroke="#A0AEC0"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M15 2.00024C15 2.55253 15.4477 3.00024 16 3.00024C16.5523 3.00024 17 2.55253 17 2.00024C17 1.44796 16.5523 1.00024 16 1.00024C15.4477 1.00024 15 1.44796 15 2.00024Z"
                                  stroke="#A0AEC0"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="pagination-content w-full">
              <div className="w-full flex lg:justify-between justify-center items-center">
                <div className="lg:flex hidden space-x-4 items-center">
                  <span className="text-bgray-600 dark:text-bgray-50 text-sm font-semibold">Show result:</span>
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown('result-filter')}
                      type="button"
                      className="px-2.5 py-[14px] border rounded-lg border-bgray-300 dark:border-darkblack-400 flex space-x-6 items-center"
                    >
                      <span className="text-sm font-semibold text-bgray-900 dark:text-bgray-50">10</span>
                      <span>
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.03516 6.03271L8.03516 10.0327L12.0352 6.03271"
                            stroke="#A0AEC0"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                    <div
                      id="result-filter"
                      className="rounded-lg w-full shadow-lg bg-white dark:bg-darkblack-500 absolute right-0 z-10 top-14 overflow-hidden hidden"
                    >
                      <ul>
                        <li
                          onClick={() => toggleDropdown('result-filter')}
                          className="text-sm font-medium text-bgray-900 dark:text-white cursor-pointer px-5 py-2 hover:bg-bgray-100 hover:dark:bg-darkblack-600"
                        >
                          5
                        </li>
                        <li
                          onClick={() => toggleDropdown('result-filter')}
                          className="text-sm font-medium text-bgray-900 dark:text-white cursor-pointer px-5 py-2 hover:bg-bgray-100 hover:dark:bg-darkblack-600"
                        >
                          10
                        </li>
                        <li
                          onClick={() => toggleDropdown('result-filter')}
                          className="text-sm font-medium text-bgray-900 dark:text-white cursor-pointer px-5 py-2 hover:bg-bgray-100 hover:dark:bg-darkblack-600"
                        >
                          20
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex sm:space-x-[35px] space-x-5 items-center">
                  <button type="button">
                    <span>
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.7217 5.03271L7.72168 10.0327L12.7217 15.0327"
                          stroke="#A0AEC0"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="rounded-lg text-success-300 lg:text-sm text-xs font-bold lg:px-6 lg:py-2.5 px-4 py-1.5 bg-success-50 dark:bg-darkblack-500 dark:text-bgray-50"
                    >
                      1
                    </button>
                    <button
                      type="button"
                      className="rounded-lg text-bgray-500 lg:text-sm text-xs font-bold lg:px-6 lg:py-2.5 px-4 py-1.5 hover:bg-success-50 hover:text-success-300 transition duration-300 ease-in-out dark:hover:bg-darkblack-500"
                    >
                      2
                    </button>
                    <span className="text-bgray-500 text-sm">. . . .</span>
                    <button
                      type="button"
                      className="rounded-lg text-bgray-500 lg:text-sm text-xs font-bold lg:px-6 lg:py-2.5 px-4 py-1.5 hover:bg-success-50 hover:text-success-300 transition duration-300 ease-in-out dark:hover:bg-darkblack-500"
                    >
                      20
                    </button>
                  </div>
                  <button type="button">
                    <span>
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.72168 5.03271L12.7217 10.0327L7.72168 15.0327"
                          stroke="#A0AEC0"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sidebar Section */}
      <section className="2xl:w-[400px] w-full flex flex-col lg:flex-row 2xl:space-x-0 2xl:flex-col lg:space-x-6 space-x-0">
        {/* My Wallet Section */}
        <div className="2xl:w-full lg:w-1/2 w-full rounded-lg bg-white dark:bg-darkblack-600 dark:border dark:border-darkblack-400 px-[42px] py-5 2xl:mb-6 lg:mb-0 mb-6">
          <div className="my-wallet w-full mb-8">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-bold text-bgray-900 dark:text-white">My Wallet</h3>
              <div className="payment-select relative mb-3">
                <button
                  onClick={() => toggleDropdown('cardsOptions')}
                  type="button"
                >
                  <svg
                    width="18"
                    height="4"
                    viewBox="0 0 18 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 2C8 2.55228 8.44772 3 9 3C9.55228 3 10 2.55228 10 2C10 1.44772 9.55228 1 9 1C8.44772 1 8 1.44772 8 2Z"
                      stroke="#CBD5E0"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 2C1 2.55228 1.44772 3 2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2Z"
                      stroke="#CBD5E0"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 2C15 2.55228 15.4477 3 16 3C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1C15.4477 1 15 1.44772 15 2Z"
                      stroke="#CBD5E0"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div
                  id="cardsOptions"
                  className="rounded-lg shadow-lg min-w-[150px] bg-white dark:bg-darkblack-500 absolute right-0 z-10 top-full hidden overflow-hidden"
                >
                  <ul>
                    <li
                      onClick={() => toggleDropdown('cardsOptions')}
                      className="text-sm text-bgray-900 cursor-pointer px-5 py-2 hover:bg-bgray-100 hover:dark:bg-darkblack-600 dark:text-white font-semibold"
                    >
                      Master Card
                    </li>
                    <li
                      onClick={() => toggleDropdown('cardsOptions')}
                      className="text-sm text-bgray-900 cursor-pointer px-5 py-2 hover:bg-bgray-100 hover:dark:bg-darkblack-600 dark:text-white font-semibold"
                    >
                      VISA Card
                    </li>
                    <li
                      onClick={() => toggleDropdown('cardsOptions')}
                      className="text-sm text-bgray-900 cursor-pointer px-5 py-2 hover:bg-bgray-100 hover:dark:bg-darkblack-600 dark:text-white font-semibold"
                    >
                      Others
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="card-slider relative md:w-[340px] w-[280px]">
                <div className="w-full">
                  <img src="/assets/images/payments/card-1.svg" alt="card" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <h3 className="text-lg font-bold text-bgray-900 dark:text-white mb-4">Quick Transfer</h3>
            <div className="payment-select relative mb-3">
              <button
                onClick={() => toggleDropdown('paymentFilter')}
                type="button"
                className="px-5 w-full h-[56px] border border-bgray-200 dark:border-darkblack-400 flex justify-between items-center rounded-lg overflow-hidden"
              >
                <div className="flex space-x-2 items-center">
                  <span>
                    <img src="/assets/images/payments/master-mini.svg" alt="master" />
                  </span>
                  <span className="text-sm font-medium text-bgray-900 dark:text-white">Debit</span>
                </div>
                <div className="flex space-x-2 items-center">
                  <span className="text-sm font-bold text-bgray-900 dark:text-bgray-50">$10,431</span>
                  <span className="text-sm font-medium text-bgray-900">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="#A0AEC0"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </button>
              <div
                id="paymentFilter"
                className="rounded-lg shadow-lg w-full bg-white dark:bg-darkblack-500 absolute right-0 z-10 top-full hidden overflow-hidden"
              >
                <ul>
                  <li
                    onClick={() => toggleDropdown('paymentFilter')}
                    className="text-sm text-bgray-900 dark:text-white cursor-pointer px-5 py-2 hover:bg-bgray-100 hover:dark:bg-darkblack-600 font-semibold"
                  >
                    Jan 10 - Jan 16
                  </li>
                  <li
                    onClick={() => toggleDropdown('paymentFilter')}
                    className="text-sm text-bgray-900 dark:text-white cursor-pointer px-5 py-2 hover:bg-bgray-100 hover:dark:bg-darkblack-600 font-semibold"
                  >
                    Jan 17 - Jan 23
                  </li>
                  <li
                    onClick={() => toggleDropdown('paymentFilter')}
                    className="text-sm text-bgray-900 dark:text-white cursor-pointer px-5 py-2 hover:bg-bgray-100 hover:dark:bg-darkblack-600 font-semibold"
                  >
                    Jan 24 - Jan 30
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full rounded-lg border border-bgray-200 dark:border-darkblack-400 focus-within:border-success-300 p-4 h-[98px] flex flex-col justify-between">
              <p className="text-sm text-bgray-600 dark:text-bgray-50 font-medium">Enter amount</p>
              <div className="w-full h-[35px] flex justify-between items-center">
                <span className="text-2xl text-bgray-900 dark:text-white font-bold">$</span>
                <label className="w-full">
                  <input
                    type="text"
                    value={transferAmount}
                    onChange={(e) => setTransferAmount(e.target.value)}
                    className="focus:outline-none w-full dark:bg-darkblack-600 p-0 focus:ring-0 border-none text-2xl font-bold dark:border-darkblack-400 text-bgray-900 dark:text-white"
                  />
                </label>
                <div>
                  <img src="/assets/images/avatar/members-3.png" alt="members" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Chat Section */}
        <div className="2xl:w-full lg:w-1/2 w-full rounded-lg bg-white dark:bg-darkblack-600 dark:border dark:border-darkblack-400 flex flex-col justify-between">
          <div className="px-[26px] py-6 border-b border-bgray-300 dark:border-darkblack-400 flex justify-between">
            <h1 className="text-2xl font-semibold text-bgray-900 dark:text-white">Team Chat</h1>
            <div className="flex space-x-3 items-center">
              <div>
                <img src="/assets/images/avatar/members-3.png" alt="members" />
              </div>
              <button
                type="button"
                className="w-[36px] h-[36px] rounded-full bg-bgray-200 dark:bg-darkblack-500 flex justify-center items-center"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.75 1C7.75 0.585786 7.41421 0.25 7 0.25C6.58579 0.25 6.25 0.585786 6.25 1V6.25H1C0.585786 6.25 0.25 6.58579 0.25 7C0.25 7.41421 0.585786 7.75 1 7.75H6.25V13C6.25 13.4142 6.58579 13.75 7 13.75C7.41421 13.75 7.75 13.4142 7.75 13V7.75H13C13.4142 7.75 13.75 7.41421 13.75 7C13.75 6.58579 13.4142 6.25 13 6.25H7.75V1Z"
                    fill="#718096"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="lg:px-[35px] px-5 lg:py-[38px] py-6 w-full">
            <div className="flex flex-col space-y-[32px] mb-5">
              {chatMessages.map((message) => (
                <div key={message.id} className={`flex ${message.type === 'sent' ? 'justify-end' : 'justify-start'}`}>
                  <div className="flex space-x-3 items-end">
                    {message.type === 'sent' && (
                      <span className="text-bgray-500 text-xs font-medium">{message.time}</span>
                    )}
                    <div className="flex space-x-2 items-center">
                      {message.type === 'received' && (
                        <div className="w-[36px] h-[35px] rounded-full overflow-hidden">
                          <img
                            src={message.avatar}
                            alt="avatar"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className={`${message.type === 'sent' ? 'p-3 bg-bgray-100 dark:bg-darkblack-500 rounded-l-lg rounded-b-lg' : message.isAudio ? '' : 'p-3 bg-bgray-100 dark:bg-darkblack-500 rounded-lg'}`}>
                        {message.isAudio ? (
                          <img
                            src="/assets/images/others/mp3.png"
                            className="dark:hidden block"
                            alt="mp3"
                          />
                        ) : (
                          <p className="text-bgray-900 dark:text-white text-sm font-medium">
                            {message.message}
                          </p>
                        )}
                      </div>
                      {message.type === 'sent' && (
                        <div className="w-[36px] h-[35px] rounded-full overflow-hidden">
                          <img
                            src={message.avatar}
                            alt="avatar"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                    </div>
                    {message.type === 'received' && (
                      <span className="text-bgray-500 text-xs font-medium">{message.time}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full h-[58px] flex space-x-4 items-center">
              <div className="lg:w-[318px] w-full h-full border border-transparent dark:border-darkblack-400 focus-within:border-success-300 bg-bgray-100 dark:bg-darkblack-500 rounded-lg px-5 flex justify-between items-center">
                <span>
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.66652 4.1112L5.22208 8.55565C4.60843 9.1693 4.60843 10.1642 5.22208 10.7779C5.83573 11.3915 6.83065 11.3915 7.4443 10.7779L11.8887 6.33343C13.116 5.10613 13.116 3.11628 11.8887 1.88898C10.6614 0.661681 8.6716 0.661681 7.4443 1.88898L2.99985 6.33343C1.1589 8.17438 1.1589 11.1591 2.99985 13.0001C4.8408 14.841 7.82557 14.841 9.66652 13.0001L14.111 8.55565"
                      stroke="#CBD5E0"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <label className="w-full">
                  <input
                    type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="Type your Message..."
                    className="w-full bg-bgray-100 dark:bg-darkblack-500 pl-[15px] p-0 focus:outline-none border-none focus:ring-0 placeholder:text-sm font-medium placeholder:text-bgray-400 placeholder:font-medium dark:text-white"
                  />
                </label>
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 11V12C19 15.866 15.866 19 12 19M5 11V12C5 15.866 8.13401 19 12 19M12 19V22M12 22H15M12 22H9M12 16C9.79086 16 8 14.2091 8 12V6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V12C16 14.2091 14.2091 16 12 16Z"
                      stroke="#A0AEC0"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <button type="button">
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.3894 0H2.61094C0.339326 0 -0.844596 2.63548 0.696196 4.26234L3.78568 7.52441C4.23 7.99355 4.47673 8.60858 4.47673 9.24704V15.4553C4.47673 17.8735 7.61615 18.9233 9.13941 17.0145L19.4463 4.09894C20.7775 2.43071 19.5578 0 17.3894 0Z"
                    fill="#22C55E"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transaction;
