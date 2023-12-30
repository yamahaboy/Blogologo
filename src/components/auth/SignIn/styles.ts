import { useMediaQuery } from "@mui/material";
import useThemeColors from "../../../hooks/useThemeColors";

const useSignInStyles = () => {
  const themeColors = useThemeColors();
  const isSmallScreen = useMediaQuery("(max-width:850px)");

  return {
    signInContainer: {
      maxWidth: "100%",
      height: "67vh",
      backgroundColor: themeColors.backgroundColor,
      paddingTop: "5%",
      paddingBottom: isSmallScreen ? "20%" : "10%",
    },
    signInStyles: {
      width: "60%",
      margin: "auto",
      height: "auto",
      display: "flex",
      flexDirection: "column",
    },
    backHomeStyles: {
      fontSize: "16px",
      fontFamily: "Inter, sans-serif",
      fontWeight: "400",
      color: themeColors.blogColor,
      cursor: "pointer",
      marginBottom: "32px",
    },
    titleStyles: {
      fontSize: "56px",
      fontFamily: "Inter, sans-serif",
      fontWeight: "700",
      color: themeColors.blogColor,
      marginBottom: "32px",
    },
    formStyles: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      margin: "auto",
      width: isSmallScreen ? "80%" : "50%",
      height: "auto",
      gap: "40px",
      padding: "40px",
      border: "none",
      borderRadius: "16px",
      backgroundColor: themeColors.cardBackColor,
    }as  React.CSSProperties,
    inputContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "left",
      width: "100%",
      height: "auto",
      gap: "5px",
    },
    inputLabel: {
      fontSize: "16px",
      fontFamily: "Inter, sans-serif",
      fontWeight: "600",
      color: themeColors.blogColor,
    },
    inputStyles: {
      backgroundColor: themeColors.inputColor,
      color: themeColors.footerTextColor,
    },
    forgotPass: {
      fontSize: "16px",
      fontFamily: "Inter, sans-serif",
      fontWeight: "400",
      color: themeColors.blogColor,
    },
    submitBtn: {
      width: "100%",
      borderRadius: "4px",
      backgroundColor: "#6C1BDB",
      color: "#fff",
      height: "3.5rem",
      fontSize: "18px",
      fontFamily: "Inter, sans-serif",
      fontWeight: "600",
      "&:hover": {
        backgroundColor: "#6C1BDB",
      },
    },
    footerText: {
      display: "flex",
      flexDirection: "row",
      fontSize: "16px",
      fontFamily: "Inter, sans-serif",
      fontWeight: "400",
      color: "#313037",
      gap: "5px",
    },
    spanStyles: {
      color: "#6C1BDB",
      cursor: "pointer",
      fontWeight: "500",
    },
  };
};

export default useSignInStyles;
