import { FLIGHT_CATEGORY } from './constants';

export type FlightInfo = Record<
  FlightCategory,
  Omit<FlightItinerary, 'category'>[]
>;

interface FlightItinerary {
  category: FlightCategory;
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
