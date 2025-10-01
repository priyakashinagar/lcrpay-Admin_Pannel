// Authentication utility functions
export const isAuthenticated = () => {
  try {
    const userAuth = localStorage.getItem('userAuth');
    if (!userAuth) return false;
    
    const authData = JSON.parse(userAuth);
    return authData.isAuthenticated === true;
  } catch (error) {
    return false;
  }
};

export const getUserData = () => {
  try {
    const userAuth = localStorage.getItem('userAuth');
    if (!userAuth) return null;
    
    return JSON.parse(userAuth);
  } catch (error) {
    return null;
  }
};

export const logout = () => {
  localStorage.removeItem('userAuth');
  window.location.href = '/signin';
};

// Check if user session is valid (optional - you can add expiry logic here)
export const validateSession = () => {
  const userData = getUserData();
  if (!userData) return false;
  
  // Add your session validation logic here
  // For example, check if login time is within allowed duration
  const loginTime = new Date(userData.loginTime);
  const now = new Date();
  const hoursDiff = (now - loginTime) / (1000 * 60 * 60);
  
  // Session expires after 24 hours (optional)
  if (hoursDiff > 24) {
    logout();
    return false;
  }
  
  return userData.isAuthenticated;
};