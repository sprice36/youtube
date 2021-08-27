import React, { useState } from "react";
import SidebarRow from "./SidebarRow";
import "./Sidebar.css";

import { BsHouseDoorFill } from "react-icons/bs";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import { BsClockHistory } from "react-icons/bs";
import { MdVideoLibrary } from "react-icons/md";
import { MdExplore } from "react-icons/md";

// import { connect } from 'react-redux';

function Sidebar() {
//   const [sidebarState, setSidebarState] = useState(false);
//   const showSidebar = () => setSidebarState(!sidebarState);

  const home = <BsHouseDoorFill />;
  const explore = <MdExplore />
  const sub = <BsFillCollectionPlayFill />;
  const lib = <MdVideoLibrary />;
  const history = <BsClockHistory />;
  
  return (
      <div className="bar">
        <SidebarRow title="home" icon={home}/>
        <SidebarRow title="explore" icon={explore}/>
        <SidebarRow title="subscription" icon={sub}/>
        <SidebarRow title="Library" icon={lib}/>
        <SidebarRow title="History" icon={history}/>
      </div>
  );
}

// export default connect(Sidebar);
export default Sidebar;
