import React, { useContext } from "react";
import { Box } from "@mui/material";
import { ThemeContext, ThemeEnum } from "../../store/context/ThemeContext";
import { IOSSwitch } from "./Switch/Switch";
import useFooterStyles from "./styles";

const Footer: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const {
    footerContainerStyles,
    footerStyles,
    textStyles,
    switchContainerStyles,
  } = useFooterStyles();
  const handleThemeToggle = () => {
    setTheme((prevTheme) =>
      prevTheme === ThemeEnum.light ? ThemeEnum.dark : ThemeEnum.light
    );
  };

  return (
    <Box sx={footerContainerStyles}>
      <Box sx={footerStyles}>
        <Box sx={textStyles}>©2022 Blogolog</Box>
        <Box sx={switchContainerStyles}>
          <Box sx={textStyles}>Dark theme</Box>
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
