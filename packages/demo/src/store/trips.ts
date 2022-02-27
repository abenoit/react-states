import { LOADING, TRIPS_FETCHED } from "./action-types";

type State = {
  loading: boolean;
  trips: Trips;
};

type Action = {
  type: string;
  payload?: DataSet;
};

const initialState = {
  loading: false,
  trips: {},
};

function fetchTripsReducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case TRIPS_FETCHED:
      return {
        loading: false,
        trips: action.payload!.trips,
      };

    case LOADING:
      return {
        loading: true,
        trips: {},
      };

    default:
      return state;
  }
}

export default fetchTripsReducer;
