import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  getDataToStore,
  setArticles,
  setByDateToStore,
  setDateInterval,
  setNews,
  setSearchDateToStore,
  setSelectedCard,
  setView,
} from "../../store/reducers/blogologoReducer/actions";
import ArticlesCard from "../Card/Card";
import PaginationComponent from "../Pagination/Pagination";
import { BlogProps } from "../../models/BlogologoProps";
import { useNavigate } from "react-router-dom";
import { routeLocationsEnum } from "../../Router/Router";
import FilterContainer from "../FilterContainer/FilterContainer";
import {
  startOfDay,
  startOfWeek,
  startOfMonth,
  startOfYear,
  format,
} from "date-fns";
import useBlogologoPageStyles from "./styles";

const BlogologoPage: React.FC = () => {
  const {
    articles,
    news,
    view,
    newSearch,
    searching,
    count,
    currentPage,
    searchingDate,
  } = useAppSelector((state) => state.blogologoReducer);
  const {
    blogologoPageContainer,
    pageStyles,
    titleTabsContainer,
    titleStyles,
    tabsContainer,
    articleTabStyles,
    newsTabStyles,
    gridContainerStyles,
    noFindBox,
    pasginationStyles,
  } = useBlogologoPageStyles();
  const [sortValue, setSortValue] = useState<string>("none");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleViewChange = (newView: string) => {
    dispatch(setView(newView));
    setSortValue("none");
    dispatch(setDateInterval(""));
    dispatch(setSearchDateToStore("", false));
  };

  const handleselectCard = (card: BlogProps) => {
    dispatch(setSelectedCard(card));
    if (card.id) {
      navigate(`${routeLocationsEnum.postPage}/${card.id}`);
    }
  };
  const handleSortChange = (value: string) => {
    let sortedData;

    if (value === "asc") {
      sortedData = (view === "articles" ? articles : news)
        .slice()
        .sort((a, b) => a.title.localeCompare(b.title));
    } else if (value === "desc") {
      sortedData = (view === "articles" ? articles : news)
        .slice()
        .sort((a, b) => b.title.localeCompare(a.title));
    } else {
      sortedData = (view === "articles" ? articles : news).slice();
    }

    if (view === "articles") {
      dispatch(setArticles(sortedData));
    } else if (view === "blogs") {
      dispatch(setNews(sortedData));
    }

    setSortValue(value);
  };
  const handleButtonClick = async (interval: string) => {
    const currentDate = new Date();
    let startDate;

    switch (interval) {
      case "day":
        startDate = startOfDay(currentDate);
        break;
      case "week":
        startDate = startOfWeek(currentDate);
        break;
      case "month":
        startDate = startOfMonth(currentDate);
        break;
      case "year":
        startDate = startOfYear(currentDate);
        break;
      default:
        startDate = startOfDay(currentDate);
        dispatch(setDateInterval(""));
        setSortValue("none");
        dispatch(getDataToStore(view, 1));
        return;
    }

    const formattedStartDate = format(startDate, "yyyy-MM-dd");
    await dispatch(setSearchDateToStore(formattedStartDate, true));
    await dispatch(setByDateToStore(view, currentPage, formattedStartDate));
    await dispatch(setDateInterval(interval));
  };

  useEffect(() => {
    if (!searching && sortValue === "none" && !searchingDate) {
      dispatch(getDataToStore(view, 1));
    }
  }, [dispatch, view, searching, sortValue, searchingDate]);

  return (
    <Box sx={blogologoPageContainer}>
      <Box sx={pageStyles}>
        <Box sx={titleTabsContainer}>
          <Box sx={titleStyles}>
            {searching ? `Search Results: ${newSearch}` : "Blog"}
          </Box>
          {!searching && (
            <Box sx={tabsContainer}>
              <Box
                sx={articleTabStyles}
                onClick={() => handleViewChange("articles")}
              >
                Articles
              </Box>
              <Box sx={newsTabStyles} onClick={() => handleViewChange("blogs")}>
                News
              </Box>
            </Box>
          )}
        </Box>
        {!searching && (
          <FilterContainer
            value={sortValue}
            onChange={handleSortChange}
            onButtonClick={handleButtonClick}
          />
        )}
        {count > 0 ? (
          <Grid container spacing={2} sx={gridContainerStyles}>
            {(view === "articles" ? articles : news) &&
              (view === "articles" ? articles : news).map((item: BlogProps) => (
                <Grid
                  item
                  key={item.id}
                  xs={7}
                  sm={6}
                  md={5}
                  lg={4}
                  sx={{ marginBottom: "40px", width: "100%" }}
                >
                  <ArticlesCard
                    props={item}
                    onClick={() => handleselectCard(item)}
                  />
                </Grid>
              ))}
          </Grid>
        ) : (
          <Box sx={noFindBox}>No results found.</Box>
        )}
        {count > 0 && (
          <Box sx={pasginationStyles}>
            <PaginationComponent />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default BlogologoPage;
