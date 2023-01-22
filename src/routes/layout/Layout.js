import './Layout.css';
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="App">
          <div className="App-header">
            <h1>Auth Project</h1>
          </div>
          <Outlet/>
        </div>
      );
}

export default Layout;