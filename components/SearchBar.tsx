import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import foodData from "@/dummy/foodData";
import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      console.log(search);
    }
  };

  const handleOptionSelected = (value: string) => {
    console.log(value);
  };

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        className="search-bar"
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={foodData.map((option) => option.name)}
        onInputChange={(event, value) => handleSearch(value)}
        onKeyPress={handleKeyPress}
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
      />
    </Stack>
  );
}
