import { useEffect, useContext } from "react";

import { AppLayout } from "../components/app-layout";
import { Trip } from "../components/trip";
import { TripDetailsDrawer } from "../components/trip-details-drawer";
import { StateContext } from "../context";

export const App = () => {
  const {
    state: { trips },
    fetchTrips,
  } = useContext(StateContext);

  useEffect(() => {
    const getTrips = async () => {
      const res = await fetch("../../data/trips.json");
      const data = await res.json();
      fetchTrips(data);
    };

    getTrips();
  }, []);

  return (
    <AppLayout>
      {!trips ? (
        <div>Loading...</div>
      ) : (
        <>
          <TripDetailsDrawer />
          {Object.values<Trip>(trips).map((trip) => (
            <Trip key={trip.id} trip={trip} />
          ))}
        </>
      )}
    </AppLayout>
  );
};
