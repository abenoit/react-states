type TripId = string;
type CityId = string;
type OperatorId = string;
type LocationId = number;

/**
 * Trip
 */
declare interface Trip {
  id: TripId;

  departure_time: string;
  arrival_time: string;

  origin_location_id: LocationId;
  destination_location_id: LocationId;
  operator_id: OperatorId;
  prices: Prices;
  available_seats: number;
  trip_stops: Stop[];
}

interface Prices {
  currency: string;
  total: number;
}

declare interface Stop {
  departure_time: string;
  arrival_time: string;
  location_id: LocationId;
  name: string;
  duration: number;
}

declare type Trips = { [id as string]: Trip };

/**
 * Locations
 */
declare interface Location {
  id: LocationId;
  city_id: CityId;
  name: string;
  address: string;
  type: string;
  lat: string;
  lon: string;
  geohash: string;
  created_by: string;
}

declare type Locations = Location[];

/**
 * Operators
 */
declare interface Operator {
  id: OperatorId;
  name: string;
  url: string;
  logo_url: string;
  display_name: string;
  default_vehicle_type: string;
}

declare type Operators = Operator[];

/**
 * Full dataset
 */
declare interface DataSet {
  trips: Trips;
  operators: Operators;
  locations: Locations;
}
