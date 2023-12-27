import Router from "./Router/Router";
import MainContext from "./store/context";

function App() {
  return (
    <MainContext>
      <Router />
    </MainContext>
  );
}

export default App;
