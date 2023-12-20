import { Box } from "@mui/material";
import { BlogProps } from "../../models/BlogologoProps";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";

type CardProps = {
  props: BlogProps;
};

const Card: React.FC<CardProps> = ({ props }) => {
  const { id, title, image_url, published_at } = props;
  const formattedDate = format(new Date(published_at), "LLL dd, yyyy", {
    locale: enUS,
  });
  return (
    <Box
      key={id}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "22rem",
        height: "24.25rem",
        borderRadius: "16px",
        border: "none",
        boxShadow: "0 .5rem 1.5rem rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box
        sx={{
          width: "22rem",
          height: "13rem",
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px",
        }}
      >
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
            color: "#808080",
          }}
        >
          {formattedDate}
        </Box>
        <Box
          sx={{
            fontWeight: "600",
            fontFamily: "Inter, sans-serif",
            fontSize: "18px",
          }}
        >
          {title}
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
