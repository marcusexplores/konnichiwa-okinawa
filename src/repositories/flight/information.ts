import flightDetails from '@/src/data/flight/information.json';
import { FlightCatalog } from './types';
import { FLIGHT_CATEGORY } from './constants';
import { formatDate } from './format';

export const getFlightInfo = (): FlightCatalog => {
  return Object.values(FLIGHT_CATEGORY).reduce((acc, category) => {
    acc[category] = flightDetails
      .filter((flight) => flight.category === category)
      .map((flight) => ({
        airline: flight.airline,
        designator: flight.designator,
        departure: {
          ...flight.departure,
          date: formatDate(flight.departure.date),
        },
        arrival: {
          ...flight.arrival,
          date: formatDate(flight.arrival.date),
        },
      }));
    return acc;
  }, {} as FlightCatalog);
};
