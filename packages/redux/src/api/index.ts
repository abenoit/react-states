export const fetchTrips = async (): Promise<DataSet> => {
  const trips = await fetch("../../data/trips.json");
  return trips.json();
};
