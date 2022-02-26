import { TRIPS_FETCHED } from "./action-types";

type State = Trips | null;

type Action = {
  type: string;
  payload: DataSet;
};

function fetchTripsReducer(state: State = {}, action: Action): State {
  switch (action.type) {
    case TRIPS_FETCHED:
      return action.payload.trips;

    default:
      return state;
  }
}

export default fetchTripsReducer;
