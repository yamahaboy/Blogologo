import React from "react";
import {
  Box,
  Select,
  MenuItem,
  SelectChangeEvent,
  Button,
} from "@mui/material";

interface SortDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

const FilterContainer: React.FC<SortDropdownProps> = ({ value, onChange }) => {
  const handleSortChange = (event: SelectChangeEvent<string>) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
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
          sx={{
            borderRadius: "4px",
            backgroundColor: "#3130371A",
            color: "#31303780",
            fontSize: "16px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "500",
            padding: "16px 32px 16px 32px",
            "&:hover": { backgroundColor: "#912EF2", color: "#fff" },
            "&:active": { backgroundColor: "#6C1BDB", color: "#fff" },
          }}
        >
          Day
        </Button>
        <Button
          sx={{
            borderRadius: "4px",
            backgroundColor: "#3130371A",
            color: "#31303780",
            fontSize: "16px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "500",
            padding: "16px 32px 16px 32px",
            "&:hover": { backgroundColor: "#912EF2", color: "#fff" },
            "&:active": { backgroundColor: "#6C1BDB", color: "#fff" },
          }}
        >
          Week
        </Button>
        <Button
          sx={{
            borderRadius: "4px",
            backgroundColor: "#3130371A",
            color: "#31303780",
            fontSize: "16px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "500",
            padding: "16px 32px 16px 32px",
            "&:hover": { backgroundColor: "#912EF2", color: "#fff" },
            "&:active": { backgroundColor: "#6C1BDB", color: "#fff" },
          }}
        >
          Monath
        </Button>
        <Button
          sx={{
            borderRadius: "4px",
            backgroundColor: "#3130371A",
            color: "#31303780",
            fontSize: "16px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "500",
            padding: "16px 32px 16px 32px",
            "&:hover": { backgroundColor: "#912EF2", color: "#fff" },
            "&:active": { backgroundColor: "#6C1BDB", color: "#fff" },
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
