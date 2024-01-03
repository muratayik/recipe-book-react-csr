export const clearTokens = () => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
};

export const getToken = () =>
  localStorage.getItem("token") || sessionStorage.getItem("token") || "";

export const setLocalStorageToken = (token) =>
  localStorage.setItem("token", token);

export const setSessionStorageToken = (token) =>
  sessionStorage.setItem("token", token);
