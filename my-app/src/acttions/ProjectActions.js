import axios from "axios";
import { GET_ERRORS } from "./type";
export const createProject = (project, history) => async dispatch => {
  try {
    const res = await axios.post("http://192.168.2.108:8000/api/project", project);
    history.push("/dashboard");
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};


//http://192.168.2.108:8000/api/project