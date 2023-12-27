import { Box } from "@mui/material";
import Router from "./Router/Router";
import MainContext from "./store/context";
import useThemeColors from "./hooks/useThemeColors";

function App() {
  const backgroundColor = useThemeColors();
  return (
    <Box sx={{backgroundColor }}>
    <MainContext>
      <Router />
    </MainContext>
    </Box>
  );
}

export default App;
