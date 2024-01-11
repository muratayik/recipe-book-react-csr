import axios from "axios";

export const get = async (path, headers) => {
  let res;

  const url = `${getHost()}${path}`;

  if (headers) {
    res = await axios.get(url, { headers });
  } else {
    res = await axios.get(url);
  }

  return await res.data;
};

export const post = async (path, data, headers) => {
  let res;

  const url = `${getHost()}${path}`;

  if (headers) {
    res = await axios.post(url, data, { headers });
  } else {
    res = await axios.post(url, data);
  }

  return await res.data;
};

const getHost = () => {
  console.log(`env is : <${process.env.REACT_APP_STAGE}>`);
  console.log("isLocal : ", process.env.REACT_APP_STAGE === "local");
  return process.env.REACT_APP_BACKEND_LOCATION === "local"
    ? process.env.REACT_APP_DEV_API_URL
    : process.env.REACT_APP_PROD_API_URL;
};
