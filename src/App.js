import HomePage from "./Components/HomePage";
import Login from "./Components/Login";
import OtpPage from "./Components/OtpPage";
import OptionPage from "./Components/OptionPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/homepage" component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/otppage" component={OtpPage} />
          <Route path="/optionpage" component={OptionPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
