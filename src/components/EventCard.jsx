import React from 'react'
import { FaCalendarDays, FaClock } from 'react-icons/fa6';
import { LuMapPinCheck } from 'react-icons/lu';
import { PiRepeatBold } from 'react-icons/pi';

const EventCard = ({ event }) => {
  const getRecurrenceColor = (type) => {
    const colors = {
      none: 'bg-gray-100 text-gray-700',
      daily: 'bg-blue-100 text-blue-700',
      weekly: 'bg-green-100 text-green-700',
      monthly: 'bg-purple-100 text-purple-700',
      yearly: 'bg-orange-100 text-orange-700'
    };
    return colors[type] || colors.none;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:scale-105">
      
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4">
        <h3 className="text-xl font-bold text-white truncate group-hover:text-indigo-100 transition-colors">
          {event.name}
        </h3>
        <div className="flex items-center gap-2 mt-2">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span className="text-indigo-100 text-sm font-medium">Active Event</span>
        </div>
      </div>

      
      <div className="p-6 space-y-4">
        
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-50 rounded-lg">
                      
                       <FaCalendarDays color='#155dfc' size={18}  /> 
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium">START DATE</p>
            <p className="text-sm font-semibold text-gray-800">
              {formatDate(event.startDate)}
            </p>
          </div>
        </div>

        
        {event.endDate && (
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-50 rounded-lg">
                          <FaClock size={20} color='#9810fa' />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">END DATE</p>
              <p className="text-sm font-semibold text-gray-800">
                {formatDate(event.endDate)}
              </p>
            </div>
          </div>
        )}

        
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-50 rounded-lg">
            <PiRepeatBold  className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-gray-500 font-medium">RECURRENCE</p>
            <div className="flex items-center gap-2 mt-1">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${getRecurrenceColor(event.recurrence.type)}`}>
                {event.recurrence.type === 'none' ? 'One-time' : event.recurrence.type}
              </span>
              {event.recurrence.type !== 'none' && event.recurrence.interval > 1 && (
                <span className="text-xs text-gray-500">
                  Every {event.recurrence.interval}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      
      <div className="px-6 pb-4">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-gray-400">Event ID: #{event.id.toString().slice(-4)}</span>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <LuMapPinCheck  className="w-3 h-3 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard