import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Outlet, Link } from "react-router-dom";
import './App.css'

export default function App() {
  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-dark shadow p-3 rounded" style={{backgroundColor:"#09062b", position:"sticky", top:0, overflow:"hidden", zIndex:"50"}}>
      {/* #c5aa6a */}
        

        <ul className="navbar-nav mr-auto" style={{alignItems:"center"}}>
        <li>
        <a>
        <h3 style={{color:"white", paddingTop:"5%"}} className="web-name">E-Seller</h3>
        </a>
        </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">
        <Link to="/invoices" style={{color:"white", textDecoration:"none"}} className="linksCSS">Cart</Link>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
        <Link to="/card" style={{color:"white", textDecoration:"none"}} className="linksCSS">Cards</Link>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
        <Link to="/auth" style={{color:"white", textDecoration:"none"}} className="linksCSS">Sign In/Sign Up</Link>
        </a>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link" href="#">
        <Link to="/signup">Sign Up</Link>
        </a>
      </li> */}
    </ul>
      </nav>
      <Outlet />
    </div>
  );
}


