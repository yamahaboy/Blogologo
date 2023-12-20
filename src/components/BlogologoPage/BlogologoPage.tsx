import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  getArticlesToStore,
  getNewsToStore,
  setView,
} from "../../store/reducers/blogologoReducer/actions";
import ArticlesCard from "../ArticlesCard/ArticlesCard";
import Footer from "../Footer/Footer";
import PaginationComponent from "../Pagination/Pagination";
import { BlogProps } from "../../models/BlogologoProps";

const BlogologoPage: React.FC = () => {
  const { articles, news, view } = useAppSelector(
    (state) => state.blogologoReducer
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (view === "articles") {
      dispatch(getArticlesToStore(1));
    } else {
      dispatch(getNewsToStore(1));
    }
  }, [dispatch, view]);

  const handleViewChange = (newView: string) => {
    dispatch(setView(newView));
  };

  return (
    <Box
      sx={{
        width: "60%",
        margin: "auto",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        marginTop: "10%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          marginBottom: "5%",
          gap: "40px",
          width: "100%",
          borderBottom: "1px solid #313037",
        }}
      >
        <Box
          sx={{
            fontSize: "56px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "700",
          }}
        >
          Blog
        </Box>
        <Box
          sx={{
            width: "8.8rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
            padding: "24px",
            paddingLeft: "0",
          }}
        >
          <Box
            sx={{
              fontSize: "16px",
              fontFamily: "Inter, sans-serif",
              fontWeight: "600",
              cursor: "pointer",
              color: view === "articles" ? "#000" : "#777",
            }}
            onClick={() => handleViewChange("articles")}
          >
            Articles
          </Box>
          <Box
            sx={{
              fontSize: "16px",
              fontFamily: "Inter, sans-serif",
              fontWeight: "600",
              cursor: "pointer",
              color: view === "news" ? "#000" : "#777",
            }}
            onClick={() => handleViewChange("news")}
          >
            News
          </Box>
        </Box>
      </Box>
      <Grid container spacing={2} sx={{ width: "100%" }}>
        {(view === "articles" ? articles : news) &&
          (view === "articles" ? articles : news).map((item: BlogProps) => (
            <Grid
              item
              key={item.id}
              xs={12}
              sm={6}
              md={3}
              lg={4}
              sx={{ marginBottom: "40px", width: "22rem" }}
            >
              <ArticlesCard props={item} />
            </Grid>
          ))}
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <PaginationComponent />
      </Box>
      <Footer />
    </Box>
  );
};

export default BlogologoPage;
