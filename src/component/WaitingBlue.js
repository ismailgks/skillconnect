import React, { useState, useEffect } from 'react';
import './waitingBlue.css';

const WaitingBlu = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  }, []);

  return (
    <div className="wrap">
    <div className="loader"></div>
    </div>
  );
};

export default WaitingBlu;
