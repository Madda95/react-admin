import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../ThemeSwitcher/index.component";
import i18next from "i18next";

const TopBar: React.FC = () => {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Avatar
          alt="Winearound"
          src="https://winearound.com/wp-content/uploads/2020/06/favicon.png"
        />
        <Typography variant="h6" color="inherit">
          {i18next.t("components.topbar.title")}
        </Typography>
        <ThemeSwitcher />
        <Link to="/" style={{ margin: "0 20px" }}>
          {i18next.t("components.topbar.navLinks.home")}
        </Link>
        <Link to="/posts" style={{ margin: "0 20px" }}>
          {i18next.t("components.topbar.navLinks.posts")}
        </Link>
        <Link to="/landing" style={{ margin: "0 20px" }}>
          {i18next.t("components.topbar.navLinks.landing")}
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
