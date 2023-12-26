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
const Header: React.FC = () => {
  const { view } = useAppSelector((state) => state.blogologoReducer);
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

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(setSearchStringToStore(debouncedSearchTerm, true));
      dispatch(searchAndSetResults(view, debouncedSearchTerm));
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
          onClick={() => handleNavigate(`${routeLocationsEnum.mainPage}`)}
        >
          <img src={Logo} alt="logo" />
        </Box>
        {!isSearchOpen && (
          <Box sx={{ marginRight: "20px" }}>
            <IconButton onClick={handleSearch}>
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
                    handleSearch();
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
          justifyContent: "left",
          alignItems: "center",
          paddingLeft: "1%",
          borderLeft: "1px solid #f3f3f3",
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
          }}
        >
          <PeopleAltOutlinedIcon sx={{ fontSize: "24px", color: "#fff" }} />
        </Avatar>
        <Box
          sx={{
            fontSize: "16px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "600",
            color: "#313037",
          }}
        >
          Sing in
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
