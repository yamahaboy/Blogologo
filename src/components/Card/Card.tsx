import { Box } from "@mui/material";
import { BlogProps } from "../../models/BlogologoProps";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import useThemeColors from "../../hooks/useThemeColors";

type CardProps = {
  props: BlogProps;
  onClick: () => void;
};

const Card: React.FC<CardProps> = ({ props, onClick }) => {
  const { id, title, image_url, published_at } = props;
  const themeColors = useThemeColors();
  const formattedDate = format(new Date(published_at), "LLL dd, yyyy", {
    locale: enUS,
  });
  return (
    <Box
      key={id}
      onClick={onClick}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "24.25rem",
        borderRadius: "16px",
        backgroundColor: themeColors.cardBackColor,
        border: "none",
        boxShadow: "0 .5rem 1.5rem rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
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
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
            position: "absolute",
            background: "rgba(145, 46, 242, 0.6)",
            transition: "opacity 1s ease",
            opacity: 1,
          }}
        />
        <img
          src={image_url}
          alt="articleImg"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
          }}
        />
      </Box>
      <Box
        sx={{
          width: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "left",
          flexDirection: "column",
          margin: "auto",
          gap: "15px",
        }}
      >
        <Box
          sx={{
            fontWeight: "500",
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            color: themeColors.footerTextColor,
          }}
        >
          {formattedDate}
        </Box>
        <Box
          sx={{
            fontWeight: "600",
            fontFamily: "Inter, sans-serif",
            fontSize: "18px",
            color: themeColors.textInCardColor,
          }}
        >
          {title}
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
