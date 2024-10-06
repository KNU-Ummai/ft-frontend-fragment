import './styles.css';

import { useNavigate } from 'react-router-dom';

import ChattingItem from '../ChattingItem';

function ChattingList() {
  const navigate = useNavigate();

  const userNames = ['우진용', 'B', 'C', 'D', 'E', 'F'];

  return (
    <div>
      <ol className="container">
        {[1, 2, 3, 4, 5, 6].map((user, index) => (
          <li
            className="profileBox"
            key={user}
            onClick={() => navigate(`/chat/${userNames[index]}`)} // 이름을 URL로 전달
          >
            <ChattingItem user={userNames[index]} dialog={'helloworld'} />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ChattingList;
