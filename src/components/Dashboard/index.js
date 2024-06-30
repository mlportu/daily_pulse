import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:5000/auth/google/callback', {
          withCredentials: true,
        });
        console.log(response.data); // Handle user data
      } catch (error) {
        console.error(error);
        navigate('/login'); // Redirect to login on error
      }
    };

    fetchUser();
  }, [navigate]);

  return (
    <div>
      <h1>Dashboard</h1>
      {/* Display user information */}
    </div>
  );
};

export default Dashboard;