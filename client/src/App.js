import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-dark shadow p-3 rounded" style={{backgroundColor:"#09062b"}}>
      {/* #c5aa6a */}
        

        <ul className="navbar-nav mr-auto">
        <li>
        <a>
        <h3 style={{color:"white", paddingTop:"5%"}}>E-Seller</h3>
        </a>
        </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">
        <Link to="/invoices">Invoices</Link>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
        <Link to="/card">Cards</Link>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
        <Link to="/auth">Sign In/Sign Up</Link>
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


