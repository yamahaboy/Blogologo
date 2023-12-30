import { useMediaQuery } from "@mui/material";
import useThemeColors from "../../hooks/useThemeColors";

const useHeaderStyles = () => {
  const themeColors = useThemeColors();
  const isSmallScreen = useMediaQuery("(max-width:700px)");
  return {
    headerContainer: {
      display: "flex",
      flexDirection: "row",
      maxWidth: "100%",
      height: "6rem",
      alignItems: "center",
      background: themeColors.headerColor,
    },
    headerStyles: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "85%",
      height: "100%",
      paddingLeft: "1%",
      paddingTop: "1%",
      paddingBottom: "1%",
    },
    logoStyles: {
      backgroundColor: themeColors.headerColor,
      height: "100%",
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      paddingRight: "1%",
    },
    inputBaseStyles: {
      fontSize: "16px",
      color: themeColors.footerTextColor,
      width: "100%",
      height: "100%",
      backgroundColor: themeColors.intervalBtnBackColor,
      fontFamily: "Inter, sans-serif",
      fontWeight: "400",
      padding: "20px",
    },
    signInContainerStyles: {
      display: "flex",
      width: isSmallScreen ? "25%" : "15%",
      height: "100%",
      justifyContent: "left",
      alignItems: "center",
      paddingLeft: "1%",
      paddingRight: "1%",
      borderLeft: `1px solid ${themeColors.leftBorder}`,
      gap: "16px",
      cursor: "pointer",
    },
    avatarStyles: {
      background: `linear-gradient(180deg, #4D0AC7 0%, #912EF2 100%)`,
      width: "3rem",
      height: "3rem",
      borderRadius: "4px",
      fontSize: "16px",
      fontFamily: "Inter, sans-serif",
      fontWeight: "600",
      color: "#fff",
    },
    nameSurnameStyles: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      fontSize: "16px",
      fontFamily: "Inter, sans-serif",
      fontWeight: "600",
      color: themeColors.userColor,
    },
  };
};

export default useHeaderStyles;
