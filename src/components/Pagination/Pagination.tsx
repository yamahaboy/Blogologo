import React, { useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { useAppDispatch, useAppSelector } from "../../store/store";

import {
  getArticlesToStore,
  getNewsToStore,
  setPaginationData,
} from "../../store/reducers/blogologoReducer/actions";
import { limit } from "../../constants/constants";

const PaginationComponent: React.FC = () => {
  const { count, currentPage, view, articles, news } = useAppSelector(
    (state) => state.blogologoReducer
  );
  const dispatch = useAppDispatch();

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    dispatch(setPaginationData(count, value));

    if (view === "articles") {
      dispatch(getArticlesToStore(value));
    } else {
      dispatch(getNewsToStore(value));
    }
  };

  useEffect(() => {
    if (view === "articles" && articles.length === 0) {
      dispatch(getArticlesToStore(currentPage));
    } else if (view === "news" && news.length === 0) {
      dispatch(getNewsToStore(currentPage));
    }
  }, [dispatch, currentPage, articles, news, view]);

  return (
    <Stack spacing={2}>
      <Pagination
        count={Math.ceil(count / limit)}
        page={currentPage}
        onChange={handlePageChange}
        sx={{
          "& .MuiPaginationItem-root": {
            borderRadius: "50%",
            color: "#313037",
            fontSize: "16px",
            backgroundColor: "transparent",
            fontWeight: "500",
            fontFamily: "Inter, sans-serif",
          },
          "& .MuiPaginationItem-page.Mui-selected": {
            color: "#6C1BDB",
          },
        }}
      />
    </Stack>
  );
};

export default PaginationComponent;
