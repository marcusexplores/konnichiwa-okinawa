import { getFlightInfo } from '@/src/repositories/flight';
import { FlightTicket } from './FlightTicket';

const { outbound, domestic, inbound } = getFlightInfo();

export const FlightInformation = () => {
  return (
    <div>
      {outbound.map((flight) => (
        <FlightTicket
          key={flight.designator}
          airline={flight.airline}
          designator={flight.designator}
          departureDate={flight.departure.date}
          departureTime={flight.departure.time}
          departureCity={flight.departure.city}
          departureAirportCode={flight.departure.airportCode}
          arrivalDate={flight.arrival.date}
          arrivalTime={flight.arrival.time}
          arrivalCity={flight.arrival.city}
          arrivalAirportCode={flight.arrival.airportCode}
          stubFields={[
            {
              label: 'Gate',
              value: 'C31',
            },
            {
              label: 'Seat',
              value: '24C',
            },
          ]}
        />
      ))}

      {domestic.map((flight) => (
        <FlightTicket
          key={flight.designator}
          airline={flight.airline}
          designator={flight.designator}
          departureDate={flight.departure.date}
          departureTime={flight.departure.time}
          departureCity={flight.departure.city}
          departureAirportCode={flight.departure.airportCode}
          arrivalDate={flight.arrival.date}
          arrivalTime={flight.arrival.time}
          arrivalCity={flight.arrival.city}
          arrivalAirportCode={flight.arrival.airportCode}
        />
      ))}

      {inbound.map((flight) => (
        <FlightTicket
          key={flight.designator}
          airline={flight.airline}
          designator={flight.designator}
          departureDate={flight.departure.date}
          departureTime={flight.departure.time}
          departureCity={flight.departure.city}
          departureAirportCode={flight.departure.airportCode}
          arrivalDate={flight.arrival.date}
          arrivalTime={flight.arrival.time}
          arrivalCity={flight.arrival.city}
          arrivalAirportCode={flight.arrival.airportCode}
        />
      ))}
    </div>
  );
};
