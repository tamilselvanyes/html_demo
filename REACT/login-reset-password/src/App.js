import "./App.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";

function App() {
  return (
    <div className="App">
      <div className="login-main">
        <h2>Login</h2>
        <div className="login-sub">
          <form>
            <div className="form-group">
              <label for="email">Email</label>
              <input
                id="email"
                className="form-control"
                type="email"
                placeholder="Type your Email"
              ></input>
            </div>
            <div className="form-group">
              <label for="password">Password</label>

              <input
                id="password"
                className="form-control"
                type="password"
                placeholder="Enter your Password"
              ></input>
            </div>
            <a href="/"> Forgot Password ?</a> <br></br>
            <button className="btn btn-primary">Login</button>
          </form>
        </div>
        <div className="another-login">
          <div>
            <button>
              <GitHubIcon />
            </button>
          </div>
          <div>
            <button>
              <MailOutlineIcon />
            </button>
          </div>
          <div>
            <button>
              <FacebookIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
