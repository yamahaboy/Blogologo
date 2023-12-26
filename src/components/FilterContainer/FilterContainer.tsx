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
            backgroundColor: dateInterval === "day" ? "#6C1BDB" : "#3130371A",
            color: dateInterval === "day" ? "#fff" : "#31303780",
            fontSize: "16px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "500",
            padding: "16px 32px 16px 32px",
            "&:hover": { backgroundColor: "#912EF2", color: "#fff" },
          }}
        >
          Day
        </Button>
        <Button
          onClick={() => handleButtonClick("week")}
          sx={{
            borderRadius: "4px",
            backgroundColor: dateInterval === "week" ? "#6C1BDB" : "#3130371A",
            color: dateInterval === "week" ? "#fff" : "#31303780",
            fontSize: "16px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "500",
            padding: "16px 32px 16px 32px",
            "&:hover": { backgroundColor: "#912EF2", color: "#fff" },
          }}
        >
          Week
        </Button>
        <Button
          onClick={() => handleButtonClick("month")}
          sx={{
            borderRadius: "4px",
            backgroundColor: dateInterval === "month" ? "#6C1BDB" : "#3130371A",
            color: dateInterval === "month" ? "#fff" : "#31303780",
            fontSize: "16px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "500",
            padding: "16px 32px 16px 32px",
            "&:hover": { backgroundColor: "#912EF2", color: "#fff" },
          }}
        >
          Monath
        </Button>
        <Button
          onClick={() => handleButtonClick("year")}
          sx={{
            borderRadius: "4px",
            backgroundColor: dateInterval === "year" ? "#6C1BDB" : "#3130371A",
            color: dateInterval === "year" ? "#fff" : "#31303780",
            fontSize: "16px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "500",
            padding: "16px 32px 16px 32px",
            "&:hover": { backgroundColor: "#912EF2", color: "#fff" },
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
          backgroundColor: "#fff",
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
