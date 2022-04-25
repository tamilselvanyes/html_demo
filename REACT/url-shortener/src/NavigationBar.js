import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export function NavigationBar({ user }) {
  const history = useHistory();
  const [tab, setTab] = useState("home");
  return (
    <div role="presentation">
      <Breadcrumbs sx={{ background: "#00ffff" }} aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center", fontSize: "30px" }}
          color={tab === "home" ? "text.primary" : "inherit"}
          onClick={() => {
            history.push("/");
            setTab("home");
          }}
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center", fontSize: "30px" }}
          color={tab === "urlshortener" ? "text.primary" : "inherit"}
          onClick={() => {
            history.push("/urlshortener");
            setTab("urlshortener");
          }}
        >
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          URL shortener
        </Link>
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center", fontSize: "30px" }}
          color={tab === "urldetails" ? "text.primary" : "inherit"}
          onClick={() => {
            history.push("/urldetails");
            setTab("urldetails");
          }}
        >
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          URL Details
        </Link>

        <Link
          underline="hover"
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: "30px",
            marginLeft: "auto",
          }}
          color={tab === "login" ? "text.primary" : "inherit"}
          onClick={() => {
            history.push("/login");
            setTab("login");
          }}
        >
          <AccountCircleIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          {user}
        </Link>
      </Breadcrumbs>
    </div>
  );
}
