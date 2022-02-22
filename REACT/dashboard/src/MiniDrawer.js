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
import TableChartTwoToneIcon from "@mui/icons-material/TableChartTwoTone";
import InsertEmoticonTwoToneIcon from "@mui/icons-material/InsertEmoticonTwoTone";

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

export function MiniDrawer({ open, setOpen }) {
  const [tab, setTab] = React.useState("Dashboard");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
              onClick={() => setTab("Dashboard")}
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
            <p className="heading-drawer">Interface</p>
            <ListItem
              button
              onClick={() => setTab("Components")}
              sx={{ color: tab === "Components" ? "primary.main" : "" }}
            >
              <ListItemIcon>
                <DragIndicatorTwoToneIcon
                  sx={{ color: tab === "Components" ? "primary.main" : "" }}
                />
              </ListItemIcon>
              <ListItemText primary={"Components"} />
            </ListItem>
            <ListItem
              button
              onClick={() => setTab("Utlities")}
              sx={{ color: tab === "Utlities" ? "primary.main" : "" }}
            >
              <ListItemIcon>
                <ConstructionTwoToneIcon
                  sx={{ color: tab === "Utlities" ? "primary.main" : "" }}
                />
              </ListItemIcon>
              <ListItemText primary={"Utlities"} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <p className="heading-drawer">Addons</p>
            <ListItem
              button
              onClick={() => setTab("Pages")}
              sx={{ color: tab === "Pages" ? "primary.main" : "" }}
            >
              <ListItemIcon>
                <FolderTwoToneIcon
                  sx={{ color: tab === "Pages" ? "primary.main" : "" }}
                />
              </ListItemIcon>
              <ListItemText primary={"Pages"} />
            </ListItem>
            <ListItem
              button
              onClick={() => setTab("Charts")}
              sx={{ color: tab === "Charts" ? "primary.main" : "" }}
            >
              <ListItemIcon>
                <BarChartTwoToneIcon
                  sx={{ color: tab === "Charts" ? "primary.main" : "" }}
                />
              </ListItemIcon>
              <ListItemText primary={"Charts"} />
            </ListItem>
            <ListItem
              button
              onClick={() => setTab("Tables")}
              sx={{ color: tab === "Tables" ? "primary.main" : "" }}
            >
              <ListItemIcon>
                <TableChartTwoToneIcon
                  sx={{ color: tab === "Tables" ? "primary.main" : "" }}
                />
              </ListItemIcon>
              <ListItemText primary={"Tables"} />
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
