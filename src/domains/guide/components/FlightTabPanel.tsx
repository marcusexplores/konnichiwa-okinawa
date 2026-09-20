import { ReactNode } from 'react';
import { TabPanel } from '@/src/common/components/tabs';
import { FlightItinerary } from '@/src/repositories/flight';
import { FlightTicket } from './FlightTicket';

interface FlightTabPanelProps {
  id: string;
  itineraries: FlightItinerary[];
  children: ReactNode;
}

export const FlightTabPanel = ({
  id,
  itineraries,
  children,
}: FlightTabPanelProps) => {
  return (
    <TabPanel shouldForceMount id={id} className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 lg:flex-row">
        {itineraries.map((itinerary) => (
          <FlightTicket
            key={`${itinerary.departure.date}-${itinerary.departure.time}`}
            departureDate={itinerary.departure.date}
            departureTime={itinerary.departure.time}
            departureAirportCode={itinerary.departure.airportCode}
            departureCity={itinerary.departure.city}
            arrivalDate={itinerary.arrival.date}
            arrivalTime={itinerary.arrival.time}
            arrivalAirportCode={itinerary.arrival.airportCode}
            arrivalCity={itinerary.arrival.city}
            airline={itinerary.airline}
            designator={itinerary.designator}
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
      </div>
      {children}
    </TabPanel>
  );
};
