import { legacy_createStore as createStore } from "redux";

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case "counter/incremented":
      return { value: state.value + 1 };
    case "counter/decremented":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

let store = createStore(counterReducer);

console.log(
  "\x1b[36m%s\x1b[0m",
  "🚀🚀🚀 --> file: redux.ts:16 --> store:",
  store
);

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: "counter/incremented" });

console.log("hey from here");
console.log(store.getState());
