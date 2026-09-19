import React from 'react';
import { PiAirplaneFill } from 'react-icons/pi';

interface StubField {
  label: string;
  value: string;
}

interface FlightTicketProps {
  airline: string;
  designator: string;
  departureDate: string;
  departureTime: string;
  departureCity: string;
  departureAirportCode: string;
  arrivalDate: string;
  arrivalTime: string;
  arrivalCity: string;
  arrivalAirportCode: string;
  stubFields?: StubField[];
}

export const FlightTicket = ({
  airline,
  designator,
  departureDate,
  departureTime,
  departureCity,
  departureAirportCode,
  arrivalDate,
  arrivalTime,
  arrivalCity,
  arrivalAirportCode,
  stubFields,
}: FlightTicketProps) => {
  // Align notch with wavy line (68% vertical position)
  const notchYPos = '68%';
  const notchRadius = 11;

  const shadowBlur = 20;
  const shadowOffsetY = 10;
  const shadowOpacity = 0.4;

  // CSS Mask creates true circular transparent holes on both sides
  const maskStyle: React.CSSProperties = {
    WebkitMaskImage: `
      radial-gradient(circle ${notchRadius}px at 0px ${notchYPos}, transparent 98%, #000 100%),
      radial-gradient(circle ${notchRadius}px at 100% ${notchYPos}, transparent 98%, #000 100%)
    `,
    WebkitMaskSize: '51% 100%',
    WebkitMaskPosition: 'left top, right top',
    WebkitMaskRepeat: 'no-repeat',
    maskImage: `
      radial-gradient(circle ${notchRadius}px at 0px ${notchYPos}, transparent 98%, #000 100%),
      radial-gradient(circle ${notchRadius}px at 100% ${notchYPos}, transparent 98%, #000 100%)
    `,
    maskSize: '51% 100%',
    maskPosition: 'left top, right top',
    maskRepeat: 'no-repeat',
  };

  const filterStyle: React.CSSProperties = {
    filter: `drop-shadow(0px ${shadowOffsetY}px ${shadowBlur}px rgba(0, 0, 0, ${shadowOpacity}))`,
  };

  return (
    <div
      style={filterStyle}
      className="mx-auto w-full max-w-sm transition-all duration-300"
    >
      <div
        style={maskStyle}
        className="relative w-full rounded-[26px] bg-[#232220] p-5 text-white"
      >
        {/* Top Tag & Date Header */}
        <div className="mb-4 flex items-center justify-between">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#383633] px-3 py-1 text-xs font-medium text-neutral-200">
            <PiAirplaneFill className="h-3.5 w-3.5 -rotate-45 fill-current text-white" />
            <span>{airline}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-normal text-neutral-400">
              {designator}
            </span>
          </div>
        </div>

        <div className="-mt-1 mb-2 flex items-center justify-between text-xs font-semibold tracking-wider text-neutral-400">
          <div className="pl-0.5">{departureDate}</div>
          <div>{arrivalDate}</div>
        </div>

        {/* Main Route Info */}
        <div className="my-2 flex items-center justify-between px-1">
          <div className="flex flex-col items-start">
            <span className="text-[34px] leading-none font-black">
              {departureTime}
            </span>
            <span className="mt-2 text-xs font-medium text-neutral-300">
              {departureCity} ({departureAirportCode})
            </span>
          </div>

          <div className="relative mx-4 flex flex-1 items-center justify-center">
            <div className="h-px w-full bg-neutral-600" />
            <div className="absolute inset-0 flex items-center justify-center">
              <PiAirplaneFill className="h-4 w-4 rotate-90 bg-[#232220] px-0.5 text-neutral-200" />
            </div>
          </div>

          <div className="flex flex-col items-end">
            <span className="text-[34px] leading-none font-black">
              {arrivalTime}
            </span>
            <span className="mt-2 text-xs font-medium text-neutral-300">
              {arrivalCity} ({arrivalAirportCode})
            </span>
          </div>
        </div>

        {/* Dashed Line */}
        <div className="relative my-4 flex items-center py-1">
          <div className="w-full border-t-2 border-dashed border-neutral-600/50" />
        </div>

        {/* Stub Info Grid */}
        <div className="flex items-center gap-8 pt-0.5 pl-1">
          {stubFields?.map((field, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-[11px] text-neutral-400">
                {field.label}
              </span>
              <span className="mt-0.5 text-[19px] font-extrabold text-white">
                {field.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
