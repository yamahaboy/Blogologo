import { useMediaQuery } from "@mui/material";
import useThemeColors from "../../hooks/useThemeColors";
import { hoverPurple, white } from "../../styles/colorConstants";

const useFilterContainerStyles = () => {
  const themeColors = useThemeColors();
  const isSmallScreen = useMediaQuery("(max-width:900px)");

  return {
    FilterContainerStyles: {
      display: "flex",
      flexDirection: isSmallScreen ? "column" : "row",
      gap: "20px",
      alignItems: "center",
      justifyContent: isSmallScreen ? "center" : "space-between",
      width: "100%",
      margin: "auto",
      marginBottom: "32px",
    },
    buttonContainerStyles: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "4px",
      width: isSmallScreen ? "100%" : "75%",
      height: "100%",
    },
    btnStyles: {
      borderRadius: "4px",
      fontSize: "16px",
      fontFamily: "Inter, sans-serif",
      fontWeight: "500",
      width: isSmallScreen ? "25%" : "20%",
      height: "4rem",
      "&:hover": { backgroundColor: hoverPurple, color: white },
    },
    selectStyles: {
      width: isSmallScreen ? "100%" : "25%",
      backgroundColor: themeColors.dropDownBackColor,
      color: themeColors.textInCardColor,
      border: "none",
      outline: "none",
      "&:hover": {
        outline: `1px solid ${hoverPurple}`,
      },
    },
  };
};

export default useFilterContainerStyles;
