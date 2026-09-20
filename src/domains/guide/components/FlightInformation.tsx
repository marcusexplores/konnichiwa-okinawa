import {
  Tab,
  TabList,
  TabPanelCarousel,
  Tabs,
  TabSelectionIndicator,
} from '@/src/common/components/tabs';
import { FLIGHT_CATEGORY, getFlightInfo } from '@/src/repositories/flight';
import { FlightDomesticView } from './FlightDomesticView';
import { FlightInboundView } from './FlightInboundView';
import { FlightOutboundView } from './FlightOutboundView';
import { FlightTabPanel } from './FlightTabPanel';

const { outbound, domestic, inbound } = getFlightInfo();

export const FlightInformation = () => {
  return (
    <Tabs className="max-w-full">
      <TabList aria-label="Flight Information">
        {Object.values(FLIGHT_CATEGORY).map((category) => (
          <Tab key={category} id={category} className="capitalize">
            {category}
          </Tab>
        ))}
      </TabList>
      <TabSelectionIndicator />
      <TabPanelCarousel>
        <FlightTabPanel id={FLIGHT_CATEGORY.OUTBOUND} itineraries={outbound}>
          <FlightOutboundView />
        </FlightTabPanel>
        <FlightTabPanel id={FLIGHT_CATEGORY.DOMESTIC} itineraries={domestic}>
          <FlightDomesticView />
        </FlightTabPanel>
        <FlightTabPanel id={FLIGHT_CATEGORY.INBOUND} itineraries={inbound}>
          <FlightInboundView />
        </FlightTabPanel>
      </TabPanelCarousel>
    </Tabs>
  );
};
