import './Style.css';
import Logo from './img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

function CheckEmail() {

  const location = useLocation();
  const { item } = location.state || {};

  const backTo = () => {
    console.log('Clicked ...')
  }
  const submitLogin = () => {
    console.log('Loggined ...')
  }
  return (
    <div className="App">
      <div className="wrapper">
        <div className='header'>
          <div className='logo'>
            <img src={Logo} alt="logo" title='logo' />
          </div>
          <div className='backtoWrap'>
            <button className='backtoweb' onClick={backTo}>
              <FontAwesomeIcon icon={faAngleLeft} /> Back to website
            </button>
          </div>
        </div>
        <div className='forgetContent'>
          <div className='left'>
            <h1 className='title'>Check your email</h1>
            <p className='forgetpassword'>We have sent a password reset link to <a className='confirmMail'>
            {item.email}</a></p>
            <button value='Login' className='forgtBtn' onClick={submitLogin}>Open Email</button>
            <p className='newMail'>Didn't received a email?<a href='#' className='resendLink'> click to resend</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckEmail;