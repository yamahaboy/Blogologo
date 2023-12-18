import { Box, Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useEffect } from "react";
import { getArticlesToStore } from "../../store/reducers/blogologoReducer/actions";
import ArticlesCard from "../ArticlesCard/ArticlesCard";
import Footer from "../Footer/Footer";
import PaginationComponent from "../Pagination/Pagination";

const BlogologoPage: React.FC = () => {
  const { atricles } = useAppSelector((state) => state.blogologoReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getArticlesToStore(1));
  }, [dispatch]);
  return (
    <Box
      sx={{
        width: "60%",
        margin: "auto",
        height: "auto",
      }}
    >
      <Grid container spacing={2} sx={{ marginTop: "10%", width: "100%" }}>
        {atricles &&
          atricles.map((article) => (
            <Grid
              item
              key={article.id}
              xs={12}
              sm={6}
              md={3}
              lg={4}
              sx={{ marginBottom: "40px", width: "22rem" }}
            >
              <ArticlesCard articles={article} />
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
