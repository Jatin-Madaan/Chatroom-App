import { Avatar, IconButton } from '@material-ui/core'
import { SearchOutlined, MoreVert, AttachFile, InsertEmoticon, Mic } from '@material-ui/icons';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import db from './firebase';
import "./Chat.css"
import { useStateValue } from './StateProvider';
import firebase from 'firebase';

function Chat() {
    const [seed, setSeed] = useState('');
    const [input, setInput] = useState('');
    let { roomId } = useParams();
    const [roomName, setRoomName] = useState('');
    const [messages, setMessages] = useState([]);
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        setSeed(Math.random(0, 70));
    }, [roomId])

    useEffect(() => {
        console.log('roomId');
        if(roomId){
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
                console.log(snapshot.data().name);
                setRoomName(snapshot.data().name);
            });

            db.collection('rooms').doc(roomId).collection("messages")
              .orderBy('timestamp', 'asc').onSnapshot(snapshot => (
                  setMessages(snapshot.docs.map(doc => (
                      doc.data()
                  )))
              ))
        }
    }, [roomId])

    

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(input);
        db.collection('rooms').doc(roomId).collection('messages').add({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput("");
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://i.pravatar.cc/150?${seed}`} />

                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last seen at { new Date(messages[messages.length - 1]?.timestamp?.toDate()).toUTCString() }</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>

                    <IconButton>
                        <AttachFile />
                    </IconButton>

                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                {messages.map((message) => (
                    <p className={`chat__message ${ message.name === user.displayName && 'chat__reciever' }`}>
                    <span className="chat__name">{message.name}</span>
                    {message.message}
                    <span className="chat__timestamp">
                        { new Date(message.timestamp?.toDate()).toUTCString() }
                    </span>
                </p>
                ))}
            </div>

            <div className="chat__footer">
                <InsertEmoticon />
                <form>
                    <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="type a message" />
                    <button onClick={sendMessage} type="submit">Send</button>
                </form>
                <Mic />
            </div>
        </div>
    )
}

export default Chat;
