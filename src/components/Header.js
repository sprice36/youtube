import React, { useState } from "react";

// import { connect } from 'react-redux';

function Header() {
  //   const [sidebarState, setSidebarState] = useState(false);
  //   const showSidebar = () => setSidebarState(!sidebarState);

  return (
    <nav>
      <input type="text" placeholder="Search"></input>
      <button type="submit">Search</button>
      <button>Sign in</button>
    </nav>
  );
}

// export default connect(Header);
export default Header;
