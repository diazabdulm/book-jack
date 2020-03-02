import React, { Fragment } from "react";
import {
  makeStyles,
  Container,
  FilledInput,
  InputAdornment,
  TextField,
  Typography
} from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";

import BottomNav from "../../components/bottom-nav/bottom-nav.component";

const useStyles = makeStyles(theme => ({
  input: {
    width: "100%"
  }
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <Fragment>
      <Container maxWidth="sm">
        <Typography variant="h4">Books</Typography>
        <TextField
          fullWidth
          placeholder="Search..."
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlined />
              </InputAdornment>
            )
          }}
        />
        <FilledInput
          label="Search"
          // placeholder="Search..."
          variant="filled"
        />
      </Container>
      <BottomNav />
    </Fragment>
  );
}
