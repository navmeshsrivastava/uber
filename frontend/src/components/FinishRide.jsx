import React from 'react';
import { Link } from 'react-router-dom';

const FinishRide = (props) => {
  return (
    <div>
      <h5
        onClick={() => props.setFinishRidePanel(false)}
        className="p-1 text-center w-[93%] absolute top-0"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h2 className="text-2xl font-semibold mb-5 ">Finish this Ride</h2>
      <div className="flex items-center justify-between p-4 border-2 bg-gray-50 border-yellow-400 rounded-lg mt-4">
        <div className="flex items-center gap-3">
          <img
            className="h-12 rounded-full object-cover w-10"
            src="https://i.pinimg.com/736x/cb/33/d8/cb33d80fe655e221ae05f41c8edd0cdb.jpg"
            alt=""
          />
          <h2 className="text-lg font-medium">Harsh Mehta</h2>
        </div>
        <h2 className="text-lg font-semibold">2.2 km</h2>
      </div>
      <div className="flex gap-2 justify-between flex-col items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-300">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-gray-600 text-sm -mt-1">
                Kankariya Talab, Delhi
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-300">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-gray-600 text-sm -mt-1">
                Kankariya Talab, Delhi
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 ">
            <i className="ri-currency-fill"></i>
            <div>
              <h3 className="text-lg font-medium">₹193.20</h3>
              <p className="text-gray-600 text-sm -mt-1">Cash Cash</p>
            </div>
          </div>
        </div>
        <div className="mt-6 w-full">
          <Link
            to="/captain-home"
            onClick={() => {}}
            className="w-full mt-5 text-lg flex justify-center bg-green-400 text-white font-semibold p-3 rounded-lg"
          >
            Finish Ride
          </Link>
          <p className="text-red-500 mt-2  text-xs leading-tight">
            * Click on finish ride button if you have completed the payment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinishRide;
