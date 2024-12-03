import React, { useState } from 'react';
import axios from 'axios';

const Dashboard = ({ token }) => {
  const [balance, setBalance] = useState(null);
  const [mintResponse, setMintResponse] = useState(null);
  const [error, setError] = useState(null);

  const fetchBalance = async () => {
    try {
      const response = await axios.get('http://localhost:7070/swm/balance/1', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBalance(response.data.data.balance);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch balance');
    }
  };

  const handleMint = async () => {
    try {
      const response = await axios.post(
        'http://localhost:7070/smc/mint',
        { amount: 10 }, // Example payload
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMintResponse(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to mint');
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <button onClick={fetchBalance}>Fetch Balance</button>
        {balance && <p>Balance: {balance}</p>}
      </div>
      <div>
        <button onClick={handleMint}>Mint Items</button>
        {mintResponse && <p>{JSON.stringify(mintResponse)}</p>}
      </div>
    </div>
  );
};

export default Dashboard;
