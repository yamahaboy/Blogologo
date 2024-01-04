import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/store";
import FaceBook from "../../assets/svg/Facebook.svg";
import Twitter from "../../assets/svg/Twitter.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  getSelectedPostFromStore,
  setSelectedCard,
} from "../../store/reducers/blogologoReducer/actions";
import ArticlesCard from "../Card/Card";
import { BlogProps } from "../../models/BlogologoProps";
import { routeLocationsEnum } from "../../Router/Router";
import useThemeColors from "../../hooks/useThemeColors";
import usePageOfCardStyles from "./styles";

const PageOfCard: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { view, selectedCard, articles, news } = useAppSelector(
    (state) => state.blogologoReducer
  );
  const {
    pageOfCardStyles,
    pageStyles,
    routeStyles,
    titleStyles,
    imgContainerStyles,
    imgStyles,
    summaryStyles,
    btnContainerStyles,
    btnStyles,
    btnImgStyles,
  } = usePageOfCardStyles();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const themeColors = useThemeColors();
  const viewType = view === "blogs" ? "news" : view;

  const handleselectCard = (card: BlogProps) => {
    dispatch(setSelectedCard(card));
    if (card.id) {
      navigate(`${routeLocationsEnum.postPage}/${card.id}`);
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    swipe: true,
  };

  useEffect(() => {
    dispatch(getSelectedPostFromStore(view, Number(id)));
  }, [id, view, dispatch]);

  return (
    <Box sx={pageOfCardStyles}>
      <Box sx={pageStyles}>
        <Box sx={routeStyles}>
          Home
          <span style={{ color: themeColors.footerTextColor }}>
            / {viewType} {selectedCard && selectedCard.id}
          </span>
        </Box>
        <Box sx={titleStyles}>{selectedCard && selectedCard.title}</Box>
        <Box sx={imgContainerStyles}>
          <img src={selectedCard?.image_url} alt="post img" style={imgStyles} />
        </Box>
        <Box sx={summaryStyles}>{selectedCard && selectedCard.summary}</Box>
        <Box sx={btnContainerStyles}>
          <Box
            sx={{
              ...btnStyles,
              "&:hover": {
                backgroundColor: "#1877F2",
              },
            }}
          >
            <img src={FaceBook} alt="facebook" style={btnImgStyles} />
          </Box>
          <Box
            sx={{
              ...btnStyles,
              "&:hover": {
                backgroundColor: "#1DA1F2",
              },
            }}
          >
            <img src={Twitter} alt="Twitter" style={btnImgStyles} />
          </Box>
          <Box
            sx={{
              ...btnStyles,
              fontSize: "40px",
              color: "#313037",
            }}
          >
            ...
          </Box>
        </Box>
        <Box sx={{ marginTop: "32px", width: "100%" }}>
          <Slider {...sliderSettings}>
            {(view === "articles" ? articles : news) &&
              (view === "articles" ? articles : news).map((item: BlogProps) => (
                <Box key={item.id} style={{ margin: "0 10px" }}>
                  <Grid
                    container
                    spacing={2}
                    sx={{ marginBottom: "40px", width: "300%" }}
                  >
                    <Grid item xs={12} sm={4} md={4} lg={4}>
                      <ArticlesCard
                        props={item}
                        onClick={() => handleselectCard(item)}
                      />
                    </Grid>
                  </Grid>
                </Box>
              ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default PageOfCard;
