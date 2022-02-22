import { useEffect } from "react";
import { useDispatch, useSelector } from "../store/hooks";

import { AppLayout } from "../components/app-layout";
import { Trip } from "../components/trip";
import { TripDetailsDrawer } from "../components/trip-details-drawer";
import { fetchTrips } from "../store/trips";

export const App = () => {
  const dispatch = useDispatch();
  const trips = useSelector<Trips | null>((state) => state.trips);

  useEffect(() => {
    dispatch(fetchTrips());
  }, []);

  return (
    <AppLayout>
      {!trips ? (
        <div>Loading...</div>
      ) : (
        <>
          <TripDetailsDrawer />
          {Object.values<Trip>(trips).map((trip) => (
            <Trip key={trip.id} tripId={trip.id} />
          ))}
        </>
      )}
    </AppLayout>
  );
};
