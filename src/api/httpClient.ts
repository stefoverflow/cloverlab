import Axios from 'axios';
import env from '../env';

const httpClient = Axios.create({
  baseURL: `${env.SERVER_ENDPOINT}`,
});

export default httpClient;