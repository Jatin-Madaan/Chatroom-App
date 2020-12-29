import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

function SidebarChat() {
    const [seed, setSeed] = useState('');

    useEffect(()=>{
        setSeed(Math.random(0, 70));
    }, [])

    return (
        <div className="sidebarChat">
            <Avatar src={`https://i.pravatar.cc/150?${seed}`} />
            <div className="sidebarChat__info">
                <h2>Room Names</h2>
                <p>Last message..</p>
            </div>
        </div>
    )
}

export default SidebarChat;
