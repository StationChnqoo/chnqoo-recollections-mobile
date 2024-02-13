import axios, {AxiosInstance} from 'axios';
import Config from 'react-native-config';
import * as AxiosLogger from 'axios-logger';

export default class Services {
  instance: AxiosInstance = null;
  constructor() {
    this.instance = axios.create({
      baseURL: Config.SERVER,
      timeout: 2000,
      headers: {},
    });
    this.instance.interceptors.request.use(request => {
      return AxiosLogger.requestLogger(request, {
        prefixText: 'ConsoleAxios',
        dateFormat: 'yyyy-mm-dd HH:MM:ss',
        params: true,
        headers: true,
        method: true,
      });
    });
    this.instance.interceptors.response.use(response => {
      return response;
    });
  }
  
  async selectLogin() {
    let result = await this.instance.get('/login');
    return result.data;
  }
}
