import React from 'react'
import { generateRecurringDates } from '../utils/recurrenceUtils';
import { IoIosRepeat } from 'react-icons/io';
import { FaCalendarDays, FaClock, FaEye } from 'react-icons/fa6';
import { PiRepeatBold } from 'react-icons/pi';

const MiniCalendar = ({ startDate, endDate, recurrence }) => {
  if (!startDate || !recurrence?.type || recurrence.type === "none") return null;

  const dates = generateRecurringDates(startDate, endDate, recurrence).slice(0, 5);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return {
      weekday: date.toLocaleDateString('en-US', { weekday: 'short' }),
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      day: date.getDate(),
      year: date.getFullYear()
    };
  };

  const getDayColor = (index) => {
    const colors = [
      'bg-indigo-500',
      'bg-purple-500', 
      'bg-emerald-500',
      'bg-blue-500',
      'bg-pink-500'
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-indigo-100 rounded-lg">
          <FaEye  className="w-5 h-5 text-indigo-600" />
        </div>
        <div>
          <h3 className="font-semibold text-indigo-900 text-lg">Schedule Preview</h3>
          <p className="text-sm text-indigo-600">Next {dates.length} occurrences</p>
        </div>
      </div>

      <div className="space-y-3">
        {dates.map((date, idx) => {
          const formattedDate = formatDate(date);
          return (
            <div
              key={idx}
              className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-white/50 hover:shadow-md transition-all duration-200 group"
            >
              
              <div className={`w-12 h-12 ${getDayColor(idx)} rounded-full flex flex-col items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-200`}>
                <span className="text-xs leading-none">{formattedDate.month}</span>
                <span className="text-sm leading-none">{formattedDate.day}</span>
              </div>

             
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-800">
                    {formattedDate.weekday}, {formattedDate.month} {formattedDate.day}
                  </span>
                  <span className="text-sm text-gray-500">
                    {formattedDate.year}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <FaCalendarDays className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-500">
                    {idx === 0 ? 'First occurrence' : `+${idx * (recurrence.interval || 1)} ${recurrence.type}${(recurrence.interval || 1) > 1 ? 's' : ''}`}
                  </span>
                </div>
              </div>

              
              <div className="text-right">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-xs font-semibold text-gray-600">#{idx + 1}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      
      <div className="mt-6 p-4 bg-white/70 rounded-xl border border-indigo-200">
        <div className="flex items-center gap-2 text-sm text-indigo-700">
          <PiRepeatBold  className="w-4.5 h-4.5" />
          <span className="font-medium">
            Pattern: Every {recurrence.interval || 1} {recurrence.type}{(recurrence.interval || 1) > 1 ? 's' : ''}
          </span>
        </div>
        {endDate && (
          <div className="flex items-center gap-2 text-sm text-indigo-600 mt-2">
            <FaClock className="w-4 h-4" />
            <span>Continues until {formatDate(endDate).month} {formatDate(endDate).day}, {formatDate(endDate).year}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MiniCalendar