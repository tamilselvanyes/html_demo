import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

export function NotFound() {
    const history = useHistory();
  return (
    <div>
      <h1>404, Page not Found <Button variant="outlined" onClick={()=>history.push("/")}>Go back to Home</Button></h1> 
      <img className="error-img" src="https://skat.tf/wp-content/uploads/2011/01/funny-404-error.jpg" alt="404 not found"></img>
    </div>

  );
}
