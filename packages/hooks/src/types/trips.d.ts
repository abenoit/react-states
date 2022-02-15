type ID = string;

/**
 * Trip
 */
declare interface Trip {
  id: ID;
  departureTime: string;
  arrivalTime: string;
}

declare type Trips = { [id as string]: Trip };

/**
 * Locations
 */
declare interface Location {
  id: ID;
  city_id: ID;
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
  id: ID;
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
