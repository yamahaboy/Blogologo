import { useMediaQuery } from "@mui/material";
import useThemeColors from "../../hooks/useThemeColors";

const useFooterStyles = () => {
  const themeColors = useThemeColors();
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return {
    footerContainerStyles: {
      maxWidth: "100%",
      backgroundColor: themeColors.backgroundColor,
    },
    footerStyles: {
      width: "60%",
      display: "flex",
      flexDirection: isSmallScreen ? "column" : "row",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "auto",
      borderTop: `1px solid ${themeColors.intervalBtnBackColor}`,
      height: "6rem",
      padding: isSmallScreen ? "5%" : "none",
    },
    textStyles: {
      fontWeight: "400",
      fontFamily: "Inter, sans-serif",
      fontSize: "16px",
      color: themeColors.footerTextColor,
    },
    switchContainerStyles: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "20px",
    },
  };
};

export default useFooterStyles;
