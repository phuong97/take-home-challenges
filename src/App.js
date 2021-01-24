import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// import PaginationBar from "./component/PaginationBar";
import Homepage from "./pages/Homepage";
import DetailPage from "./pages/DetailPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/gif/:id" component={DetailPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
