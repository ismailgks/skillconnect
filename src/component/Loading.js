// Spinner.js
import React, { useState, useEffect } from 'react';
import './Style.css';
import Logo from './img/loading.png';
import './waiting-white.css';

const Waiting = () => {
  const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 3000);
      })

    return <div className=''>
        <div className="wrap wrap-40 113">
            <div className="loaderz">112</div>
        </div>
    </div>;
};

export default Waiting;
