import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/react-todo/" component={Home} />
          <Route exact path="/react-todo/todo" component={Todo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
