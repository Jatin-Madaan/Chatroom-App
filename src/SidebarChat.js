import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import db from './firebase';
import "./SidebarChat.css"

function SidebarChat({ id, name, addNewChat }) {
    const [seed, setSeed] = useState('');

    useEffect(()=>{
        setSeed(Math.random(0, 70));
    }, [])

    const createChat = () => {
        const roomName = prompt('please enter name for chat room');
        if (roomName){
            // do some clever db stuff
            db.collection('rooms').add({
                name: roomName,
            })
        }
    }
    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://i.pravatar.cc/150?${seed}`} />
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>Last message..</p>
            </div>
        </div>
    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new Chat</h2>
        </div>
    )
}

export default SidebarChat;
