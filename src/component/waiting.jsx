import React, { useState, useEffect } from 'react';
import './waiting.css';

const Waitingz = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  }, []);

  return (
    <div className="wrap">
    <div className="loaderz"></div>
    </div>
  );
};

export default Waitingz;
