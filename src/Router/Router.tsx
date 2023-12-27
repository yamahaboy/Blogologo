import { BrowserRouter } from "react-router-dom";
import RouterRoutes from "./RouterRoutes";
import { Suspense, lazy } from "react";

export enum routeLocationsEnum {
  mainPage = "/",
  postPage = "/postPage",
  signIn = "/signIn",
  signUp = "/signUp",
}

const Router: React.FC = () => {
  const Header = lazy(() => import("../components/Header/Header"));
  const Footer = lazy(() => import("../components/Footer/Footer"));
  return (
    <BrowserRouter>
      <Suspense>
        <Header />
        <RouterRoutes />
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
