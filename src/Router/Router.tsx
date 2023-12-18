import { BrowserRouter } from "react-router-dom";
import RouterRoutes from "./RouterRoutes";

export enum routeLocationsEnum {
  mainPage = "/",
}

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <RouterRoutes />
    </BrowserRouter>
  );
};

export default Router;
