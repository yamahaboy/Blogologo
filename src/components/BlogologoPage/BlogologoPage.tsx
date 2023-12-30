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
import useThemeColors from "../../hooks/useThemeColors";

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
  const [sortValue, setSortValue] = useState<string>("none");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const themeColors = useThemeColors();

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
    <Box
      sx={{
        maxWidth: "100%",
        backgroundColor: themeColors.backgroundColor,
        paddingTop: "72px",
        paddingBottom: "72px",
      }}
    >
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
            borderBottom: !searching
              ? `1px solid ${themeColors.borderTabsColor}`
              : "none",
          }}
        >
          <Box
            sx={{
              fontSize: "56px",
              fontFamily: "Inter, sans-serif",
              fontWeight: "700",
              color: themeColors.blogColor,
            }}
          >
            {searching ? `Search Results: ${newSearch}` : "Blog"}
          </Box>
          {!searching && (
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
                  color:
                    view === "articles"
                      ? themeColors.usedTabsColor
                      : themeColors.unUsedTabsColor,
                  borderBottom:
                    view === "articles"
                      ? `4px solid  ${themeColors.borderTabsColor} `
                      : "none",
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
                  color:
                    view === "blogs"
                      ? themeColors.usedTabsColor
                      : themeColors.unUsedTabsColor,
                  borderBottom:
                    view === "blogs"
                      ? `4px solid  ${themeColors.borderTabsColor} `
                      : "none",
                }}
                onClick={() => handleViewChange("blogs")}
              >
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
          <Grid container spacing={2} sx={{ width: "100%" }}>
            {(view === "articles" ? articles : news) &&
              (view === "articles" ? articles : news).map((item: BlogProps) => (
                <Grid
                  item
                  key={item.id}
                  xs={7}
                  sm={6}
                  md={5}
                  lg={4}
                  sx={{ marginBottom: "40px", width: "33%" }}
                >
                  <ArticlesCard
                    props={item}
                    onClick={() => handleselectCard(item)}
                  />
                </Grid>
              ))}
          </Grid>
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "16px",
              height: "52vh",
              fontFamily: "Inter, sans-serif",
              fontWeight: "600",
              color: "#777",
              textAlign: "center",
              margin: "auto",
              marginTop: "20px",
            }}
          >
            No results found.
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
    </Box>
  );
};

export default BlogologoPage;
