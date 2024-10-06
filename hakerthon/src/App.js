import './App.css';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GoogleTranslation from './components/GoogleTranslation'; // GoogleTranslation 컴포넌트
import FindId from './pages/FindId';
import FindPass from './pages/FindPass';
import Login from './pages/Login';
import Signup from './pages/SignUp';

function App() {
  const [translatedText, setTranslatedText] = useState('');

  const translateText = async (text, targetLang) => {
    try {
      const response = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {
          q: text,
          target: targetLang,
          key: 'AIzaSyAh9IsIHAX7rgbszsngGwxTbgvx_92Tu_Y', // Google API 키를 입력하세요.
        },
      );
      setTranslatedText(response.data.data.translations[0].translatedText);
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };

  useEffect(() => {
    // 예시: 페이지 로드 시 기본 텍스트 번역
    translateText('Hello, world!', 'fr'); // 영어에서 프랑스어로 번역
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact element={<p>{translatedText || 'hello world'}</p>}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/findid" element={<FindId />} />
          <Route path="/findpass" element={<FindPass />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
