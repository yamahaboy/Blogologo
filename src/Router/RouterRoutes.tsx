import { Route, Routes } from "react-router-dom";
import { routeLocationsEnum } from "./Router";
import MainPage from "./pages/MainPage";
import { lazy } from "react";
const Footer = lazy(() => import("../components/Footer/Footer"));

const RouterRoutes = () => {
  return (
    <Routes>
      <Route path="">
        <Route path={routeLocationsEnum.mainPage} element={<MainPage />} />
      </Route>
    </Routes>
  );
};

export default RouterRoutes;
