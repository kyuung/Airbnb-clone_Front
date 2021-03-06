import axios from 'axios';
import { getToken } from '../../Shared/utils';

/* Axios 인스턴스 설정 */
const api = axios.create({
	baseURL: `http://3.35.235.79`,
});

/* interceptor를 통한 header 설정 */
api.interceptors.request.use(async (config) => {
	config.headers['content-type'] = 'application/json; charset=utf-8';
	config.headers['X-Requested-With'] = 'XMLHttpRequest';
	config.headers['Accept'] = '*/*';
	/* getToken이 로컬 스토리지에 없다면 null 값을 반환 */
	config.headers['authorization'] = await getToken();
	console.log('<<', getToken());
	return config;
});

/* interceptor를 통한 response 설정 */
api.interceptors.response.use(
	async (response) => {
		/* TODO 2021-10-19 - 추후 작업 */
		// if(response){}
		return response;
	},
	async (error) => {
		/* TODO 2021-10-19 - 추후 작업 */
		console.log('통신에러 : ', error);
		return Promise.reject(error);
	}
);

export default api;
