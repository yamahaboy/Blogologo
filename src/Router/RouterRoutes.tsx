import { Route, Routes } from "react-router-dom";
import { routeLocationsEnum } from "./Router";
import MainPage from "./pages/MainPage";
import CardPage from "./pages/CardPage";
import SingUpPage from "./pages/auth/SingUpPage";
import SingInPage from "./pages/auth/SingInPage";

const RouterRoutes = () => {
  return (
    <Routes>
      <Route path="">
        <Route path={routeLocationsEnum.mainPage} element={<MainPage />} />
        <Route
          path={`${routeLocationsEnum.postPage}/:id`}
          element={<CardPage />}
        />
        <Route path={routeLocationsEnum.signIn} element={<SingInPage />} />
        <Route path={routeLocationsEnum.signUp} element={<SingUpPage />} />
      </Route>
    </Routes>
  );
};

export default RouterRoutes;
