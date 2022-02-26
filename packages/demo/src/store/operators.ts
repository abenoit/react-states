import { TRIPS_FETCHED } from "./action-types";

type State = Operators;

type Action = {
  type: string;
  payload: DataSet;
};

function fetchOperatorsReducer(state: State = [], action: Action): State {
  switch (action.type) {
    case TRIPS_FETCHED:
      return action.payload.operators;

    default:
      return state;
  }
}

export default fetchOperatorsReducer;
