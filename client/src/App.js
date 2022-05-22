import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import Auth from './components/Auth';
import './App.css'

export default function App() {
  const [user, setLoginUser] = useState({})
  
  return (
    user && user._id
    ?
    <div>
      {console.log(user)}

      <nav id="navUnique" className="navbar navbar-expand-lg navbar-dark shadow p-3 rounded" style={{backgroundColor:"#09062b", position:"sticky", top:0, overflow:"hidden", zIndex:"50"}}>
      {/* #c5aa6a */}
        

    <ul className="navbar-nav mr-auto" style={{alignItems:"center"}}>
    {
      user && user._id 
      ?
      <>
      <li>
        <a>
        <h3 style={{color:"white", paddingTop:"5%"}} className="web-name">E-Seller</h3>
        </a>
        </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">
          <Link to="/cart" style={{color:"white", textDecoration:"none",marginLeft:"20%"}} className="linksCSS">Cart</Link>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
        <Link to="/card" style={{color:"white", textDecoration:"none"}} className="linksCSS">Cards</Link>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
        <Link to="/checkout" style={{color:"white", textDecoration:"none"}} className="linksCSS">Checkout</Link>
        </a>
      </li>
      {user.inputName === "admin"?
      <li className="nav-item">
        <a className="nav-link" href="#">
        <Link to="/checkoutdata" style={{color:"white", textDecoration:"none"}} className="linksCSS">Checkout Data</Link>
        </a>
      </li>:
        null
      }
      <li className="nav-item">
        <a className="nav-link" href="#">
        <Link to="/" style={{color:"white", textDecoration:"none"}} onClick={e=>setLoginUser({})} className="linksCSS">Sign Out</Link>
        </a>
      </li>
      <li>
        <input type="text" placeholder="Enter to Search..." style={{width:"70%", marginLeft:"280%"}}/>
      </li>
      </>
      :
      <li className="nav-item">
        <a className="nav-link" href="#">
        <Link to="/" style={{color:"white", textDecoration:"none", marginLeft:"20%"}} className="linksCSS">Sign In/Sign Up</Link>
        </a>
      </li>
    }
      {/* <li className="nav-item">
        <a className="nav-link" href="#">
        <Link to="/signup">Sign Up</Link>
        </a>
      </li> */}
    </ul>
      </nav>
      <Outlet />
    </div>
    :
    <>
        <div>
      {console.log(user)}

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
          <Link to="/" style={{color:"white", textDecoration:"none"}} className="linksCSS">Sign In/Sign Up</Link>
        </a>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link" href="#">
        <Link to="/card" style={{color:"white", textDecoration:"none"}} className="linksCSS">Cards</Link>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
        <Link to="/checkout" style={{color:"white", textDecoration:"none"}} className="linksCSS">Checkout</Link>
        </a>
      </li> */}
      {/* <li className="nav-item">
        <a className="nav-link" href="#">
        <Link to="/auth" style={{color:"white", textDecoration:"none"}} className="linksCSS">Sign In/Sign Up</Link>
        </a>
      </li> */}
      {/* <li className="nav-item">
        <a className="nav-link" href="#">
        <Link to="/signup">Sign Up</Link>
        </a>
      </li> */}
    </ul>
      </nav>
      <Outlet />
    </div>
    <Auth setLoginUser={setLoginUser}/>
    </>
  );
}