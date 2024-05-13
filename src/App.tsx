import React, { useState } from "react";
import "./App.css";
import MongoDashboard from "./MongoDashboard";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

export interface Filters {
  model: string;
  outputPerformance: string;
}

function App() {
  const [filters, setFilters] = useState<Filters>({
    model: "all",
    outputPerformance: "all",
  });

  // Handler for changing the model filter
  const handleModelChange = (event: SelectChangeEvent<string>) => {
    setFilters((prevFilters: any) => ({
      ...prevFilters,
      model: event.target.value,
    }));
  };

  // Handler for changing the output performance filter
  const handlePerformanceChange = (event: SelectChangeEvent<string>) => {
    setFilters((prevFilters: any) => ({
      ...prevFilters,
      outputPerformance: event.target.value,
    }));
  };

  return (
    <div>
      <Select
        labelId="model-select-label"
        id="model-select"
        value={filters.model}
        label="Model"
        onChange={handleModelChange}
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="haiku">Haiku</MenuItem>
        <MenuItem value="sonet">Sonet</MenuItem>
        <MenuItem value="claude2.1">Claude 2.1</MenuItem>
      </Select>
      <Select
        labelId="performance-select-label"
        id="performance-select"
        value={filters.outputPerformance}
        label="Output Performance"
        onChange={handlePerformanceChange}
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="good">Good</MenuItem>
        <MenuItem value="bad">Bad</MenuItem>
      </Select>
      <MongoDashboard filters={filters} />
    </div>
  );
}

export default App;
