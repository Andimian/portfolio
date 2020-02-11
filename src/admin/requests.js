import axios from "axios";
import { setAuthHttpHeaderToAxios, getToken, setToken } from './helpers/token';


axios.defaults.baseURL = "https://webdev-api.loftschool.com";
const token = getToken();
if(token) setAuthHttpHeaderToAxios(axios, token);

axios.interceptors.request.use(
	response => {
		return response;
	},
	error => {
		const originalRequest = error.config;

		if (error.response == 401) {
			return axios.post("/refreshToken").then(response => {
				const token = response.data.token;
				setToken(token);
				setAuthHttpHeaderToAxios(axios, token);
				originalRequest.headers["Authorization"] = `Bearer ${token}`;

				return axios(originalRequest);
			});
		}
		return Promise.reject(error);
	}
);

export default axios;
