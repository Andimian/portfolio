

import axios from "axios";

const token = localStorage.getItem("token");

axios.defaults.baseURL = "https://webdev-api.loftschool.com";
axios.defaults.headers["Authorization"] = `Bearer ${token}`;

axios.interceptors.request.use(
	function(config) {
		return config;
	},
	function(error) {
		const originalRequest = error.config;
		if (error.response == 401) {
			return axios.post("/refreshToken").then(res => {
				const token = res.data.token;
				localStorage.setItem("token", token);
				originalRequest.headers["Authorization"] = `Bearer ${token}`;

				return axios(originalRequest);
			});
		}
		return Promise.reject(error);
	}
);

export default axios;
