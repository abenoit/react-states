import { TRIPS_FETCHED } from "./action-types";

type State = Locations;

type Action = {
  type: string;
  payload: DataSet;
};

function fetchLocationsReducer(state: State = [], action: Action): State {
  switch (action.type) {
    case TRIPS_FETCHED:
      return action.payload.locations;

    default:
      return state;
  }
}

export default fetchLocationsReducer;
