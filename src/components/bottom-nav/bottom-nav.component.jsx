import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  makeStyles,
  BottomNavigation,
  BottomNavigationAction
} from "@material-ui/core";
import {
  HomeOutlined,
  SearchOutlined,
  BookOutlined,
  AccountCircleOutlined
} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  navbar: {
    width: "100%",
    position: "fixed",
    bottom: 0
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const location = useLocation();
  const [value, setValue] = useState("/home");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    handleChange(location.pathname);
  }, [value]);

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.navbar}
    >
      <BottomNavigationAction
        label="Home"
        value="/home"
        icon={<HomeOutlined />}
      />
      <BottomNavigationAction
        label="Search"
        value="/search"
        icon={<SearchOutlined />}
      />
      <BottomNavigationAction
        label="Library"
        value="/library"
        icon={<BookOutlined />}
      />
      <BottomNavigationAction
        label="Account"
        value="/account"
        icon={<AccountCircleOutlined />}
      />
    </BottomNavigation>
  );
}
