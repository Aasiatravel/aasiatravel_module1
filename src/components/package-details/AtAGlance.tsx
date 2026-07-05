import React from 'react';

interface AtAGlanceProps {
  duration: string;
  dates: string;
  departureCity: string;
  seatsLeft: number;
}

export default function AtAGlance({
  duration,
  dates,
  departureCity,
  seatsLeft,
}: AtAGlanceProps) {
  const items = [
    {
      label: 'Departure Duration',
      value: duration,
      description: dates,
    },
    {
      label: 'Departure City',
      value: `Departs ${departureCity}`,
      description: 'Round-trip origin',
    },
    {
      label: 'Group Size',
      value: `${seatsLeft} seats left`,
      description: 'Confirm early to secure a spot',
    },
  ];

  return (
    <section className="border-y border-primary-soft/30 section-padding bg-white font-sans">
      <div className="container-custom">
        <span className="text-[16px] font-semibold tracking-widest text-primary uppercase block mb-6">
          AT A GLANCE
        </span>
        <div className="grid md:grid-cols-3 border border-primary-soft rounded-[4px] overflow-hidden">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`p-8 hover:bg-background-cream/20 transition-colors group ${
                idx !== items.length - 1 ? 'border-b md:border-b-0 md:border-r border-primary-soft' : ''
              }`}
            >
              <span className="text-[10px] font-medium tracking-wider text-primary-light uppercase mb-3 block">
                {item.label}
              </span>
              <h4 className="font-serif text-[18px] font-bold text-primary group-hover:text-primary-light transition-colors">
                {item.value}
              </h4>
              <p className="text-[12px] font-normal text-primary-light mt-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
