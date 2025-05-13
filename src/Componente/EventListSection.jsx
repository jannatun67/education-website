import React, { useEffect, useState } from 'react';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineWatchLater } from "react-icons/md";

const EventListSection = () => {
    const [events, setEvents] = useState([]);
  const [selectedDay, setSelectedDay] = useState("Friday");

  useEffect(() => {
    fetch("events.json")
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(error => console.error("Error fetching events:", error));
  }, []);
//   console.log(events);

 const filteredEvents = events.filter(event => event.day === selectedDay);

  const days = ['Friday', 'Monday', 'Thursday', 'Tuesday', 'Wednesday'];
    
    return (
       <section className="pb-30 px-4 md:px-12 bg-white">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="bg-purple-200 text-purple-700 px-4 py-1 rounded-full text-sm font-medium">
          Event List
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          We Arrange Learning <br /> Event for Students
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex justify-center space-x-6 mb-10 text-lg font-medium">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`${
              selectedDay === day ? 'text-[#F22757]' : 'text-gray-600'
            } hover:text-[#F22757]`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Event Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div
              key={event.id}
              className="flex bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={event.img}
                alt="event"
                className="w-28 h-28 object-cover rounded-l-xl"
              />
              <div className="p-4 flex flex-col justify-between">
                <div className="text-sm text-gray-600 flex justify-between items-center">
                  <span className='flex gap-1 items-center'> <span className='text-primary'><CiLocationOn /></span>
                  {event.location}</span>
                  <span className='flex gap-1 items-center'><span className='text-primary'><MdOutlineWatchLater /></span>{event.time}</span>
                </div>
                <h3 className="font-semibold text-lg mt-2">{event.title}</h3>
                <button
                  className={`mt-2 px-4 py-1 rounded-full text-sm flex items-center gap-1 w-fit ${event.ticketStyle}`}
                >
                  Get Ticket →
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No events found for {selectedDay}</p>
        )}
      </div>
    </section>
    );
};

export default EventListSection;