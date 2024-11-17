import axios from "axios";

const API_URL = "http://localhost:8080";

class ScheduleService {
  createSchedule(scheduleData) {
    return axios.post(`${API_URL}/schedule`, scheduleData);
  }

  getSchedules() {
    return axios.get(`${API_URL}/schedules`);
  }

  updateSchedule(scheduleId, scheduleData) {
    return axios.put(`${API_URL}/schedule/${scheduleId}`, scheduleData);
  }

  deleteSchedule(scheduleId) {
    return axios.delete(`${API_URL}/schedule/${scheduleId}`);
  }
}

export default new ScheduleService();