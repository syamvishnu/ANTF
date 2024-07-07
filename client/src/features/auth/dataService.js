import axios from "axios";

const addData = async (data) => {
  const response = await axios.post("http://localhost:8000/data/", data);
  console.log(response);
  return response;
};

const dataService = {
  addData,
};

export default dataService;
