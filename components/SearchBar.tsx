import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import foodData from "@/dummy/foodData";

interface SearchBarProps {
  onOptionSelected: (foodId: string) => void;
}

export default function SearchBar({ onOptionSelected }: SearchBarProps) {
  const [search, setSearch] = React.useState<string>("");

  const handleOptionSelected = (value: string) => {
    const selectedFood: any = foodData.find((food) => food.name === value);
    if (selectedFood) {
      onOptionSelected(selectedFood.id);
    }
  };

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        className="search-bar"
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={foodData.map((option) => option.name)}
        onInputChange={(event, value) => setSearch(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Food"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
        onChange={(event, value) => handleOptionSelected(value)}
        value={search}
      />
    </Stack>
  );
}
