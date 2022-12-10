import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div>
          <p>logo</p>
          <h1>Our amazing app!</h1>
  
          <Outlet/>
        </div>
      );
}

export default Layout;