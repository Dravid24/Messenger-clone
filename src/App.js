import React, {useState,useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar} from 'react-bootstrap';
import { FormControl,IconButton,Input } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import {db,timestamp } from './firebase';
import Message from './Message';
import FlipMove from 'react-flip-move';

function App() {
  const [username, setUsername] = useState("");
  const [input, setInput] = useState("");
  const [messages,setMessages] = useState([]);

  useEffect(() => {
   setUsername(prompt("Please Enter username"));
  }, []);

  useEffect(() => {
    db.collection("messages")
    .orderBy("timestamp" , "desc")
    .onSnapshot((snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({id: doc.id, message: doc.data() }))
      );
    });
  });
  

  const Sendmsg=(event) =>{
    event.preventDefault();
    db.collection("messages").add({
      username:username,
      message:input,
      timestamp:timestamp
    })
    setInput("");
  }


  return (
    <div >
      <div className="header">
        <Navbar >
          <Navbar.Brand>
            <img src="messenger.png" alt="logo" />&nbsp;<strong> Messenger</strong>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <strong>{username}</strong>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="user">
        <h3>Welcome {username}</h3>
      </div>
      
      <form className="form">
        <FormControl className="form_control">
        <Input placeholder="Enter text here..." className="inputfield" onChange={(event)=>setInput(event.target.value)} value={input}/>
        <IconButton varient="contained" color="primary" type="submit" disabled={!input} onClick={Sendmsg}>
          <SendIcon />
        </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ message , id}) => {
          return <Message key={id} message={message} username={username} />;
        })
        }
      </FlipMove>

    </div>
  );
}

export default App;
