import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addEvent } from '../redux/eventSlice';
import MiniCalendar from './MiniCalendar';
import RecurringDatePicker from './RecurringDatePicker';
import { FaCalendarDays, FaClock, FaWandMagicSparkles } from 'react-icons/fa6';
import { FaPlus, FaUsers } from 'react-icons/fa';

const EventForm = () => {
  const dispatch = useDispatch();
  const [eventName, setEventName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [recurrence, setRecurrence] = useState({ type: "none", interval: 1 });

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      id: Date.now(),
      name: eventName,
      startDate,
      endDate: endDate || null,
      recurrence,
    };
    dispatch(addEvent(event));
    setEventName("");
    setStartDate("");
    setEndDate("");
    setRecurrence({ type: "none", interval: 1 });
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 mb-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl">               
                      
                      <FaWandMagicSparkles className='w-5 h-5' color='white' />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Create New Event
          </h2>
        </div>
        <p className="text-gray-500">Design memorable experiences with ease</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        
        <div className="relative">
          <label className="flex items-center gap-2 text-lg font-semibold text-gray-800 mb-3">
                      
                      <FaUsers size={20} color='#f39f6' />
            Event Title
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="What's the occasion?"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              required
              className="w-full px-6 py-4 text-xl border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-200 bg-gradient-to-r from-gray-50 to-white"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-4">
              <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
            <label className="flex items-center gap-2 text-lg font-semibold text-blue-800 mb-3">
                          
                          <FaCalendarDays color='#155dfc' size={20} />
              Start Date
            </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
              className="w-full px-4 py-3 border-2 cursor-pointer border-blue-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 bg-white"
            />
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
            <label className="flex items-center gap-2 text-lg font-semibold text-purple-800 mb-3">
                          <FaClock size={20} color='#9810fa' />
              End Date
              <span className="text-sm text-purple-500 font-normal">(optional)</span>
            </label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full px-4 py-3 cursor-pointer border-2 border-purple-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-100 focus:border-purple-500 transition-all duration-200 bg-white"
            />
          </div>
        </div>

        
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
          <RecurringDatePicker value={recurrence} onChange={setRecurrence} />
        </div>

        
        <MiniCalendar
          startDate={startDate}
          endDate={endDate}
          recurrence={recurrence}
        />

       
        <div className="text-center">
          <button
            type="submit"
            className="group relative inline-flex cursor-pointer items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg rounded-2xl hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-indigo-200 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
                      
                      <FaPlus size={10} className="w-6 h-6 group-hover:rotate-90 transition-transform duration-200" />
            Create Event
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-200"></div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;