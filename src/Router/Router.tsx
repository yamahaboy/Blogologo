import { BrowserRouter } from "react-router-dom";
import RouterRoutes from "./RouterRoutes";
import { Suspense, lazy } from "react";

const Header = lazy(() => import("../components/Header/Header"));
const Footer = lazy(() => import("../components/Footer/Footer"));

export enum routeLocationsEnum {
  mainPage = "/",
  postPage = "/postPage",
  signIn = "/signIn",
  signUp = "/signUp",
}

const Router: React.FC = () => {
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
