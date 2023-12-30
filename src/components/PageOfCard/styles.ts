import useThemeColors from "../../hooks/useThemeColors";

const usePageOfCardStyles = () => {
  const themeColors = useThemeColors();
  return {
    pageOfCardStyles: {
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
    routeStyles: {
      display: "flex",
      flexDirection: "row",
      gap: "10px",
      fontSize: "16px",
      fontFamily: "Inter, sans-serif",
      fontWeight: "400",
      color: themeColors.blogColor,
      marginBottom: "32px",
    },
    titleStyles: {
      fontSize: "56px",
      fontFamily: "Inter, sans-serif",
      fontWeight: "700",
      textAlign: "left",
      marginBottom: "32px",
      color: themeColors.blogColor,
    },
    imgContainerStyles: {
      width: "100%",
      height: "32rem",
      marginBottom: "32px",
    },
    imgStyles: {
      width: "100%",
      height: "100%",
      borderRadius: "16px",
    } as React.CSSProperties,
    summaryStyles: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "auto",
      width: "70%",
      fontSize: "18px",
      fontFamily: "Inter, sans-serif",
      fontWeight: "400",
      color: themeColors.blogColor,
      marginBottom: "32px",
    },
    btnContainerStyles: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "6px",
      paddingBottom: "32px",
      borderBottom: `1px solid ${themeColors.intervalBtnBackColor}`,
    },
    btnStyles: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "5.5rem",
      height: "3.5rem",
      borderRadius: "4px",
      cursor: "pointer",
      backgroundColor: themeColors.intervalBtnBackColor,
    },
    btnImgStyles: {
      width: "24px",
      height: "24px",
      color: "#313037",
    } as React.CSSProperties,
  };
};

export default usePageOfCardStyles;
