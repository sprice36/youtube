import React, { useState } from "react";
import SidebarRow from "./SidebarRow";
import "./Sidebar.css";

// import { connect } from 'react-redux';

function Sidebar() {
//   const [sidebarState, setSidebarState] = useState(false);
//   const showSidebar = () => setSidebarState(!sidebarState);

  return (
    <>
      <div>
        <h1>YouTube</h1>
      </div>

      <div className="test">
        <SidebarRow title="home" className="home" />
        <SidebarRow title="subscription" className="home" />
        <SidebarRow title="trending" className="home" />
      </div>
    </>
  );
}

// export default connect(Sidebar);
export default Sidebar;
