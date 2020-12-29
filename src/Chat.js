import { Avatar, IconButton } from '@material-ui/core'
import { SearchOutlined, MoreVert, AttachFile, InsertEmoticon, Mic } from '@material-ui/icons';
import React, { useState, useEffect } from 'react'
import "./Chat.css"

function Chat() {
    const [seed, setSeed] = useState('');
    const [input, setInput] = useState('');

    useEffect(() => {
        setSeed(Math.random(0, 70));
    }, [])

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(input);
        setInput("");
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://i.pravatar.cc/150?${seed}`} />

                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at</p>
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
                <p className={`chat__message ${ true && 'chat__reciever' }`}>
                    <span className="chat__name">Sonny Singha</span>
                    Hey Guys
                    <span className="chat__timestamp">
                        3:30pm
                    </span>
                </p>
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
