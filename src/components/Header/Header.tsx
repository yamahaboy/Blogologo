import { Box, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Clear";
import Logo from "../../assets/svg/Logo.svg";
import { BaseSyntheticEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useDebounce } from "../../hooks/useDebounce";
import {
  getDataToStore,
  searchAndSetResults,
  setSearchStringToStore,
} from "../../store/reducers/blogologoReducer/actions";
const Header: React.FC = () => {
  const { view } = useAppSelector((state) => state.blogologoReducer);
  const dispatch = useAppDispatch();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm = useDebounce(searchTerm);

  const handleIconClick = () => {
    setIsSearchOpen((prev) => !prev);
  };
  const handleChangeSearchValue = (e: BaseSyntheticEvent) => {
    setSearchTerm(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setIsSearchOpen(false);
    dispatch(setSearchStringToStore("", false));
    dispatch(getDataToStore(view, 1));
  };
  // useEffect(() => {
  //   if (debouncedSearchTerm) {
  //     dispatch(setSearchStringToStore(debouncedSearchTerm, true));

  //     dispatch(searchAndSetResults(view, debouncedSearchTerm));
  //   }
  // }, [view, debouncedSearchTerm, dispatch]);
  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(setSearchStringToStore(debouncedSearchTerm, true));
      dispatch(searchAndSetResults(view, debouncedSearchTerm));
    } else {
      dispatch(setSearchStringToStore("", false));
      dispatch(getDataToStore(view, 1)); // Load data when clearing the search
    }
  }, [view, debouncedSearchTerm, dispatch]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "6rem",
        alignItems: "center",
        background: "#fff",
        marginBottom: "72px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "90%",
          height: "100%",
          paddingLeft: "1%",
          paddingTop: "1%",
          paddingBottom: "1%",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#fff",
            height: "100%",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            paddingRight: "1%",
          }}
          onClick={handleClearSearch}
        >
          <img src={Logo} alt="logo" />
        </Box>
        {!isSearchOpen && (
          <Box>
            <IconButton onClick={handleIconClick}>
              <SearchIcon sx={{ fontSize: "24px", color: "#000" }} />
            </IconButton>
          </Box>
        )}
        {isSearchOpen && (
          <Box sx={{ width: "100%", height: "100%" }}>
            <InputBase
              value={searchTerm}
              onChange={handleChangeSearchValue}
              placeholder="Search..."
              sx={{
                fontSize: "16px",
                color: "#31303780",
                width: "100%",
                height: "100%",
                backgroundColor: "#3130371A",
                fontFamily: "Inter, sans-serif",
                fontWeight: "400",
                padding: "20px",
              }}
              endAdornment={
                <IconButton
                  onClick={() => {
                    handleIconClick();
                    handleClearSearch();
                  }}
                >
                  <CloseIcon sx={{ fontSize: "24px", color: "#000" }} />
                </IconButton>
              }
            />
          </Box>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "10%",
          height: "100%",
          justifyContent: "right",
          alignItems: "center",
          paddingRight: "1%",
          borderLeft: "1px solid #f3f3f3",
        }}
      >
        Alex Ivanov
      </Box>
    </Box>
  );
};

export default Header;
