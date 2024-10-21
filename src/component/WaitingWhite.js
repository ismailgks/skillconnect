// Spinner.js
import React, { useState, useEffect } from 'react';
import './Style.css';
import Logo from './img/loading.png';
import './waiting-white.css';

const WaitingWhite = () => {
  const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 3000);
      })

    return <div className=''>
        <div className="wrap wrap-40">
            <div className="loaderzy"></div>
        </div>
    </div>;
};

export default WaitingWhite;
