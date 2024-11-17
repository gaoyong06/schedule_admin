import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ScheduleManagement from "./pages/ScheduleManagement";
import UserService from "./services/userService";
import ScheduleService from "./services/scheduleService";
import CreateSchedule from "./pages/CreateSchedule";
import ScheduleList from "./pages/ScheduleList";
import EditSchedule from "./pages/EditSchedule";


const userService = new UserService();
const scheduleService = new ScheduleService();

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/schedule" component={ScheduleManagement} />
        <Route path="/create-schedule" component={CreateSchedule} />
        <Route path="/schedule-list" component={ScheduleList} />
        <Route path="/schedule/edit/:id" component={EditSchedule} />
        {/* Add more routes here */}
      </Switch>
    </Router>
  );
}

export default App;