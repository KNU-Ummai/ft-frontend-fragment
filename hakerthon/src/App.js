import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import FindId from './pages/FindId';
import FindPass from './pages/FindPass';
import Login from './pages/Login';
import Signup from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<p>hello world</p>} />
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
