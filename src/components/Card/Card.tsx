import { Box } from "@mui/material";
import { BlogProps } from "../../models/BlogologoProps";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import useCardStyles from "./styles";

type CardProps = {
  props: BlogProps;
  onClick: () => void;
};

const Card: React.FC<CardProps> = ({ props, onClick }) => {
  const { id, title, image_url, published_at } = props;
  const {
    cardStyles,
    imgContainerStyles,
    hoveImgStyles,
    imgStyles,
    infoContainerStyles,
    dateStyles,
    titleStyles,
  } = useCardStyles();
  const formattedDate = format(new Date(published_at), "LLL dd, yyyy", {
    locale: enUS,
  });
  return (
    <Box key={id} onClick={onClick} sx={cardStyles}>
      <Box sx={imgContainerStyles}>
        <Box sx={hoveImgStyles} />
        <img src={image_url} alt="articleImg" style={imgStyles} />
      </Box>
      <Box sx={infoContainerStyles}>
        <Box sx={dateStyles}>{formattedDate}</Box>
        <Box sx={titleStyles}>{title}</Box>
      </Box>
    </Box>
  );
};

export default Card;
