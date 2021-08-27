import React from 'react';
import "./SidebarRow.css";

const SidebarRow = ({icon, selected, title, url}) => {
    
    return (
        <div>
            <p style={{display:"flex"}}>
                <a href='/' className="sidebar-icons">
                {icon}
                </a>
            </p>
            <p className="title">{title}</p>
        </div>
    )
}

// const SidebarRow = [
//     {
//         title: "Home"
//         path: "/"
//         className: "sidebar-title"
//     },
//     {
//         title: "Subscriptions"
//         path: "/subscriptions"
//         className: "sidebar-title"
//     },
//     {
//         title: "Trending"
//         path: "/trending"
//         className: "sidebar-title"
//     }
// ]

export default SidebarRow;