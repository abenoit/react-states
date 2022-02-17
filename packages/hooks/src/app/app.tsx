import { useEffect, useState } from "react";
import { AppLayout } from "../components/app-layout";
import { Trip } from "../components/trip";
import { TripDetailsDrawer } from "../components/trip-details-drawer";

export const App = () => {
  // const [areDetailsOpened, openDetails] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState<Trip | undefined>();
  const [tripsDataset, setTrips] = useState<DataSet | null>(null);

  useEffect(() => {
    const getTrips = async () => {
      const res = await fetch("../../data/trips.json");
      setTrips(await res.json());
    };

    getTrips();
  }, []);

  return (
    <AppLayout>
      {!tripsDataset ? (
        <div>Loading...</div>
      ) : (
        <>
          <TripDetailsDrawer
            selectedTrip={selectedTrip}
            isOpened={!!selectedTrip}
            onClose={() => setSelectedTrip(undefined)}
            operators={tripsDataset.operators}
            locations={tripsDataset.locations}
          />
          {Object.values<Trip>(tripsDataset.trips).map((trip) => (
            <Trip
              key={trip.id}
              onSelect={setSelectedTrip}
              trip={trip}
              operators={tripsDataset.operators}
              locations={tripsDataset.locations}
            />
          ))}
        </>
      )}
    </AppLayout>
  );
};
