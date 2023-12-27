import React, { useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  setByDateToStore,
  setPaginationData,
} from "../../store/reducers/blogologoReducer/actions";
import { limit } from "../../constants/constants";
import {
  getDataToStore,
  searchAndSetResults,
} from "../../store/reducers/blogologoReducer/actions";
import useThemeColors from "../../hooks/useThemeColors";
import { activePurple, hoverPurple } from "../../styles/colorConstants";

const PaginationComponent: React.FC = () => {
  const {
    count,
    currentPage,
    view,
    articles,
    news,
    searching,
    newSearch,
    date,
    searchingDate,
  } = useAppSelector((state) => state.blogologoReducer);
  const dispatch = useAppDispatch();
  const themeColors = useThemeColors();
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    dispatch(setPaginationData(count, value));

    if (searching) {
      dispatch(searchAndSetResults(view, value, newSearch));
    }
    if (searchingDate) {
      dispatch(setByDateToStore(view, value, date));
    } else {
      dispatch(getDataToStore(view, value));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!searching) {
        if (view === "articles" && articles.length === 0) {
          await dispatch(getDataToStore(view, currentPage));
        } else if (view === "blogs" && news.length === 0) {
          await dispatch(getDataToStore(view, currentPage));
        }
      }
    };

    fetchData();
  }, [dispatch, currentPage, articles, news, view, searching]);

  return (
    <Stack spacing={2}>
      <Pagination
        count={Math.ceil(count / limit)}
        page={currentPage}
        onChange={handlePageChange}
        sx={{
          "& .MuiPaginationItem-root": {
            borderRadius: "50%",
            color: themeColors.paginationColor,
            fontSize: "16px",
            backgroundColor: "transparent",
            fontWeight: "500",
            fontFamily: "Inter, sans-serif",
          },
          "&  .MuiPaginationItem-root:hover": {
            color: hoverPurple,
          },
          "& .MuiPaginationItem-page.Mui-selected": {
            color: activePurple,
          },
        }}
      />
    </Stack>
  );
};

export default PaginationComponent;
