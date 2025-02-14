import { hideLoading, setError, showLoading } from '@src/store/globalState';
import axios from 'axios';

export const setUpService = () => {
  axios.interceptors.request.use(
    (config) => {
      showLoading();
      return config;
    },
    function (error) {
      hideLoading();
      const errorMessage =
        error.response?.data?.message || error.message || 'Unknown error';
      setError(errorMessage, 'error');
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    function (response) {
      hideLoading();
      return response;
    },
    function (error) {
      hideLoading();
      const errorMessage =
        error.response?.data?.message || error.message || 'Unknown error';
      setError(errorMessage, 'error');
      return Promise.reject(error);
    }
  );
};
