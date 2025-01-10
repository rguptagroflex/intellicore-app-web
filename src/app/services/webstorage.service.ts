const setItem = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// const getItem = (key) => {
//   return JSON.parse(localStorage.getItem(key));
// };

const getItem = (key: string) => {
  const data = localStorage.getItem(key);

  if (data === null) {
    return null;
  } else {
    return JSON.parse(data);
  }
};

const removeItem = (key: string) => {
  localStorage.removeItem(key);
};

const clear = () => {
  localStorage.clear();
};

const WebStorageService = {
  setItem,
  getItem,
  removeItem,
  clear,
};
export default WebStorageService;
