import { useMediaQuery } from "@mui/material";
import useThemeColors from "../../hooks/useThemeColors";
import { useAppSelector } from "../../store/store";

const useBlogologoPageStyles = () => {
  const themeColors = useThemeColors();
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const { view, searching } = useAppSelector((state) => state.blogologoReducer);
  return {
    blogologoPageContainer: {
      maxWidth: "100%",
      backgroundColor: themeColors.backgroundColor,
      paddingTop: "72px",
      paddingBottom: "72px",
    },
    pageStyles: {
      width: "60%",
      margin: "auto",
      height: "auto",
      display: "flex",
      flexDirection: "column",
    },
    titleTabsContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "left",
      marginBottom: "5%",
      gap: "40px",
      width: "100%",
      borderBottom: !searching
        ? `1px solid ${themeColors.borderTabsColor}`
        : "none",
    },
    titleStyles: {
      fontSize: "56px",
      fontFamily: "Inter, sans-serif",
      fontWeight: "700",
      color: themeColors.blogColor,
    },
    tabsContainer: {
      width: "8.8rem",
      height: "3rem",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    newsTabStyles: {
      width: "100%",
      height: "100%",
      fontSize: "16px",
      fontFamily: "Inter, sans-serif",
      fontWeight: "600",
      cursor: "pointer",
      padding: "0 40px 0 40px",
      color:
        view === "blogs"
          ? themeColors.usedTabsColor
          : themeColors.unUsedTabsColor,
      borderBottom:
        view === "blogs"
          ? `4px solid  ${themeColors.borderTabsColor} `
          : "none",
    },
    articleTabStyles: {
      width: "100%",
      height: "100%",
      fontSize: "16px",
      fontFamily: "Inter, sans-serif",
      fontWeight: "600",
      cursor: "pointer",
      color:
        view === "articles"
          ? themeColors.usedTabsColor
          : themeColors.unUsedTabsColor,
      borderBottom:
        view === "articles"
          ? `4px solid  ${themeColors.borderTabsColor} `
          : "none",
      padding: "0 40px 0 40px",
    },
    gridContainerStyles: {
      display: "flex",
      justifyContent: isSmallScreen ? "space-between" : "flex-start",
      width: "100%",
      margin: "auto",
    },
    noFindBox: {
      display: "flex",
      alignItems: "center",
      fontSize: "16px",
      height: "52vh",
      fontFamily: "Inter, sans-serif",
      fontWeight: "600",
      color: "#777",
      textAlign: "center",
      margin: "auto",
      marginTop: "20px",
    },
    pasginationStyles: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
  };
};

export default useBlogologoPageStyles;
