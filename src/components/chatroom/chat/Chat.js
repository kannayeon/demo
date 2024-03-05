/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './Chat.css';

// "chats": {
//     "chatId": 1664469417344,
//     "value": "안녕하세요",
//     "createdAt": "10월 3일"
// },

export const Chat = ({ userId, chats, recipientId }) => {
  return (
    <div
      className={`d-flex flex-column gap-1 ${userId === 1 ? 'align-items-start' : 'align-items-end'}`}
    >
      <span className='recipient'>모두에게</span>
      <div className={`d-flex justify-content-start gap-2 ${userId === 1 ? 'flex-row-reverse' : 'flex-row'}`}>
        <span className='time'>{chats.createdAt}</span>
        <div className='chat text-break'>{chats.value}</div>
      </div>
    </div>
  );
};
