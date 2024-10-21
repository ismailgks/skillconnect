import React, { useState, useEffect } from 'react';

const Spinner02 = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  }, []);

  return (
    <div className="wrap">
      <div className="loaderz"></div>
    </div>
  );
};

export default Spinner02;
