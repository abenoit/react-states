import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

import { AppLayout } from "../components/app-layout";
import { Trip } from "../components/trip";
import { TripDetailsDrawer } from "../components/trip-details-drawer";
import { fetchTrips } from "../api";
import { tripsState, operatorsState, locationsState } from "../atoms";

export const App = () => {
  const [trips, setTrips] = useRecoilState(tripsState);
  const setOperators = useSetRecoilState(operatorsState);
  const setLocations = useSetRecoilState(locationsState);

  useEffect(() => {
    const getTrips = async () => {
      const { trips, operators, locations } = await fetchTrips();
      setTrips(trips);
      setOperators(operators);
      setLocations(locations);
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
          {Object.keys(trips).map((tripId) => (
            <Trip key={tripId} tripId={tripId} />
          ))}
        </>
      )}
    </AppLayout>
  );
};
