import { useEffect, useReducer } from "react";
import { AppLayout } from "../components/app-layout";
import { Trip } from "../components/trip";
import { TripDetailsDrawer } from "../components/trip-details-drawer";

interface State {
  selectedTrip?: Trip;
  trips?: Trips;
}

const reducer = (state: State, action) => {
  switch (action.type) {
    case "tripSelected":
      return { ...state, selectedTrip: action.selectedTrip };
    case "tripsFetched":
      return { ...state, trips: action.data };
  }
};

const initialState = {
  selectedTrip: undefined,
  trips: undefined,
};

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { selectedTrip, trips } = state;

  useEffect(() => {
    const getTrips = async () => {
      const res = await fetch("../../data/trips.json");
      const data = await res.json();
      dispatch({ type: "tripsFetched", data });
    };

    getTrips();
  }, []);

  return (
    <AppLayout>
      {!trips ? (
        <div>Loading...</div>
      ) : (
        <>
          <TripDetailsDrawer
            selectedTrip={selectedTrip}
            isOpened={!!selectedTrip}
            onClose={() =>
              dispatch({ type: "tripSelected", selectedTrip: undefined })
            }
            operators={trips.operators}
            locations={trips.locations}
          />
          {Object.values<Trip>(trips.trips).map((trip) => (
            <Trip
              key={trip.id}
              onSelect={() =>
                dispatch({ type: "tripSelected", selectedTrip: trip })
              }
              trip={trip}
              operators={trips.operators}
              locations={trips.locations}
            />
          ))}
        </>
      )}
    </AppLayout>
  );
};
