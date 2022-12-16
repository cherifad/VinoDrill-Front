import axios from "axios";
import config from './utils/config';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = config.backend_url;