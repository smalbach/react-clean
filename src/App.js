import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shopping from "./app/feature/components/Shopping";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Shopping} />
      </Switch>
    </Router>
  );
}

export default App;
