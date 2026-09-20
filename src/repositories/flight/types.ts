import { FLIGHT_CATEGORY } from './constants';

export type FlightCatalog = Record<FlightCategory, FlightItinerary[]>;

// interface FlightInfo extends FlightItinerary {
//   category: FlightCategory;
// }

export interface FlightItinerary {
  airline: string;
  designator: string;
  departure: FlightSegment;
  arrival: FlightSegment;
}

interface FlightSegment {
  date: string;
  time: string;
  city: string;
  airportCode: string;
}

type FlightCategory = (typeof FLIGHT_CATEGORY)[keyof typeof FLIGHT_CATEGORY];
