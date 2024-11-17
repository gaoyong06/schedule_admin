import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ScheduleManagement from "./pages/ScheduleManagement";
import UserService from "./services/userService";
import ScheduleService from "./services/scheduleService";

const userService = new UserService();
const scheduleService = new ScheduleService();

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/schedule" component={ScheduleManagement} />
      </Switch>
    </Router>
  );
}

export default App;