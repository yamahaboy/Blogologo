import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  getDataToStore,
  setView,
} from "../../store/reducers/blogologoReducer/actions";
import ArticlesCard from "../ArticlesCard/ArticlesCard";
import PaginationComponent from "../Pagination/Pagination";
import { BlogProps } from "../../models/BlogologoProps";

const BlogologoPage: React.FC = () => {
  const { articles, news, view, newSearch, searching, count } = useAppSelector(
    (state) => state.blogologoReducer
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!searching) {
      dispatch(getDataToStore(view, 1));
    }
  }, [dispatch, view, searching]);

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
          borderBottom: !searching ? "1px solid #313037" : "none",
        }}
      >
        <Box
          sx={{
            fontSize: "56px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "700",
          }}
        >
          {searching ? `Search Results: ${newSearch}` : "Blog"}
        </Box>
        {!searching && count === 0 && (
          <Box
            sx={{
              fontSize: "16px",
              fontFamily: "Inter, sans-serif",
              fontWeight: "600",
              color: "#777",
              marginBottom: "20px",
            }}
          >
            No results found.
          </Box>
        )}
        {!searching && count > 0 && (
          <Box
            sx={{
              width: "8.8rem",
              height: "3rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                fontSize: "16px",
                fontFamily: "Inter, sans-serif",
                fontWeight: "600",
                cursor: "pointer",
                color: view === "articles" ? "#000" : "#777",
                borderBottom:
                  view === "articles" ? "4px solid #313037 " : "none",
                padding: "0 40px 0 40px",
              }}
              onClick={() => handleViewChange("articles")}
            >
              Articles
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                fontSize: "16px",
                fontFamily: "Inter, sans-serif",
                fontWeight: "600",
                cursor: "pointer",
                padding: "0 40px 0 40px",
                color: view === "blogs" ? "#000" : "#777",
                borderBottom: view === "blogs" ? "4px solid #313037 " : "none",
              }}
              onClick={() => handleViewChange("blogs")}
            >
              News
            </Box>
          </Box>
        )}
      </Box>
      {count > 0 ? (
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
      ) : (
        <Box
          sx={{
            fontSize: "16px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "600",
            color: "#777",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          {searching ? "No results found." : "Loading..."}
        </Box>
      )}
      {count > 0 && (
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
      )}
    </Box>
  );
};

export default BlogologoPage;
