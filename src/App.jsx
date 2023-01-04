import { useEffect } from "react";
import "./index.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { gapi } from "gapi-script";
import pages from "./config/pages";
import LandingPage from "./pages";
import Dashboard from "./pages/dashboard";
import state from "./config/state";
import oauth from "./config/oauth";

const PrivateRoute = () => {
  if (!sessionStorage.getItem(state.TOKEN)) {
    return <Navigate to={pages.index} replace />;
  }

  return <Outlet />;
};

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: oauth.CLIENT_ID,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path={pages.dashboard} element={<PrivateRoute />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
