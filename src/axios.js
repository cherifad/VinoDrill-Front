import axios from "axios";
import config from './utils/config';

// include  CORS « Access-Control-Allow-Origin » header in the request
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.withCredentials = true;
axios.defaults.baseURL = config.backend_url;