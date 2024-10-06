import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ChattingListPage from './pages/ChattingListPage';
import ChattingPages from './pages/ChattingPages';
import TotalPage from './pages/TotalPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<>main</>} />
          <Route path="/chat" element={<ChattingListPage />} />
          <Route path="/chat/:user" element={<ChattingPages />} />
          <Route path="/chat/users" element={<TotalPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
