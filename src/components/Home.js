// src/components/Home.js
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div>        
        <div>
            <span>DEV@Deakin</span>
            <span>Welcome, {user?.email}</span>
            <button onClick={handleLogout}>Logout</button>
        </div>

      {/* Main Content */}
      <div>
        <div>
          <h1>Welcome to DEV@Deakin</h1>
          <p>
            This is your personal dashboard where you can manage your development journey.
          </p>

            {/* sub tittles */}
            <h2>Your Projects</h2>
              <p>View and manage your ongoing projects.</p>

            <h2>Learning Path</h2>
              <p>Track your learning progress and achievements.</p>
          
            <h2>Community</h2>
              <p>Connect with other developers and share knowledge.</p>
        </div>   
      </div>
    </div>
  );
};

export default Home;