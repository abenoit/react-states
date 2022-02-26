import { useEffect } from "react";
import { useDispatch, useSelector } from "../../store/hooks";
import { AppLayout } from "../app-layout";
import { Trip } from "../trip";
import { TripDetailsDrawer } from "../trip-details-drawer";
import { fetchTrips } from "../../api";
import { tripsFetched } from "../../store/actions";

export const App = () => {
  const dispatch = useDispatch();
  const trips = useSelector((state) => state.trips);

  useEffect(() => {
    // TODO add loading
    fetchTrips().then((trips) => {
      dispatch(tripsFetched(trips));
    });
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
