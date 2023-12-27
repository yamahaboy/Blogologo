import { Avatar, Box, IconButton, InputBase } from "@mui/material";
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
import { useNavigate } from "react-router-dom";
import { routeLocationsEnum } from "../../Router/Router";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import useThemeColors from "../../hooks/useThemeColors";
import { white } from "../../styles/colorConstants";
const Header: React.FC = () => {
  const { view, currentPage } = useAppSelector(
    (state) => state.blogologoReducer
  );
  const { user } = useAppSelector((state) => state.authReducer);
  const themeColors = useThemeColors();
  const dispatch = useAppDispatch();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm = useDebounce(searchTerm);
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path);
  };
  const handleChangeSearchValue = (e: BaseSyntheticEvent) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    setSearchTerm("");
    setIsSearchOpen((prev) => !prev);
    dispatch(setSearchStringToStore("", false));
    dispatch(getDataToStore(view, 1));
  };

  const initials = user
    ? `${user.name.charAt(0)}${user.surname.charAt(0)}`
    : null;

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(setSearchStringToStore(debouncedSearchTerm, true));
      dispatch(searchAndSetResults(view, currentPage, debouncedSearchTerm));
    } else {
      dispatch(setSearchStringToStore("", false));
      dispatch(getDataToStore(view, 1));
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
        background: themeColors.headerColor,
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
            backgroundColor: themeColors.headerColor,
            height: "100%",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            paddingRight: "1%",
          }}
          onClick={() => handleNavigate(`${routeLocationsEnum.mainPage}`)}
        >
          <img src={Logo} alt="logo" />
        </Box>
        {!isSearchOpen && (
          <Box sx={{ marginRight: "20px" }}>
            <IconButton onClick={handleSearch}>
              <SearchIcon
                sx={{ fontSize: "24px", color: themeColors.searchBtnColor }}
              />
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
                color: themeColors.footerTextColor,
                width: "100%",
                height: "100%",
                backgroundColor: themeColors.intervalBtnBackColor,
                fontFamily: "Inter, sans-serif",
                fontWeight: "400",
                padding: "20px",
              }}
              endAdornment={
                <IconButton
                  onClick={() => {
                    handleSearch();
                  }}
                >
                  <CloseIcon
                    sx={{ fontSize: "24px", color: themeColors.searchBtnColor }}
                  />
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
          justifyContent: "left",
          alignItems: "center",
          paddingLeft: "1%",
          borderLeft: `1px solid ${themeColors.leftBorder}`,
          gap: "16px",
          cursor: "pointer",
        }}
        onClick={() => handleNavigate(`${routeLocationsEnum.signIn}`)}
      >
        <Avatar
          variant="square"
          sx={{
            background: `linear-gradient(180deg, #4D0AC7 0%, #912EF2 100%)`,
            width: "3rem",
            height: "3rem",
            borderRadius: "4px",
            fontSize: "16px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "600",
            color: "#fff",
          }}
        >
          {user ? (
            `${initials}`
          ) : (
            <PeopleAltOutlinedIcon sx={{ fontSize: "24px", color: "#fff" }} />
          )}
        </Avatar>
        <Box
          sx={{
            fontSize: "16px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "600",
            color: themeColors.userColor,
          }}
        >
          {user ? `${user.name} ${user.surname}` : "Sign In"}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
