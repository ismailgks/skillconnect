// Spinner.js
import React from 'react';
import './Style.css';
import Logo from './img/loading.png';
import './waiting.css';
import Waiting from './Loading';
import { useLocation } from 'react-router-dom';

const AutoLoading = () => {
  const location = useLocation();
  const type = JSON.stringify(location.state?.data.type);
//   console.log('Hi ',type)
    return <div>
        <div className="loadingWrap">
            {type}
            <Waiting></Waiting>
        </div>
    </div>;
};

export default AutoLoading;