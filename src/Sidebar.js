import { Avatar, IconButton } from '@material-ui/core'
import { Chat, DonutLarge, MoreVert } from '@material-ui/icons'
import "./Sidebar.css"
import React from 'react'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLarge />
                    </IconButton>

                    <IconButton>
                        <Chat />
                    </IconButton>

                    <IconButton>
                        <MoreVert />
                    </IconButton>

                </div>
            </div>

            <div className="sidebar__search">

            </div>

            <div className="sidebar__chats">

            </div>
        </div>
    )
}

export default Sidebar;
