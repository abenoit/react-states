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

const isOrigin = (index: number) => index === 0;
const isDestination = (index: number, stops: Stop[]) =>
  index === stops.length - 1;
export const isOriginOrDestination = (index: number, stops: Stop[]) =>
  isOrigin(index) || isDestination(index, stops);
