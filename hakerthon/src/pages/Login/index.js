import './styles.css';

import { useState } from 'react';
import { FaEye, FaEyeSlash, FaLock, FaUser } from 'react-icons/fa';

import ActiveButtons from '../../components/ActiveButtons';
import InputText from '../../components/InputText';

function LoginPage() {
  const [loginInfo, setLoginInfo] = useState({
    id: '',
    password: '',
  }); // 받고

  const [isVisible, setIsVisible] = useState(false);

  const handlePasswordVisibility = () => {
    setIsVisible(!isVisible);
  };

  const setId = (loginId) => {
    setLoginInfo((prevInfo) => ({
      ...prevInfo,
      id: loginId,
    }));
  };

  const setPassword = (loginPassword) => {
    setLoginInfo((prevInfo) => ({
      ...prevInfo,
      password: loginPassword,
    }));
  };

  const handleLoginData = (e) => {
    if (loginInfo.id === '') {
      alert('아이디를 입력하세요');
      e.preventDefault();
    } else if (loginInfo.password === '') {
      alert('비밀번호를 입력하세요');
      e.preventDefault();
    }

    console.log(loginInfo); // 보내고

    handlePost();
  };

  const handlePost = () => {
    fetch('https://ummai.cosh.kr/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginInfo),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`); // Handle non-200 status codes
        }
        const sessionId = res.headers.get('Set-Cookie');
        console.log('Session ID:', sessionId);

        return res.json();
      })
      .then((data) => {
        if (data.result === 'Success') {
          console.log('Success');
        } else if (data.result === 'Fail') {
          console.error('Fail:', data.detail);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <form className="id-form">
        <FaUser className="login-icon" />
        <InputText
          type="text"
          placeholder="아이디"
          value={loginInfo.id}
          onChange={setId}
        />
      </form>
      <form className="password-form">
        <FaLock className="password-icon" />
        <InputText
          type={isVisible ? 'text' : 'password'}
          placeholder="비밀번호"
          value={loginInfo.password}
          onChange={setPassword}
        />
        <FaEyeSlash
          className={`hide-password ${isVisible ? ' hidden' : ''}`}
          onClick={handlePasswordVisibility}
        />
        <FaEye
          className={`show-password ${isVisible ? '' : ' hidden'}`}
          onClick={handlePasswordVisibility}
        />
      </form>
      <div className="active-buttons">
        <ActiveButtons type="signup" />
        <ActiveButtons type="login" onClick={handleLoginData} />
      </div>
      <div className="forgot-myInfo">
        <ActiveButtons type="findId" className="forgot-id" />
        <span> / </span>
        <ActiveButtons type="findPass" className="forgot-password" />
      </div>
    </div>
  );
}

export default LoginPage;
