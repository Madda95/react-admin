type LocalStorageProperty = "theme" | "language";
const getFromLocalStorage = (prop: LocalStorageProperty): null | string => {
  return localStorage.getItem(prop);
};

const setLocalStorageValue = (
  prop: LocalStorageProperty,
  value: string
): void => {
  localStorage.setItem(prop, value);
};

const removeFromLocalStorage = (prop: LocalStorageProperty): void => {
  localStorage.removeItem(prop);
};

export { getFromLocalStorage, setLocalStorageValue, removeFromLocalStorage };
