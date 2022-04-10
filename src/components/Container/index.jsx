import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./index.css";

import Editor from "../Editor";
import Settings from "../Settings";

export default function Container() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <Editor />
        </Grid>
        <Grid item xs>
          <Settings />
        </Grid>
      </Grid>
    </Box>
  );
}
