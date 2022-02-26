import { SELECT_TRIP } from "./action-types";

type State = Trip | null;

type Action = {
  type: string;
  payload: Trip | null;
};

function selectedTripReducer(state: State = null, action: Action): State {
  switch (action.type) {
    case SELECT_TRIP:
      return action.payload;

    default:
      return state;
  }
}

export default selectedTripReducer;
