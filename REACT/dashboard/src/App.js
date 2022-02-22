import "./App.css";
import * as React from "react";
import { MiniDrawer } from "./MiniDrawer";
import { DashboardFirstPart } from "./DashboardFirstPart";

export default function App() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="App">
      <MiniDrawer open={open} setOpen={setOpen} />
      <DashboardFirstPart open={open} />
    </div>
  );
}
