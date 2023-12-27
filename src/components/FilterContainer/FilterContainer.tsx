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
import { activePurple, hoverPurple, white } from "../../styles/colorConstants";

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
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: "32px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <Button
          onClick={() => handleButtonClick("day")}
          sx={{
            borderRadius: "4px",
            backgroundColor:
              dateInterval === "day"
                ? activePurple
                : themeColors.intervalBtnBackColor,
            color:
              dateInterval === "day" ? white : themeColors.intervalBtnColor,
            fontSize: "16px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "500",
            padding: "16px 32px 16px 32px",
            "&:hover": { backgroundColor: hoverPurple, color: white },
          }}
        >
          Day
        </Button>
        <Button
          onClick={() => handleButtonClick("week")}
          sx={{
            borderRadius: "4px",
            backgroundColor:
              dateInterval === "week"
                ? activePurple
                : themeColors.intervalBtnBackColor,
            color:
              dateInterval === "week" ? white : themeColors.intervalBtnColor,
            fontSize: "16px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "500",
            padding: "16px 32px 16px 32px",
            "&:hover": { backgroundColor: hoverPurple, color: white },
          }}
        >
          Week
        </Button>
        <Button
          onClick={() => handleButtonClick("month")}
          sx={{
            borderRadius: "4px",
            backgroundColor:
              dateInterval === "month"
                ? activePurple
                : themeColors.intervalBtnBackColor,
            color:
              dateInterval === "month" ? white : themeColors.intervalBtnColor,
            fontSize: "16px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "500",
            padding: "16px 32px 16px 32px",
            "&:hover": { backgroundColor: hoverPurple, color: white },
          }}
        >
          Monath
        </Button>
        <Button
          onClick={() => handleButtonClick("year")}
          sx={{
            borderRadius: "4px",
            backgroundColor:
              dateInterval === "year"
                ? activePurple
                : themeColors.intervalBtnBackColor,
            color:
              dateInterval === "year" ? white : themeColors.intervalBtnColor,
            fontSize: "16px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "500",
            padding: "16px 32px 16px 32px",
            "&:hover": { backgroundColor: hoverPurple, color: white },
          }}
        >
          Year
        </Button>
      </Box>
      <Select
        value={value}
        defaultValue="none"
        onChange={handleSortChange}
        sx={{
          width: "25%",
          backgroundColor: themeColors.dropDownBackColor,
          color: themeColors.textInCardColor,
          border: "none",
          outline: "none",
          "&:hover": {
            outline: `1px solid ${hoverPurple}`,
          },
        }}
      >
        <MenuItem value="none">Sort: none</MenuItem>
        <MenuItem value="asc">Sort: Tittle (A-Z)</MenuItem>
        <MenuItem value="desc">Sort: Tittle (Z-A)</MenuItem>
      </Select>
    </Box>
  );
};

export default FilterContainer;
