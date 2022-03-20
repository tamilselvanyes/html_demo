import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { PrimarySearchAppBar } from "./PrimarySearchAppBar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DragIndicatorTwoToneIcon from "@mui/icons-material/DragIndicatorTwoTone";
import ConstructionTwoToneIcon from "@mui/icons-material/ConstructionTwoTone";
import FolderTwoToneIcon from "@mui/icons-material/FolderTwoTone";
import BarChartTwoToneIcon from "@mui/icons-material/BarChartTwoTone";
import InsertEmoticonTwoToneIcon from "@mui/icons-material/InsertEmoticonTwoTone";
import { useHistory } from "react-router-dom";
import { context } from "./App";
import { useContext } from "react";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export function MiniDrawer() {
  const [open, setOpen] = [useContext(context)[4], useContext(context)[5]];
  const [tab, setTab] = React.useState("Dashboard");
  const history = useHistory();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  window.addEventListener("resize", handleResize);

  function handleResize() {
    console.log("Resize" + window.outerWidth);
    if (window.outerWidth < 800) {
      handleDrawerClose();
    } else {
      handleDrawerOpen();
    }
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar position="fixed" open={open}>
        <Drawer variant="permanent" open={open}>
          <List>
            <ListItem button>
              <ListItemIcon>
                <InsertEmoticonTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary="SB ADMIN" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem
              button
              onClick={() => {
                setTab("Dashboard");
                history.push("/dashboard");
              }}
              sx={{ color: tab === "Dashboard" ? "primary.main" : "" }}
            >
              <ListItemIcon>
                <DashboardIcon
                  sx={{ color: tab === "Dashboard" ? "primary.main" : "" }}
                />
              </ListItemIcon>
              <ListItemText primary={"Dashboard"} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <p className="heading-drawer">User</p>
            <ListItem
              button
              onClick={() => {
                setTab("Create User");
                history.push("/createuser");
              }}
              sx={{ color: tab === "Create User" ? "primary.main" : "" }}
            >
              <ListItemIcon>
                <DragIndicatorTwoToneIcon
                  sx={{ color: tab === "Create User" ? "primary.main" : "" }}
                />
              </ListItemIcon>
              <ListItemText primary={"Create User"} />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                setTab("Edit Profile");
                history.push("/edituser");
              }}
              sx={{ color: tab === "Edit Profile" ? "primary.main" : "" }}
            >
              <ListItemIcon>
                <ConstructionTwoToneIcon
                  sx={{ color: tab === "Edit Profile" ? "primary.main" : "" }}
                />
              </ListItemIcon>
              <ListItemText primary={"Edit Profile"} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <p className="heading-drawer">Product</p>
            <ListItem
              button
              onClick={() => {
                setTab("Show Product");
                history.push("/showproducts");
              }}
              sx={{ color: tab === "Show Product" ? "primary.main" : "" }}
            >
              <ListItemIcon>
                <FolderTwoToneIcon
                  sx={{ color: tab === "Show Product" ? "primary.main" : "" }}
                />
              </ListItemIcon>
              <ListItemText primary={"Show Product"} />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                setTab("Create Product");
                history.push("/addnewproduct");
              }}
              sx={{ color: tab === "Create Product" ? "primary.main" : "" }}
            >
              <ListItemIcon>
                <BarChartTwoToneIcon
                  sx={{ color: tab === "Create Product" ? "primary.main" : "" }}
                />
              </ListItemIcon>
              <ListItemText primary={"Create Product"} />
            </ListItem>
          </List>

          <List>
            {console.log(open)}
            {!open ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
              >
                <ChevronRightIcon />
              </IconButton>
            ) : (
              " "
            )}

            {open ? (
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            ) : (
              " "
            )}
            <Divider />
          </List>
        </Drawer>
        <PrimarySearchAppBar />
      </AppBar>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}></Box>
    </Box>
  );
}
