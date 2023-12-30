import useThemeColors from "../../hooks/useThemeColors";

const useCardStyles = () => {
  const themeColors = useThemeColors();

  return {
    cardStyles: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "24.25rem",
      borderRadius: "16px",
      backgroundColor: themeColors.cardBackColor,
      border: "none",
      boxShadow: "0 .5rem 1.5rem rgba(0, 0, 0, 0.1)",
      cursor: "pointer",
    },
    imgContainerStyles: {
      width: "100%",
      height: "13rem",
      borderTopLeftRadius: "16px",
      borderTopRightRadius: "16px",
      position: "relative",
      overflow: "hidden",
      transition: "filter 1s ease",
      "&:hover": {
        "& div": {
          opacity: 0,
        },
        "& img": {
          filter: "brightness(100%)",
        },
      },
    },
    hoveImgStyles: {
      width: "100%",
      height: "100%",
      borderTopLeftRadius: "16px",
      borderTopRightRadius: "16px",
      position: "absolute",
      background: "rgba(145, 46, 242, 0.6)",
      transition: "opacity 1s ease",
      opacity: 1,
    },
    imgStyles: {
      width: "100%",
      height: "100%",
      borderTopLeftRadius: "16px",
      borderTopRightRadius: "16px",
    } as React.CSSProperties,
    infoContainerStyles: {
      width: "80%",
      display: "flex",
      justifyContent: "center",
      alignItems: "left",
      flexDirection: "column",
      margin: "auto",
      gap: "15px",
    },
    dateStyles: {
      fontWeight: "500",
      fontFamily: "Inter, sans-serif",
      fontSize: "16px",
      color: themeColors.footerTextColor,
    },
    titleStyles: {
      fontWeight: "600",
      fontFamily: "Inter, sans-serif",
      fontSize: "18px",
      color: themeColors.textInCardColor,
    },
  };
};

export default useCardStyles;
