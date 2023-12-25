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
import ArticlesCard from "../ArticlesCard/ArticlesCard";
import { BlogProps } from "../../models/BlogologoProps";
import { routeLocationsEnum } from "../../Router/Router";

const PageOfCard: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { view, selectedCard, articles, news, newSearch, searching, count } =
    useAppSelector((state) => state.blogologoReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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
  };
  useEffect(() => {
    dispatch(getSelectedPostFromStore(view, Number(id)));
  }, [id, view, dispatch]);

  return (
    <Box
      sx={{
        width: "60%",
        margin: "auto",
        height: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          fontSize: "16px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "400",
          color: "#000",
          marginBottom: "32px",
        }}
      >
        Home
        <span style={{ color: "#31303780" }}>
          / {viewType} {selectedCard && selectedCard.id}
        </span>
      </Box>
      <Box
        sx={{
          fontSize: "56px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "700",
          textAlign: "left",
          marginBottom: "32px",
        }}
      >
        {selectedCard && selectedCard.title}
      </Box>
      <Box sx={{ width: "70rem", height: "32rem", marginBottom: "32px" }}>
        <img
          src={selectedCard?.image_url}
          alt="post img"
          style={{ width: "100%", height: "100%", borderRadius: "16px" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          width: "70%",
          fontSize: "18px",
          fontFamily: "Inter, sans-serif",
          fontWeight: "400",
          color: "#313037",
          marginBottom: "32px",
        }}
      >
        {selectedCard && selectedCard.summary}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "6px",
          paddingBottom: "32px",
          borderBottom: "1px solid #3130371A",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "5.5rem",
            height: "3.5rem",
            borderRadius: "4px",
            backgroundColor: "#3130371A",
            "&:hover": {
              backgroundColor: "#1877F2",
              cursor: "pointer",
            },
          }}
        >
          <img
            src={FaceBook}
            alt="facebook"
            style={{ width: "24px", height: "24px", color: "#313037" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "5.5rem",
            height: "3.5rem",
            borderRadius: "4px",
            backgroundColor: "#3130371A",
            "&:hover": {
              backgroundColor: "#1DA1F2",
              cursor: "pointer",
            },
          }}
        >
          <img
            src={Twitter}
            alt="Twitter"
            style={{
              width: "24px",
              height: "24px",
              color: "#313037",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "5.5rem",
            height: "3.5rem",
            borderRadius: "4px",
            backgroundColor: "#3130371A",
            fontSize: "40px",
            color: "#313037",
            cursor: "pointer",
          }}
        >
          ...
        </Box>
      </Box>
      <Box sx={{ marginTop: "32px" }}>
        <Slider {...sliderSettings}>
          {(view === "articles" ? articles : news) &&
            (view === "articles" ? articles : news).map((item: BlogProps) => (
              <div key={item.id} style={{ margin: "0 10px" }}>
                <Grid
                  container
                  spacing={2}
                  sx={{ marginBottom: "40px", width: "22rem" }}
                >
                  <Grid item xs={12} sm={4} md={4} lg={4}>
                    <ArticlesCard
                      props={item}
                      onClick={() => handleselectCard(item)}
                    />
                  </Grid>
                </Grid>
              </div>
            ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default PageOfCard;
