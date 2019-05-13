import axios from "axios";

const defaultUrl = (axios.defaults.baseURL = "http://localhost:5000/api");

export default defaultUrl;
