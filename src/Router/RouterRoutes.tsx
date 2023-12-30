import { Route, Routes } from "react-router-dom";
import { routeLocationsEnum } from "./Router";
import MainPage from "./pages/MainPage";
import CardPage from "./pages/CardPage";
import SignInPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SignUpPage";

const RouterRoutes = () => {
  return (
    <Routes>
      <Route path="">
        <Route path={routeLocationsEnum.mainPage} element={<MainPage />} />
        <Route
          path={`${routeLocationsEnum.postPage}/:id`}
          element={<CardPage />}
        />
        <Route path={routeLocationsEnum.signIn} element={<SignInPage />} />
        <Route path={routeLocationsEnum.signUp} element={<SignUpPage />} />
      </Route>
    </Routes>
  );
};

export default RouterRoutes;
