import "./index.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import pages from "./config/pages";
import LandingPage from "./pages";
import Dashboard from "./pages/dashboard";
import state from "./config/state";

const PrivateRoute = () => {
  if (!sessionStorage.getItem(state.TOKEN)) {
    return <Navigate to={pages.index} replace />;
  }

  return <Outlet />;
};

function App() {
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
