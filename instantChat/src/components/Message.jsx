import { useEffect, useRef } from 'react';
import { UserAuth } from '../context/authContext';

export const Message = ({ message }) => {
  const { currentUser } = UserAuth();
  const messageRef = useRef(null);

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <div
        ref={messageRef}
        className={`chat ${message.uid === currentUser.uid ? 'chat-end' : 'chat-start'}`}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full ">
            <img src={message.avatar} alt="User Avatar" />
          </div>
        </div>
        <div className="chat-header pb-1">
          <span className="text-sm font-semibold text-gray-900">{message.name}</span>
        </div>
        <div
          className={`chat-bubble ${
            message.uid === currentUser.uid ? 'bg-blue-800 text-white px-3 rounded-lg mx-1' : 'chat-bubble-neutral mx-1'
          }`}
        >
          {message.text}
        </div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
    </>
  );
};
