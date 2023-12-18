import { Box, FormControlLabel, FormGroup } from "@mui/material";
import { MaterialUISwitch } from "./styles";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "auto",
        borderTop: "1px solid #808080",
        marginTop: "72px",
        height: "92px",
      }}
    >
      <Box
        sx={{
          fontWeight: "400",
          fontFamily: "Inter, sans-serif",
          fontSize: "16px",
          color: "#808080",
        }}
      >
        ©2022 Blogolog
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            fontWeight: "400",
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            color: "#808080",
          }}
        >
          Dark theme
        </Box>
        <FormGroup>
          <FormControlLabel
            control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
            label=""
          />
        </FormGroup>
      </Box>
    </Box>
  );
};

export default Footer;
