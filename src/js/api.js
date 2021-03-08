import axios from "axios";

export const createAPI = () => {
  const api = axios.create({
    baseURL: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/RU/RUB/ru-RU/SVO-sky/JFK-sky/`,
    timeout: 5000,
    withCredentials: true,
    headers: {
      'x-rapidapi-key': `055e4a8d6fmsh4d7fcfcf2750ebfp1161dbjsn12793ac78bb2`,
      'x-rapidapi-host': `skyscanner-skyscanner-flight-search-v1.p.rapidapi.com`
    },
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
