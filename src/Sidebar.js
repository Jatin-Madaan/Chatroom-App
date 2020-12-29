import { Avatar, IconButton } from '@material-ui/core'
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons'
import "./Sidebar.css"
import React from 'react'
import SidebarChat from './SidebarChat'

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
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>

            <div className="sidebar__chats">
                <SidebarChat addNewChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar;
