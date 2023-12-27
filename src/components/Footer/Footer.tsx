import React, { useContext } from "react";
import { Box } from "@mui/material";
import useThemeColors from "../../hooks/useThemeColors";
import { ThemeContext, ThemeEnum } from "../../store/context/ThemeContext";
import { IOSSwitch } from "./Switch/Switch";

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
      sx={{ maxWidth: "100%", backgroundColor: themeColors.backgroundColor }}
    >
      <Box
        sx={{
          width: "60%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "auto",
          borderTop: `1px solid ${themeColors.intervalBtnBackColor}`,
          height: "6rem",
        }}
      >
        <Box
          sx={{
            fontWeight: "400",
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            color: themeColors.footerTextColor,
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
              color: themeColors.footerTextColor,
            }}
          >
            Dark theme
          </Box>
          <IOSSwitch
            checked={theme === ThemeEnum.dark}
            onChange={handleThemeToggle}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
