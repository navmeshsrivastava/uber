import React from 'react';

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setVehiclePanel(false);
        }}
        className="p-1 text-center w-[93%] absolute top-0"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h2 className="text-2xl font-semibold mb-5">Choose a vehicle</h2>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex w-full p-3 border-2 border-gray-100 active:border-black  mb-2 rounded-xl items-center justify-between"
      >
        <img
          className="h-8 "
          src="https://pngimg.com/d/mercedes_PNG80135.png"
          alt=""
        />
        <div className="-ml-2 w-1/2">
          <h4 className="font-medium text-base">
            UberGo
            <span>
              <i className="ri-user-fill"></i>5
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">₹193.20</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex w-full p-3 border-2 border-gray-100 active:border-black mb-2 rounded-xl items-center justify-between"
      >
        <img
          className="h-10 "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHNW3h1Hk7dq_EYDcwmahbSKZtr8r7FL63RU3mDMtgTf7Uo_kFyIwOqMEqrCVS3QJ2Qo8&usqp=CAU"
          alt=""
        />
        <div className=" w-1/2">
          <h4 className="font-medium text-base">
            UberAuto
            <span>
              <i className="ri-user-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">5 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, auto rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">₹115.30</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex w-full p-3 border-2 border-gray-100 active:border-black mb-2 rounded-xl items-center justify-between"
      >
        <img
          className="h-10 "
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className=" -ml-3 w-1/2">
          <h4 className="font-medium text-base">
            UberMoto
            <span>
              <i className="ri-user-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, motorcycle rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">₹90.00</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
