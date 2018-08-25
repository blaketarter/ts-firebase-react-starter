import { initializeApp } from "firebase";

export const setupDb = () => {
  const config = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEURL,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  };
  return initializeApp(config);
};
