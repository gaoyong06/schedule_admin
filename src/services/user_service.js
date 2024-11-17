import axios from "axios";

const API_URL = "http://localhost:8080";

class UserService {
  login(username, password) {
    return axios.post(`${API_URL}/login`, {
      username,
      password,
    });
  }

  register(username, password) {
    return axios.post(`${API_URL}/register`, {
      username,
      password,
    });
  }

  logout() {
    return axios.post(`${API_URL}/logout`);
  }
}

export default new UserService();
