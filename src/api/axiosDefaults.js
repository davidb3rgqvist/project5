import axios from "axios";

axios.defaults.baseURL = 'https://healthhub-be-462e201f4989.herokuapp.com/';
// axios.defaults.baseURL = 'http://127.0.0.1:8000/'
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;
