import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import MediaCard from "./routes/MediaCard";
import Invoices from "./routes/invoices";
import Auth from './components/Auth';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="card" element={<MediaCard />} />
        <Route path="invoices" element={<Invoices />} />
        {/* <Route path="signup" element={<SignUp />} /> */}
        <Route path="auth" element={<Auth />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);