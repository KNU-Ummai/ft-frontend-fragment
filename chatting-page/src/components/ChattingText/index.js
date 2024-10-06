import './styles.css';

function chattingText({ user, dialog }) {
  return (
    <div>
      <ul className="chatting-info">
        <li className="user-name">{user}</li>
        <li className="recent-dialog">{dialog}</li>
      </ul>
    </div>
  );
}

export default chattingText;
