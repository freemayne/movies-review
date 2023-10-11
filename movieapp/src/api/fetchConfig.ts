import axios from 'axios';

const baseURL = 'http://localhost:8080'; 

const api = axios.create({
  baseURL,
});

export const makeRequest = async <T>(url: string, method: 'get' | 'post', data?: any): Promise<T> => {
  try {
    const response = await api.request({
      url,
      method,
      data,
    });
    return response.data;
  } catch (error:any) {
    if (error.response) {
      throw error.response.data;
    } else if (error.request) {
      throw Error('No response received.');
    } else {
      throw Error('Error setting up the request.');
    }
  }
};

export default makeRequest;
