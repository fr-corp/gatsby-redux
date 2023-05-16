import { StoreEnhancer, legacy_createStore as createStore } from "redux";
import { User } from "@components";

interface State {
  user: User;
}

const initialState: State = {
  user: { name: "", email: "", mode: "light" },
};

enum userActionType {
  ADD_NAME = "addName",
  ADD_EMAIL = "addEmail",
  CHANGE_MODE = "changeMode",
}

interface actionName {
  type: userActionType.ADD_NAME;
  payload: string;
}

interface actionMail {
  type: userActionType.ADD_EMAIL;
  payload: string;
}

interface actionMode {
  type: userActionType.CHANGE_MODE;
  payload: "light" | "dark";
}

type Action = actionName | actionMail | actionMode;

function reducer(state = initialState, action: Action): State {
  if (action.type === userActionType.ADD_NAME) {
    // let newUser: User = state.user;
    // newUser = {
    //   ...state.user,
    //   name: action.payload,
    // };

    return {
      ...state,
      user: { ...state.user, email: action.payload },
    };
  }
  if (action.type === userActionType.ADD_EMAIL) {
    let newUser = state.user;
    newUser = {
      ...newUser,
      email: action.payload,
    };
    return {
      ...state,
      user: newUser,
    };
  }
  if (action.type === userActionType.CHANGE_MODE) {
    let newUser = state.user;
    newUser = {
      ...newUser,
      mode: action.payload,
    };
    return {
      ...state,
      user: newUser,
    };
  }
  return state;
}

export default (
  preloadedState: StoreEnhancer<unknown, unknown> | undefined
) => {
  return createStore(reducer, preloadedState);
};
