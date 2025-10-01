import React, { useState, useEffect } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchUsers = async () => {
    try {
      setLoading(true);
      
      // Get token from localStorage
      let authToken = localStorage.getItem('authToken');
      
      // If no direct token, try to get it from userAuth
      if (!authToken) {
        const userAuth = localStorage.getItem('userAuth');
        if (userAuth) {
          try {
            const parsedAuth = JSON.parse(userAuth);
            authToken = parsedAuth.userData?.access_token;
          } catch (e) {
            console.error('Error parsing userAuth:', e);
          }
        }
      }
      
      // Debug: Check what's in localStorage
      console.log('All localStorage keys:', Object.keys(localStorage));
      console.log('authToken from localStorage:', authToken);
      console.log('userAuth from localStorage:', localStorage.getItem('userAuth'));
      
      if (!authToken) {
        throw new Error('No authentication token found');
      }

      console.log('Fetching users with token:', authToken);

      const response = await fetch('https://api.lcrpay.com/admin/get_all_users', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json'
        }
      });

      console.log('API Response Status:', response.status);
      console.log('API Response Headers:', response.headers);

      const data = await response.json();
      console.log('API Response Data:', data);
      console.log('Data type:', typeof data);
      console.log('Data structure:', JSON.stringify(data, null, 2));

      if (response.ok) {
        // Check different possible data structures
        let usersArray = [];
        
        if (Array.isArray(data)) {
          usersArray = data;
          console.log('Data is direct array:', usersArray);
        } else if (data.users && Array.isArray(data.users)) {
          usersArray = data.users;
          console.log('Data has users property:', usersArray);
        } else if (data.data && Array.isArray(data.data)) {
          usersArray = data.data;
          console.log('Data has data property:', usersArray);
        } else {
          console.log('Unexpected data structure, using original data');
          usersArray = data;
        }
        
        console.log('Final users array:', usersArray);
        console.log('Users array length:', usersArray.length);
        
        setUsers(usersArray);
        setError('');
      } else {
        throw new Error(data.message || 'Failed to fetch users');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Debug: Log users state whenever it changes
  useEffect(() => {
    console.log('Users state updated:', users);
    console.log('Users state length:', users.length);
    console.log('Users state type:', typeof users);
  }, [users]);

  return (
    <div className="2xl:flex 2xl:space-x-[48px]">
      <section className="2xl:flex-1 2xl:mb-0 mb-6">
        <div className="w-full py-[20px] px-[24px] rounded-lg bg-white dark:bg-darkblack-600">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-bgray-900 dark:text-white">All Users</h1>
            <button 
              onClick={fetchUsers}
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Refresh
            </button>
          </div>
          <div className="w-full">
          <div className="bg-white dark:bg-darkblack-600 rounded-lg p-6">

            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg mb-4">
                Error: {error}
              </div>
            )}

            {loading ? (
              <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-success-600"></div>
                <span className="ml-2 text-bgray-600 dark:text-bgray-50">Loading users...</span>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-bgray-200 dark:border-darkblack-400">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-bgray-600 dark:text-bgray-50">Member ID</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-bgray-600 dark:text-bgray-50">Full Name</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-bgray-600 dark:text-bgray-50">Email</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-bgray-600 dark:text-bgray-50">Introducer</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-bgray-600 dark:text-bgray-50">Status</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-bgray-600 dark:text-bgray-50">Created Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.length > 0 ? (
                      users.map((user, i) => (
                        <tr key={i} className="border-b hover:bg-bgray-50 dark:hover:bg-darkblack-500">
                          <td className="py-3 px-4 text-sm font-medium text-bgray-900 dark:text-white">
                            {user.member_id || `#${i + 1}`}
                          </td>
                          <td className="py-3 px-4 text-sm text-bgray-600 dark:text-bgray-50">
                            {user.fullname || 'N/A'}
                          </td>
                          <td className="py-3 px-4 text-sm text-bgray-600 dark:text-bgray-50">
                            {user.Email || 'N/A'}
                          </td>
                          <td className="py-3 px-4 text-sm text-bgray-600 dark:text-bgray-50">
                            {user.introducer || 'N/A'}
                          </td>
                          <td className="py-3 px-4">
                            <span className={`px-3 py-1 text-xs font-semibold rounded-full inline-flex items-center ${
                              user.status === true ? 
                                'bg-green-50 text-green-700 border border-green-200' :
                              user.status === false ? 
                                'bg-red-50 text-red-700 border border-red-200' :
                                'bg-yellow-50 text-yellow-700 border border-yellow-200'
                            }`} style={{
                              backgroundColor: user.status === true ? '#dcfce7' : user.status === false ? '#fee2e2' : '#fefce8',
                              color: user.status === true ? '#15803d' : user.status === false ? '#dc2626' : '#a16207'
                            }}>
                              <span className="w-2 h-2 rounded-full mr-2" style={{
                                backgroundColor: user.status === true ? '#22c55e' : user.status === false ? '#ef4444' : '#eab308'
                              }}></span>
                              {user.status === true ? 'Active' : user.status === false ? 'Inactive' : 'Unknown'}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-sm text-bgray-600 dark:text-bgray-50">
                            {user.CreatedAt ? new Date(user.CreatedAt).toLocaleDateString() : 'N/A'}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="py-8 text-center text-bgray-500 dark:text-bgray-400">
                          No users found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Users;
