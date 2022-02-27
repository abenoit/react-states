import { useRecoilValue } from "recoil";

import { AppLayout } from "../components/app-layout";
import { Trip } from "../components/trip";
import { TripDetailsDrawer } from "../components/trip-details-drawer";
import { trips as tripsState } from "../atoms/selectors";

export const App = () => {
  const trips = useRecoilValue(tripsState);

  return (
    <AppLayout>
      <TripDetailsDrawer />
      {Object.keys(trips).map((tripId) => (
        <Trip key={tripId} tripId={tripId} />
      ))}
    </AppLayout>
  );
};
