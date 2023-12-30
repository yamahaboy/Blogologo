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
import useHeaderStyles from "./styles";
const Header: React.FC = () => {
  const { view, currentPage } = useAppSelector(
    (state) => state.blogologoReducer
  );
  const { user } = useAppSelector((state) => state.authReducer);
  const themeColors = useThemeColors();
  const dispatch = useAppDispatch();
  const {
    headerContainer,
    headerStyles,
    logoStyles,
    inputBaseStyles,
    signInContainerStyles,
    avatarStyles,
    nameSurnameStyles,
  } = useHeaderStyles();
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
    <Box sx={headerContainer}>
      <Box sx={headerStyles}>
        <Box
          sx={logoStyles}
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
              sx={inputBaseStyles}
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
        sx={signInContainerStyles}
        onClick={() => handleNavigate(`${routeLocationsEnum.signIn}`)}
      >
        <Avatar variant="square" sx={avatarStyles}>
          {user ? (
            `${initials}`
          ) : (
            <PeopleAltOutlinedIcon sx={{ fontSize: "24px", color: "#fff" }} />
          )}
        </Avatar>
        <Box sx={nameSurnameStyles}>
          {user ? `${user.name} ${user.surname}` : "Sign In"}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
