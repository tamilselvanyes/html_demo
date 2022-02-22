import FileDownloadIcon from "@mui/icons-material/FileDownload";
import DateRangeIcon from "@mui/icons-material/DateRange";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AssignmentReturnedIcon from "@mui/icons-material/AssignmentReturned";
import { DashboardChart } from "./options";

export function DashboardFirstPart({ open }) {
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
            <span>$40,0000</span>
          </p>
          <DateRangeIcon />
        </div>
        <div
          style={{ borderLeft: "5px solid green" }}
          className="flex-container inside"
        >
          <p>
            <span style={{ color: "green" }}>EARNINGS (YEARLY)</span> <br></br>
            <span>$215,0000</span>
          </p>
          <AttachMoneyIcon />
        </div>
        <div
          style={{ borderLeft: "5px solid #2980B9" }}
          className="flex-container inside"
        >
          <p>
            <span style={{ color: "#2980B9" }}>TASK</span> <br></br>
            <span>
              50%
              <Box sx={{ width: "100%", marginLeft: "10px" }}>
                <LinearProgress variant="determinate" value="50" />
              </Box>
            </span>
          </p>
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
    </div>
  );
}
