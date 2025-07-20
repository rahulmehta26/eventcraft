import React from 'react'
import { useSelector } from 'react-redux';
import EventCard from './EventCard';
import { FaCalendarDays } from 'react-icons/fa6';

const EventList = () => {
  const events = useSelector((state) => state.events);

  return (
    <div className="mt-8 bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">

         <FaCalendarDays color='#4f39f6' size={16}  /> 
        Your Events
        {events.length > 0 && (
          <span className="bg-indigo-100 text-indigo-700 text-sm px-3 py-1 rounded-full font-medium">
            {events.length}
          </span>
        )}
      </h3>
      
      {events.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">

            <FaCalendarDays color='#99a1af' size={16} /> 
            
          </div>
          <p className="text-gray-500 text-lg">No events yet. Create your first event above!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EventList