export const formatDate = (date: string): string =>
  new Date(date).toLocaleDateString();

export const formatTime = (date: string): string =>
  new Intl.DateTimeFormat("fr-FR", { timeStyle: "short" }).format(
    new Date(date)
  );

export const findLocationById = (id: LocationId, locations: Locations) =>
  locations.find((location) => location.id === id);

export const findOperatorById = (id: OperatorId, operators: Operators) =>
  operators.find((operator) => operator.id === id);
