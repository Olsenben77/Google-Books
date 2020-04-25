import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Empty from "./pages/Empty";
import Nav from "./components/Nav";
import React from "react";
// import API from "./utils/API";

function App() {
  // const [input, setInput] = useState("");

  // const searchSubmit = () => {
  //   API.searchBooks(input).then((data) => console.log(data));

  return (
    <Router>
      <div>
        <Nav />
        <Route>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/pages/saved" component={Saved} />
            <Route exact path="/pages/saved/:id" component={Saved} />
            <Route exact path="/pages/Empty" component={Empty} />
          </Switch>
        </Route>
      </div>
    </Router>
  );
}

export default App;
