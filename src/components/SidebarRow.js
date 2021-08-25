import React from 'react';

const SidebarRow = ({icon, selected, title, url}) => {
    
    return (
        <div className={selected}>
        <h2 className="title">{title}</h2>
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