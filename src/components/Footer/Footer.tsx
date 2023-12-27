import React, { useContext } from "react";
import { Box, FormControlLabel, FormGroup, Switch } from "@mui/material";
import useThemeColors from "../../hooks/useThemeColors";
import { ThemeContext, ThemeEnum } from "../../store/context/ThemeContext";

const Footer: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const themeColors = useThemeColors();

  const handleThemeToggle = () => {
    setTheme((prevTheme) =>
      prevTheme === ThemeEnum.light ? ThemeEnum.dark : ThemeEnum.light
    );
  };

  return (
    <Box
      sx={{
        width: "60%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "auto",
        borderTop: "1px solid #3130371A",
        marginTop: "72px",
        height: "92px",
        backgroundColor: themeColors.backgroundColor,
      }}
    >
      <Box
        sx={{
          fontWeight: "400",
          fontFamily: "Inter, sans-serif",
          fontSize: "16px",
          color: themeColors.textInCardColor,
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
            color: themeColors.textInCardColor,
          }}
        >
          Dark theme
        </Box>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={theme === ThemeEnum.dark}
                onChange={handleThemeToggle}
              />
            }
            label=""
          />
        </FormGroup>
      </Box>
    </Box>
  );
};

export default Footer;
