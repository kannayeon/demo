import './App.css';
import { Chat } from './components/chatroom/chat/Chat';
import { Button, Dropdown, Form, InputGroup } from 'react-bootstrap';

function App() {
  return (
    <div className='container d-flex flex-column height-100vh'>
      <div className='full-height d-flex flex-column'>
      <Chat
        userId={2}
        chats={{
          chatId: 1664469417344,
          value: '안녕하세요',
          createdAt: '10월 3일',
        }}
        recipientId={'all'}
      />
      <Chat
        userId={1}
        chats={{ chatId: 1664469417344, value: 'ㅎㅇ', createdAt: '10월 3일' }}
        recipientId={'all'}
      />
      </div>
      <div className="spacing" />
      <div className="d-flex flex-row justify-content-end gap-2">
      <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        모두에게
      </Dropdown.Toggle>
      <Dropdown.Menu >
        <Dropdown.Item href="#/action-1">모두에게</Dropdown.Item>
        <Dropdown.Item href="#/action-2">사람1</Dropdown.Item>
        <Dropdown.Item href="#/action-3">사람2</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
       <InputGroup className="mb-3">
        <Form.Control
          placeholder="내용을 입력하세요."
          aria-label="내용을 입력하세요."
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-primary" id="button-addon2">
          ↑
        </Button>
      </InputGroup>
      </div>
    </div>
  );
}

export default App;
