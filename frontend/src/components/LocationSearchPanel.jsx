import React from 'react';

const LocationSearchPanel = (props) => {
  // sample array for locations
  const locations = [
    "24 B, Near Kapoor's Cafe, Sheriyans Coding School, Bhopal",
    'Bus Adda, Subhash Chowk, Bhavani Chauraha, Bhopal',
    'Chhatrapati Shivaji Terminus, Line 112, Bhopal',
    '18 A, Vidyamati Complex, Bhopal Railway Station, Bhopal',
  ];

  return (
    <div>
      {locations.map(function (location, idx) {
        return (
          <div
            key={idx}
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }}
            className="flex gap-4 border-2 border-gray-100 active:border-black p-3 rounded-xl items-center my-2 justify-start"
          >
            <h2 className="bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-2-fill"></i>
            </h2>
            <h4 className="font-medium">{location}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
