import './styles.css';

import { FaUser } from 'react-icons/fa';

import ChattingText from '../ChattingText';

function ChattingItem({ user, dialog }) {
  return (
    <div className="chatting-item">
      <FaUser className="profile" />
      <ChattingText user={user} dialog={dialog} />
    </div>
  );
}

export default ChattingItem;
