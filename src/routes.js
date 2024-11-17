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
import SubjectSetting from "./pages/SubjectSetting";
import TeacherSetting from "./pages/TeacherSetting";
import GradeClassSetting from "./pages/GradeClassSetting";
import FacilitySetting from "./pages/FacilitySetting";
import TeachingTaskSetting from "./pages/TeachingTaskSetting";



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
        <Route path="/subject-setting" component={SubjectSetting} />
        <Route path="/teacher-setting" component={TeacherSetting} />
        <Route path="/grade-class-setting" component={GradeClassSetting} />
        <Route path="/facility-setting" component={FacilitySetting} />

        {/* Add more routes here */}
      </Switch>
    </Router>
  );
}

export default App;