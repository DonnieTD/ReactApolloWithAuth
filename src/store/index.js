import makeStore from "./makeStore";
export { default as initialState } from "./initialState";
// singleton instance of the executed function
const Store = makeStore();

export const { Provider, useStore } = Store;
export default Store;
