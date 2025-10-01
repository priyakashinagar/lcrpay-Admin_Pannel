import React from 'react';

const Transaction = () => {
  return (
    <div className="2xl:flex 2xl:space-x-[48px]">
      <section className="2xl:flex-1 2xl:mb-0 mb-6">
        <div className="w-full py-[20px] px-[24px] rounded-lg bg-white dark:bg-darkblack-600">
          <h1 className="text-2xl font-bold text-bgray-900 dark:text-white mb-6">Transactions</h1>
          <div className="w-full">
          <div className="bg-white dark:bg-darkblack-600 rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-bgray-900 dark:text-white">All Transaction</h3>
              <button className="text-success-600 hover:text-success-700 font-medium">View All</button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-bgray-200 dark:border-darkblack-400">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-bgray-600 dark:text-bgray-50">Transaction ID</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-bgray-600 dark:text-bgray-50">Customer</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-bgray-600 dark:text-bgray-50">Amount</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-bgray-600 dark:text-bgray-50">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-bgray-600 dark:text-bgray-50">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: '#12345', customer: 'John Doe', amount: '₹1,234', status: 'Completed', date: '2024-01-15' },
                    { id: '#12346', customer: 'Jane Smith', amount: '₹2,345', status: 'Pending', date: '2024-01-14' },
                    { id: '#12347', customer: 'Bob Johnson', amount: '₹3,456', status: 'Completed', date: '2024-01-13' },
                    { id: '#12348', customer: 'Alice Brown', amount: '₹4,567', status: 'Failed', date: '2024-01-12' },
                    { id: '#12349', customer: 'Charlie Wilson', amount: '₹5,678', status: 'Completed', date: '2024-01-11' },
                  ].map((tx, i) => (
                    <tr key={i} className="border-b hover:bg-bgray-50 dark:hover:bg-darkblack-500">
                      <td className="py-3 px-4 text-sm font-medium text-bgray-900 dark:text-white">{tx.id}</td>
                      <td className="py-3 px-4 text-sm text-bgray-600 dark:text-bgray-50">{tx.customer}</td>
                      <td className="py-3 px-4 text-sm font-semibold text-bgray-900 dark:text-white">{tx.amount}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          tx.status === 'Completed' ? 'bg-success-100 text-success-800 dark:bg-success-900 dark:text-success-200' :
                          tx.status === 'Pending' ? 'bg-warning-100 text-warning-800 dark:bg-warning-900 dark:text-warning-200' :
                          'bg-error-100 text-error-800 dark:bg-error-900 dark:text-error-200'
                        }`}>{tx.status}</span>
                      </td>
                      <td className="py-3 px-4 text-sm text-bgray-600 dark:text-bgray-50">{tx.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Transaction;
