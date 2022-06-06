import axios from 'axios';
const API_BASE_URL = process.env.NEXT_PUBLIC_APP_BASE_URL;

type IThesisProps = {
  course: string;
  title: string;
};

export interface ResponseProps {
  data?: {
    thesis: IThesisProps;
  };
  status?: number;
  success?: boolean;
}

const handleError = (error: ResponseProps) => ({
  data: error.data,
  status: error.status,
  success: false,
});

const handleSuccess = (res: ResponseProps) => ({
  data: res.data,
  status: res.status,
  success: true,
});

const publicHeader = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'X-Requested-With',
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const apiAxiosRequest = () => {
  const request = axios.create({
    baseURL: API_BASE_URL,
    responseType: 'json',
    headers: publicHeader,
  });

  return request;
};

const apiRequest = {
  get: async (url: string) =>
    await apiAxiosRequest().get(url).then(handleSuccess).catch(handleError),
};

export default apiRequest;
