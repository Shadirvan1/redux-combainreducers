export default function middle({ dispatch, getState }) {
  return (next) => {
    return (action) => {
      console.log(getState());
      console.log(action);

      const result = next(action);
      console.log(getState());

      return result;
    };
  };
}
