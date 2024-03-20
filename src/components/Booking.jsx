import React from "react";

const Booking = () => {
  return (
    <div id="deals" className="max-w-[1140px] w-full p-4 ">
      <form
        action=""
        className="lg:flex lg:justify-between w-full items-center"
      >
        <div className="flex flex-col my-2 py-2">
          <label>Destination</label>
          <select className="lg:w-[300px] md:w-full border rounded-md" name="" id="">
            <option value="">Maldives</option>
            <option value="">Hawai</option>
            <option value="">Goa</option>
            <option value="">Thailand</option>
          </select>
        </div>

        <div className="flex w-full">
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 py-2">
            <label>Check In</label>
            <input className="border rounded-md p-2" type="date" name="" id="" />
          </div>
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 py-2">
            <label>Check Out</label>
            <input className="border rounded-md p-2" type="date" name="" id="" />
          </div>
        </div>
        <div className="flex flex-col my-2 py-2 w-full">
          <label htmlFor="">Search</label>
          <button className="w-full">Rates & Availabilities</button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
