import React, { useState } from 'react';

const Billers = () => {
  // const [amount, setAmount] = useState('');
  // const [showModal, setShowModal] = useState(false);
  // const [modalStep, setModalStep] = useState(1);
  // const [selectedPayment, setSelectedPayment] = useState('visa');
  // const [transferAmount, setTransferAmount] = useState('');

  // const toggleDropdown = (id) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.classList.toggle('hidden');
  //   }
  // };

  // const handlePaymentSelect = (type) => {
  //   setSelectedPayment(type);
  // };

  // const nextModalStep = () => {
  //   setModalStep(modalStep + 1);
  // };

  // const closeModal = () => {
  //   setShowModal(false);
  //   setModalStep(1);
  // };

  // return (
  //   <div className="2xl:flex 2xl:space-x-[48px]">
  //     <div className="2xl:w-[424px]">
  //       {/* Total Balance Card */}
  //       <div className="w-full rounded-xl bg-white dark:bg-darkblack-600 px-7 py-11 mb-[48px]">
  //         <div className="border border-bgray-300 dark:border-darkblack-400 rounded-lg p-8 pb-12">
  //           <h3 className="text-2xl font-semibold text-bgray-900 dark:text-white">
  //             Total Balance
  //           </h3>
  //           <h2 className="text-4xl font-bold font-poppins text-bgray-900 dark:text-white mb-2">
  //             $88,232.00
  //             <span className="text-base font-medium uppercase text-bgray-500">USD</span>
  //           </h2>
  //           <div className="flex gap-4">
  //             <span className="text-base font-medium text-bgray-500 dark:text-darkblack-300">
  //               11 April 2022
  //             </span>
  //             <span className="flex">
  //               <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  //                 <path
  //                   d="M17.5 5.83325L10.8333 12.4999L7.5 9.16659L2.5 14.1666M10.8333 5.83325H17.5H10.8333ZM17.5 5.83325V12.4999V5.83325Z"
  //                   stroke="#00C566"
  //                   strokeWidth="1.5"
  //                   strokeLinecap="round"
  //                   strokeLinejoin="round"
  //                 />
  //               </svg>
  //               <span className="text-base font-semibold text-success-300">2,05%</span>
  //             </span>
  //           </div>
  //         </div>
  //         <div className="flex justify-center -mt-6">
  //           <button className="py-3 px-6 border bg-white border-bgray-500 rounded-lg text-sm font-medium text-bgray-600 dark:bg-darkblack-600 dark:text-white">
  //             Withdraw All Earning
  //           </button>
  //         </div>
  //         <button className="bg-success-300 hover:bg-success-400 transition-all text-white py-4 w-full font-bold rounded-lg mt-14">
  //           Add Money
  //         </button>
  //       </div>

  //       {/* My Wallet Section */}
  //       <div className="w-full relative rounded-lg bg-white dark:bg-darkblack-600 dark:border dark:border-darkblack-400 px-[42px] py-5 mb-6">
  //         <div className="my-wallet w-full mb-8">
  //           <div className="flex justify-between items-center mb-3">
  //             <h3 className="text-lg font-bold text-bgray-900 dark:text-white">My Wallet</h3>
  //             <div className="payment-select relative mb-3">
  //               <button
  //                 onClick={() => toggleDropdown('cardsOptions')}
  //                 type="button"
  //               >
  //                 <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
  //                   <path
  //                     d="M8 2C8 2.55228 8.44772 3 9 3C9.55228 3 10 2.55228 10 2C10 1.44772 9.55228 1 9 1C8.44772 1 8 1.44772 8 2Z"
  //                     stroke="#CBD5E0"
  //                     strokeWidth="2"
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                   />
  //                   <path
  //                     d="M1 2C1 2.55228 1.44772 3 2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2Z"
  //                     stroke="#CBD5E0"
  //                     strokeWidth="2"
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                   />
  //                   <path
  //                     d="M15 2C15 2.55228 15.4477 3 16 3C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1C15.4477 1 15 1.44772 15 2Z"
  //                     stroke="#CBD5E0"
  //                     strokeWidth="2"
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                   />
  //                 </svg>
  //               </button>
  //               <div
  //                 id="cardsOptions"
  //                 className="rounded-lg shadow-lg min-w-[150px] bg-white dark:bg-darkblack-500 absolute right-0 z-10 top-full hidden overflow-hidden"
  //               >
  //                 <ul>
  //                   <li
  //                     onClick={() => toggleDropdown('cardsOptions')}
  //                     className="text-sm text-bgray-900 dark:text-white cursor-pointer px-5 py-2 hover:bg-bgray-100 hover:dark:bg-darkblack-600 font-semibold"
  //                   >
  //                     Master Card
  //                   </li>
  //                   <li
  //                     onClick={() => toggleDropdown('cardsOptions')}
  //                     className="text-sm text-bgray-900 dark:text-white cursor-pointer px-5 py-2 hover:bg-bgray-100 hover:dark:bg-darkblack-600 font-semibold"
  //                   >
  //                     VISA Card
  //                   </li>
  //                   <li
  //                     onClick={() => toggleDropdown('cardsOptions')}
  //                     className="text-sm text-bgray-900 dark:text-white cursor-pointer px-5 py-2 hover:bg-bgray-100 hover:dark:bg-darkblack-600 font-semibold"
  //                   >
  //                     Others
  //                   </li>
  //                 </ul>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="flex justify-center">
  //             <div className="card-slider relative md:w-[340px] w-[280px]">
  //               <div className="w-full">
  //                 <img src="/assets/images/payments/card-1.svg" alt="card" />
  //               </div>
  //             </div>
  //           </div>
  //         </div>

  //         {/* Quick Transfer Section */}
  //         <div className="w-full">
  //           <h3 className="text-lg font-bold text-bgray-900 dark:text-white mb-4">Quick Transfer</h3>
  //           <div className="payment-select relative mb-3">
  //             <button
  //               onClick={() => toggleDropdown('paymentFilter')}
  //               type="button"
  //               className="px-5 w-full h-[56px] border border-bgray-200 dark:border-darkblack-400 flex justify-between items-center rounded-lg overflow-hidden"
  //             >
  //               <div className="flex space-x-2 items-center">
  //                 <span>
  //                   <img src="/assets/images/payments/master-mini.svg" alt="master" />
  //                 </span>
  //                 <span className="text-sm font-medium text-bgray-900 dark:text-white">Debit</span>
  //               </div>
  //               <div className="flex space-x-2 items-center">
  //                 <span className="text-sm font-bold text-bgray-900 dark:text-white">$10,431</span>
  //                 <span className="text-sm font-medium text-bgray-900">
  //                   <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  //                     <path
  //                       d="M4 6L8 10L12 6"
  //                       stroke="#A0AEC0"
  //                       strokeWidth="1.5"
  //                       strokeLinecap="round"
  //                       strokeLinejoin="round"
  //                     />
  //                   </svg>
  //                 </span>
  //               </div>
  //             </button>
  //             <div
  //               id="paymentFilter"
  //               className="rounded-lg shadow-lg w-full bg-white dark:bg-darkblack-500 absolute right-0 z-10 top-full hidden overflow-hidden"
  //             >
  //               <ul>
  //                 <li
  //                   onClick={() => toggleDropdown('paymentFilter')}
  //                   className="text-sm text-bgray-900 dark:text-white cursor-pointer px-5 py-2 hover:bg-bgray-100 hover:dark:bg-darkblack-600 font-semibold"
  //                 >
  //                   Jan 10 - Jan 16
  //                 </li>
  //                 <li
  //                   onClick={() => toggleDropdown('paymentFilter')}
  //                   className="text-sm text-bgray-900 dark:text-white cursor-pointer px-5 py-2 hover:bg-bgray-100 hover:dark:bg-darkblack-600 font-semibold"
  //                 >
  //                   Jan 17 - Jan 23
  //                 </li>
  //                 <li
  //                   onClick={() => toggleDropdown('paymentFilter')}
  //                   className="text-sm text-bgray-900 dark:text-white cursor-pointer px-5 py-2 hover:bg-bgray-100 hover:dark:bg-darkblack-600 font-semibold"
  //                 >
  //                   Jan 24 - Jan 30
  //                 </li>
  //               </ul>
  //             </div>
  //           </div>
  //           <div className="w-full rounded-lg border border-bgray-200 dark:border-darkblack-400 focus-within:border-success-300 p-4 h-[98px] flex flex-col justify-between">
  //             <p className="text-sm text-bgray-600 dark:text-bgray-50 font-medium">Enter amount</p>
  //             <div className="w-full h-[35px] flex justify-between items-center">
  //               <span className="text-2xl text-bgray-900 dark:text-white font-bold">$</span>
  //               <label className="w-full">
  //                 <input
  //                   type="text"
  //                   value={amount}
  //                   onChange={(e) => setAmount(e.target.value)}
  //                   className="focus:outline-none w-full dark:bg-darkblack-600 p-0 focus:ring-0 border-none text-2xl font-bold dark:border-darkblack-400 text-bgray-900 dark:text-white"
  //                 />
  //               </label>
  //               <div>
  //                 <img src="/assets/images/avatar/members-3.png" alt="members" />
  //               </div>
  //             </div>
  //           </div>
  //           <button
  //             onClick={() => setShowModal(true)}
  //             className="bg-success-300 hover:bg-success-400 transition-all text-white py-4 w-full font-bold rounded-lg mt-7"
  //           >
  //             Send Money
  //           </button>
  //         </div>
  //       </div>
  //     </div>

  //     <div className="2xl:flex-1">
  //       <div className="w-full xl:flex xl:space-x-[24px]">
  //         {/* Overall Balance Chart */}
  //         <div className="xl:w-[613px] w-full bg-white dark:bg-darkblack-600 flex flex-col justify-between rounded-lg px-8 py-7 mb-12">
  //           <div className="flex justify-between items-center pb-2 mb-2">
  //             <div>
  //               <span className="text-sm font-medium text-bgray-600 dark:text-white">Overall Balance</span>
  //               <div className="flex items-center space-x-2">
  //                 <h3 className="text-2xl text-bgray-900 font-bold leading-[36px] dark:text-white">$48,574.21</h3>
  //                 <span className="text-sm font-medium text-success-300 dark:text-white">+20%</span>
  //               </div>
  //             </div>
  //             <div className="flex space-x-[28px] items-center">
  //               <div className="flex space-x-2 items-center">
  //                 <div className="w-3 h-3 bg-success-300 rounded-full"></div>
  //                 <span className="text-bgray-700 dark:text-white text-sm font-medium">Signed</span>
  //               </div>
  //               <div className="flex space-x-2 items-center">
  //                 <div className="w-3 h-3 bg-orange rounded-full"></div>
  //                 <span className="text-bgray-700 text-sm font-medium">Lost</span>
  //               </div>
  //             </div>
  //             <div className="date-filter relative">
  //               <button
  //                 onClick={() => toggleDropdown('date-filter-body')}
  //                 type="button"
  //                 className="px-3 py-2 bg-bgray-100 dark:bg-darkblack-500 dark:text-white flex space-x-1 items-center rounded-lg overflow-hidden"
  //               >
  //                 <span className="text-sm font-medium text-bgray-900 dark:text-white">Jan 10 - Jan 16</span>
  //                 <span>
  //                   <svg
  //                     className="stroke-bgray-900 dark:stroke-gray-50"
  //                     width="16"
  //                     height="17"
  //                     viewBox="0 0 16 17"
  //                     fill="none"
  //                     xmlns="http://www.w3.org/2000/svg"
  //                   >
  //                     <path
  //                       d="M4 6.5L8 10.5L12 6.5"
  //                       strokeWidth="1.5"
  //                       strokeLinecap="round"
  //                       strokeLinejoin="round"
  //                     />
  //                   </svg>
  //                 </span>
  //               </button>
  //               <div
  //                 id="date-filter-body"
  //                 className="rounded-lg shadow-lg bg-white dark:bg-darkblack-500 absolute right-0 z-10 top-[44px] hidden overflow-hidden"
  //               >
  //                 <ul>
  //                   <li
  //                     onClick={() => toggleDropdown('date-filter-body')}
  //                     className="text-sm text-bgray-900 dark:text-white cursor-pointer px-5 py-2 hover:bg-bgray-100 font-semibold hover:dark:bg-darkblack-600"
  //                   >
  //                     Jan 10 - Jan 16
  //                   </li>
  //                   <li
  //                     onClick={() => toggleDropdown('date-filter-body')}
  //                     className="text-sm text-bgray-900 dark:text-white cursor-pointer px-5 py-2 hover:bg-bgray-100 font-semibold hover:dark:bg-darkblack-600"
  //                   >
  //                     Jan 17 - Jan 23
  //                   </li>
  //                   <li
  //                     onClick={() => toggleDropdown('date-filter-body')}
  //                     className="text-sm text-bgray-900 dark:text-white cursor-pointer px-5 py-2 hover:bg-bgray-100 font-semibold hover:dark:bg-darkblack-600"
  //                   >
  //                     Jan 24 - Jan 30
  //                   </li>
  //                 </ul>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="w-full">
  //             <div className="h-[280px] flex items-center justify-center bg-bgray-50 dark:bg-darkblack-500 rounded-lg">
  //               <p className="text-bgray-600 dark:text-bgray-50">Chart placeholder - Integrate with Chart.js</p>
  //             </div>
  //           </div>
  //         </div>

  //         {/* Efficiency Card */}
  //         <div className="flex-1 xl:block hidden bg-white dark:bg-darkblack-600 rounded-lg mb-12">
  //           <div className="flex px-5 py-3 justify-between items-center border-b border-bgray-300 dark:border-darkblack-400">
  //             <h3 className="text-bgray-900 dark:text-white text-xl font-bold">Efficiency</h3>
  //             <div className="date-filter relative">
  //               <button
  //                 onClick={() => toggleDropdown('month-filter')}
  //                 type="button"
  //                 className="flex space-x-1 items-center"
  //               >
  //                 <span className="text-base font-semibold text-bgray-900 dark:text-bgray-50">Monthly</span>
  //                 <span>
  //                   <svg
  //                     className="stroke-bgray-900 dark:stroke-bgray-50"
  //                     width="16"
  //                     height="17"
  //                     viewBox="0 0 16 17"
  //                     fill="none"
  //                     xmlns="http://www.w3.org/2000/svg"
  //                   >
  //                     <path
  //                       d="M4 6.5L8 10.5L12 6.5"
  //                       strokeWidth="1.5"
  //                       strokeLinecap="round"
  //                       strokeLinejoin="round"
  //                     />
  //                   </svg>
  //                 </span>
  //               </button>
  //               <div
  //                 id="month-filter"
  //                 className="rounded-lg shadow-lg bg-white dark:bg-darkblack-500 absolute right-0 z-10 top-5 overflow-hidden hidden"
  //               >
  //                 <ul>
  //                   <li
  //                     onClick={() => toggleDropdown('month-filter')}
  //                     className="text-sm text-bgray-900 dark:text-white cursor-pointer px-5 py-2 hover:bg-bgray-100 hover:dark:bg-darkblack-600 font-semibold"
  //                   >
  //                     January
  //                   </li>
  //                   <li
  //                     onClick={() => toggleDropdown('month-filter')}
  //                     className="text-sm text-bgray-900 dark:text-white cursor-pointer px-5 py-2 hover:bg-bgray-100 hover:dark:bg-darkblack-600 font-semibold"
  //                   >
  //                     February
  //                   </li>
  //                   <li
  //                     onClick={() => toggleDropdown('month-filter')}
  //                     className="text-sm text-bgray-900 dark:text-white cursor-pointer px-5 py-2 hover:bg-bgray-100 hover:dark:bg-darkblack-600 font-semibold"
  //                   >
  //                     March
  //                   </li>
  //                 </ul>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="px-[55px] py-6">
  //             <div className="flex space-x-8 items-center mb-4">
  //               <div className="w-[180px] relative">
  //                 <div className="h-[168px] flex items-center justify-center bg-bgray-50 dark:bg-darkblack-500 rounded-lg">
  //                   <p className="text-bgray-600 dark:text-bgray-50 text-sm">Pie Chart</p>
  //                 </div>
  //               </div>
  //               <div className="counting">
  //                 <div className="mb-6">
  //                   <div className="flex items-center space-x-[2px]">
  //                     <p className="text-success-300 text-lg font-bold">$5,230</p>
  //                     <span>
  //                       <svg
  //                         width="14"
  //                         height="12"
  //                         viewBox="0 0 14 12"
  //                         fill="none"
  //                         xmlns="http://www.w3.org/2000/svg"
  //                       >
  //                         <path
  //                           fillRule="evenodd"
  //                           clipRule="evenodd"
  //                           d="M10.7749 0.558058C10.5309 0.313981 10.1351 0.313981 9.89107 0.558058L7.39107 3.05806C7.14699 3.30214 7.14699 3.69786 7.39107 3.94194C7.63514 4.18602 8.03087 4.18602 8.27495 3.94194L9.70801 2.50888V11C9.70801 11.3452 9.98783 11.625 10.333 11.625C10.6782 11.625 10.958 11.3452 10.958 11V2.50888L12.3911 3.94194C12.6351 4.18602 13.0309 4.18602 13.2749 3.94194C13.519 3.69786 13.519 3.30214 13.2749 3.05806L10.7749 0.558058Z"
  //                           fill="#22C55E"
  //                         />
  //                       </svg>
  //                     </span>
  //                   </div>
  //                   <p className="text-bgray-600 dark:text-bgray-50 text-base font-medium">Arrival</p>
  //                 </div>
  //                 <div>
  //                   <div className="flex items-center space-x-[2px]">
  //                     <p className="text-bgray-900 dark:text-white text-lg font-bold">$6,230</p>
  //                   </div>
  //                   <p className="text-bgray-600 dark:text-bgray-50 text-base font-medium">Spending</p>
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="conversion-unit">
  //               <h3 className="text-lg font-medium leading-[24px] dark:text-white text-bgray-900 pb-2.5">
  //                 Conversion
  //               </h3>
  //               <div className="flex space-x-3 mb-4 w-full h-[48px]">
  //                 <div className="relative">
  //                   <button
  //                     onClick={() => toggleDropdown('usd-filter')}
  //                     type="button"
  //                     className="w-[80px] px-2.5 py-[14px] border rounded-lg border-bgray-300 dark:border-darkblack-400 dark:bg-darkblack-500 dark:text-white flex flex-row justify-center items-center"
  //                   >
  //                     <span className="text-sm font-bold text-bgray-900 dark:text-white">USD</span>
  //                     <span>
  //                       <svg
  //                         width="17"
  //                         height="17"
  //                         viewBox="0 0 17 17"
  //                         fill="none"
  //                         xmlns="http://www.w3.org/2000/svg"
  //                       >
  //                         <path
  //                           d="M4.03516 6.03271L8.03516 10.0327L12.0352 6.03271"
  //                           stroke="#A0AEC0"
  //                           strokeWidth="1.5"
  //                           strokeLinecap="round"
  //                           strokeLinejoin="round"
  //                         />
  //                       </svg>
  //                     </span>
  //                   </button>
  //                   <div
  //                     id="usd-filter"
  //                     className="rounded-lg w-full shadow-lg bg-white dark:bg-darkblack-500 absolute right-0 z-10 top-14 overflow-hidden hidden"
  //                   >
  //                     <ul>
  //                       <li
  //                         onClick={() => toggleDropdown('usd-filter')}
  //                         className="text-sm text-bgray-900 cursor-pointer px-5 py-2 dark:text-white hover:bg-bgray-100 hover:dark:bg-darkblack-500 font-semibold"
  //                       >
  //                         USD
  //                       </li>
  //                       <li
  //                         onClick={() => toggleDropdown('usd-filter')}
  //                         className="text-sm text-bgray-900 cursor-pointer px-5 py-2 dark:text-white hover:bg-bgray-100 hover:dark:bg-darkblack-500 font-semibold"
  //                       >
  //                         EUR
  //                       </li>
  //                       <li
  //                         onClick={() => toggleDropdown('usd-filter')}
  //                         className="text-sm text-bgray-900 cursor-pointer px-5 py-2 dark:text-white hover:bg-bgray-100 hover:dark:bg-darkblack-500 font-semibold"
  //                       >
  //                         GBP
  //                       </li>
  //                     </ul>
  //                   </div>
  //                 </div>
  //                 <div className="w-full h-full overflow-hidden">
  //                   <input
  //                     type="text"
  //                     className="w-full h-full border border-bgray-300 rounded-lg focus:ring-0 dark:bg-darkblack-500 dark:border-darkblack-400 focus:border-success-300 text-base text-bgray-900 dark:text-white"
  //                   />
  //                 </div>
  //               </div>
  //               <div className="flex space-x-3 w-full h-[48px]">
  //                 <div className="relative">
  //                   <button
  //                     onClick={() => toggleDropdown('eur-filter')}
  //                     type="button"
  //                     className="w-[80px] px-2.5 py-[14px] border rounded-lg border-bgray-300 dark:border-darkblack-400 dark:bg-darkblack-500 dark:text-white flex flex-row justify-center items-center"
  //                   >
  //                     <span className="text-sm font-bold text-bgray-900 dark:text-white">EUR</span>
  //                     <span>
  //                       <svg
  //                         width="17"
  //                         height="17"
  //                         viewBox="0 0 17 17"
  //                         fill="none"
  //                         xmlns="http://www.w3.org/2000/svg"
  //                       >
  //                         <path
  //                           d="M4.03516 6.03271L8.03516 10.0327L12.0352 6.03271"
  //                           stroke="#A0AEC0"
  //                           strokeWidth="1.5"
  //                           strokeLinecap="round"
  //                           strokeLinejoin="round"
  //                         />
  //                       </svg>
  //                     </span>
  //                   </button>
  //                   <div
  //                     id="eur-filter"
  //                     className="rounded-lg w-full shadow-lg bg-white dark:bg-darkblack-500 absolute right-0 z-10 top-14 overflow-hidden hidden"
  //                   >
  //                     <ul>
  //                       <li
  //                         onClick={() => toggleDropdown('eur-filter')}
  //                         className="text-sm text-bgray-900 cursor-pointer px-5 py-2 dark:text-white hover:bg-bgray-100 hover:dark:bg-darkblack-500 font-semibold"
  //                       >
  //                         USD
  //                       </li>
  //                       <li
  //                         onClick={() => toggleDropdown('eur-filter')}
  //                         className="text-sm text-bgray-900 cursor-pointer px-5 py-2 dark:text-white hover:bg-bgray-100 hover:dark:bg-darkblack-500 font-semibold"
  //                       >
  //                         EUR
  //                       </li>
  //                       <li
  //                         onClick={() => toggleDropdown('eur-filter')}
  //                         className="text-sm text-bgray-900 cursor-pointer px-5 py-2 dark:text-white hover:bg-bgray-100 hover:dark:bg-darkblack-500 font-semibold"
  //                       >
  //                         GBP
  //                       </li>
  //                     </ul>
  //                   </div>
  //                 </div>
  //                 <div className="w-full h-full overflow-hidden">
  //                   <input
  //                     type="text"
  //                     className="w-full h-full border border-bgray-300 rounded-lg focus:ring-0 dark:bg-darkblack-500 dark:border-darkblack-400 focus:border-success-300 text-base text-bgray-900 dark:text-white"
  //                   />
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>

  //       {/* Transaction Table */}
  //       <div className="w-full py-[20px] px-[24px] rounded-lg bg-white dark:bg-darkblack-600">
  //         <div className="flex flex-col space-y-5">
  //           <div className="w-full flex h-[56px] space-x-4">
  //             <div className="lg:w-88 sm:w-70 sm:block hidden border border-transparent focus-within:border-success-300 h-full dark:bg-darkblack-500 bg-bgray-100 rounded-lg px-[18px]">
  //               <div className="flex w-full h-full items-center space-x-[15px]">
  //                 <span>
  //                   <svg
  //                     className="stroke-bgray-900 dark:stroke-white"
  //                     width="21"
  //                     height="22"
  //                     viewBox="0 0 21 22"
  //                     fill="none"
  //                     xmlns="http://www.w3.org/2000/svg"
  //                   >
  //                     <circle
  //                       cx="9.80204"
  //                       cy="10.6761"
  //                       r="8.98856"
  //                       strokeWidth="1.5"
  //                       strokeLinecap="round"
  //                       strokeLinejoin="round"
  //                     />
  //                     <path
  //                       d="M16.0537 17.3945L19.5777 20.9094"
  //                       strokeWidth="1.5"
  //                       strokeLinecap="round"
  //                       strokeLinejoin="round"
  //                     />
  //                   </svg>
  //                 </span>
  //                 <label htmlFor="listSearch" className="w-full">
  //                   <input
  //                     type="text"
  //                     id="listSearch"
  //                     placeholder="Search by name, email, or others..."
  //                     className="search-input w-full dark:bg-darkblack-500 bg-bgray-100 border-none px-0 focus:outline-none focus:ring-0 text-sm placeholder:text-sm text-bgray-600 tracking-wide placeholder:font-medium placeholder:text-bgray-500"
  //                   />
  //                 </label>
  //               </div>
  //             </div>
  //             <div className="flex-1 h-full relative">
  //               <button
  //                 onClick={() => toggleDropdown('table-filter')}
  //                 type="button"
  //                 className="w-full h-full flex justify-center items-center bg-bgray-100 dark:bg-darkblack-500 border border-bgray-300 dark:border-darkblack-500 rounded-lg"
  //               >
  //                 <div className="flex space-x-3 items-center">
  //                   <span>
  //                     <svg
  //                       className="stroke-bgray-900 dark:stroke-success-400"
  //                       width="18"
  //                       height="17"
  //                       viewBox="0 0 18 17"
  //                       fill="none"
  //                       xmlns="http://www.w3.org/2000/svg"
  //                     >
  //                       <path
  //                         d="M7.55169 13.5022H1.25098"
  //                         strokeWidth="1.5"
  //                         strokeLinecap="round"
  //                         strokeLinejoin="round"
  //                       />
  //                       <path
  //                         d="M10.3623 3.80984H16.663"
  //                         strokeWidth="1.5"
  //                         strokeLinecap="round"
  //                         strokeLinejoin="round"
  //                       />
  //                     </svg>
  //                   </span>
  //                   <span className="text-base text-success-300 font-medium">Filters</span>
  //                 </div>
  //               </button>
  //               <div
  //                 id="table-filter"
  //                 className="rounded-lg w-full shadow-lg bg-white dark:bg-darkblack-500 absolute right-0 z-10 top-[60px] overflow-hidden hidden"
  //               >
  //                 <ul>
  //                   <li
  //                     onClick={() => toggleDropdown('table-filter')}
  //                     className="text-sm text-bgray-900 cursor-pointer px-5 py-2 hover:bg-bgray-100 hover:dark:bg-darkblack-600 dark:text-white font-semibold"
  //                   >
  //                     All Transactions
  //                   </li>
  //                   <li
  //                     onClick={() => toggleDropdown('table-filter')}
  //                     className="text-sm text-bgray-900 cursor-pointer px-5 py-2 hover:bg-bgray-100 hover:dark:bg-darkblack-600 dark:text-white font-semibold"
  //                   >
  //                     Income
  //                   </li>
  //                   <li
  //                     onClick={() => toggleDropdown('table-filter')}
  //                     className="text-sm text-bgray-900 cursor-pointer px-5 py-2 hover:bg-bgray-100 hover:dark:bg-darkblack-600 dark:text-white font-semibold"
  //                   >
  //                     Expenses
  //                   </li>
  //                 </ul>
  //               </div>
  //             </div>
  //           </div>

  //           <div className="table-content w-full overflow-x-auto">
  //             <table className="w-full">
  //               <thead>
  //                 <tr className="border-b border-bgray-300 dark:border-darkblack-400">
  //                   <td className="">
  //                     <label className="text-center">
  //                       <input
  //                         type="checkbox"
  //                         className="focus:outline-none focus:ring-0 rounded-full border border-bgray-400 cursor-pointer w-5 h-5 text-success-300 bg-transparent"
  //                       />
  //                     </label>
  //                   </td>
  //                   <td className="py-5 px-6 xl:px-0 w-[250px] lg:w-auto inline-block">
  //                     <div className="w-full flex space-x-2.5 items-center">
  //                       <span className="text-base font-medium text-bgray-600 dark:text-bgray-50">
  //                         Customer name
  //                       </span>
  //                     </div>
  //                   </td>
  //                   <td className="py-5 px-6 xl:px-0">
  //                     <div className="w-full flex space-x-2.5 items-center">
  //                       <span className="text-base font-medium text-bgray-600 dark:text-bgray-50">Email</span>
  //                     </div>
  //                   </td>
  //                   <td className="py-5 px-6 xl:px-0">
  //                     <div className="flex space-x-2.5 items-center">
  //                       <span className="text-base font-medium text-bgray-600 dark:text-bgray-50">Location</span>
  //                     </div>
  //                   </td>
  //                   <td className="py-5 px-6 xl:px-0 w-[165px]">
  //                     <div className="w-full flex space-x-2.5 items-center">
  //                       <span className="text-base font-medium text-bgray-600 dark:text-bgray-50">Amount</span>
  //                     </div>
  //                   </td>
  //                   <td className="py-5 px-6 xl:px-0"></td>
  //                 </tr>
  //               </thead>
  //               <tbody>
  //                 {[
  //                   {
  //                     name: 'Devon Lane',
  //                     email: 'devon@mail.com',
  //                     location: 'Philadelphia, USA',
  //                     amount: '$101.00',
  //                     avatar: '/assets/images/avatar/user-40x40.png'
  //                   },
  //                   {
  //                     name: 'Bessie Cooper',
  //                     email: 'bessie@mail.com',
  //                     location: 'New York, USA',
  //                     amount: '$250.00',
  //                     avatar: '/assets/images/avatar/user-40x40-1.png'
  //                   },
  //                   {
  //                     name: 'Dianne Russell',
  //                     email: 'dianne@mail.com',
  //                     location: 'Los Angeles, USA',
  //                     amount: '$180.00',
  //                     avatar: '/assets/images/avatar/user-40x40-2.png'
  //                   }
  //                 ].map((user, index) => (
  //                   <tr key={index} className="border-b border-bgray-300 dark:border-darkblack-400">
  //                     <td className="">
  //                       <label className="text-center">
  //                         <input
  //                           type="checkbox"
  //                           className="focus:outline-none focus:ring-0 rounded-full border border-bgray-400 cursor-pointer w-5 h-5 text-success-300 bg-transparent"
  //                         />
  //                       </label>
  //                     </td>
  //                     <td className="py-5 px-6 xl:px-0">
  //                       <div className="w-full flex space-x-2.5 items-center">
  //                         <div className="w-10 h-10 rounded-full overflow-hidden">
  //                           <img
  //                             src={user.avatar}
  //                             alt="avatar"
  //                             className="w-full h-full object-cover"
  //                           />
  //                         </div>
  //                         <p className="font-semibold text-base text-bgray-900 dark:text-white">
  //                           {user.name}
  //                         </p>
  //                       </div>
  //                     </td>
  //                     <td className="py-5 px-6 xl:px-0">
  //                       <p className="font-medium text-base text-bgray-900 dark:text-white">
  //                         {user.email}
  //                       </p>
  //                     </td>
  //                     <td className="py-5 px-6 xl:px-0">
  //                       <p className="font-medium text-base text-bgray-900 dark:text-white">
  //                         {user.location}
  //                       </p>
  //                     </td>
  //                     <td className="py-5 px-6 xl:px-0 w-[165px]">
  //                       <p className="font-semibold text-base text-bgray-900 dark:text-white">
  //                         {user.amount}
  //                       </p>
  //                     </td>
  //                     <td className="py-5 px-6 xl:px-0">
  //                       <div className="flex justify-center">
  //                         <button type="button">
  //                           <svg
  //                             width="18"
  //                             height="4"
  //                             viewBox="0 0 18 4"
  //                             fill="none"
  //                             xmlns="http://www.w3.org/2000/svg"
  //                           >
  //                             <path
  //                               d="M8 2.00024C8 2.55253 8.44772 3.00024 9 3.00024C9.55228 3.00024 10 2.55253 10 2.00024C10 1.44796 9.55228 1.00024 9 1.00024C8.44772 1.00024 8 1.44796 8 2.00024Z"
  //                               stroke="#A0AEC0"
  //                               strokeWidth="2"
  //                               strokeLinecap="round"
  //                               strokeLinejoin="round"
  //                             />
  //                             <path
  //                               d="M1 2.00024C1 2.55253 1.44772 3.00024 2 3.00024C2.55228 3.00024 3 2.55253 3 2.00024C3 1.44796 2.55228 1.00024 2 1.00024C1.44772 1.00024 1 1.44796 1 2.00024Z"
  //                               stroke="#A0AEC0"
  //                               strokeWidth="2"
  //                               strokeLinecap="round"
  //                               strokeLinejoin="round"
  //                             />
  //                             <path
  //                               d="M15 2.00024C15 2.55253 15.4477 3.00024 16 3.00024C16.5523 3.00024 17 2.55253 17 2.00024C17 1.44796 16.5523 1.00024 16 1.00024C15.4477 1.00024 15 1.44796 15 2.00024Z"
  //                               stroke="#A0AEC0"
  //                               strokeWidth="2"
  //                               strokeLinecap="round"
  //                               strokeLinejoin="round"
  //                             />
  //                           </svg>
  //                         </button>
  //                       </div>
  //                     </td>
  //                   </tr>
  //                 ))}
  //               </tbody>
  //             </table>
  //           </div>

  //           {/* Pagination */}
  //           <div className="pagination-content w-full">
  //             <div className="w-full flex lg:justify-between justify-center items-center">
  //               <div className="lg:flex hidden space-x-4 items-center">
  //                 <span className="text-bgray-600 dark:text-bgray-50 text-sm font-semibold">Show result:</span>
  //                 <div className="relative">
  //                   <button
  //                     onClick={() => toggleDropdown('result-filter')}
  //                     type="button"
  //                     className="px-2.5 py-[14px] border rounded-lg border-bgray-300 dark:border-darkblack-400 flex space-x-6 items-center"
  //                   >
  //                     <span className="text-sm font-semibold text-bgray-900 dark:text-bgray-50">10</span>
  //                     <span>
  //                       <svg
  //                         width="17"
  //                         height="17"
  //                         viewBox="0 0 17 17"
  //                         fill="none"
  //                         xmlns="http://www.w3.org/2000/svg"
  //                       >
  //                         <path
  //                           d="M4.03516 6.03271L8.03516 10.0327L12.0352 6.03271"
  //                           stroke="#A0AEC0"
  //                           strokeWidth="1.5"
  //                           strokeLinecap="round"
  //                           strokeLinejoin="round"
  //                         />
  //                       </svg>
  //                     </span>
  //                   </button>
  //                   <div
  //                     id="result-filter"
  //                     className="rounded-lg w-full shadow-lg bg-white dark:bg-darkblack-500 absolute right-0 z-10 top-14 overflow-hidden hidden"
  //                   >
  //                     <ul>
  //                       <li
  //                         onClick={() => toggleDropdown('result-filter')}
  //                         className="text-sm font-medium text-bgray-900 dark:text-white cursor-pointer px-5 py-2 hover:bg-bgray-100 hover:dark:bg-darkblack-600"
  //                       >
  //                         5
  //                       </li>
  //                       <li
  //                         onClick={() => toggleDropdown('result-filter')}
  //                         className="text-sm font-medium text-bgray-900 dark:text-white cursor-pointer px-5 py-2 hover:bg-bgray-100 hover:dark:bg-darkblack-600"
  //                       >
  //                         10
  //                       </li>
  //                       <li
  //                         onClick={() => toggleDropdown('result-filter')}
  //                         className="text-sm font-medium text-bgray-900 dark:text-white cursor-pointer px-5 py-2 hover:bg-bgray-100 hover:dark:bg-darkblack-600"
  //                       >
  //                         20
  //                       </li>
  //                     </ul>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div className="flex sm:space-x-[35px] space-x-5 items-center">
  //                 <button type="button">
  //                   <span>
  //                     <svg
  //                       width="21"
  //                       height="21"
  //                       viewBox="0 0 21 21"
  //                       fill="none"
  //                       xmlns="http://www.w3.org/2000/svg"
  //                     >
  //                       <path
  //                         d="M12.7217 5.03271L7.72168 10.0327L12.7217 15.0327"
  //                         stroke="#A0AEC0"
  //                         strokeWidth="2"
  //                         strokeLinecap="round"
  //                         strokeLinejoin="round"
  //                       />
  //                     </svg>
  //                   </span>
  //                 </button>
  //                 <div className="flex items-center">
  //                   <button
  //                     type="button"
  //                     className="rounded-lg text-success-300 lg:text-sm text-xs font-bold lg:px-6 lg:py-2.5 px-4 py-1.5 bg-success-50 dark:bg-darkblack-500 dark:text-bgray-50"
  //                   >
  //                     1
  //                   </button>
  //                   <button
  //                     type="button"
  //                     className="rounded-lg text-bgray-500 lg:text-sm text-xs font-bold lg:px-6 lg:py-2.5 px-4 py-1.5 hover:bg-success-50 hover:text-success-300 transition duration-300 ease-in-out dark:hover:bg-darkblack-500"
  //                   >
  //                     2
  //                   </button>
  //                   <span className="text-bgray-500 text-sm">. . . .</span>
  //                   <button
  //                     type="button"
  //                     className="rounded-lg text-bgray-500 lg:text-sm text-xs font-bold lg:px-6 lg:py-2.5 px-4 py-1.5 hover:bg-success-50 hover:text-success-300 transition duration-300 ease-in-out dark:hover:bg-darkblack-500"
  //                   >
  //                     10
  //                   </button>
  //                 </div>
  //                 <button type="button">
  //                   <span>
  //                     <svg
  //                       width="21"
  //                       height="21"
  //                       viewBox="0 0 21 21"
  //                       fill="none"
  //                       xmlns="http://www.w3.org/2000/svg"
  //                     >
  //                       <path
  //                         d="M7.72168 5.03271L12.7217 10.0327L7.72168 15.0327"
  //                         stroke="#A0AEC0"
  //                         strokeWidth="2"
  //                         strokeLinecap="round"
  //                         strokeLinejoin="round"
  //                       />
  //                     </svg>
  //                   </span>
  //                 </button>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Modal */}
  //     {showModal && (
  //       <div className="modal fixed inset-0 z-50 overflow-y-auto flex items-center justify-center">
  //         <div className="modal-overlay absolute inset-0 bg-gray-500 opacity-75 dark:bg-bgray-900 dark:opacity-50"></div>
  //         <div className="modal-content flex justify-center w-full px-4 items-center mx-auto">
  //           {modalStep === 1 && (
  //             <div className="max-w-[550px] rounded-lg bg-white dark:bg-darkblack-600 p-8 pb-10 transition-all relative">
  //               <button
  //                 onClick={closeModal}
  //                 className="flex justify-center items-center absolute top-6 right-6"
  //               >
  //                 <svg
  //                   width="24"
  //                   height="24"
  //                   viewBox="0 0 24 24"
  //                   fill="none"
  //                   xmlns="http://www.w3.org/2000/svg"
  //                 >
  //                   <path
  //                     d="M16.9492 7.05029L7.04972 16.9498"
  //                     stroke="#22C55E"
  //                     strokeWidth="2"
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                   />
  //                   <path
  //                     d="M7.0498 7.05029L16.9493 16.9498"
  //                     stroke="#22C55E"
  //                     strokeWidth="2"
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                   />
  //                 </svg>
  //               </button>
  //               <header className="py-6 text-center px-8">
  //                 <h3 className="text-2xl font-bold text-bgray-900 dark:text-white mb-3">Send Money</h3>
  //                 <p className="text-sm font-medium text-bgray-600 dark:text-darkblack-300">
  //                   Please enter user information that you want to send money and enter an amount
  //                 </p>
  //               </header>
  //               <div className="flex justify-between items-center mb-6">
  //                 <h4 className="text-base font-bold text-bgray-900 dark:text-white">Choose Method</h4>
  //                 <button className="inline-flex items-center gap-x-1 text-xs font-medium rounded-full py-2 px-3 border border-bgray-200 text-bgray-900 dark:text-white">
  //                   <span>Add</span>
  //                   <svg
  //                     className="stroke-bgray-900 dark:stroke-white"
  //                     width="14"
  //                     height="14"
  //                     viewBox="0 0 14 14"
  //                     fill="none"
  //                     xmlns="http://www.w3.org/2000/svg"
  //                   >
  //                     <path
  //                       d="M7 2.9165V11.0832"
  //                       strokeWidth="1.5"
  //                       strokeLinecap="round"
  //                       strokeLinejoin="round"
  //                     />
  //                     <path
  //                       d="M2.91699 7H11.0837"
  //                       strokeWidth="1.5"
  //                       strokeLinecap="round"
  //                       strokeLinejoin="round"
  //                     />
  //                   </svg>
  //                 </button>
  //               </div>
  //               <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-x-8">
  //                 <div className="w-full md:w-1/2 space-y-3">
  //                   {[
  //                     { type: 'visa', name: 'Visa', amount: '$24,098.00', icon: '/assets/images/payments/vis-xs.svg' },
  //                     { type: 'mastercard', name: 'Mastercard', amount: '$14,111.00', icon: '/assets/images/payments/master-mini.svg' },
  //                     { type: 'payoneer', name: 'Payoneer', amount: '$34,245.00', icon: '/assets/images/payments/payo-xs.svg' }
  //                   ].map((payment) => (
  //                     <div
  //                       key={payment.type}
  //                       onClick={() => handlePaymentSelect(payment.type)}
  //                       className={`flex items-center py-3 px-4 rounded-lg border cursor-pointer ${
  //                         selectedPayment === payment.type
  //                           ? 'border-success-300 dark:border-success-300'
  //                           : 'border-bgray-300 dark:border-darkblack-400'
  //                       }`}
  //                     >
  //                       <div className="flex flex-1 space-x-3">
  //                         <div className="w-12 h-12 rounded-full bg-bgray-100 flex items-center justify-center">
  //                           <img src={payment.icon} alt="" />
  //                         </div>
  //                         <div>
  //                           <h4 className="font-bold text-bgray-900 dark:text-white text-sm">{payment.name}</h4>
  //                           <span className="text-xs text-bgray-600 dark:text-bgray-50">{payment.amount}</span>
  //                         </div>
  //                       </div>
  //                       <div className={selectedPayment === payment.type ? '' : 'hidden'}>
  //                         <svg
  //                           width="16"
  //                           height="16"
  //                           viewBox="0 0 16 16"
  //                           fill="none"
  //                           xmlns="http://www.w3.org/2000/svg"
  //                         >
  //                           <circle cx="8" cy="8" r="8" fill="#22C55E" />
  //                           <path
  //                             d="M5.27734 8.00011L7.22179 9.94455L11.1107 6.05566"
  //                             stroke="white"
  //                             strokeWidth="1.5"
  //                             strokeLinecap="round"
  //                             strokeLinejoin="round"
  //                           />
  //                         </svg>
  //                       </div>
  //                     </div>
  //                   ))}
  //                 </div>
  //                 <div className="w-full md:w-1/2">
  //                   <div className="rounded mb-4">
  //                     <img src="/assets/images/payments/card-sm.png" className="w-full" alt="" />
  //                   </div>
  //                   <div className="w-full rounded-lg border border-bgray-200 dark:border-darkblack-400 focus-within:border-success-300 p-4 h-[98px] flex flex-col justify-between">
  //                     <p className="text-xs text-bgray-600 dark:text-white font-medium">Enter amount</p>
  //                     <div className="w-full h-[35px] flex justify-between items-center">
  //                       <span className="text-2xl text-bgray-900 dark:text-white font-bold">$</span>
  //                       <label className="w-full">
  //                         <input
  //                           type="text"
  //                           value={transferAmount}
  //                           onChange={(e) => setTransferAmount(e.target.value)}
  //                           className="focus:outline-none dark:bg-darkblack-600 w-full p-0 focus:ring-0 border-none text-2xl font-bold text-bgray-900 dark:text-white"
  //                         />
  //                       </label>
  //                       <div>
  //                         <img src="/assets/images/flag/us-circle.svg" alt="flag" />
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //               <button
  //                 onClick={nextModalStep}
  //                 className="bg-success-300 hover:bg-success-400 text-white font-semibold text-base py-4 flex justify-center items-center rounded-lg w-full mt-7"
  //               >
  //                 Continue
  //               </button>
  //             </div>
  //           )}

  //           {modalStep === 2 && (
  //             <div className="max-w-xl w-full rounded-lg bg-white dark:bg-darkblack-600 p-5 md:px-14 md:py-8 transition-all">
  //               <header className="flex flex-col items-center">
  //                 <img src="/assets/images/icons/invoice.svg" alt="" />
  //                 <h2 className="text-4xl font-medium text-bgray-900 dark:text-white font-poppins">
  //                   Payment successful
  //                 </h2>
  //               </header>
  //               <ul className="py-6 mt-10 border-t border-b border-gray-200 dark:border-darkblack-400 space-y-4">
  //                 <li className="flex justify-between">
  //                   <span className="font-medium text-bgray-900 dark:text-white text-2xl">Payment type</span>
  //                   <span className="text-2xl font-medium text-bgray-500 dark:text-bgray-50">Net Banking</span>
  //                 </li>
  //                 <li className="flex justify-between">
  //                   <span className="font-medium text-gray-900 dark:text-white text-2xl">Bank</span>
  //                   <span className="text-2xl font-medium text-bgray-500 dark:text-bgray-50">PayPal</span>
  //                 </li>
  //                 <li className="flex justify-between">
  //                   <span className="font-medium text-gray-900 dark:text-white text-2xl">Mobile</span>
  //                   <span className="text-2xl font-medium text-bgray-500 dark:text-bgray-50">+1 707 797 0462</span>
  //                 </li>
  //                 <li className="flex justify-between">
  //                   <span className="font-medium text-gray-900 dark:text-white text-2xl">Email</span>
  //                   <span className="text-2xl font-medium text-bgray-500 dark:text-bgray-50">markparker@mail.com</span>
  //                 </li>
  //               </ul>
  //               <ul className="pt-6 space-y-4">
  //                 <li className="flex justify-between">
  //                   <span className="font-bold text-gray-900 dark:text-white text-2xl">Amount paid</span>
  //                   <span className="text-2xl font-bold text-bgray-900 dark:text-white">${transferAmount || '500.00'}</span>
  //                 </li>
  //                 <li className="flex justify-between">
  //                   <span className="font-medium text-gray-900 dark:text-white text-2xl">Transaction id</span>
  //                   <span className="text-2xl font-medium text-bgray-500 dark:text-white">123694559z6465</span>
  //                 </li>
  //               </ul>
  //               <div className="flex justify-center gap-8 mt-7">
  //                 <button className="bg-success-300 hover:bg-success-400 text-white text-xl font-medium py-2 px-5 rounded-md">
  //                   Print
  //                 </button>
  //                 <button
  //                   onClick={closeModal}
  //                   className="bg-success-300 hover:bg-success-400 text-white text-xl font-medium py-2 px-5 rounded-md"
  //                 >
  //                   Close
  //                 </button>
  //               </div>
  //             </div>
  //           )}
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // );
};

export default Billers;
