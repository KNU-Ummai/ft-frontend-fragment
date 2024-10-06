import './styles.css';

import { FiSend } from 'react-icons/fi';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom';

import TextInput from '../../components/TextInput';

function ChattingPages() {
  const navigate = useNavigate();
  const { user } = useParams(); // URL에서 username 가져오기

  return (
    <div className="chatting-frame">
      <IoMdArrowRoundBack
        className="back-icon"
        onClick={() => {
          navigate('/chat');
        }}
      />
      <div className="user">
        <span>{user}</span> {/* 동적으로 username 표시 */}
      </div>
      <div className="send-message">
        <TextInput />
        <FiSend className="send-icon" />
      </div>
    </div>
  );
}

export default ChattingPages;
