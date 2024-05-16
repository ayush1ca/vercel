import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Suspense } from "react";
import { PublicRoutes, PrivateRoutes } from "./routes";
import { Spin } from "antd";
import { getUserToken } from "./service/wrapper";
import "../src/assets/icons/css/fontello.css";
import "./App.scss";

function App() {
  const isLoggedIn = getUserToken();
  return (
    <Suspense
      fallback={
        <Spin
          size="large"
          className="h-screen d-flex justify-content-center align-items-center"
        />
      }
    >
      <Router>
        <Routes>
          {PublicRoutes.map(({ path, exact, component: Component, login }) => {
            return !isLoggedIn || login  ? (
              <Route
                key={path}
                path={path}
                exact={exact}
                element={<Component></Component>}
              />
            ) : (
              <Route
                key={path}
                path={path}
                exact={exact}
                element={<Navigate to="/gift-card-library" />}
              />
            );
          })}
          {PrivateRoutes.map(({ path, exact, component: Component }) => {
            return isLoggedIn ? (
              <Route
                key={path}
                path={path}
                exact={exact}
                element={<Component></Component>}
              />
            ) : (
              <Route
                key={path}
                path={path}
                exact={exact}
                element={<Navigate to="/login" />}
              />
            );
          })}
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
