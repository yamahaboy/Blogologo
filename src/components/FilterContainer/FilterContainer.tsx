import React from "react";
import {
  Box,
  Select,
  MenuItem,
  SelectChangeEvent,
  Button,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setDateInterval } from "../../store/reducers/blogologoReducer/actions";
import useThemeColors from "../../hooks/useThemeColors";
import { activePurple, white } from "../../styles/colorConstants";
import useFilterContainerStyles from "./styles";

interface SortDropdownProps {
  value: string;
  onChange: (value: string) => void;
  onButtonClick: (interval: string) => void;
}

const FilterContainer: React.FC<SortDropdownProps> = ({
  value,
  onChange,
  onButtonClick,
}) => {
  const { dateInterval } = useAppSelector((state) => state.blogologoReducer);
  const dispatch = useAppDispatch();
  const themeColors = useThemeColors();
  const {
    FilterContainerStyles,
    buttonContainerStyles,
    btnStyles,
    selectStyles,
  } = useFilterContainerStyles();

  const handleSortChange = (event: SelectChangeEvent<string>) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };
  const handleButtonClick = (interval: string) => {
    const newInterval = interval === dateInterval ? "" : interval;
    onButtonClick(newInterval);
    dispatch(setDateInterval(newInterval));
  };
  return (
    <Box sx={FilterContainerStyles}>
      <Box sx={buttonContainerStyles}>
        <Button
          onClick={() => handleButtonClick("day")}
          sx={{
            ...btnStyles,
            backgroundColor:
              dateInterval === "day"
                ? activePurple
                : themeColors.intervalBtnBackColor,
            color:
              dateInterval === "day" ? white : themeColors.intervalBtnColor,
          }}
        >
          Day
        </Button>
        <Button
          onClick={() => handleButtonClick("week")}
          sx={{
            ...btnStyles,
            backgroundColor:
              dateInterval === "week"
                ? activePurple
                : themeColors.intervalBtnBackColor,
            color:
              dateInterval === "week" ? white : themeColors.intervalBtnColor,
          }}
        >
          Week
        </Button>
        <Button
          onClick={() => handleButtonClick("month")}
          sx={{
            ...btnStyles,
            backgroundColor:
              dateInterval === "month"
                ? activePurple
                : themeColors.intervalBtnBackColor,
            color:
              dateInterval === "month" ? white : themeColors.intervalBtnColor,
          }}
        >
          Monath
        </Button>
        <Button
          onClick={() => handleButtonClick("year")}
          sx={{
            ...btnStyles,
            backgroundColor:
              dateInterval === "year"
                ? activePurple
                : themeColors.intervalBtnBackColor,
            color:
              dateInterval === "year" ? white : themeColors.intervalBtnColor,
          }}
        >
          Year
        </Button>
      </Box>
      <Select
        value={value}
        defaultValue="none"
        onChange={handleSortChange}
        sx={selectStyles}
      >
        <MenuItem value="none">Sort: none</MenuItem>
        <MenuItem value="asc">Sort: Tittle (A-Z)</MenuItem>
        <MenuItem value="desc">Sort: Tittle (Z-A)</MenuItem>
      </Select>
    </Box>
  );
};

export default FilterContainer;
