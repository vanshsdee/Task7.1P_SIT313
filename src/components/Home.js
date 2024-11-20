import React from 'react';
import { auth } from '../firebase';
import './Home.css';

const Home = () => {
  const isAuthenticated = auth.currentUser;

  const handleLoginClick = () => {
    window.location.href = '/login';
  };

  const handleLogoutClick = async () => {
    try {
      await auth.signOut();
      window.location.href = '/home';
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <nav className="nav-bar">
        <div className="nav-content">
          <div className="nav-items">
            {/* Logo */}
            <div className="logo">
              <h1>DEV@Deakin</h1>
            </div>

            {/* Search Bar and Buttons */}
            <div className="search-section">
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-input"
                />
              </div>
              &emsp; 
              <button className="post-button">
                POST
              </button>
            </div>

            {/* Login/Logout Button */}
            <div>
              {isAuthenticated ? (
                <button
                  onClick={handleLogoutClick}
                  className="auth-button"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={handleLoginClick}
                  className="auth-button"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="main-content">
        <h2 className="welcome-title">
          Welcome to DEV@Deakin
        </h2>
        <p className="welcome-text">
          This is the home page.
        </p>
      </main>
    </div>
  );
};

export default Home;
