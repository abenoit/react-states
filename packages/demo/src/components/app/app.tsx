import { useEffect } from "react";
import { useDispatch, useSelector } from "../../store/hooks";
import { AppLayout } from "../app-layout";
import { Trip } from "../trip";
import { TripDetailsDrawer } from "../trip-details-drawer";
import { fetchTrips } from "../../api";
import { tripsFetched, setLoadingState } from "../../store/actions";

export const App = () => {
  const dispatch = useDispatch();
  const { loading, trips } = useSelector((state) => state.trips);

  useEffect(() => {
    dispatch(setLoadingState());

    // Faking server latency
    setTimeout(() => {
      fetchTrips().then((trips) => {
        dispatch(tripsFetched(trips));
      });
    }, 1000);
  }, []);

  return (
    <AppLayout>
      {loading ? (
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
