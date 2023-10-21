"use client";

const useLocalStorage = () => {
  const get = (key: string): unknown | null => {
    const item = window.localStorage.getItem(key);

    return item ? JSON.parse(item) : null;
  };

  const set = ({ key, item }: { key: string; item: unknown }) => {
    window.localStorage.setItem(key, JSON.stringify(item));
  };

  const remove = (key: string) => window.localStorage.removeItem(key);

  return { get, set, remove };
};

export default useLocalStorage;
