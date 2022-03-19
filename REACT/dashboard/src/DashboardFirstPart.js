import FileDownloadIcon from "@mui/icons-material/FileDownload";
import DateRangeIcon from "@mui/icons-material/DateRange";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AssignmentReturnedIcon from "@mui/icons-material/AssignmentReturned";
import { DashboardChart } from "./ChartOne";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { context } from "./App";
import { useContext } from "react";

export function DashboardFirstPart() {
  const [open, currentuser] = [useContext(context)[4], useContext(context)[0]];
  return (
    <div
      className="dashboard-panel"
      style={{ marginLeft: open ? "250px" : "100px" }}
    >
      <div className="dashboard-text-panel">
        <span className="body-dashboard-text">Dashboard</span>
        <button className="reportbutton">
          <FileDownloadIcon />
          <span>Generate Report</span>
        </button>
      </div>
      <div className="flex-container">
        <div
          style={{ borderLeft: "5px solid #8E44AD" }}
          className="flex-container inside"
        >
          <p>
            <span style={{ color: "#8E44AD" }}>EARNINGS (MONTHLY)</span>{" "}
            <br></br>
            <span>${currentuser.salarymonthly}</span>
          </p>
          <DateRangeIcon />
        </div>
        <div
          style={{ borderLeft: "5px solid green" }}
          className="flex-container inside"
        >
          <p>
            <span style={{ color: "green" }}>EARNINGS (YEARLY)</span> <br></br>
            <span>${currentuser.salaryannualy}</span>
          </p>
          <AttachMoneyIcon />
        </div>
        <div
          style={{ borderLeft: "5px solid #2980B9" }}
          className="flex-container inside"
        >
          <span style={{ color: "#2980B9" }}>TASK</span> <br></br>
          <span>
            50%
            <Box sx={{ width: "100%", marginLeft: "10px" }}>
              <LinearProgress variant="determinate" value={50} />
            </Box>
          </span>
          <ListAltIcon />
        </div>
        <div
          style={{ borderLeft: "5px solid orange" }}
          className="flex-container inside"
        >
          <p>
            <span style={{ color: "orange" }}>PENDING REQUEST</span> <br></br>
            <span>18</span>
          </p>
          <AssignmentReturnedIcon />
        </div>
      </div>
      <DashboardChart />
      <DashboardSummary currentuser={currentuser} />
    </div>
  );
}

function DashboardSummary() {
  const [currentuser] = [useContext(context)[0]];
  console.log(currentuser);
  return (
    <div className="dashboard-summary">
      <div className="summary-project">
        <List>
          <ListItem>
            <ListItemText style={{ color: "#2E86C1" }} primary="Projects" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <ListItemText
              style={{ color: "#566573" }}
              primary="Severe Migration"
            />
            <ListItemText
              primary="20%"
              style={{ textAlign: "right", color: "#566573" }}
            />
          </ListItem>
          <ListItem>
            <Box sx={{ width: "100%", marginLeft: "10px" }}>
              <LinearProgress
                sx={{ height: "10px", borderRadius: "10px" }}
                color="primary"
                variant="determinate"
                value={20}
              />
            </Box>
          </ListItem>
        </List>
        <Divider />

        <List>
          <ListItem>
            <ListItemText
              style={{ color: "#566573" }}
              primary="Sales Tracking"
            />
            <ListItemText
              primary="40%"
              style={{ textAlign: "right", color: "#566573" }}
            />
          </ListItem>
          <ListItem>
            <Box sx={{ width: "100%", marginLeft: "10px" }}>
              <LinearProgress
                sx={{ height: "10px", borderRadius: "10px" }}
                color="secondary"
                variant="determinate"
                value={40}
              />
            </Box>
          </ListItem>
        </List>
        <Divider />

        <List>
          <ListItem>
            <ListItemText
              style={{ color: "#566573" }}
              primary="Customer Database"
            />
            <ListItemText
              primary="60%"
              style={{ textAlign: "right", color: "#566573" }}
            />
          </ListItem>
          <ListItem>
            <Box sx={{ width: "100%", marginLeft: "10px" }}>
              <LinearProgress
                sx={{ height: "10px", borderRadius: "10px" }}
                color="primary"
                variant="determinate"
                value={60}
              />
            </Box>
          </ListItem>
        </List>
        <Divider />

        <List>
          <ListItem>
            <ListItemText
              style={{ color: "#566573" }}
              primary="Payout Details"
            />
            <ListItemText
              primary="80%"
              style={{ textAlign: "right", color: "#566573" }}
            />
          </ListItem>
          <ListItem>
            <Box sx={{ width: "100%", marginLeft: "10px" }}>
              <LinearProgress
                sx={{ height: "10px", borderRadius: "10px" }}
                color="secondary"
                variant="determinate"
                value={80}
              />
            </Box>
          </ListItem>
        </List>
        <Divider />

        <List>
          <ListItem>
            <ListItemText
              style={{ color: "#566573" }}
              primary="Account Setup"
            />
            <ListItemText
              primary="Complete!"
              style={{ textAlign: "right", color: "#566573" }}
            />
          </ListItem>
          <ListItem>
            <Box sx={{ width: "100%", marginLeft: "10px" }}>
              <LinearProgress
                sx={{ height: "10px", borderRadius: "10px" }}
                color="primary"
                variant="determinate"
                value={100}
              />
            </Box>
          </ListItem>
        </List>
        <Divider />
      </div>
      <div className="summary-illustration">
        <List>
          <ListItem>
            <ListItemText style={{ color: "#2E86C1" }} primary="Profile Info" />
          </ListItem>
        </List>
        <Divider />
        <div className="user-info">
          <img
            className="profile-pic"
            alt="profile-pic"
            src={currentuser.profilepic}
          ></img>
          <p>
            Name: <b>{currentuser.name}</b>
          </p>
          <p>
            email: <b>{currentuser.email}</b>
          </p>
          <p>
            Phone: <b>+91 {currentuser.phone}</b>{" "}
          </p>
          <p>
            Country: <b>{currentuser.country}</b>{" "}
          </p>
          <p>
            Designation: <b>{currentuser.designation}</b>
          </p>
          <p>
            Joining Date: <b>{currentuser.joiningdate}</b>
          </p>
          <p>
            Total Experience: <b>{currentuser.totalexp} years</b>
          </p>
        </div>
        <Divider />
      </div>
    </div>
  );
}
