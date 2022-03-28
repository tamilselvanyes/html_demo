import { API } from "./global";

import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export function AsyncSearchBox({ setProducts, fullProductList, setLoading }) {
  const getProductsWithQuery = (query) => {
    setLoading(true);
    fetch(`${API}/scrapedProducts/${query}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((final_data) => {
        setProducts(final_data);
        setLoading(false);
      });
  };

  return (
    <Stack spacing={2} sx={{ width: "50%" }}>
      <TextField
        id="outlined-basic"
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            getProductsWithQuery(e.target.value.toLowerCase());
          }
        }}
        variant="outlined"
        fullWidth
        label="Search"
      />
    </Stack>
  );
}
