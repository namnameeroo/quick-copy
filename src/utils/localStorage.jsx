export function CommonLocalStorage() {
  return {
    set: ({key, value}) => {
      const data = JSON.stringify(value);
      localStorage.setItem(key, data);
    },
    get: ({key}) => {
      const savedData = localStorage.getItem(key);
      console.log({savedData});
      if (!savedData) {
        throw new Error("no data");
      } else {
        console.info("local data loaded success");
        return JSON.parse(savedData);
      }
    },
  };
}
