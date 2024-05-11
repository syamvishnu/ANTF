import axios from "axios";

const register = async (userData) => {
  const response = await axios.post("http://localhost:8000/register", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));

    return response.data;
  }
};

const signin = async (userData) => {
  const response = await axios.post("http://localhost:8000/", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));

    return response.data;
  }
};

const authService = {
  register,
  signin,
};

export default authService;
