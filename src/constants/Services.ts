import axios, {AxiosInstance} from 'axios';
import Config from 'react-native-config';
import * as AxiosLogger from 'axios-logger';
import md5 from 'blueimp-md5';

export default class Services {
  instance: AxiosInstance = null;
  constructor() {
    const time = Date.now();
    this.instance = axios.create({
      // baseURL: Config.SERVER,
      baseURL: 'http://192.168.0.101:3000/api/chnqoo-notebook',
      timeout: 2000,
      headers: {
        t: time,
        s: md5(`Chnqoo@t:${time}`),
      },
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
      let result = response.data;
      if (result.success) {
      } else {
        console.log(result);
      }
      return response;
    });
  }

  async selectLogin() {
    let result = await this.instance.get('/login');
    return result.data;
  }

  async upload(datas: {id: string; idQoo: number | never; file: any}) {
    let form = new FormData();
    Object.keys(datas).map(it => {
      form.append(it, datas[it]);
    });
    this.instance.defaults.baseURL = Config.COMMON_SERVER;
    // this.instance.defaults.headers = {'Content-Type': 'multipart/form-data'};
    let result = await this.instance.post('/fileUploader', form, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return result.data;
  }
}
