import { Avatar, IconButton } from '@material-ui/core'
import { SearchOutlined, MoreVert, AttachFile } from '@material-ui/icons';
import React, { useState, useEffect } from 'react'
import "./Chat.css"

function Chat() {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.random(0, 70));
    }, [])

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
                
            </div>

            <div className="chat__footer">

            </div>
        </div>
    )
}

export default Chat;
